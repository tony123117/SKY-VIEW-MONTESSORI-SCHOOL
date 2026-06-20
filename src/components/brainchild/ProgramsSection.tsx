import ProgramCard from "./ProgramCard";
import buildingimg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg"
import programbg from '@/assets/SKYVIEW-IMAGES/building-blocks.jpeg'
import { AnimatedSection } from "./AnimatedSection";
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/components/ui/motionVariants';

export default function ProgramsSection() {
  const programs = [
    {
      title: "Kindergarten",
      age: "Ages 2 – 5",
      Grade: "Early Years",
      description: "A nurturing environment where young learners develop foundational skills through play, exploration, and guided activities.",
      cta: "Enroll now",
    },
    {
      title: "Nursery 1–3",
      age: "Ages 3 – 5",
      Grade: "Foundation",
      description: "Building confidence, creativity, and early academic skills through engaging and structured learning experiences.",
      cta: "Enroll now",
    },
    {
      title: "Primary 1–6",
      age: "Ages 6 – 11",
      Grade: "Primary School",
      description: "Developing strong literacy, numeracy, critical thinking, and problem-solving skills for lifelong learning.",
      cta: "Enroll now",
    },
    {
      title: "Secondary School (JSS1–SS3)",
      age: "Ages 12 – 17",
      Grade: "Secondary Education",
      description: "Preparing students for academic excellence, leadership, and future success through a comprehensive curriculum.",
      cta: "Enroll now",
    },
  ];

  return (
    <section className="relative bg-[#F9F5EF] py-20 md:py-28 px-4 md:px-12 lg:px-24 overflow-hidden">

      {/* Notebook paper lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(180deg, transparent 0px, transparent 27px, #2d4a3e 27px, #2d4a3e 28px)",
        }}
      />

      {/* Corner doodles */}
      <span className="absolute top-4 left-5 text-[#2d4a3e] opacity-10 text-3xl font-bold rotate-[-15deg] select-none pointer-events-none" style={{ fontFamily: "'Schoolbell', cursive" }}>ABC</span>
      <span className="absolute top-5 right-8 text-[#2d4a3e] opacity-10 text-2xl font-bold rotate-[10deg] select-none pointer-events-none" style={{ fontFamily: "'Schoolbell', cursive" }}>123</span>
      <span className="absolute bottom-8 left-10 text-[#2d4a3e] opacity-10 text-2xl font-bold rotate-[8deg] select-none pointer-events-none" style={{ fontFamily: "'Schoolbell', cursive" }}>★★★</span>
      <span className="absolute bottom-6 right-6 text-[#2d4a3e] opacity-10 text-2xl font-bold rotate-[-12deg] select-none pointer-events-none" style={{ fontFamily: "'Schoolbell', cursive" }}>+−×÷</span>

      {/* Ruler tick strip */}
      <div
        className="w-full h-2 rounded-full mb-10 opacity-40"
        style={{
          background: "repeating-linear-gradient(90deg, #f5c518 0px, #f5c518 1px, transparent 1px, transparent 20px)",
        }}
      />

      {/* HEADER */}
      <AnimatedSection className="text-center mb-16 md:mb-24">
        <span
          className="inline-flex items-center gap-2 bg-[#2d4a3e] text-white text-[11px] tracking-[0.12em] uppercase font-bold px-5 py-2 rounded-full mb-5"
          style={{ fontFamily: "'Schoolbell', cursive", fontSize: "13px" }}
        >
          ✏️ Academic Programs
        </span>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight text-[#2d4a3e]"
          style={{ fontFamily: "'Schoolbell', cursive" }}
        >
          Teaching Programs <br />
          <span className="text-rose-500 italic font-light">
            Designed for Every Age
          </span>
        </h2>

        <p className="mt-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
          From first steps to final grades — a seat for every learner
        </p>
      </AnimatedSection>

      {/* MOBILE / TABLET */}
      <div className="lg:hidden flex flex-col items-center gap-12">

        {/* CIRCLE IMAGE — MOBILE */}
        <AnimatedSection className="relative flex items-center justify-center">
          {/* Pencil-yellow ring */}
          <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full border-[3px] border-dashed border-yellow-400 opacity-40" />
          {/* Glow */}
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
              shadow-xl
            "
            style={{ border: "16px solid white", outline: "4px solid #f5c518" }}
          />
        </AnimatedSection>

        {/* MOBILE CARDS GRID */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {programs.map((p, i) => (
            <motion.div key={p.title} variants={fadeIn} transition={{ delay: i * 0.08 }}>
              <ProgramCard {...p} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP */}
      <div className="relative h-[900px] hidden lg:block">

        {/* CENTER CIRCLE IMAGE */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">

            {/* Outer dashed pencil ring */}
            <div className="absolute w-[660px] h-[660px] xl:w-[760px] xl:h-[760px] rounded-full border-[3px] border-dashed border-yellow-400 opacity-50 animate-spin" style={{ animationDuration: "30s" }} />

            {/* Glow */}
            <div className="absolute w-[650px] h-[650px] bg-rose-200 blur-[120px] opacity-30 rounded-full" />

            <img
              src={buildingimg}
              alt="Students"
              className="relative w-[600px] h-[600px] xl:w-[700px] xl:h-[700px] object-cover rounded-full shadow-2xl"
              style={{ border: "18px solid white", outline: "5px solid #f5c518" }}
            />
          </div>
        </motion.div>

        {/* FLOATING CARDS */}

        {/* TOP LEFT */}
        <div className="absolute left-[5%] top-[0%]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="animate-float-slow hover:scale-[1.02] transition-transform">
            <ProgramCard {...programs[0]} index={0} />
          </motion.div>
        </div>

        {/* TOP RIGHT */}
        <div className="absolute right-[5%] top-[10%]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="animate-float hover:scale-[1.02] transition-transform">
            <ProgramCard {...programs[1]} index={1} />
          </motion.div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute left-[10%] bottom-[5%]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="animate-float-slow hover:scale-[1.02] transition-transform">
            <ProgramCard {...programs[2]} index={2} />
          </motion.div>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute right-[10%] bottom-[0%]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="animate-float hover:scale-[1.02] transition-transform">
            <ProgramCard {...programs[3]} index={3} />
          </motion.div>
        </div>

      </div>

      {/* CHALK BANNER */}
      <div
        className="mt-16 max-w-4xl mx-auto rounded-2xl px-8 py-5 flex items-center justify-center gap-4 flex-wrap relative overflow-hidden"
        style={{ background: "#2d4a3e" }}
      >
        <span
          className="text-white text-lg tracking-wide opacity-90"
          style={{ fontFamily: "'Schoolbell', cursive" }}
        >
          📚 Every child deserves a great start
        </span>
        {["Small class sizes", "Qualified teachers", "Holistic learning"].map((tag) => (
          <span
            key={tag}
            className="bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

    </section>
  );
}