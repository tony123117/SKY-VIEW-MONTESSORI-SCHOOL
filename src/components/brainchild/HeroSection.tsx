import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buildingImg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import football from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";
import judo from "@/assets/SKYVIEW-IMAGES/judo.png";
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

const HERO_CSS = `
  .hs-section {
    position: relative;
    height: 92vh;
    min-height: 580px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .hs-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 25;
    width: 46px; height: 46px;
    border-radius: 50%;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.22);
    color: #fff;
    font-size: 1.6rem;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    line-height: 1;
    transition: background 0.2s;
  }
  .hs-arrow-left { left: 20px; }
  .hs-arrow-right { right: 20px; }

  .hs-dots {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 25;
    display: flex;
    gap: 8px;
  }

  .hs-counter {
    position: absolute;
    bottom: 26px;
    right: 32px;
    z-index: 25;
    color: rgba(255,255,255,0.35);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
  }

  .hs-content {
    position: relative;
    z-index: 20;
    max-width: 800px;
    padding: 0 4rem;
  }

  .hs-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(155,28,44,0.22);
    border: 1px solid rgba(255,107,157,0.45);
    border-radius: 999px;
    padding: 6px 18px;
    margin-bottom: 28px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .hs-title {
    margin: 0 0 20px;
    line-height: 1.06;
    font-weight: 900;
    letter-spacing: -0.025em;
    font-family: var(--font-heading, sans-serif);
  }
  .hs-title-line {
    display: block;
    color: #fff;
    font-size: clamp(2.4rem, 5.2vw, 4rem);
    text-shadow: 0 2px 20px rgba(0,0,0,0.4);
  }
  .hs-title-accent {
    display: block;
    font-size: clamp(2.4rem, 5.2vw, 4rem);
    background: linear-gradient(110deg, #FF6B9D 0%, #D4436A 50%, #9B1C2C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hs-subtitle {
    margin: 0 0 34px;
    color: rgba(255,255,255,0.80);
    font-size: 1rem;
    line-height: 1.8;
    max-width: 560px;
    font-weight: 400;
    text-shadow: 0 1px 8px rgba(0,0,0,0.4);
  }

  .hs-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .hs-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #9B1C2C 0%, #C5305A 55%, #FF6B9D 100%);
    color: #fff;
    padding: 14px 30px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.92rem;
    text-decoration: none;
    box-shadow: 0 8px 28px rgba(155,28,44,0.50), inset 0 1px 0 rgba(255,255,255,0.12);
    letter-spacing: 0.01em;
  }

  .hs-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.10);
    color: #fff;
    padding: 14px 30px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.92rem;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.32);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    letter-spacing: 0.01em;
  }

  .hs-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: #9B1C2C;
  }
  .hs-stat {
    padding: 28px 24px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.15);
  }
  .hs-stat:last-child { border-right: none; }
  .hs-stat-value {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    color: #fff;
    line-height: 1;
    font-family: var(--font-heading, sans-serif);
  }
  .hs-stat-label {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.72);
    font-weight: 500;
    margin-top: 6px;
    letter-spacing: 0.02em;
  }

  /* ── TABLET ───────────────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .hs-content { padding: 0 2.5rem; }
  }

  /* ── MOBILE ───────────────────────────────────────────────────────── */
  @media (max-width: 768px) {
    .hs-section { height: auto; min-height: 100vh; padding: 100px 0 64px; align-items: flex-start; }
    .hs-content { padding: 0 1.5rem; max-width: 100%; }
    .hs-arrow { width: 38px; height: 38px; font-size: 1.3rem; }
    .hs-arrow-left { left: 12px; }
    .hs-arrow-right { right: 12px; }
    .hs-dots { bottom: 16px; }
    .hs-counter { bottom: 14px; right: 16px; font-size: 0.65rem; }
    .hs-title-line, .hs-title-accent { font-size: clamp(2rem, 8vw, 2.8rem); }
    .hs-subtitle { font-size: 0.92rem; max-width: 100%; }
    .hs-actions { gap: 10px; }
    .hs-btn-primary, .hs-btn-secondary { padding: 12px 22px; font-size: 0.85rem; flex: 1 1 auto; justify-content: center; }

    .hs-stats { grid-template-columns: repeat(2, 1fr); }
    .hs-stat { padding: 20px 14px; border-right: 1px solid rgba(255,255,255,0.15); border-bottom: 1px solid rgba(255,255,255,0.15); }
    .hs-stat:nth-child(2n) { border-right: none; }
    .hs-stat:nth-last-child(-n+2) { border-bottom: none; }
  }

  @media (max-width: 480px) {
    .hs-content { padding: 0 1.1rem; }
    .hs-badge { padding: 5px 14px; margin-bottom: 20px; }
    .hs-badge span:last-child { font-size: 0.62rem; }
    .hs-title-line, .hs-title-accent { font-size: clamp(1.8rem, 9vw, 2.3rem); }
    .hs-subtitle { font-size: 0.85rem; line-height: 1.65; margin-bottom: 24px; }
    .hs-actions { flex-direction: column; }
    .hs-btn-primary, .hs-btn-secondary { width: 100%; }
    .hs-arrow { display: none; }
  }
`;

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
      <style>{HERO_CSS}</style>

      {/* ── Hero ── */}
      <section className="hs-section">
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

        <button className="hs-arrow hs-arrow-left" aria-label="Previous" onClick={() => goTo((index - 1 + slides.length) % slides.length)}>‹</button>
        <button className="hs-arrow hs-arrow-right" aria-label="Next" onClick={() => goTo((index + 1) % slides.length)}>›</button>

        <div className="hs-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                height: 6,
                width: i === index ? 28 : 6,
                borderRadius: 999,
                background: i === index ? "#FF6B9D" : "rgba(255,255,255,0.38)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.35s ease, background 0.35s ease",
              }}
            />
          ))}
        </div>

        <div className="hs-counter">
          0{index + 1} / 0{slides.length}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="hs-content"
          >
            <div className="hs-badge">
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B9D", display: "inline-block", flexShrink: 0, boxShadow: "0 0 8px rgba(255,107,157,0.9)" }} />
              <span style={{ color: "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>{slide.badge}</span>
            </div>

            <h1 className="hs-title">
              <span className="hs-title-line">{slide.titleWhite}</span>
              <span className="hs-title-accent">{slide.titleAccent}</span>
            </h1>

            <p className="hs-subtitle">{slide.subtitle}</p>

            <div className="hs-actions">
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="/admissions" className="hs-btn-primary">
                Apply Now →
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="/community" className="hs-btn-secondary">
                Book a School Tour
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Stats bar — RED background ── */}
      <div className="hs-stats">
        {stats.map((s) => (
          <div key={s.label} className="hs-stat">
            <div className="hs-stat-value">{s.value}</div>
            <div className="hs-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;