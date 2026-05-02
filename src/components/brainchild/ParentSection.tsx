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
      testimonial: "Brain Child Nursery and Primary School has been a blessing for our family. My daughter looks forward to school every single day. The teachers truly care about each child's growth.",
      profileImage: parents1,
      name: "Mrs. Okonkwo",
      description: "Parent of a Primary 3 student",
    },
    {
      testimonial: "The transformation in my son's confidence and reading skills has been remarkable. I'm so grateful we chose Brain Child Nursery and Primary School International.",
      profileImage: parents2,
      name: "Mr. Eze",
      description: "Parent of a Nursery 2 student",
    },
    {
      testimonial: "Safe, nurturing, and academically excellent. Brain Child Nursery and Primary School checks all the boxes for us. Our children are thriving here.",
      profileImage: parents3,
      name: "Mrs. Adeyemi",
      description: "Parent of two students",
    },
    {
      testimonial: "The school's approach to character building alongside academics is exactly what we wanted. They genuinely prepare children for life.",
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
    <section className="font-body relative section-blue-soft overflow-hidden">
      <div className="absolute top-6 right-10 text-3xl animate-float opacity-20 pointer-events-none">💬</div>
      <div className="absolute bottom-10 left-8 text-2xl animate-wiggle opacity-15 pointer-events-none">🌟</div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[495px] relative">
            <img src={line} alt="" className="absolute top-20 left-[12.5rem] hidden md:block" />
            <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block mb-3">💬 Testimonials</span>
            <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">
              See What Parents Say About Us
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={slidePrev}
              className="bg-white w-12 h-12 md:w-14 md:h-14 shadow-md rounded-full flex items-center justify-center text-foreground hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <MdArrowBackIos />
            </button>
            <button
              onClick={slideNext}
              className="bg-secondary text-secondary-foreground w-12 h-12 md:w-14 md:h-14 shadow-md rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <div className="pl-4 md:pl-16 overflow-hidden pb-12">
        <div
          className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / Math.min(testimonials.length, 3))}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(33.33%-1rem)] shrink-0">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
