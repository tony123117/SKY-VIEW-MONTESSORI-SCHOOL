import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buildingImg from "@/assets/skyview-images/building.jpeg";
import football from "@/assets/skyview-images/FOOTBALL.png";
import judo from "@/assets/skyview-images/judo.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

const slides = [
  {
    image: buildingImg,
    badge: "World-Class Education",
    titleWhite: "Inspiring Excellence,",
    titleAccent: "Building Future Leaders",
    subtitle:
      "Providing world-class nursery, primary and secondary education in a safe, innovative and inspiring environment where every child develops the confidence, character and skills to thrive in a changing world.",
  },
  {
    image: judo,
    badge: "Physical Excellence",
    titleWhite: "Where Discipline",
    titleAccent: "Builds Confidence",
    subtitle:
      "Our robust sports programme including martial arts develops resilience, focus, and character alongside outstanding academic achievement.",
  },
  {
    image: football,
    badge: "Active Champions",
    titleWhite: "Where Teamwork",
    titleAccent: "Forges Winners",
    subtitle:
      "From football competitions to inter-school events, we nurture leadership, sportsmanship and healthy lifestyles through dynamic extracurricular activities.",
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Happy Students" },
  { value: "40+", label: "Expert Teachers" },
  { value: "95%", label: "Parent Satisfaction" },
];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [busy, setBusy] = useState(false);

  function goTo(next: number) {
    if (busy) return;
    setBusy(true);
    setIndex(next);
    setTimeout(() => setBusy(false), 700);
  }

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          height: "92vh",
          minHeight: 580,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              opacity: i === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <ResponsiveImage
              src={s.image}
              alt={s.titleWhite}
              className="w-full h-full object-cover"
              widths={[480, 768, 1024, 1600]}
              style={{ filter: "brightness(1.08) contrast(1.05) saturate(1.1)" }}
            />
          </div>
        ))}

        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(100deg, rgba(6,10,18,0.80) 0%, rgba(6,10,18,0.65) 30%, rgba(6,10,18,0.30) 58%, rgba(6,10,18,0.05) 80%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "linear-gradient(to top, rgba(6,10,18,0.55) 0%, rgba(6,10,18,0.08) 18%, transparent 40%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "radial-gradient(ellipse at 8% 55%, rgba(155,28,44,0.14) 0%, transparent 42%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, top: "22%", bottom: "22%", width: 3, zIndex: 20, background: "linear-gradient(to bottom, transparent 0%, #FF6B9D 30%, #9B1C2C 70%, transparent 100%)", borderRadius: 2 }} />

        {[
          { side: "left" as const, label: "Previous", icon: "‹", fn: () => goTo((index - 1 + slides.length) % slides.length) },
          { side: "right" as const, label: "Next", icon: "›", fn: () => goTo((index + 1) % slides.length) },
        ].map(({ side, label, icon, fn }) => (
          <button key={side} aria-label={label} onClick={fn}
            style={{ position: "absolute", [side]: 20, top: "50%", transform: "translateY(-50%)", zIndex: 25, width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", fontSize: "1.6rem", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", lineHeight: 1, transition: "background 0.2s" }}
          >
            {icon}
          </button>
        ))}

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 25, display: "flex", gap: 8 }}>
          {slides.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => goTo(i)}
              style={{ height: 6, width: i === index ? 28 : 6, borderRadius: 999, background: i === index ? "#FF6B9D" : "rgba(255,255,255,0.38)", border: "none", cursor: "pointer", padding: 0, transition: "width 0.35s ease, background 0.35s ease" }}
            />
          ))}
        </div>

        <div style={{ position: "absolute", bottom: 26, right: 32, zIndex: 25, color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em" }}>
          0{index + 1} / 0{slides.length}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", zIndex: 20, maxWidth: 800, padding: "0 4rem" }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(155,28,44,0.22)", border: "1px solid rgba(255,107,157,0.45)", borderRadius: 999, padding: "6px 18px", marginBottom: 28, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B9D", display: "inline-block", flexShrink: 0, boxShadow: "0 0 8px rgba(255,107,157,0.9)" }} />
              <span style={{ color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>{slide.badge}</span>
            </div>

            <h1 style={{ margin: "0 0 20px", lineHeight: 1.06, fontWeight: 900, letterSpacing: "-0.025em", fontFamily: "var(--font-heading, sans-serif)" }}>
              <span style={{ display: "block", color: "#fff", fontSize: "clamp(2.4rem, 5.2vw, 4rem)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>{slide.titleWhite}</span>
              <span style={{ display: "block", fontSize: "clamp(2.4rem, 5.2vw, 4rem)", background: "linear-gradient(110deg, #FF6B9D 0%, #D4436A 50%, #9B1C2C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{slide.titleAccent}</span>
            </h1>

            <p style={{ margin: "0 0 34px", color: "rgba(255,255,255,0.80)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 560, fontWeight: 400, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>{slide.subtitle}</p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="/admissions"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #9B1C2C 0%, #C5305A 55%, #FF6B9D 100%)", color: "#fff", padding: "14px 30px", borderRadius: 999, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", boxShadow: "0 8px 28px rgba(155,28,44,0.50), inset 0 1px 0 rgba(255,255,255,0.12)", letterSpacing: "0.01em" }}>
                Apply Now →
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="/community"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", color: "#fff", padding: "14px 30px", borderRadius: 999, fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.32)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", letterSpacing: "0.01em" }}>
                Book a School Tour
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Stats bar — RED background ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#9B1C2C" }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding: "28px 24px", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
            <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1, fontFamily: "var(--font-heading, sans-serif)" }}>
              {s.value}
            </div>
            <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.72)", fontWeight: 500, marginTop: 6, letterSpacing: "0.02em" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;