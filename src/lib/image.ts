export function getResponsiveSrc(src?: string, largest = 1600) {
    if (!src || typeof src !== 'string') return src || '';
    try {
        const parts = src.split('/');
        const filename = parts[parts.length - 1] || '';
        const match = filename.match(/(.+)\.(jpg|jpeg|png|webp|avif)$/i);
        if (!match) return src;
        const base = match[1];
        const ext = match[2];
        return `/responsive/${base}-w${largest}.${ext}`;
    } catch (e) {
        return src;
    }
}

export default getResponsiveSrc;
