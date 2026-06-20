import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buildingImg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import football from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";
import judo from "@/assets/SKYVIEW-IMAGES/judo.png";


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
  { value: "15+", label: "Years of Excellence", target: 15, suffix: "+" },
  { value: "500+", label: "Happy Students", target: 500, suffix: "+" },
  { value: "40+", label: "Expert Teachers", target: 40, suffix: "+" },
  { value: "95%", label: "Parent Satisfaction", target: 95, suffix: "%" },
];

const trustIndicators = [
  { icon: "🎓", value: "1200+", label: "Students" },
  { icon: "👩‍🏫", value: "85+", label: "Teachers" },
  { icon: "🏆", value: "10+", label: "Years Excellence" },
  { icon: "🛡️", value: "100%", label: "Safe Environment" },
];

const trustBadges = [
  "Montessori Approach",
  "British & Nigerian Curriculum",
  "Safe Learning Environment",
  "Qualified Teachers",
];


// ─── animated counter ───────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(target, inView);
  return (
    <div ref={ref} className="hs-stat">
      <div className="hs-stat-value">{count}{suffix}</div>
      <div className="hs-stat-label">{label}</div>
    </div>
  );
}

const HERO_CSS = `
  .hs-section {
    position: relative;
    height: 96vh;
    min-height: 620px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  @keyframes zoomHero {
    0% { transform: scale(1) translate(0, 0); }
    100% { transform: scale(1.12) translate(-1%, -1%); }
  }

  .hs-bg-layer {
    position: absolute;
    inset: 0;
    z-index: 1;
    will-change: transform;
  }
  .hs-bg-layer img {
    animation: zoomHero 16s ease-in-out infinite alternate;
    will-change: transform;
  }

  /* ── floating particles ── */
  .hs-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 6;
    filter: blur(0.4px);
  }
  @keyframes particleFloat {
    0%   { transform: translateY(0) translateX(0); opacity: 0.15; }
    50%  { transform: translateY(-26px) translateX(10px); opacity: 0.9; }
    100% { transform: translateY(0) translateX(0); opacity: 0.15; }
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

  /* ── content split: text ~40%, floating card occupies right space ── */
  .hs-layout {
    position: relative;
    z-index: 20;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 4rem;
  }

  .hs-content {
    max-width: 620px;
    flex: 0 1 58%;
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
    margin: 0 0 28px;
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
    margin-bottom: 30px;
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

  /* ── trust badges row ── */
  .hs-trust-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .hs-trust-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 999px;
    padding: 7px 14px;
    font-size: 0.74rem;
    font-weight: 600;
    color: rgba(255,255,255,0.88);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    white-space: nowrap;
  }
  .hs-trust-pill-check {
    color: #4A9EDB;
    font-weight: 900;
  }

  /* ── floating stats card (right side) ── */
  .hs-float-card {
    flex: 0 0 320px;
    background: rgba(15,18,26,0.55);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 20px;
    padding: 26px;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.35);
  }
  .hs-float-card-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #FF9EBE;
    margin-bottom: 16px;
  }
  .hs-float-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .hs-float-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 12px 10px;
  }
  .hs-float-icon { font-size: 1.3rem; line-height: 1; }
  .hs-float-value { font-size: 0.98rem; font-weight: 800; color: #fff; line-height: 1.1; }
  .hs-float-text { font-size: 0.66rem; color: rgba(255,255,255,0.65); font-weight: 500; }

  /* ── stats bar (animated counters) ── */
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
    .hs-layout { padding: 0 2.5rem; }
    .hs-float-card { display: none; }
    .hs-content { flex: 1 1 100%; max-width: 100%; }
    .hs-section { height: auto; min-height: 86vh; padding: 64px 0 48px; align-items: flex-start; }
  }

  /* ── MOBILE ───────────────────────────────────────────────────────── */
  @media (max-width: 768px) {
    .hs-section { min-height: 100vh; padding: 96px 0 56px; }
    .hs-layout { padding: 0 1.5rem; }
    .hs-arrow { width: 38px; height: 38px; font-size: 1.3rem; }
    .hs-arrow-left { left: 12px; }
    .hs-arrow-right { right: 12px; }
    .hs-dots { bottom: 16px; }
    .hs-counter { bottom: 14px; right: 16px; font-size: 0.65rem; }
    .hs-title-line, .hs-title-accent { font-size: clamp(2rem, 8vw, 2.8rem); }
    .hs-subtitle { font-size: 0.92rem; max-width: 100%; }
    .hs-actions { gap: 10px; }
    .hs-btn-primary, .hs-btn-secondary { padding: 12px 22px; font-size: 0.85rem; flex: 1 1 auto; justify-content: center; }
    .hs-trust-row { gap: 8px; }
    .hs-trust-pill { font-size: 0.68rem; padding: 6px 11px; }

    .hs-stats { grid-template-columns: repeat(2, 1fr); }
    .hs-stat { padding: 20px 14px; border-right: 1px solid rgba(255,255,255,0.15); border-bottom: 1px solid rgba(255,255,255,0.15); }
    .hs-stat:nth-child(2n) { border-right: none; }
    .hs-stat:nth-last-child(-n+2) { border-bottom: none; }

    /* thin out particles so they don't clutter a small screen */
    .hs-particle:nth-child(n+9) { display: none; }
  }

  @media (max-width: 480px) {
    .hs-layout { padding: 0 1.1rem; }
    .hs-badge { padding: 5px 14px; margin-bottom: 18px; }
    .hs-badge span:last-child { font-size: 0.6rem; white-space: nowrap; }
    .hs-title-line, .hs-title-accent { font-size: clamp(1.7rem, 9vw, 2.2rem); }
    .hs-subtitle { font-size: 0.85rem; line-height: 1.6; margin-bottom: 22px; }
    .hs-actions { flex-direction: column; margin-bottom: 22px; }
    .hs-btn-primary, .hs-btn-secondary { width: 100%; }
    .hs-arrow { display: none; }
    .hs-trust-row { gap: 7px; }
    .hs-trust-pill { font-size: 0.64rem; padding: 5px 10px; gap: 5px; }
    .hs-stat-value { font-size: 1.5rem; }
    .hs-stat-label { font-size: 0.7rem; }

    /* keep only a handful of particles on very small screens */
    .hs-particle:nth-child(n+6) { display: none; }
  }

  @media (max-width: 360px) {
    .hs-title-line, .hs-title-accent { font-size: 1.6rem; }
    .hs-trust-pill { font-size: 0.6rem; padding: 5px 9px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hs-bg-layer img { animation: none; }
    .hs-particle { animation: none; }
  }
`;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [busy, setBusy] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
      <section
        ref={sectionRef}
        className="hs-section"
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="hs-bg-layer"
            style={{
              opacity: i === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={s.image}
              alt={s.titleWhite}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              style={{ filter: "brightness(1.02) contrast(1.02) saturate(0.96)" }}
            />
          </div>
        ))}



        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(115deg, rgba(15,22,45,0.82) 0%, rgba(58,16,28,0.62) 38%, rgba(58,16,28,0.22) 62%, rgba(58,16,28,0.04) 82%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "linear-gradient(to top, rgba(10,14,28,0.45) 0%, rgba(10,14,28,0.06) 22%, transparent 42%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "radial-gradient(ellipse at 8% 55%, rgba(155,28,44,0.20) 0%, transparent 45%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "radial-gradient(ellipse at 92% 30%, rgba(74,158,219,0.14) 0%, transparent 45%)", pointerEvents: "none" }} />
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

        <div className="hs-layout">
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

              {/* trust badges */}
              <div className="hs-trust-row">
                {trustBadges.map((b) => (
                  <span key={b} className="hs-trust-pill">
                    <span className="hs-trust-pill-check">✓</span>{b}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* floating stats card — fills the unused right-hand space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hs-float-card"
          >
            <div className="hs-float-card-label">Trusted by Families</div>
            <div className="hs-float-grid">
              {trustIndicators.map((t) => (
                <div key={t.label} className="hs-float-item">
                  <span className="hs-float-icon">{t.icon}</span>
                  <div>
                    <div className="hs-float-value">{t.value}</div>
                    <div className="hs-float-text">{t.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar — RED background, animated counters ── */}
      <div className="hs-stats">
        {stats.map((s) => (
          <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;