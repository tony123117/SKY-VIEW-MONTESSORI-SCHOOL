import { Program } from "@/types/programcard";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

// ─── Brand palette (matches index.css) ─────────────────────────────────────
const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

const cardThemes = [
  { accent: PINK, icon: "🎨" },
  { accent: NAVY, icon: "🧩" },
  { accent: SKY_BLUE, icon: "✏️" },
  { accent: WINE_RED, icon: "🔬" },
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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={
        `w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden transition-shadow duration-300 group cursor-pointer`}
      style={{
        fontFamily: "var(--font-body)",
        background: 'linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.6))',
        border: '1px solid rgba(255,255,255,0.6)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 18px 50px rgba(15,23,42,0.12)'
      }}
    >
      {/* ── TOP ACCENT BAR ── */}
      <div className="h-1.5 w-full" style={{ background: theme.accent }} />

      {/* ── BODY ── */}
      <div className="px-6 pt-6 pb-6">
        {/* Icon + grade row */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl select-none"
            style={{ background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accent}08)`, boxShadow: 'inset 0 -8px 24px rgba(0,0,0,0.06)' }}
          >
            <span aria-hidden style={{ fontSize: 18 }}>{theme.icon}</span>
          </div>
          <span
            className="text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
            style={{ color: theme.accent, background: `${theme.accent}10` }}
          >
            {Grade}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[22px] leading-tight font-bold text-slate-900 mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        {/* Age */}
        <p className="text-xs font-semibold tracking-wide uppercase text-slate-400 mb-4">
          {age}
        </p>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-slate-500 mb-6">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-5" />

        <Link to="/contact">
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.08em] uppercase transition-all duration-200"
            style={{
              color: '#fff',
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}BB)`,
              padding: '10px 14px',
              borderRadius: 999,
              boxShadow: '0 14px 34px rgba(15,23,42,0.14)'
            }}
          >
            {cta}
            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/12">
              <MdOutlineArrowForward size={13} />
            </span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}