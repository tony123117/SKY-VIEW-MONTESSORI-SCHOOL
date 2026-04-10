import ProgramCard from "./ProgramCard";
import programbg from "@/assets/programbg.png";
import rock from "@/assets/rock.png";
import { AnimatedSection } from "./AnimatedSection";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Pre-Nursery",
      description: "Here, curiosity is encouraged and learning feels like play. Children are introduced to early learning concepts through fun, exploration, and guided activities that spark imagination and confidence.",
      cta: "Enroll now",
    },
    {
      title: "Creche",
      description: "A safe and nurturing space where love comes first. Our creche provides attentive care, comfort, and early stimulation, ensuring every baby receives the warmth and attention they need to grow confidently.",
      cta: "Enroll now",
    },
    {
      title: "Nursery 1–3",
      description: "Our nursery program blends structure with creativity. Pupils are introduced to key subjects and hands-on activities designed to develop thinking skills, independence, and a love for learning.",
      cta: "Enroll now",
    },
    {
      title: "Primary 1–6",
      description: "At this stage, learning deepens and character grows. Pupils are guided academically and socially to think critically, speak confidently, take responsibility, and prepare for examinations.",
      cta: "Enroll now",
    },
  ];

  return (
    <section className="relative max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 py-12 md:py-24 font-body">
      <img src={rock} alt="rock" className="absolute left-10 md:left-20 top-10 w-[100px] md:w-[156px] hidden md:block" />

      <AnimatedSection>
        <div className="mb-10 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-right">
            <span className="text-primary">Teaching Programs,</span>
            <br />
            Designed For Every Age.
          </h2>
        </div>
      </AnimatedSection>

      {/* Mobile/Tablet: grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
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
            alt="Students"
            className="rounded-full object-cover w-[648px] h-[630px]"
          />
        </div>
      </div>
    </section>
  );
}
