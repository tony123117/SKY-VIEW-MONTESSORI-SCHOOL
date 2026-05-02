import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X, Download } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
  bullets: string[];
  description?: string;
  category?: string;
  color?: string;
  number?: string;
  onOpenBrochure?: () => void;
}

const categoryStyles: Record<string, string> = {
  Academics: "bg-blue-100 text-blue-700",
  Facilities: "bg-emerald-100 text-emerald-700",
  Pastoral: "bg-pink-100 text-pink-700",
};

export default function WhyChooseUsModal({
  open,
  onClose,
  title,
  image,
  bullets,
  description,
  category,
  color = "#E8386D",
  number,
  onOpenBrochure,
}: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} details`}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-white w-full max-w-[860px] rounded-3xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
          >
            {/* Hero image */}
            <div className="relative h-56 sm:h-64 w-full flex-shrink-0 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${color}cc 0%, transparent 60%)`,
                }}
              />
              {/* Number watermark */}
              {number && (
                <span
                  className="absolute bottom-4 right-6 font-black opacity-30 select-none leading-none"
                  style={{
                    fontSize: "clamp(48px,8vw,80px)",
                    color: "#fff",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {number}
                </span>
              )}
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close details"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-all shadow-sm"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 px-7 sm:px-10 py-7">
              {/* Category + Title */}
              <div className="mb-5">
                {category && (
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
                      categoryStyles[category] ?? "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {category}
                  </span>
                )}
                <h3
                  className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
              </div>

              {/* Description */}
              {description && (
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  {description}
                </p>
              )}

              {/* Bullet points */}
              {bullets.length > 0 && (
                <ul className="flex flex-col gap-3 mb-7">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}22` }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="flex gap-3 flex-wrap pb-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBrochure?.();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 active:scale-95 transition-all"
                >
                  <Download size={14} />
                  Download Brochure
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}