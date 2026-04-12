import { MdOutlineArrowUpward } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden font-heading min-h-screen section-blue">
      {/* Childish floating decorations */}
      <div className="absolute top-20 left-10 text-3xl animate-float opacity-20 pointer-events-none">🎒</div>
      <div className="absolute top-40 right-20 text-4xl animate-float-slow opacity-15 pointer-events-none">✨</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-bounce-gentle opacity-20 pointer-events-none">🌟</div>
      <div className="absolute bottom-20 right-10 text-2xl animate-wiggle opacity-15 pointer-events-none">📚</div>
      <FloatingIcons />
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 py-10 md:py-20 px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.span
            className="inline-block bg-white/60 backdrop-blur-sm text-secondary text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-secondary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            🎓 Enrolment Open for 2026/2027 Session
          </motion.span>
          <div className="leading-tight md:leading-[3.5rem] mt-2">
            <span className="text-secondary text-3xl md:text-5xl lg:text-[60px] font-bold">
              Unlock a More
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold text-foreground">
              Thoughtful Way to Learn.
            </h1>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[600px] text-center text-sm md:text-base px-4 text-foreground/70 leading-relaxed"
        >
          We focus on more than academics. Our approach blends discipline,
          curiosity, and care to prepare students for lifelong learning.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex gap-3"
        >
          <BrainButton variant="primary">
            Enroll my child <MdOutlineArrowUpward />
          </BrainButton>
          <BrainButton variant="abstract">Tour Our Campus</BrainButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </div>
  );
}
