import { Program } from "@/types/programcard";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

export default function ProgramCard({ title, age, Grade, description, cta, index }: Program & { index: number }) {
  const isEven = index % 2 === 0;

  const accent = isEven ? "text-rose-600" : "text-indigo-600";
  const badge = isEven ? "bg-rose-50 text-rose-700" : "bg-indigo-50 text-indigo-700";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="
        bg-white/80 backdrop-blur-xl
        border border-white/60
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        rounded-3xl
        p-6 md:p-8
        w-full max-w-[440px]
        mx-auto
        group
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        transition-all
      "
    >
      <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${badge} mb-5`}>
        {Grade}
      </div>

      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${accent}`}>
        {title}
      </h3>

      <div className="text-xs text-gray-500 mb-3">
        {age}
      </div>

      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      <div className={`inline-flex items-center gap-2 text-sm font-semibold ${accent} group-hover:gap-3 transition-all`}>
        {cta}
        <MdOutlineArrowForward />
      </div>
    </motion.div>
  );
}