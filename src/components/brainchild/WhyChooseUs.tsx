import WhyChooseUsCard from "./WhyChooseUsCard";
import { AnimatedSection } from "./AnimatedSection";
import BrainButton from "./BrainButton";
import doodles from "@/assets/choosedoodles.png";

// Import your images
import creativeImg from "@/assets/creative.jpeg"; 
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";

const reasons = [
  { 
    number: "01", 
    title: "Home-Centred Approach", 
    description: "Children are comfortable and confident in our classrooms, feeling safe and secure to explore and learn.", 
    color: "text-amber-500", 
    image: creativeImg 
  },
  { 
    number: "02", 
    title: "Expert Educators", 
    description: "Our passionate, trained teachers bring creativity and patience to every lesson, ensuring every child thrives.", 
    color: "text-pink-500", 
    image: teachersImg
  },
  { 
    number: "03", 
    title: "Modern Curriculum", 
    description: "We blend Nigerian and British curricula with 21st-century skills, preparing students for a global future.", 
    color: "text-blue-500", 
    image: enterImg
  },
  { 
    number: "04", 
    title: "Safe Environment", 
    description: "Security and well-being come first. Our campus is designed to give parents peace of mind every day.", 
    color: "text-cyan-600", 
    image: outsideImg
  },
  { 
    number: "05", 
    title: "Character Building", 
    description: "We nurture values like respect, empathy, and responsibility alongside academic excellence.", 
    color: "text-purple-500" ,
    image: enterImg 
  },
  { 
    number: "06", 
    title: "Small Class Sizes", 
    description: "Every child gets personal attention with our carefully maintained teacher-to-student ratios.", 
    color: "text-green-500" ,
    image: creativeImg
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#FCF8F9] py-24 px-6 md:px-12 lg:px-24 font-body relative overflow-hidden">
      {/* Background Decor - Subtle & Premium */}
      <img
        src={doodles}
        alt=""
        className="absolute right-0 top-0 w-[450px] opacity-10 pointer-events-none"
      />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/40 rounded-full blur-[100px]" />

      <div className="relative max-w-[1400px] mx-auto">
        <header className="text-center mb-24 flex flex-col items-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 mb-6">
               <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
               <span className="text-pink-600 text-xs font-black uppercase tracking-widest">Why Brainchild?</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
              Why Parents <span className="text-pink-500">Choose</span> Us.
            </h2>
            <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              At Brainchild Int&apos;l, we focus on more than academics. We create a
              supportive space where children feel safe, curious, and confident to
              learn.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <div className="relative inline-block">
              <BrainButton className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-12 py-5 font-bold shadow-2xl shadow-pink-200 transition-all active:scale-95">
                Enroll my child
              </BrainButton>
              <a href="https://portal.brainchildintschools.com/enroll" target="_blank" className="absolute inset-0 z-10" />
            </div>
          </AnimatedSection>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((item, i) => (
            <AnimatedSection key={item.number} delay={0.1 * i}>
              <WhyChooseUsCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}