import BrainButton from "./BrainButton";
import WhyChooseUsCard from "./WhyChooseUsCard";
import doodles from "@/assets/choosedoodles.png";
import seconddoodles from "@/assets/secondchoosedoodles.png";
import { AnimatedSection } from "./AnimatedSection";

export function WhyChooseUs() {
  return (
    <section className="section-blue p-6 md:p-12 lg:p-24 font-body relative">
      <img
        src={doodles}
        alt="doodles"
        className="absolute right-0 top-0 w-[300px] md:w-[641px] hidden md:block opacity-30"
      />
      <img
        src={seconddoodles}
        alt="doodles"
        className="absolute right-0 bottom-0 w-[300px] md:w-[641px] hidden md:block opacity-30"
      />

      <div className="relative">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl md:text-[40px] text-brand-dark">Why Choose us?</h2>
            <BrainButton variant="primary" className="w-full md:w-auto">
              Enroll today
            </BrainButton>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mt-6 md:mt-10 text-muted-foreground font-heading max-w-4xl text-sm md:text-base">
            At Brainchild Int&apos;l, we focus on more than academics. We create a
            supportive space where children feel safe, curious, and confident to
            learn. Every decision we make is guided by care, clarity, and your
            child&apos;s long-term growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8 md:mt-10">
          {["01", "02", "03", "04", "05", "06"].map((num, i) => (
            <AnimatedSection key={num} delay={0.1 * i}>
              <WhyChooseUsCard
                number={num}
                title="Home-Centred Approach"
                description="Children are comfortable and confident in our classrooms, feeling safe and secure to explore and learn."
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
