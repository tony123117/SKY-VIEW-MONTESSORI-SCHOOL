// HeroCarousel.tsx
import { useEffect, useState } from "react";

import AssemblyImg from '@/assets/images/assembly2.jpg';
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
        }}
      >
        {images.map((src, i) => (
          <div key={i} style={{ width: "100%", height: "100%", flexShrink: 0 }}>
            <img
              src={src}
              alt="School life"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", gap: 8, zIndex: 10,
      }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              height: 2,
              width: current === i ? 32 : 8,
              background: current === i ? "#FAF8F5" : "rgba(250,248,245,0.35)",
              border: "none", cursor: "pointer", padding: 0,
              borderRadius: 2,
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}