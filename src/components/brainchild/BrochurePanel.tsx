import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X, Download, CheckCircle2 } from "lucide-react";

interface BrochurePanelProps {
  open: boolean;
  onClose: () => void;
}

const features = [
  "British & Nigerian Curriculum",
  "STEAM Integration",
  "Secure, Modern Campus",
  "Certified Expert Educators",
  "Guided Digital Learning",
  "Values & Leadership",
  "Vocational Training",
  "Small Class Sizes",
];

const stats = [
  { num: "250+", label: "Students enrolled" },
  { num: "1:12", label: "Teacher ratio" },
  { num: "15+", label: "Years of excellence" },
];

export default function BrochurePanel({ open, onClose }: BrochurePanelProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
          aria-label="School Brochure"
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
            initial={{ y: 28, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-white w-full max-w-[680px] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 pt-6 pb-4 flex-shrink-0">
              <h2
                className="text-2xl font-black text-slate-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                School Brochure
              </h2>
              <button
                onClick={onClose}
                aria-label="Close brochure"
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 px-7 pb-7">
              {/* Hero gradient block */}
              <div className="rounded-2xl p-7 mb-6 relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-white/5" />
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-75 mb-2">
                  Brain Child Nursery &amp; Primary School
                </p>
                <h3
                  className="text-3xl font-black leading-tight mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Raising Tomorrow's<br />Global Leaders
                </h3>
                <p className="text-sm opacity-80 leading-relaxed max-w-sm">
                  Where curiosity meets excellence — a nurturing space for every child to discover, grow, and thrive.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((s) => (
                  <div
                    key={s.num}
                    className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100"
                  >
                    <div
                      className="text-2xl font-black text-blue-600"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.num}
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 active:scale-95 transition-all no-underline"
                >
                  <Download size={14} />
                  Download PDF
                </a>
                <a
                  href="https://portal.brainchildintschools.com/enroll"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-500 text-white text-sm font-bold hover:bg-pink-600 active:scale-95 transition-all no-underline"
                >
                  Enroll Now
                </a>
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