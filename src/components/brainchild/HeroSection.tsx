import { MdOutlineArrowUpward } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden font-heading min-h-screen section-blue">
      <FloatingIcons />
      <div className="flex flex-col items-center justify-center gap-6 md:gap-[37px] py-10 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center leading-tight md:leading-[3rem]"
        >
          <span className="text-secondary text-3xl md:text-5xl lg:text-[60px] font-bold text-center">
            Unlock a More
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold text-center text-brand-dark">
            Thoughtful Way to Learn.
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[625px] text-center text-sm md:text-[17px] px-4 text-muted-foreground"
        >
          We focus on more than academics. Our approach blends discipline,
          curiosity, and care to prepare students for lifelong learning.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex gap-2"
        >
          <BrainButton variant="secondary">
            Enroll my child <MdOutlineArrowUpward />
          </BrainButton>
          <BrainButton variant="abstract">Tour Our Campus</BrainButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </div>
  );
}
