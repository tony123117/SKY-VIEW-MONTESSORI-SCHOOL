import React from "react";
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
    <div
      onClick={onReadMore}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${title}`}
      onKeyDown={(e) => e.key === "Enter" && onReadMore?.()}
      className="group relative flex flex-col h-full min-h-[520px] bg-white rounded-[2rem] overflow-hidden border border-slate-100 
                 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] 
                 transition-all duration-500 cursor-pointer hover:-translate-y-3 active:scale-[0.985]"
      style={{ willChange: "transform" }}
    >
      {/* IMAGE */}
      <div className="relative h-[52%] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

        {/* Top accent bar (Hero-inspired) */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5" 
          style={{ background: color }}
        />

        {/* Number badge */}
        <div
          className="absolute top-5 left-5 z-10 transition-transform group-hover:rotate-6 group-hover:scale-110 duration-300"
        >
          <div
            className="bg-white/90 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base shadow-md border border-white/70"
            style={{ color, fontFamily: "'Playfair Display', serif" }}
          >
            {number}
          </div>
        </div>

        {/* Category badge */}
        {category && (
          <div
            className={`absolute top-5 right-5 z-10 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${
              categoryStyles[category] ?? "bg-slate-100 text-slate-600"
            }`}
          >
            {category}
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="flex-1 px-7 pt-7 pb-7 flex flex-col bg-gradient-to-b from-white to-slate-50/80 group-hover:to-white transition-colors duration-500">
        <h3
          className="text-[22px] font-black mb-4 text-slate-900 tracking-[-0.02em] leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>

        <p className="text-slate-600 text-[15px] leading-relaxed flex-1 line-clamp-4 mb-6 group-hover:text-slate-700 transition-colors">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <span
            className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
            style={{ color }}
          >
            Learn more
            <MdOutlineArrowForward className="text-xl transition-transform group-hover:translate-x-1" />
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore?.();
            }}
            className="px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold hover:border-slate-300 hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
            style={{ color: "#1F3A5F" }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}