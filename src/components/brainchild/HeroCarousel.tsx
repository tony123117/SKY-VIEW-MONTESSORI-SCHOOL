// HeroCarousel.tsx — improved: framer-motion, drag, touch support, accessible controls
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";

import AssemblyImg from '@/assets/images/assembly2.jpg';
import teachersImg from "@/assets/images/teachers.jpeg";
import studentsImg from "@/assets/images/assembly.jpg";
import gradImg from "@/assets/images/grad.jpg";
import kidsImg from "@/assets/images/kids.jpg";
import outsideImg from "@/assets/images/outside.jpg";
import ResponsiveImage from '@/components/ui/ResponsiveImage';

const images = [gradImg, AssemblyImg, teachersImg, studentsImg, kidsImg, outsideImg];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 5000);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function onDragEnd(_: PointerEvent | TouchEvent | MouseEvent, info: PanInfo) {
    const offset = info.offset.x;
    if (offset < -80) setCurrent((p) => (p + 1) % images.length);
    else if (offset > 80) setCurrent((p) => (p - 1 + images.length) % images.length);
    startAutoplay();
  }

  return (
    <div className="relative w-full h-full overflow-hidden" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay} ref={wrapRef}>
      <motion.div
        className="flex h-full"
        animate={{ x: `-${current * 100}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        dragElastic={0.12}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            <ResponsiveImage src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover block" widths={[480, 768, 1024, 1600]} />
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={current === i}
            className={`h-1 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}