import { useEffect, useState } from "react";

import AssemblyImg from '@/assets/images/assembly2.jpg'
import teachersImg from "@/assets/images/teachers.jpeg";
import studentsImg from "@/assets/images/assembly.jpg";
import gradImg from "@/assets/images/grad.jpg";
import kidsImg from "@/assets/images/kids.jpg";
import outsideImg from "@/assets/images/outside.jpg";

const images = [gradImg, AssemblyImg, teachersImg, studentsImg, kidsImg, outsideImg];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* The Image Slider */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full shrink-0">
            <img
              src={src}
              alt="School life"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators (Optional: Moved to the bottom center) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}