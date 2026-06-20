const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');
const importRe = /from\s+['"](?:(@\/|\.\.?\/)[^'"\n]+)['"]/g;
const problems = [];
function walk(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const it of items) {
        const p = path.join(dir, it.name);
        if (it.isDirectory()) walk(p);
        else if (it.isFile() && /\.(ts|tsx|js|jsx)$/.test(it.name)) {
            const txt = fs.readFileSync(p, 'utf8');
            let m;
            while ((m = importRe.exec(txt))) {
                const imp = m[0].match(/['"](.*?)['"]/)[1];
                let target;
                if (imp.startsWith('@/')) {
                    target = path.join(root, imp.slice(2).split('/').join(path.sep));
                } else {
                    target = path.resolve(path.dirname(p), imp);
                }
                const dirName = path.dirname(target);
                const fileName = path.basename(target);
                try {
                    const entries = fs.readdirSync(dirName);
                    if (!entries.includes(fileName)) {
                        const matches = entries.filter(e => e.toLowerCase() === fileName.toLowerCase());
                        problems.push({ file: p, import: imp, issue: 'case mismatch or missing', expected: fileName, dir: dirName, matches });
                    }
                } catch (err) {
                    problems.push({ file: p, import: imp, issue: 'target dir not found', target: dirName });
                }
            }
        }
    }
}
walk(src);
console.log(JSON.stringify({ problems }, null, 2));
