import { useRef, useState } from "react";
import { Testimonial } from "@/types/testimonialcard";
import { TestimonialCard } from "./TestimonialCard";
import profile from "@/assets/images/profile.png";
import line from "@/assets/line.svg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const slideNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="font-body relative">
      <div className="p-24 flex items-center justify-between">
        <div className="max-w-[495px] relative">
          <img src={line} alt="line" className="absolute top-12 left-[12.5rem]" />
          <h2 className="text-[40px] font-medium">
            See what Parents say about us
          </h2>
        </div>

        <div className="flex gap-6">
          <button
            onClick={slidePrev}
            className="bg-card w-20 h-20 shadow rounded-full flex items-center justify-center"
          >
            <MdArrowBackIos />
          </button>
          <button
            onClick={slideNext}
            className="bg-primary text-primary-foreground w-20 h-20 shadow rounded-full flex items-center justify-center"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      <div className="-mt-12 pl-16 overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-[calc(33.33%-1.33rem)] shrink-0">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
