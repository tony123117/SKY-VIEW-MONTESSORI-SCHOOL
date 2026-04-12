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
    <div className="w-full flex flex-col items-center px-4 md:px-0">
      {/* 1. Added a fixed responsive height to the container */}
      <div className="w-full max-w-[1118px] h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl ring-4 ring-white/20">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-full shrink-0">
              <img
                src={src}
                alt="Brainchild students in school"
                loading="lazy"
                /* 2. Changed h-auto to h-full and added object-center */
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex gap-2.5 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-primary shadow-md shadow-primary/30" : "w-3 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}