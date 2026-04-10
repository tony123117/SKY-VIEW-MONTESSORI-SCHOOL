import { useEffect, useState } from "react";
import hero1 from "@/assets/heroimage.png";

const images = [hero1, hero1, hero1, hero1];

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
      <div className="w-full max-w-[1118px] overflow-hidden rounded-2xl md:rounded-[32px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full shrink-0">
              <img
                src={src}
                alt="hero"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-primary" : "w-4 bg-accent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
