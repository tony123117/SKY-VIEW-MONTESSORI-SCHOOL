import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Folders to scan inside src/assets
const INPUT_FOLDERS = [
    path.resolve('src/assets/images'),
    path.resolve('src/assets/skyview-images'),
];
const OUTPUT_FOLDER = path.resolve('public/responsive');
const SIZES = [480, 768, 1024, 1600];

async function ensureDir(dir) {
    await fs.promises.mkdir(dir, { recursive: true });
}

function isImage(file) {
    return /\.(jpe?g|png|webp|avif)$/i.test(file);
}

async function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const base = path.basename(filePath, ext);
    const input = filePath;

    for (const w of SIZES) {
        const outName = `${base}-w${w}${ext}`;
        const outPath = path.join(OUTPUT_FOLDER, outName);
        try {
            await sharp(input)
                .resize({ width: w })
                .toFile(outPath);
            console.log('Wrote', outPath);
        } catch (err) {
            console.error('Error processing', input, err);
        }
    }
}

(async function main() {
    await ensureDir(OUTPUT_FOLDER);
    for (const folder of INPUT_FOLDERS) {
        if (!fs.existsSync(folder)) continue;
        const files = await fs.promises.readdir(folder);
        for (const file of files) {
            const full = path.join(folder, file);
            const stat = await fs.promises.stat(full);
            if (stat.isFile() && isImage(full)) {
                // eslint-disable-next-line no-await-in-loop
                await processFile(full);
            }
        }
    }
    console.log('Done generating responsive images to', OUTPUT_FOLDER);
})();
