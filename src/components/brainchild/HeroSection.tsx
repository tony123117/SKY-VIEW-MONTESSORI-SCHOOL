import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── image imports ───────────────────────────────────────────────────────────
import buildingImg  from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import footballImg  from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";
import judoImg      from "@/assets/SKYVIEW-IMAGES/judo.png";
import computerImg  from "@/assets/SKYVIEW-IMAGES/computer.png";
import playgroundImg from "@/assets/SKYVIEW-IMAGES/playground.png";
import craftImg     from "@/assets/SKYVIEW-IMAGES/craft.jpeg";
import musicImg     from "@/assets/SKYVIEW-IMAGES/music.png";

// ─── palette ─────────────────────────────────────────────────────────────────
const R = "#9B1C2C";   // wine red
const B = "#4A9EDB";   // sky blue
const P = "#FF6B9D";   // pink

// ─── animated count-up ───────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, ms = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / ms, 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, ms]);
  return v;
}

function Counter({ n, suffix, label, icon, accent }: { n: number; suffix: string; label: string; icon: string; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const v = useCountUp(n, on);
  return (
    <div ref={ref} className="hs2-stat-inner">
      <div className="hs2-stat-icon" style={{ background: `${accent}14`, color: accent }}>
        <span>{icon}</span>
      </div>
      <div>
        <div className="hs2-stat-value" style={{ color: accent }}>
          {v}{suffix}
        </div>
        <div className="hs2-stat-label">{label}</div>
      </div>
    </div>
  );
}

// ─── floating image card ──────────────────────────────────────────────────────
function FloatCard({ src, alt, style, delay = 0 }: { src: string; alt: string; style: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.05)",
        border: "3px solid #fff",
        ...style,
      }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ width: "100%", height: "100%" }}
      >
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </motion.div>
    </motion.div>
  );
}

// ─── CSS ─────────────────────────────────────────────────────────────────────
const CSS = `
  .hs2-root {
    background: #fff;
    font-family: var(--font-body,'Montserrat',sans-serif);
    overflow: hidden;
  }

  /* ── hero ── */
  .hs2-hero {
    position: relative;
    min-height: 94vh;
    display: flex;
    align-items: center;
    padding: 96px 0 72px;
    overflow: hidden;
    background: linear-gradient(180deg, #EAF5FF 0%, #F3FAFF 45%, #FFFFFF 100%);
  }

  /* soft cloud shapes — sky-themed, matches "Sky View" branding */
  .hs2-cloud {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    background: #fff;
    border-radius: 100px;
    filter: blur(1px);
    opacity: 0.85;
  }
  .hs2-cloud::before, .hs2-cloud::after {
    content: '';
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }
  .hs2-cloud-1 {
    width: 200px; height: 70px;
    top: 8%; left: 4%;
    opacity: 0.7;
  }
  .hs2-cloud-1::before { width: 90px; height: 90px; top: -45px; left: 20px; }
  .hs2-cloud-1::after { width: 70px; height: 70px; top: -32px; left: 100px; }
  .hs2-cloud-2 {
    width: 260px; height: 86px;
    top: 16%; right: -40px;
    opacity: 0.55;
  }
  .hs2-cloud-2::before { width: 110px; height: 110px; top: -55px; left: 30px; }
  .hs2-cloud-2::after { width: 80px; height: 80px; top: -40px; left: 140px; }
  .hs2-cloud-3 {
    width: 170px; height: 58px;
    bottom: 6%; left: 30%;
    opacity: 0.5;
  }
  .hs2-cloud-3::before { width: 76px; height: 76px; top: -38px; left: 16px; }
  .hs2-cloud-3::after { width: 56px; height: 56px; top: -26px; left: 84px; }

  /* decorative blobs */
  .hs2-blob-pink {
    position: absolute;
    width: 580px; height: 580px;
    top: -140px; left: -120px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,157,0.10) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
  .hs2-blob-blue {
    position: absolute;
    width: 560px; height: 560px;
    bottom: -140px; right: -100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74,158,219,0.20) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
  .hs2-blob-soft {
    position: absolute;
    width: 380px; height: 380px;
    top: 40%; left: 38%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74,158,219,0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* subtle background graphics — dot grid + faint Montessori-ish shapes, 3-5% opacity */
  .hs2-dotgrid {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.06;
    background-image: radial-gradient(circle, ${B} 1.4px, transparent 1.4px);
    background-size: 28px 28px;
  }
  .hs2-shape {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    opacity: 0.045;
  }
  .hs2-shape-circle {
    width: 220px; height: 220px;
    border: 10px solid ${B};
    border-radius: 50%;
    top: 10%;
    right: 6%;
  }
  .hs2-shape-triangle {
    width: 0; height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 120px solid ${P};
    bottom: 8%;
    left: 4%;
    transform: rotate(8deg);
  }
  .hs2-shape-square {
    width: 140px; height: 140px;
    border: 10px solid ${R};
    border-radius: 18px;
    bottom: 14%;
    right: 14%;
    transform: rotate(-12deg);
  }

  /* ── grid ── */
  .hs2-grid {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 0.92fr 1.08fr;
    align-items: center;
    gap: 56px;
  }

  /* ── left ── */
  .hs2-left { display: flex; flex-direction: column; gap: 0; }

  .hs2-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(155,28,44,0.08), rgba(255,107,157,0.10));
    border: 1px solid rgba(155,28,44,0.22);
    border-radius: 999px;
    padding: 7px 18px;
    font-size: 0.72rem;
    font-weight: 700;
    color: ${R};
    letter-spacing: 0.10em;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 28px;
  }
  .hs2-pill-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: ${P};
    box-shadow: 0 0 0 3px rgba(255,107,157,0.22);
    animation: hs2pulse 2s infinite;
    flex-shrink: 0;
  }
  @keyframes hs2pulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(255,107,157,0.22); }
    50%      { box-shadow: 0 0 0 7px rgba(255,107,157,0.0); }
  }

  .hs2-headline {
    margin: 0 0 22px;
    font-family: var(--font-heading,'Fredoka One',sans-serif);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #111827;
    font-size: clamp(2.4rem, 4.5vw, 3.8rem);
  }
  .hs2-headline em {
    font-style: normal;
    background: linear-gradient(110deg, ${P} 0%, #D4436A 50%, ${R} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hs2-sub {
    margin: 0 0 36px;
    color: #4B5563;
    font-size: 1rem;
    line-height: 1.82;
    max-width: 500px;
    font-weight: 400;
  }

  .hs2-btns {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }

  .hs2-btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, ${R} 0%, #C5305A 55%, ${P} 100%);
    color: #fff;
    padding: 15px 32px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.94rem;
    text-decoration: none;
    box-shadow: 0 8px 28px rgba(155,28,44,0.38), inset 0 1px 0 rgba(255,255,255,0.14);
    letter-spacing: 0.01em;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .hs2-btn-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 36px rgba(155,28,44,0.50), inset 0 1px 0 rgba(255,255,255,0.14);
  }

  .hs2-btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff;
    color: #1F2937;
    padding: 15px 28px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.94rem;
    text-decoration: none;
    border: 1.5px solid #E5E7EB;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    letter-spacing: 0.01em;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .hs2-btn-secondary:hover {
    border-color: ${B};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74,158,219,0.15);
  }

  .hs2-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 22px;
  }
  .hs2-trust-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 999px;
    padding: 6px 14px;
    font-size: 0.76rem;
    font-weight: 600;
    color: #374151;
    white-space: nowrap;
  }
  .hs2-trust-check { color: ${B}; font-weight: 900; font-size: 0.8rem; }

  /* ── recognised-by logo strip ── */
  .hs2-logos-label {
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #9CA3AF;
    margin-bottom: 10px;
  }
  .hs2-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
  }
  .hs2-logo-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #374151;
  }
  .hs2-logo-check { color: ${R}; font-weight: 900; }

  /* ── right: image composition ── */
  .hs2-right {
    position: relative;
    height: 680px;
  }

  /* ── stats bar — premium white strip, icon chips, brand-color accents ── */
  .hs2-stats-wrap {
    position: relative;
    background: ${R};
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .hs2-stats-accent-line {
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, ${P} 0%, #fff 50%, ${B} 100%);
    opacity: 0.9;
  }
  .hs2-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1400px;
    margin: 0 auto;
  }
  .hs2-stat-divider {
    padding: 36px 28px;
    border-right: 1px solid rgba(255,255,255,0.14);
  }
  .hs2-stat-divider:last-child { border-right: none; }

  .hs2-stat-inner {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .hs2-stat-icon {
    flex-shrink: 0;
    width: 48px; height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    background: rgba(255,255,255,0.14) !important;
  }
  .hs2-stat-value {
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    font-weight: 900;
    line-height: 1;
    font-family: var(--font-heading,'Fredoka One',sans-serif);
    letter-spacing: -0.02em;
    color: #fff !important;
  }
  .hs2-stat-label {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.72);
    font-weight: 600;
    margin-top: 4px;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  /* ── tablet ── */
  @media (max-width: 1024px) {
    .hs2-grid { grid-template-columns: 1fr; padding: 0 32px; gap: 48px; }
    .hs2-hero { min-height: auto; padding: 80px 0 56px; }
    .hs2-right { height: 520px; }
    .hs2-sub { max-width: 100%; }
    .hs2-stats { grid-template-columns: repeat(2,1fr); }
    .hs2-stat-divider:nth-child(2n) { border-right: none; }
    .hs2-stat-divider:nth-child(1),.hs2-stat-divider:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.14); }
    .hs2-stat-divider { padding: 28px 22px; }
  }

  /* ── mobile ── */
  @media (max-width: 640px) {
    .hs2-grid { padding: 0 20px; gap: 36px; }
    .hs2-hero { padding: 72px 0 40px; }
    .hs2-right { height: 400px; }
    .hs2-btns { flex-direction: column; }
    .hs2-btn-primary, .hs2-btn-secondary { width: 100%; justify-content: center; }
    .hs2-stats { grid-template-columns: repeat(2,1fr); }
    .hs2-stat-divider { padding: 20px 16px; }
    .hs2-stat-icon { width: 38px; height: 38px; border-radius: 11px; font-size: 1.1rem; }
    .hs2-stat-label { white-space: normal; }
  }

  @media (max-width: 420px) {
    .hs2-stat-inner { gap: 10px; }
    .hs2-stat-divider { padding: 18px 12px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hs2-pill-dot { animation: none; }
  }
`;

// ─── trust badge data ─────────────────────────────────────────────────────────
const trust = [
  "Established 2015",
  "Montessori Education",
  "British & Nigerian Curriculum",
  "Safe Learning Environment",
];

const recognisedBy = ["Montessori Curriculum", "Cambridge", "WAEC", "British Curriculum", "STEM Education"];

const counters = [
  { n: 1200, suffix: "+", label: "Students Enrolled", icon: "🎓", accent: R },
  { n: 85,   suffix: "+", label: "Qualified Teachers", icon: "👩‍🏫", accent: B },
  { n: 10,   suffix: "+", label: "Years of Excellence", icon: "🏆", accent: P },
  { n: 100,  suffix: "%", label: "Child-Focused Learning", icon: "🛡️", accent: R },
];

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <div className="hs2-root">
      <style>{CSS}</style>

      {/* ── HERO ── */}
      <section className="hs2-hero">
        {/* decorative blobs */}
        <div className="hs2-blob-pink" />
        <div className="hs2-blob-blue" />
        <div className="hs2-blob-soft" />

        {/* sky clouds */}
        <div className="hs2-cloud hs2-cloud-1" />
        <div className="hs2-cloud hs2-cloud-2" />
        <div className="hs2-cloud hs2-cloud-3" />

        {/* subtle background graphics */}
        <div className="hs2-dotgrid" />
        <div className="hs2-shape hs2-shape-circle" />
        <div className="hs2-shape hs2-shape-triangle" />
        <div className="hs2-shape hs2-shape-square" />

        <div className="hs2-grid">

          {/* ── LEFT ── */}
          <motion.div
            className="hs2-left"
            initial={reduced ? false : { opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Admission pill */}
            <div className="hs2-pill">
              <span className="hs2-pill-dot" />
              Admissions Open — 2026/2027 Session
            </div>

            {/* Headline */}
            <h1 className="hs2-headline">
              Raising{" "}
              <em>Confident</em>{" "}
              Learners,<br />
              <em>Future</em>{" "}
              Leaders.
            </h1>

            {/* Sub */}
            <p className="hs2-sub">
              At Skyview Montessori School, children learn through curiosity, creativity, leadership, and excellence in a safe environment thoughtfully designed for lifelong success.
            </p>

            {/* CTAs */}
            <div className="hs2-btns">
              <motion.a
                href="/admissions"
                className="hs2-btn-primary"
                whileHover={reduced ? {} : { scale: 1.03 }}
                whileTap={reduced ? {} : { scale: 0.97 }}
              >
                Enroll My Child →
              </motion.a>
              <motion.a
                href="/community"
                className="hs2-btn-secondary"
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.97 }}
              >
                Book a School Tour
              </motion.a>
            </div>

            {/* Trust pills */}
            <div className="hs2-trust">
              {trust.map((t) => (
                <span key={t} className="hs2-trust-pill">
                  <span className="hs2-trust-check">✓</span>{t}
                </span>
              ))}
            </div>

            {/* Recognised-by logo strip — social proof */}
            <div>
              <div className="hs2-logos-label">Aligned With</div>
              <div className="hs2-logos">
                {recognisedBy.map((name) => (
                  <span key={name} className="hs2-logo-item">
                    <span className="hs2-logo-check">✔</span>{name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: floating image composition ── */}
          <motion.div
            className="hs2-right"
            initial={reduced ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* DOMINANT card — the emotional focal point, ~30% larger than the rest */}
            <FloatCard
              src= {playgroundImg}
              alt="Student smiling, building confidence through judo"
              delay={0}
              style={{ top: 0, left: 0, width: "68%", height: "66%", zIndex: 5 }}
            />

            {/* Medium card — top right */}
            <FloatCard
              src={computerImg}
              alt="Students using computers"
              delay={0.1}
              style={{ top: 0, right: 0, width: "30%", height: "32%", zIndex: 4 }}
            />

            {/* Small card — bottom left */}
            <FloatCard
              src={craftImg}
              alt="Creative arts and crafts"
              delay={0.2}
              style={{ bottom: 0, left: "2%", width: "28%", height: "32%", zIndex: 4 }}
            />

            {/* Medium card — bottom right */}
            <FloatCard
              src={footballImg}
              alt="Students playing football"
              delay={0.15}
              style={{ bottom: 0, right: 0, width: "44%", height: "40%", zIndex: 3 }}
            />

            {/* Tiny accent card — center overlap, kept small so it doesn't compete with the focal image */}
            <FloatCard
              src={musicImg}
              alt="Music lesson"
              delay={0.25}
              style={{ top: "33%", right: "-3%", width: "34%", height: "25%", zIndex: 6 }}
            />

            {/* Extra accent card — school building, tucked behind the focal image's corner */}
            <FloatCard
              src={buildingImg}
              alt="Skyview Montessori School building"
              delay={0.3}
              style={{ top: "2%", left: "70%", width: "26%", height: "16%", zIndex: 7 }}
            />

            {/* Extra accent card — playground, peeking out bottom-center */}
            <FloatCard
              src={judoImg}
              alt="Children playing judo"
              delay={0.35}
              style={{ bottom: "2%", left: "32%", width: "22%", height: "28%", zIndex: 7 }}
            />

            {/* Glass accent chip — top right, premium copy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: "absolute",
                top: 20,
                right: -12,
                zIndex: 10,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: 16,
                padding: "12px 18px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                minWidth: 190,
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>🏆</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#111827", lineHeight: 1.1 }}>10+ Years</div>
                <div style={{ fontSize: "0.68rem", color: "#6B7280", fontWeight: 500 }}>of Academic Excellence</div>
              </div>
            </motion.div>

            {/* Glass chip — bottom left, premium copy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: 44,
                left: -16,
                zIndex: 10,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: 16,
                padding: "12px 18px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                minWidth: 170,
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>👩‍🎓</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#111827", lineHeight: 1.1 }}>1,200+</div>
                <div style={{ fontSize: "0.68rem", color: "#6B7280", fontWeight: 500 }}>Students Empowered</div>
              </div>
            </motion.div>

            {/* Background decorative ring */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%", height: "90%",
              borderRadius: "50%",
              border: "1px dashed rgba(155,28,44,0.12)",
              zIndex: 1,
              pointerEvents: "none",
            }} />
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="hs2-stats-wrap">
        <div className="hs2-stats-accent-line" />
        <div className="hs2-stats">
          {counters.map((c) => (
            <div key={c.label} className="hs2-stat-divider">
              <Counter n={c.n} suffix={c.suffix} label={c.label} icon={c.icon} accent={c.accent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;