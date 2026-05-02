import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Added this to fix the Tour button
import { MdOutlineArrowUpward, MdFormatQuote } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion, AnimatePresence } from "framer-motion";
import TeamSection from './TeamSection'



// 1. Define the content for each slide
const slideContent = [
  {
    title: "BRAINCHILD NURSERY AND PRIMARY SCHOOL",
    highlight: "Thoughtful Way to Learn.",
    description: "We focus on more than academics. Our approach blends discipline, curiosity, and care to prepare students for lifelong learning.",
  },
  {
    title: "BRAINCHILD NURSERY AND PRIMARY SCHOOL",
    highlight: "Child's Unique Potential.",
    description: "Our world-class curriculum is designed to spark curiosity and build character in a safe, loving environment.",
  },
  {
    title:  "BRAINCHILD NURSERY AND PRIMARY SCHOOL",
    highlight: "For a Global Future.",
    description: "Empowering students with the critical thinking skills and moral integrity needed to excel anywhere in the world.",
  },
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  // 2. Synchronize text change with the carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideContent.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative font-heading">
      
      {/* 1. FULL SCREEN CINEMATIC HERO */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* CAROUSEL BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        {/* FLOATING DECORATIONS - pointer-events-none prevents blocking button clicks */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <FloatingIcons />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-30 text-center px-4 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <span className="inline-block bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20 uppercase tracking-widest">
                🎓 Enrolment Open for 2026/2027 Session
              </span>

              <h1 className="text-white text-4xl md:text-7xl lg:text-10xl font-bold leading-tight mb-6">
                {slideContent[index].title} <br />
                <span className="text-white/80 font-light italic">
                  {slideContent[index].highlight}
                </span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                {slideContent[index].description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* Enroll Button - Wrapped in relative div to ensure the ghost link works */}
                <div className="relative group">
                  <BrainButton variant="outline" className="bg-white text-pink-500 border-none px-8 py-4 font-bold hover:bg-blue-500 hover:text-black transition-colors duration-300">
                    <span className="flex items-center gap-2">
                      Enroll my child <MdOutlineArrowUpward />
                    </span>
                  </BrainButton>
                  <a 
                    href="https://portal.brainchildintschools.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 cursor-pointer" 
                  />
                </div>
                
                {/* Tour Button - Now correctly using Link */}
                <a href="#facilities">
                      <BrainButton
                        variant="outline"
                        className="border-white text-white px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-colors"
                      >
                        Tour Our Campus ✨
                      </BrainButton>
                    </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

     <TeamSection />
    </div>
  );
}