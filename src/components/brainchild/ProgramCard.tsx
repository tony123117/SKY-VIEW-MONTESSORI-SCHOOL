import { Program } from "@/types/programcard";
import { motion } from "framer-motion";

export default function ProgramCard({ title, age, Grade, description, cta }: Program) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-blue-200 backdrop-blur-sm border border-white/60 rounded-2xl p-6 w-full max-w-[422px] shadow-md min-h-[266px] group cursor-pointer hover:shadow-xl hover:shadow-secondary/15 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
        <span className="text-secondary text-lg">📖</span>
      </div>

      <h3 className="text-lg font-heading font-bold mb-3 text-red-800 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="bg-pink-50 text-red-700 text-xs font-bold px-3 py-1.5 rounded-md border-l-4 border-pink-500">
          {age}
        </span>
        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-md border-l-4 border-blue-600">
          {Grade}
        </span>
      </div>

      <p className="text-sm text-black leading-relaxed mb-4 ">{description}</p>

      <a href="https://portal.brainchildintschools.com/enroll" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
        {cta}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </a>
    </motion.div>
  );
}