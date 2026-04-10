import { useState } from "react";
import { Testimonial } from "@/types/testimonialcard";
import { TestimonialCard } from "./TestimonialCard";
import profile from "@/assets/images/profile.png";
import line from "@/assets/line.svg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatedSection } from "./AnimatedSection";

export function ParentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      testimonial:
        "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      profileImage: profile,
      name: "Jane Doe",
      description: "Parent",
    },
    {
      testimonial:
        "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      profileImage: profile,
      name: "Jane Doe",
      description: "Parent",
    },
    {
      testimonial:
        "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      profileImage: profile,
      name: "Jane Doe",
      description: "Parent",
    },
    {
      testimonial:
        "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
      profileImage: profile,
      name: "Jane Doe",
      description: "Parent",
    },
  ];

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const slideNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="font-body relative">
      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[495px] relative">
            <img src={line} alt="line" className="absolute top-12 left-[12.5rem] hidden md:block" />
            <h2 className="text-2xl md:text-[40px] font-medium">
              See what Parents say about us
            </h2>
          </div>

          <div className="flex gap-4 md:gap-6">
            <button
              onClick={slidePrev}
              className="bg-card w-12 h-12 md:w-20 md:h-20 shadow rounded-full flex items-center justify-center"
            >
              <MdArrowBackIos />
            </button>
            <button
              onClick={slideNext}
              className="bg-primary text-primary-foreground w-12 h-12 md:w-20 md:h-20 shadow rounded-full flex items-center justify-center"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <div className="pl-4 md:pl-16 overflow-hidden pb-12">
        <div
          className="flex gap-4 md:gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / Math.min(testimonials.length, 3))}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(33.33%-1.33rem)] shrink-0">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
