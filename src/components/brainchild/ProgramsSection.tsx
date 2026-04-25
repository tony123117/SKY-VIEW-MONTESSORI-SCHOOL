import ProgramCard from "./ProgramCard";
import programbg from "@/assets/programbg.png";
import { AnimatedSection } from "./AnimatedSection";

export default function ProgramsSection() {
  const programs = [
    { title: "Pre-School", age: "Ages 1½ – 2", Grade: "Early Years", description: "Where curiosity is encouraged and learning feels like play. Children explore early concepts through sensory discovery.", cta: "Enroll now" },
    { title: "Nursery 1–3", age: "Ages 2½ – 5", Grade: "Foundational", description: "Blending structure with creativity. Pupils develop key thinking skills and independence through hands-on activities.", cta: "Enroll now" },
    { title: "Lower Grade", age: "Ages 5½ – 8", Grade: "Elementary", description: "Foundational academics take shape. Pupils develop literacy and numeracy through engaging, structured lessons.", cta: "Enroll now" },
    { title: "Higher Grade", age: "Ages 8½ – 11", Grade: "Advanced", description: "Learning deepens and character grows. Pupils are equipped with advanced skills and the confidence to excel.", cta: "Enroll now" },
  ];

  return (
    <section className="bg-[#FFF0F3] py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden h-auto">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        <AnimatedSection className="text-center mb-24">
          <span className="text-pink-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Academic Excellence
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-900 leading-tight tracking-tighter">
            Teaching Programs, <br />
            <span className="text-pink-500 italic font-light">Designed for Every Age.</span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col gap-10 w-full lg:w-[30%] items-center lg:items-start">
            <AnimatedSection delay={0.1}>
              <ProgramCard {...programs[0]} index={0} />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <ProgramCard {...programs[2]} index={2} />
            </AnimatedSection>
          </div>

          {/* MASSIVE WIDER CENTER IMAGE */}
          <div className="w-full lg:w-[40%] flex justify-center order-first lg:order-none">
            <div className="relative group w-full flex justify-center">
              <div className="absolute inset-0 bg-white rounded-full blur-[100px] opacity-40" />
              <img
                src={programbg}
                alt="Students"
                // FIXED: Increased width to 800px-900px range for laptop
                className="relative rounded-full object-cover w-[320px] h-[320px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] xl:w-[850px] xl:h-[800px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-[12px] md:border-[20px] border-white transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 w-full lg:w-[30%] items-center lg:items-end">
            <AnimatedSection delay={0.2}>
              <ProgramCard {...programs[1]} index={1} />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <ProgramCard {...programs[3]} index={3} />
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}