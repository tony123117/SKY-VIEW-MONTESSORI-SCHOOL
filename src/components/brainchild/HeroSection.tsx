import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Added this to fix the Tour button
import { MdOutlineArrowUpward, MdFormatQuote } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion, AnimatePresence } from "framer-motion";

import principalImg from "@/assets/ijeoma.jpeg";

// 1. Define the content for each slide
const slideContent = [
  {
    title: "Unlock a More",
    highlight: "Thoughtful Way to Learn.",
    description: "We focus on more than academics. Our approach blends discipline, curiosity, and care to prepare students for lifelong learning.",
  },
  {
    title: "Nurturing Every",
    highlight: "Child's Unique Potential.",
    description: "Our world-class curriculum is designed to spark curiosity and build character in a safe, loving environment.",
  },
  {
    title: "Building Leaders",
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

              <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6">
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
                <Link to="/contact">
                  <BrainButton variant="outline" className="border-white text-white px-8 py-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    Tour Our Campus ✨
                  </BrainButton>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 2. PRINCIPAL'S SPEECH SECTION */}
      <section className="bg-white py-24 px-4 md:py-32 relative z-40">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Principal Photo */}
            <div className="relative shrink-0">
               <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] rotate-3 scale-105" />
               <div className="relative w-64 h-80 md:w-80 md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                 <img 
                   src={principalImg} 
                   alt="Dr. Ijeoma O. - Principal" 
                   className="w-full h-full object-cover" 
                 />
               </div>
               <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white p-4 rounded-full shadow-lg">
                 ✨
               </div>
            </div>

            {/* Speech Text */}
            <div className="flex-1">
              <div className="relative">
                <MdFormatQuote className="text-7xl text-blue-500/10 absolute -top-10 -left-8" />
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                  Welcome to a Place Where <span className="text-blue-600">Curiosity</span> Meets <span className="text-pink-500">Character</span>.
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                <p>
                  At <strong>Brainchild International Schools</strong>, we believe that education is 
                  not the filling of a pail, but the lighting of a fire. Our journey started with 
                  a simple vision: to create a school where children are truly understood.
                </p>
                
                <p>
                  We focus on <strong>critical thinking</strong>, <strong>global citizenship</strong>, 
                  and <strong>moral integrity</strong>. By blending British curriculum standards 
                  with our Nigerian roots, we prepare students for any stage in the world.
                </p>

                <p className="font-semibold text-blue-700 pt-2 border-t border-slate-100">
                  We are honored to be part of your child&apos;s story. Welcome to our family!
                </p>

                <div className="pt-4">
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">
                    Dr. Ijeoma O. — Director & Founder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}