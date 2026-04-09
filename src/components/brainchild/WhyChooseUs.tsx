import BrainButton from "./BrainButton";
import WhyChooseUsCard from "./WhyChooseUsCard";
import doodles from "@/assets/choosedoodles.png";
import seconddoodles from "@/assets/secondchoosedoodles.png";

export function WhyChooseUs() {
  return (
    <section className="bg-brand-light-pink p-24 font-body relative">
      <img
        src={doodles}
        alt="doodles"
        className="absolute right-0 top-0 w-[641px]"
      />
      <img
        src={seconddoodles}
        alt="doodles"
        className="absolute right-0 bottom-0 w-[641px]"
      />

      <div className="relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[40px] text-foreground">Why Choose us?</h2>
          <div>
            <BrainButton variant="primary" className="w-full">
              Enroll today
            </BrainButton>
          </div>
        </div>
        <p className="mt-10 text-muted-foreground font-heading max-w-4xl">
          At Brainchild Int&apos;l, we focus on more than academics. We create a
          supportive space where children feel safe, curious, and confident to
          learn. Every decision we make is guided by care, clarity, and your
          child&apos;s long-term growth.
        </p>

        <div className="grid grid-cols-3 gap-10 mt-10">
          {["01", "02", "03", "04", "05", "06"].map((num) => (
            <WhyChooseUsCard
              key={num}
              number={num}
              title="Home-Centred Approach"
              description="Children are comfortable and confident in our classrooms, feeling safe and secure to explore and learn."
            />
          ))}
        </div>
      </div>
    </section>
  );
}
