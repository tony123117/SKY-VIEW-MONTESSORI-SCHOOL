import { Program } from "@/types/programcard";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

const cardThemes = [
  {
    headerBg: "bg-rose-500",
    ctaBg: "bg-rose-50",
    ctaText: "text-rose-700",
    icon: "🎨",
    sticker: "🌱",
  },
  {
    headerBg: "bg-indigo-600",
    ctaBg: "bg-indigo-50",
    ctaText: "text-indigo-800",
    icon: "🧩",
    sticker: "⭐",
  },
  {
    headerBg: "bg-emerald-400",
    ctaBg: "bg-emerald-50",
    ctaText: "text-emerald-800",
    icon: "✏️",
    sticker: "📖",
  },
  {
    headerBg: "bg-amber-600",
    ctaBg: "bg-amber-50",
    ctaText: "text-amber-800",
    icon: "🔬",
    sticker: "🏆",
  },
];

export default function ProgramCard({
  title,
  age,
  Grade,
  description,
  cta,
  index,
}: Program & { index: number }) {
  const theme = cardThemes[index % cardThemes.length];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        w-full max-w-[300px] mx-auto
        rounded-2xl overflow-hidden
        bg-white
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]
        transition-shadow duration-300
        group cursor-pointer
      "
    >
      {/* ── COLOURED HEADER ── */}
      <div className={`relative ${theme.headerBg} px-5 pt-5 pb-4 overflow-hidden`}>

        {/* Notebook lines overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 20px, rgba(255,255,255,0.13) 20px, rgba(255,255,255,0.14) 21px)",
          }}
        />

        {/* Paperclip */}
        <div className="absolute top-0 right-5 w-[11px] h-[24px] border-2 border-white/40 border-b-0 rounded-t-lg z-10" />
        <div className="absolute top-[4px] right-[22px] w-[4px] h-[14px] border-2 border-white/40 border-b-0 rounded-t-md z-10" />

        {/* Floating sticker */}
        <div className="absolute -bottom-3 right-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm z-20 select-none">
          {theme.sticker}
        </div>

        {/* Icon + grade row */}
        <div className="relative z-10 flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-lg select-none">
            {theme.icon}
          </div>
          <span
            className="text-[9px] font-extrabold tracking-[0.18em] uppercase text-white/70"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {Grade}
          </span>
        </div>

        {/* Title */}
        <h3
          className="relative z-10 text-[21px] leading-tight text-white"
          style={{ fontFamily: "'Schoolbell', cursive" }}
        >
          {title}
        </h3>

        {/* Age pill */}
        <span
          className="relative z-10 inline-block mt-2 text-[9px] font-bold tracking-widest uppercase text-white px-2.5 py-0.5 rounded-full border border-white/30 bg-white/15"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {age}
        </span>
      </div>

      {/* ── BODY ── */}
      <div className="relative px-5 pt-6 pb-5 bg-white overflow-hidden">

        {/* Notebook lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 24px, rgba(0,0,0,0.03) 24px, rgba(0,0,0,0.03) 25px)",
          }}
        />

        <p
          className="relative text-[12px] leading-relaxed text-gray-500 mb-4"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`
            relative inline-flex items-center gap-1.5
            text-[10px] font-extrabold tracking-[0.12em] uppercase
            px-4 py-2 rounded-full
            group-hover:gap-2.5 transition-all duration-200
            ${theme.ctaBg} ${theme.ctaText}
          `}
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {cta}
          <MdOutlineArrowForward size={11} />
        </motion.button>
      </div>
    </motion.div>
  );
}