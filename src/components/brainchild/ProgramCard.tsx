import { Program } from "@/types/programcard";
import { motion } from "framer-motion";

export default function ProgramCard({ title, description, cta }: Program) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card border border-border rounded-xl p-6 w-full max-w-[422px] shadow-sm min-h-[266px] group cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <a href="#" className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
        {cta}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </a>
    </motion.div>
  );
}
