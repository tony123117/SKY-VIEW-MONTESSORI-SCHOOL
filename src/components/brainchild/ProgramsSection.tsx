import ProgramCard from "./ProgramCard";
import programbg from "@/assets/programbg.png";
import rock from "@/assets/rock.png";

export default function ProgramsSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto p-24 font-body">
      <img src={rock} alt="rock" className="absolute left-20 top-10 w-[156px]" />

      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-right">
          <span className="text-primary">Teaching Programs,</span>
          <br />
          Designed For Every Age.
        </h2>
      </div>

      <div className="relative h-[700px]">
        <div className="absolute left-40 -top-[60px]">
          <ProgramCard
            title="Pre-Nursery"
            description="Here, curiosity is encouraged and learning feels like play. Children are introduced to early learning concepts through fun, exploration, and guided activities that spark imagination and confidence."
            cta="Enroll now"
          />
        </div>

        <div className="absolute right-0 top-20 text-right">
          <ProgramCard
            title="Creche"
            description="A safe and nurturing space where love comes first. Our creche provides attentive care, comfort, and early stimulation, ensuring every baby receives the warmth and attention they need to grow confidently."
            cta="Enroll now"
          />
        </div>

        <div className="absolute left-2 bottom-[108px]">
          <ProgramCard
            title="Nursery 1–3"
            description="Our nursery program blends structure with creativity. Pupils are introduced to key subjects and hands-on activities designed to develop thinking skills, independence, and a love for learning."
            cta="Enroll now"
          />
        </div>

        <div className="absolute right-40 -bottom-[120px] z-10">
          <ProgramCard
            title="Primary 1–6"
            description="At this stage, learning deepens and character grows. Pupils are guided academically and socially to think critically, speak confidently, take responsibility, and prepare for examinations."
            cta="Enroll now"
          />
        </div>

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
