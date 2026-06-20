import React from 'react';
import getResponsiveSrc from '@/lib/image';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string; // original src (e.g. /src/assets/... or imported path)
    widths?: number[]; // widths to use for srcset (generated into /responsive)
}

export default function ResponsiveImage({ src, alt = '', widths = [480, 768, 1024, 1600], ...rest }: ResponsiveImageProps) {
    const url = typeof src === 'string' ? src : '';
    const parts = url.split('/');
    const filename = parts[parts.length - 1] || '';
    const match = filename.match(/(.+)\.(jpg|jpeg|png|webp|avif)$/i);
    if (!match) {
        return <img src={src} alt={alt} {...rest} loading="lazy" decoding="async" />;
    }
    const base = match[1];
    const ext = match[2];
    const srcset = widths.map(w => `/responsive/${base}-w${w}.${ext} ${w}w`).join(', ');
    const largest = widths[widths.length - 1];

    return (
        <img src={getResponsiveSrc(src, largest)} srcSet={srcset} sizes="(max-width: 1024px) 100vw, 1200px" alt={alt} loading="lazy" decoding="async" {...rest} />
    );
}
