import { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion, AnimatePresence } from "framer-motion";
import TeamSection from "./TeamSection";

const slideContent = [
  { title: "BRAIN CHILD", highlight: "Thoughtful Way to Learn." },
  { title: "BRAIN CHILD", highlight: "Child's Unique Potential." },
  { title: "BRAIN CHILD", highlight: "For a Global Future." },
];

const colors = ["#2563EB", "#EF4444", "#22C55E", "#EC4899", "#FACC15"];

const tickerMessages = [
  "Admission Ongoing — Secure Your Child's Spot Today",
  "Unlock a Brighter Future — Admissions Now Open",
  "Limited Spaces Available — Apply Now",
  "Nursery and Primary Enrolment Open — Don't Miss Out",
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

        {/* Floating Icons */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <FloatingIcons />
        </div>

        {/* Marquee Ticker — pinned to top of hero */}
        <div
          className="absolute top-0 left-0 right-0 z-40 overflow-hidden border-b border-white/20"
          style={{ backgroundColor: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)" }}
        >
          <style>{`
            @keyframes ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-track {
              display: flex;
              width: max-content;
              animation: ticker 30s linear infinite;
            }
            .ticker-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="ticker-track py-[10px]">
            {[...tickerMessages, ...tickerMessages, ...tickerMessages, ...tickerMessages].map((msg, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 text-white font-semibold uppercase whitespace-nowrap px-10"
                style={{ fontSize: "0.7rem", letterSpacing: "0.12em" }}
              >
                <span
                  className="inline-block w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: colors[i % colors.length] }}
                />
                {msg}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-30 text-center px-4 max-w-5xl space-y-6 mt-8">
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
                Unlock  A More Thoughtful Way to Learn. — Admissions Now Open
              </span>

              {/* Title */}
              <h1 className="flex flex-col items-center justify-center">
                <div className="flex flex-nowrap justify-center font-heading font-extrabold text-5xl md:text-8xl tracking-[0.15em] md:tracking-[0.25em]">
                  {letters.map((char, i) =>
                    char === " " ? (
                      <span key={i} className="w-4 md:w-10" />
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

                <div className="flex items-center gap-4 mt-4">
                  <span className="h-[2px] w-10 bg-blue-500" />
                  <p className="text-blue-200 font-semibold tracking-widest text-sm md:text-lg uppercase whitespace-nowrap">
                    Nursery {"&"} Primary School
                  </p>
                  <span className="h-[2px] w-10 bg-blue-500" />
                </div>

                <p className="text-yellow-200/90 font-light italic mt-4">
                  {slideContent[index].highlight}
                </p>
              </h1>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="https://portal.brainchildintschools.com/student"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BrainButton
                    variant="outline"
                    className="bg-white text-pink-600 border-none px-8 py-4 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Student Portal <MdOutlineArrowUpward />
                    </span>
                  </BrainButton>
                </a>

                <a href="/community">
                  <BrainButton
                    variant="outline"
                    className="border-white text-white px-8 py-4 backdrop-blur-sm hover:bg-white/10"
                  >
                    Tour Our Campus
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