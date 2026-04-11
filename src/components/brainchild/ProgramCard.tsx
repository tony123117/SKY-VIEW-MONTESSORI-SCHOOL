import { Program } from "@/types/programcard";
import { motion } from "framer-motion";

export default function ProgramCard({ title, description, cta }: Program) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 w-full max-w-[422px] shadow-md min-h-[266px] group cursor-pointer hover:shadow-xl hover:shadow-secondary/15 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
        <span className="text-secondary text-lg">📖</span>
      </div>
      <h3 className="text-lg font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <a href="#" className="text-sm text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
        {cta}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </a>
    </motion.div>
  );
}
