import { Program } from "@/types/programcard";
import { motion } from "framer-motion";

export default function ProgramCard({ title, age, Grade, description, cta }: Program) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-5 md:p-6 w-full max-w-[422px] shadow-md min-h-[240px] group cursor-pointer hover:shadow-xl hover:shadow-secondary/15 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-3 group-hover:bg-accent/25 transition-colors">
        <span className="text-lg">📖</span>
      </div>

      <h3 className="text-base md:text-lg font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
          {age}
        </span>
        <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
          {Grade}
        </span>
      </div>

      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

      <a href="#contact" className="text-sm text-accent font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300 hover:text-primary">
        {cta}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </a>
    </motion.div>
  );
}
