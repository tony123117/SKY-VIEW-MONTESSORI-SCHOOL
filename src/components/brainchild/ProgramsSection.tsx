import ProgramCard from "./ProgramCard";
import programbg from "@/assets/programbg.png";
import rock from "@/assets/rock.png";
import { AnimatedSection } from "./AnimatedSection";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Pre-School",
      age: "Ages 1½ – 2",
      Grade: "Pre-School",
      description: "Here, curiosity is encouraged and learning feels like play. Children are introduced to early learning concepts through fun exploration, guided activities, and sensory discovery.",
      cta: "Enroll now",
    },
    {
      title: "Nursery 1–3",
      age: "Ages 2½ – 5",
      Grade: "Nursery 1–3",
      description: "Our nursery programme blends structure with creativity. Pupils are introduced to key subjects and hands-on activities designed to develop thinking skills and independence.",
      cta: "Enroll now",
    },
    {
      title: "Lower Grade",
      age: "Ages 5½ – 8",
      Grade: "Grade 1–3",
      description: "At this stage, foundational academics take shape. Pupils develop literacy, numeracy, and critical thinking through structured lessons that make learning engaging and exciting.",
      cta: "Enroll now",
    },
    {
      title: "Higher Grade",
      age: "Ages 8½ – 11",
      Grade: "Grade 4–6",
      description: "Learning deepens and character grows. Higher grade pupils are equipped with advanced skills, broader subject knowledge, and the confidence to excel beyond the classroom.",
      cta: "Enroll now",
    },
  ];

  return (
    <section className="relative section-blue px-4 md:px-12 lg:px-24 py-12 md:py-24 font-body overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-8 right-12 text-3xl animate-float opacity-25 pointer-events-none">📐</div>
      <div className="absolute bottom-16 left-8 text-4xl animate-bounce-gentle opacity-20 pointer-events-none">🎯</div>

      <div className="max-w-[1440px] mx-auto">
        <img src={rock} alt="" className="absolute left-10 md:left-20 top-10 w-[100px] md:w-[156px] hidden md:block opacity-40" />

        <AnimatedSection>
          <div className="mb-10 md:mb-16 text-center">
            <span className="text-xs font-semibold text-secondary bg-white/70 px-3 py-1 rounded-full inline-block mb-3">📚 Our Programs</span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold">
              <span className="text-primary">Teaching Programs,</span>
              <br />
              <span className="text-foreground">Designed For Every Age.</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Mobile/Tablet: proper grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:hidden">
          {programs.map((prog, i) => (
            <AnimatedSection key={prog.title} delay={0.1 * i}>
              <ProgramCard {...prog} />
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop: absolute positioned layout with center image */}
        <div className="relative h-[700px] hidden lg:block">
          <AnimatedSection className="absolute left-40 -top-[60px]" delay={0.1}>
            <ProgramCard {...programs[0]} />
          </AnimatedSection>

          <AnimatedSection className="absolute right-0 top-20 text-right" delay={0.2}>
            <ProgramCard {...programs[1]} />
          </AnimatedSection>

          <AnimatedSection className="absolute left-2 bottom-[108px]" delay={0.3}>
            <ProgramCard {...programs[2]} />
          </AnimatedSection>

          <AnimatedSection className="absolute right-40 -bottom-[120px] z-10" delay={0.4}>
            <ProgramCard {...programs[3]} />
          </AnimatedSection>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src={programbg}
              alt="Happy students learning"
              className="rounded-full object-cover w-[648px] h-[630px] shadow-2xl ring-4 ring-white/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
