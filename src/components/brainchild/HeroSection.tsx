import { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion, AnimatePresence } from "framer-motion";
import TeamSection from "./TeamSection";

const slideContent = [
  {
    title: "BRAIN CHILD",
    highlight: "Thoughtful Way to Learn.",
  },
  {
    title: "BRAIN CHILD",
    highlight: "Child's Unique Potential.",
  },
  {
    title: "BRAIN CHILD",
    highlight: "For a Global Future.",
  },
];

// Rainbow palette like your logo
const colors = [
  "#e53935", // red
  "#1e88e5", // blue
  "#fdd835", // yellow
  "#43a047", // green
  "#8e24aa", // purple
  "#fb8c00", // orange
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const letters = slideContent[index].title.split("");

  return (
    <div className="relative font-heading">
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
          <div className="absolute inset-0 bg-black/55 z-10" />
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <FloatingIcons />
        </div>

        {/* Content */}
        <div className="relative z-30 text-center px-4 max-w-5xl space-y-6">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >

              {/* Badge */}
              <span className="inline-block bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-white/20 uppercase tracking-widest mb-6">
                🎓 Enrolment Open for 2026/2027 Session
              </span>

              {/* LOGO STYLE TITLE */}
              <h1 className="flex flex-col items-center justify-center">

                {/* BRAIN CHILD rainbow letters */}
                <div className="flex flex-wrap justify-center font-heading font-extrabold text-5xl md:text-8xl tracking-[0.25em]">
                  {letters.map((char, i) =>
                    char === " " ? (
                      <span key={i} className="w-6 md:w-10" />
                    ) : (
                      <span
                        key={i}
                        style={{ color: colors[i % colors.length] }}
                        className="drop-shadow-sm"
                      >
                        {char}
                      </span>
                    )
                  )}
                </div>

                {/* Subtitle with lines */}
                <div className="flex items-center gap-4 mt-4">
                  <span className="h-[2px] w-10 bg-blue-500" />
                  <p className="text-blue-200 font-semibold tracking-widest text-sm md:text-lg uppercase">
                    Nursery & Primary School
                  </p>
                  <span className="h-[2px] w-10 bg-blue-500" />
                </div>

                {/* Highlight text */}
                <p className="text-yellow-200/90 font-light italic mt-4">
                  {slideContent[index].highlight}
                </p>
              </h1>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">

                <div className="relative group">
                  <BrainButton
                    variant="outline"
                    className="bg-white text-pink-600 border-none px-8 py-4 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
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

                <a href="#facilities">
                  <BrainButton
                    variant="outline"
                    className="border-white text-white px-8 py-4 backdrop-blur-sm hover:bg-white/10"
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