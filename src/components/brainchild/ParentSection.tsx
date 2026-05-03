import { useState } from "react";
import { Testimonial } from "@/types/testimonialcard";
import { TestimonialCard } from "./TestimonialCard";
import parents1 from '@/assets/images/parents1.jpg'
import parents2 from '@/assets/images/parents2.jpg'
import parents3 from '@/assets/images/parents3.jpg'
import parents4 from '@/assets/images/parents4.jpg'
import line from "@/assets/images/line.svg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatedSection } from "./AnimatedSection";

export function ParentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      testimonial: "Brain Child has been a blessing for our family. My daughter looks forward to school every single day!",
      profileImage: parents1,
      name: "Mrs. Okonkwo",
      description: "Parent of a Primary 3 student",
    },
    {
      testimonial: "The transformation in my son's confidence and reading skills has been remarkable. So grateful we chose Brain Child!",
      profileImage: parents2,
      name: "Mr. Eze",
      description: "Parent of a Nursery 2 student",
    },
    {
      testimonial: "Safe, nurturing, and academically excellent. Brain Child checks all the boxes. Our children are thriving here.",
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
    <section className="font-body relative section-blue-soft overflow-hidden py-16 md:py-24">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Floating emoji accents */}
      <div className="absolute top-8 right-14 text-3xl animate-float opacity-20 pointer-events-none select-none">💬</div>
      <div className="absolute bottom-12 left-10 text-2xl animate-wiggle opacity-15 pointer-events-none select-none">🌟</div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Heading block */}
          <div className="max-w-[520px] relative">
            <img src={line} alt="" className="absolute top-20 left-[12.5rem] hidden md:block opacity-60" />

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              💬 Testimonials
            </span>

            <h2 className="text-2xl md:text-4xl lg:text-[42px] font-heading font-bold text-foreground leading-tight">
              See What Parents{" "}
              <span className="relative inline-block">
                Say About Us
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6 Q50 2 100 5 Q150 8 198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary opacity-50" />
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
                className="bg-white w-12 h-12 md:w-14 md:h-14 shadow-md rounded-full flex items-center justify-center text-foreground hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-border/30"
              >
                <MdArrowBackIos size={16} />
              </button>
              <button
                onClick={slideNext}
                aria-label="Next"
                className="bg-secondary text-secondary-foreground w-12 h-12 md:w-14 md:h-14 shadow-md rounded-full flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300"
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
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 h-2.5 bg-secondary"
                      : "w-2.5 h-2.5 bg-secondary/25 hover:bg-secondary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Slider — cards fixed at 320px wide */}
      <div className="pl-4 md:pl-16 overflow-hidden pb-4">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 340}px)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="w-[300px] md:w-[320px] shrink-0">
              <TestimonialCard {...item} isActive={index === currentIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}