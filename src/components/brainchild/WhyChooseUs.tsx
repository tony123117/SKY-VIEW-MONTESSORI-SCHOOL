import BrainButton from "./BrainButton";
import WhyChooseUsCard from "./WhyChooseUsCard";
import doodles from "@/assets/choosedoodles.png";
import seconddoodles from "@/assets/secondchoosedoodles.png";
import { AnimatedSection } from "./AnimatedSection";

// 1. IMPORT ALL IMAGES HERE
import classImg from "@/assets/class.jpg"; 
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";
// Note: Make sure these filenames match your folder exactly (case-sensitive!)

const reasons = [
  { 
    number: "01", 
    title: "Home-Centred Approach", 
    description: "Children are comfortable and confident in our classrooms, feeling safe and secure to explore and learn.", 
    color: "text-amber-500", 
    image: classImg // 2. USE THE IMPORTED VARIABLE
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
    color: "text-cyan-500", 
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
    image: classImg
  },
];



export function WhyChooseUs() {
  return (
    <section className="section-pink-soft p-6 md:p-12 lg:p-24 font-body relative overflow-hidden">
      <div className="absolute top-6 left-8 text-3xl animate-float opacity-20 pointer-events-none">🌈</div>
      <div className="absolute bottom-10 right-12 text-2xl animate-wiggle opacity-20 pointer-events-none">🎯</div>
      <img
        src={doodles}
        alt=""
        className="absolute right-0 top-0 w-[300px] md:w-[641px] hidden md:block opacity-15"
      />
      <img
        src={seconddoodles}
        alt=""
        className="absolute right-0 bottom-0 w-[300px] md:w-[641px] hidden md:block opacity-15"
      />

      <div className="relative max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">✨ Why Us</span>
              <h2 className="text-2xl md:text-[40px] text-foreground font-heading font-bold text-blue-500">Why Choose Us?</h2>
            </div>

            {/* --- FIXED ENROLL BUTTON WRAPPER --- */}
            <div className="relative w-full md:w-auto">
              <BrainButton variant="primary" className="w-full md:w-auto">
                Enroll today
              </BrainButton>
              <a 
                href="https://portal.brainchildintschools.com/enroll" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
              >
                <span className="sr-only">Enroll today</span>
              </a>
            </div>
            {/* ---------------------------------- */}
            
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="mt-6 md:mt-10 text-foreground/70 font-body max-w-4xl text-sm md:text-base leading-relaxed">
            At Brainchild Int&apos;l, we focus on more than academics. We create a
            supportive space where children feel safe, curious, and confident to
            learn. Every decision we make is guided by care, clarity, and your
            child&apos;s long-term growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {reasons.map((item, i) => (
            <AnimatedSection key={item.number} delay={0.08 * i}>
              <WhyChooseUsCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}