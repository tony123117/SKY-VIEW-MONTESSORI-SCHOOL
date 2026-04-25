import { useEffect, useState } from "react";
import heroImg from "@/assets/heroimage.png";
import teachersImg from "@/assets/teachers.jpg";
import studentsImg from "@/assets/students.jpg";
import gradImg from "@/assets/grad.jpg";

const images = [heroImg, teachersImg, studentsImg, gradImg];

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
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}