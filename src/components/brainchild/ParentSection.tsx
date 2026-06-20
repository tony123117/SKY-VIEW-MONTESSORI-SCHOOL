import { useState } from "react";
import { Testimonial } from "@/types/testimonialcard";
import { TestimonialCard } from "./TestimonialCard";
import parents1 from '@/assets/SKYVIEW-IMAGES/parents1.jpg'
import parents2 from '@/assets/SKYVIEW-IMAGES/parents2.jpg'
import parents3 from '@/assets/SKYVIEW-IMAGES/parents3.jpg'
import parents4 from '@/assets/SKYVIEW-IMAGES/parents4.jpg'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatedSection } from "./AnimatedSection";

// ─── Brand palette (matches index.css) ─────────────────────────────────────
const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

export function ParentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      testimonial: "SKY - VIEW NURSERY , PRIMARY AND SECONDARY SCHOOL has been a blessing for our family. My daughter looks forward to school every single day!",
      profileImage: parents1,
      name: "Mrs. Okonkwo",
      description: "Parent of a Primary 3 student",
    },
    {
      testimonial: "The transformation in my son's confidence and reading skills has been remarkable. So grateful we chose SKY - VIEW NURSERY , PRIMARY AND SECONDARY SCHOOL!",
      profileImage: parents2,
      name: "Mr. Eze",
      description: "Parent of a Nursery 2 student",
    },
    {
      testimonial: "Safe, nurturing, and academically excellent. SKY - VIEW NURSERY , PRIMARY AND SECONDARY SCHOOL checks all the boxes. Our children are thriving here.",
      profileImage: parents3,
      name: "Mrs. Adeyemi",
      description: "Parent of two students",
    },
    {
      testimonial: "Their approach to character building alongside academics is exactly what we wanted. They truly prepare children for life.",
      profileImage: parents4,
      name: "Dr. Nnamdi",
      description: "Parent of a Primary 5 student",
    },
  ];

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const slideNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="font-body relative overflow-hidden py-16 md:py-24"
      style={{
        background: `linear-gradient(160deg, ${NAVY}06 0%, #ffffff 35%, ${PINK}06 100%)`,
      }}
    >
      {/* Decorative background blobs — full palette */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"
        style={{ background: `${SKY_BLUE}18` }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"
        style={{ background: `${WINE_RED}12` }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: `${PINK}10` }}
      />

      {/* Floating accents */}
      <div className="absolute top-8 right-14 text-3xl animate-float opacity-25 pointer-events-none select-none">💬</div>
      <div className="absolute bottom-12 left-10 text-2xl animate-wiggle opacity-20 pointer-events-none select-none">🌟</div>
      <div
        className="absolute top-1/4 left-6 text-5xl font-black opacity-[0.06] pointer-events-none select-none hidden md:block"
        style={{ color: NAVY, fontFamily: "'Playfair Display', serif" }}
      >
        “
      </div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 relative">
          {/* Heading block */}
          <div className="max-w-[520px] relative">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase"
              style={{ color: WINE_RED, background: `${WINE_RED}10` }}
            >
              💬 Testimonials
            </span>

            <h2 className="text-2xl md:text-4xl lg:text-[42px] font-heading font-bold text-foreground leading-tight">
              See What Parents{" "}
              <span className="relative inline-block" style={{ color: PINK }}>
                Say About Us
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 6 Q50 2 100 5 Q150 8 198 4"
                    stroke={PINK}
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed">
              Trusted by hundreds of families across the community.
            </p>
          </div>

          {/* Controls + dots */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-3">
              <button
                onClick={slidePrev}
                aria-label="Previous"
                className="bg-white w-12 h-12 md:w-14 md:h-14 shadow-md rounded-full flex items-center justify-center transition-all duration-300 border"
                style={{ color: NAVY, borderColor: `${NAVY}20` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = WINE_RED;
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = WINE_RED;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = NAVY;
                  e.currentTarget.style.borderColor = `${NAVY}20`;
                }}
              >
                <MdArrowBackIos size={16} />
              </button>
              <button
                onClick={slideNext}
                aria-label="Next"
                className="w-12 h-12 md:w-14 md:h-14 shadow-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                style={{ background: PINK, boxShadow: `0 8px 24px ${PINK}40` }}
              >
                <MdArrowForwardIos size={16} />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={
                    i === currentIndex
                      ? { width: "1.5rem", height: "0.625rem", background: PINK }
                      : { width: "0.625rem", height: "0.625rem", background: `${SKY_BLUE}35` }
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Slider — cards fixed at 320px wide */}
      <div className="pl-4 md:pl-16 overflow-hidden pb-4 relative">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 340}px)` }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[320px] shrink-0 transition-all duration-300"
              style={{
                transform: index === currentIndex ? "scale(1)" : "scale(0.96)",
                opacity: index === currentIndex ? 1 : 0.75,
              }}
            >
              <TestimonialCard {...item} isActive={index === currentIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}