import { Program } from "@/types/programcard";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

export default function ProgramCard({ title, age, Grade, description, cta, index }: Program & { index: number }) {
  const isRed = index % 2 === 0;
  const accentColor = isRed ? "text-red-600" : "text-blue-600";
  const badgeBg = isRed ? "bg-red-50" : "bg-blue-50";
  const badgeBorder = isRed ? "border-red-100" : "border-blue-100";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      // FIXED: w-[80vw] on mobile (70-80% of screen) and max-w-[420px] on desktop
      className="bg-white rounded-none p-8 w-[80vw] sm:w-full max-w-[420px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b-4 border-slate-100 hover:border-pink-500 transition-all duration-500 group cursor-pointer mx-auto lg:mx-0"
    >
      <div className={`inline-block px-4 py-1 rounded-full ${badgeBg} border ${badgeBorder} mb-6`}>
        <span className={`text-[10px] font-black uppercase tracking-widest ${accentColor}`}>
          {Grade}
        </span>
      </div>

      <h3 className={`text-2xl md:text-3xl font-heading font-black mb-4 tracking-tight leading-tight ${accentColor}`}>
        {title}
      </h3>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Target Group:</span>
        <span className="text-slate-900 text-xs font-black">{age}</span>
      </div>

      <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium italic">
        "{description}"
      </p>

      <div className={`text-sm font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300 ${accentColor}`}>
        {cta}
        <MdOutlineArrowForward className="text-lg" />
      </div>
    </motion.div>
  );
}