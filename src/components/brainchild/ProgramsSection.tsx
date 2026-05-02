import ProgramCard from "./ProgramCard";
import programbg from "@/assets/images/programbg.png";
import { AnimatedSection } from "./AnimatedSection";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Pre-School",
      age: "Ages 1½ – 2",
      Grade: "Early Years",
      description: "Where curiosity is encouraged and learning feels like play through sensory discovery.",
      cta: "Enroll now",
    },
    {
      title: "Nursery 1–3",
      age: "Ages 2½ – 5",
      Grade: "Foundation",
      description: "Structured creativity builds thinking skills, confidence, and independence.",
      cta: "Enroll now",
    },
    {
      title: "Lower Grade",
      age: "Ages 5½ – 8",
      Grade: "Elementary",
      description: "Literacy, numeracy, and critical thinking through engaging structured learning.",
      cta: "Enroll now",
    },
    {
      title: "Upper Grade",
      age: "Ages 8½ – 11",
      Grade: "Advanced",
      description: "Advanced skills and character development preparing pupils for excellence.",
      cta: "Enroll now",
    },
  ];

  return (
    <section className="relative bg-[#FFF7F9] py-20 md:py-28 px-4 md:px-12 lg:px-24 overflow-hidden">

      {/* HEADER */}
      <AnimatedSection className="text-center mb-16 md:mb-24">
        <span className="text-rose-500 font-bold tracking-[0.3em] text-[11px] uppercase">
          Academic Programs
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
          Teaching Programs <br />
          <span className="text-rose-500 italic font-light">
            Designed for Every Age
          </span>
        </h2>
      </AnimatedSection>

      {/* MOBILE / TABLET (Now includes the top circle image) */}
      <div className="lg:hidden flex flex-col items-center gap-12">
        
        {/* TOP CIRCLE IMAGE (MOBILE) - ADDED THIS */}
        <AnimatedSection className="relative flex items-center justify-center">
          {/* Subtle Mobile Glow */}
          <div className="absolute w-[350px] h-[350px] bg-rose-200 blur-[80px] opacity-20 rounded-full" />
          
          <img
            src={programbg}
            alt="Students"
            className="
              relative
              w-[280px] h-[280px]
              sm:w-[400px] sm:h-[400px]
              object-cover
              rounded-full
              border-[12px] border-white
              shadow-xl
            "
          />
        </AnimatedSection>

        {/* MOBILE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {programs.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <ProgramCard {...p} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* DESKTOP (UNTOUCHED) */}
      <div className="relative h-[900px] hidden lg:block">

        {/* CENTER IMAGE (PERFECT CIRCLE) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">

            {/* glow */}
            <div className="absolute w-[650px] h-[650px] bg-rose-200 blur-[120px] opacity-30 rounded-full" />

            <img
              src={programbg}
              alt="Students"
              className="
                relative
                w-[600px] h-[600px]
                xl:w-[700px] xl:h-[700px]
                object-cover
                rounded-full
                border-[18px] border-white
                shadow-2xl
              "
            />
          </div>
        </div>

        {/* FLOATING CARDS */}

        {/* TOP LEFT */}
        <div className="absolute left-[5%] top-[0%]">
          <AnimatedSection>
            <ProgramCard {...programs[0]} index={0} />
          </AnimatedSection>
        </div>

        {/* TOP RIGHT */}
        <div className="absolute right-[5%] top-[10%]">
          <AnimatedSection>
            <ProgramCard {...programs[1]} index={1} />
          </AnimatedSection>
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute left-[10%] bottom-[5%]">
          <AnimatedSection>
            <ProgramCard {...programs[2]} index={2} />
          </AnimatedSection>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute right-[10%] bottom-[0%]">
          <AnimatedSection>
            <ProgramCard {...programs[3]} index={3} />
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}