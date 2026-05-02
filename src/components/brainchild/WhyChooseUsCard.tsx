import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";

export type WhyChooseUsCardProps = {
  number: string;
  title: string;
  description: string;
  color: string;
  image: string;
  category?: string;
  bullets?: string[];
  onReadMore?: () => void;
};

const categoryStyles: Record<string, string> = {
  Academics: "bg-blue-100 text-blue-700",
  Facilities: "bg-emerald-100 text-emerald-700",
  Pastoral: "bg-pink-100 text-pink-700",
};

export default function WhyChooseUsCard({
  number,
  title,
  description,
  color,
  image,
  category,
  onReadMore,
}: WhyChooseUsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex flex-col h-[520px] bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.10)] transition-shadow duration-500 cursor-pointer"
      onClick={onReadMore}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${title}`}
      onKeyDown={(e) => e.key === "Enter" && onReadMore?.()}
    >
      {/* IMAGE */}
      <div className="relative h-[52%] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Number badge */}
        <motion.div
          className="absolute top-5 left-5 z-10"
          whileHover={{ rotate: 6, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className="bg-white/85 backdrop-blur-md w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm border border-white/60"
            style={{ color, fontFamily: "'Playfair Display', serif" }}
          >
            {number}
          </div>
        </motion.div>

        {/* Category badge */}
        {category && (
          <div
            className={`absolute top-5 right-5 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
              categoryStyles[category] ?? "bg-slate-100 text-slate-600"
            }`}
          >
            {category}
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="flex-1 px-7 pt-6 pb-6 flex flex-col bg-gradient-to-b from-white to-pink-50/20 group-hover:to-pink-100/20 transition-all duration-500">
        <h3
          className="text-xl font-extrabold mb-3 text-slate-800 tracking-tight leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3 group-hover:text-slate-600 transition-colors">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <motion.span
            className="flex items-center gap-2 text-sm font-bold transition-all duration-300"
            style={{ color }}
            whileHover={{ x: 4 }}
          >
            Learn more
            <MdOutlineArrowForward className="text-lg" />
          </motion.span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore?.();
            }}
            aria-label={`Read more about ${title}`}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 active:scale-95 transition-all"
          >
            Read more
          </button>
        </div>
      </div>
    </motion.div>
  );
}