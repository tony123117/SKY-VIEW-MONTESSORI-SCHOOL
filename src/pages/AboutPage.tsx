import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import director from "@/assets/SKYVIEW-IMAGES/director.png";
import buildingImg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import musicImg from "@/assets/SKYVIEW-IMAGES/music.png";
import curiculum from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";
import img1 from "@/assets/SKYVIEW-IMAGES/director.png";
import img2 from "@/assets/SKYVIEW-IMAGES/computer.png";
import img3 from "@/assets/SKYVIEW-IMAGES/playground.png";
import img4 from "@/assets/SKYVIEW-IMAGES/craft.jpeg";

const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

const heroSlides = [
  {
    image: buildingImg,
    badge: "Our School",
    titleWhite: "Unlocking",
    titleAccent: "Greatness.",
    subtitle: "Educational excellence since July 4th, 2015 — Montessori · Nursery · Primary · Secondary.",
  },
  {
    image: musicImg,
    badge: "Our Students",
    titleWhite: "Where Curiosity",
    titleAccent: "Becomes Confidence.",
    subtitle: "Creative thinkers, entrepreneurs, researchers, and solution providers — built right here.",
  },
  {
    image: curiculum,
    badge: "Our Approach",
    titleWhite: "Preparing Great",
    titleAccent: "Achievers For Tomorrow.",
    subtitle: "Hands-on, interactive, and enjoyable learning that fosters a lifelong love for education.",
  },
];

const trustStats = [
  { value: 1200, suffix: "+", label: "Students" },
  { value: 85, suffix: "+", label: "Teachers" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "Safe Campus" },
];

const stats = [
  { num: "10+", label: "Years of Excellence", color: WINE_RED },
  { num: "500+", label: "Alumni", color: PINK },
  { num: "30+", label: "Qualified Staff", color: SKY_BLUE },
];

const commitments = [
  { icon: "🎻", title: "Musical Instrument Lessons", desc: "Nurturing creativity through music from an early age." },
  { icon: "🎤", title: "Leadership & Public Speaking", desc: "Training that builds confidence in every Great Achiever." },
  { icon: "🏃", title: "Sporting Facilities", desc: "Excellent facilities supporting physical development." },
  { icon: "🥅", title: "Standard Playing Field", desc: "A dedicated space for recreational activities." },
  { icon: "🏊", title: "Swimming Lessons", desc: "Promoting a well-rounded education in and out of the classroom." },
  { icon: "🍳", title: "Catering Practicals", desc: "A hands-on space to explore culinary talents." },
  { icon: "🎨", title: "Creative Arts Tutoring", desc: "Fostering artistic expression in every child." },
  { icon: "📚", title: "Library & ICT Lab", desc: "Standard resources for research and technology skills." },
];

const coreValues = ["Respect", "Integrity", "Self-confidence", "Discipline", "Excellence", "Determination", "Perseverance"];

function ColorStrip() {
  return (
    <div style={{ display: "flex", height: 5, width: "100%" }}>
      <div style={{ flex: 1, background: WINE_RED }} />
      <div style={{ flex: 1, background: SKY_BLUE }} />
      <div style={{ flex: 1, background: PINK }} />
      <div style={{ flex: 1, background: NAVY }} />
    </div>
  );
}

// ── Count-up number, triggers once when scrolled into view ─────────────────
function CountUp({ value, suffix = "", duration = 1.6 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [busy, setBusy] = useState(false);

  function goTo(next: number) {
    if (busy) return;
    setBusy(true);
    setIndex(next);
    setTimeout(() => setBusy(false), 750);
  }

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[index];

  return (
    <section style={{ position: "relative", minHeight: "88vh", overflow: "hidden" }}>
      {heroSlides.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.1s ease-in-out",
          }}
        >
          <motion.img
            src={s.image}
            alt={s.titleAccent}
            initial={{ scale: 1 }}
            animate={{ scale: i === index ? 1.08 : 1 }}
            transition={{ duration: 7, ease: "linear" }}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              filter: "brightness(1.08) contrast(1.05) saturate(1.1)",
            }}
          />
        </motion.div>
      ))}

      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(90deg, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.35) 55%, rgba(10,15,30,0.1) 100%)",
      }} />

      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        background: "linear-gradient(to top, rgba(10,15,30,0.55) 0%, rgba(10,15,30,0.05) 26%, transparent 48%)",
      }} />

      <div style={{
        position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
        background: "radial-gradient(ellipse at 10% 55%, rgba(155,28,44,0.14) 0%, transparent 44%)",
      }} />

      <div style={{
        position: "absolute", left: 0, top: "18%", bottom: "18%",
        width: 3, zIndex: 20, borderRadius: 2,
        background: "linear-gradient(to bottom, transparent, #FF6B9D 30%, #9B1C2C 70%, transparent)",
      }} />

      {[
        { side: "left" as const, icon: "‹", fn: () => goTo((index - 1 + heroSlides.length) % heroSlides.length) },
        { side: "right" as const, icon: "›", fn: () => goTo((index + 1) % heroSlides.length) },
      ].map(({ side, icon, fn }) => (
        <button
          key={side}
          onClick={fn}
          style={{
            position: "absolute", [side]: 20, top: "44%",
            transform: "translateY(-50%)", zIndex: 30,
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.22)",
            color: "#fff", fontSize: "1.5rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)", lineHeight: 1,
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(155,28,44,0.55)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.10)";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
          }}
        >
          {icon}
        </button>
      ))}

      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 30, display: "flex", gap: 8 }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              height: 6, width: i === index ? 28 : 6,
              borderRadius: 999, border: "none", cursor: "pointer", padding: 0,
              background: i === index ? PINK : "rgba(255,255,255,0.35)",
              transition: "width 0.35s ease, background 0.35s ease",
            }}
          />
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 22, right: 28, zIndex: 30, color: "rgba(255,255,255,0.32)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em" }}>
        0{index + 1} / 0{heroSlides.length}
      </div>

      <div style={{ position: "relative", zIndex: 20, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "88vh", padding: "120px clamp(1.5rem, 6vw, 5rem) 60px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 800 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(155,28,44,0.22)",
                border: "1px solid rgba(255,107,157,0.45)",
                borderRadius: 999, padding: "7px 20px", marginBottom: 28,
                backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: PINK, display: "inline-block", flexShrink: 0, boxShadow: `0 0 8px ${PINK}cc` }} />
              <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {slide.badge}
              </span>
            </motion.div>

            <h1 style={{ margin: "0 0 24px", lineHeight: 1.02, fontWeight: 900, letterSpacing: "-0.03em", fontFamily: "var(--font-heading, sans-serif)" }}>
              <span style={{ display: "block", color: "#fff", fontSize: "clamp(3rem, 8vw, 6.2rem)", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
                {slide.titleWhite}
              </span>
              <span style={{
                display: "block", fontSize: "clamp(3rem, 8vw, 6.2rem)",
                background: "linear-gradient(110deg, #FF6B9D 0%, #D4436A 50%, #9B1C2C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {slide.titleAccent}
              </span>
            </h1>

            <p style={{ margin: "0 0 40px", color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 1.6vw, 1.2rem)", lineHeight: 1.7, maxWidth: 600, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              {slide.subtitle}
            </p>

            <Link
              to="/admissions"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #9B1C2C 0%, #C5305A 55%, #FF6B9D 100%)",
                color: "#fff", padding: "15px 32px", borderRadius: 999,
                fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
                boxShadow: "0 8px 28px rgba(155,28,44,0.45)",
              }}
            >
              Apply Now →
            </Link>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            marginTop: 56,
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(20px, 4vw, 48px)",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 20,
            padding: "22px clamp(20px, 3vw, 36px)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            maxWidth: "fit-content",
          }}
        >
          {trustStats.map((s) => (
            <div key={s.label} style={{ minWidth: 90 }}>
              <div style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", fontWeight: 900, color: "#fff", lineHeight: 1, fontFamily: "var(--font-heading)" }}>
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)", fontWeight: 600, marginTop: 4, letterSpacing: "0.03em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", fontFamily: "var(--font-body)" }}>
        <ColorStrip />

        <HeroCarousel />

        <ColorStrip />

        <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden", background: "#fff" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: 384, height: 384, borderRadius: "50%", filter: "blur(80px)", background: `${PINK}10`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 320, height: 320, borderRadius: "50%", filter: "blur(80px)", background: `${SKY_BLUE}10`, pointerEvents: "none" }} />

          <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", position: "relative", zIndex: 10 }}>
            <AnimatedSection>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "6px 16px", borderRadius: 999, marginBottom: 20, background: `${WINE_RED}10`, color: WINE_RED, border: `1px solid ${WINE_RED}25` }}>
                📖 Our Story
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: NAVY, lineHeight: 1.1, marginBottom: 20, fontFamily: "var(--font-heading)" }}>
                Educational Excellence{" "}
                <em style={{ color: WINE_RED, fontStyle: "italic" }}>Since 2015</em>
              </h2>
              <p style={{ fontSize: "0.94rem", lineHeight: 1.8, color: `${NAVY}aa`, marginBottom: 14 }}>
                Skyview Montessori School began its journey of educational excellence on July 4th, 2015. At Skyview, we are committed to providing a Montessori-style education that sets the standard for excellence.
              </p>
              <p style={{ fontSize: "0.94rem", lineHeight: 1.8, color: `${NAVY}aa`, marginBottom: 14 }}>
                Our curriculum draws from both British and Nigerian topics to offer a well-rounded education built on active, hands-on, and enjoyable learning that fosters a love for knowledge.
              </p>
              <p style={{ fontSize: "0.94rem", lineHeight: 1.8, color: `${NAVY}aa`, marginBottom: 36 }}>
                We call our students <strong>"Great Achievers"</strong> — shaping them into Creative Thinkers, Entrepreneurs, Researchers, and Solution Providers ready to turn their passion into purpose.
              </p>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" as const }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2.2rem", fontWeight: 900, color: s.color, lineHeight: 1, fontFamily: "var(--font-heading)" }}>{s.num}</div>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: `${NAVY}70`, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[img1, img2, img3, img4].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden", borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", border: "2px solid #fff", height: 170 }}
                  >
                    <img src={img} alt="school life" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }} />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ColorStrip />

        <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden", background: "#FAF8F5" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: `radial-gradient(circle, ${PINK}22 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
          <AnimatedSection style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 10 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "6px 16px", borderRadius: 999, marginBottom: 20, background: `${SKY_BLUE}15`, color: SKY_BLUE, border: `1px solid ${SKY_BLUE}30` }}>
              ⭐ Our Commitment
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: NAVY, lineHeight: 1.1, fontFamily: "var(--font-heading)" }}>
              World-Class Learning,{" "}
              <em style={{ color: PINK, fontStyle: "italic" }}>Every Day</em>
            </h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 10 }}>
            {commitments.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{ background: "#fff", border: `2px solid ${WINE_RED}15`, borderRadius: 20, padding: "24px", height: "100%", transition: "box-shadow 0.3s" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 14, background: `${WINE_RED}10`, fontSize: "1.5rem", marginBottom: 16 }}>{item.icon}</span>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: NAVY, marginBottom: 8, fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: `${NAVY}90` }}>{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <ColorStrip />

        <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden", background: `${SKY_BLUE}0c` }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "6px 16px", borderRadius: 999, marginBottom: 20, background: `${WINE_RED}10`, color: WINE_RED, border: `1px solid ${WINE_RED}25` }}>
              👑 Leadership
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: NAVY, lineHeight: 1.1, fontFamily: "var(--font-heading)" }}>
              About Our{" "}<em style={{ color: WINE_RED, fontStyle: "italic" }}>School Director</em>
            </h2>
          </AnimatedSection>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", display: "grid", gridTemplateColumns: "280px 1fr" }}
            >
              <div style={{ position: "relative", minHeight: 280, overflow: "hidden" }}>
                <img src={director} alt="Director" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY}99 0%, transparent 45%)` }} />
                <span style={{ position: "absolute", bottom: 16, left: 16, color: "#fff", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "5px 12px", borderRadius: 999, background: WINE_RED }}>
                  Director & Founder
                </span>
              </div>
              <div style={{ padding: "40px 40px" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 900, color: NAVY, marginBottom: 4, fontFamily: "var(--font-heading)" }}>Mrs Amaka Phillip</h3>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: SKY_BLUE, marginBottom: 20 }}>17+ Years in Education</p>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: `${NAVY}aa`, marginBottom: 12 }}>
                  An independent, diligent, and resourceful achiever with more than 17 years' experience in education. She manages Skyview effortlessly with creative and innovative leadership.
                </p>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: `${NAVY}aa`, marginBottom: 20 }}>
                  A progressive-minded educationist who believes no child is a dullard — every child unwraps their God-given potential at their own pace. B.A. English (UNN) · M.Ed English (UNIJOS).
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                  {["B.A. English (UNN)", "M.Ed (UNIJOS)", "17+ Yrs Experience"].map((c) => (
                    <span key={c} style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, padding: "5px 12px", borderRadius: 999, background: `${SKY_BLUE}12`, color: SKY_BLUE }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ColorStrip />

        <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden", background: NAVY }}>
          <div style={{ position: "absolute", top: 40, left: "25%", width: 320, height: 320, borderRadius: "50%", filter: "blur(80px)", background: `${SKY_BLUE}20`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 40, right: "25%", width: 256, height: 256, borderRadius: "50%", filter: "blur(80px)", background: `${WINE_RED}20`, pointerEvents: "none" }} />
          <AnimatedSection style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "6px 18px", borderRadius: 999, marginBottom: 20, color: "#fff", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              ⭐ Vision, Mission & Values
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, fontFamily: "var(--font-heading)" }}>
              What We <em style={{ color: PINK, fontStyle: "italic" }}>Stand For</em>
            </h2>
          </AnimatedSection>
          <div style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 800, margin: "0 auto 40px" }}>
            {[
              { icon: "🔭", title: "Our Vision", text: "To harness the potentials of each child towards holistic formation.", accent: SKY_BLUE },
              { icon: "🎯", title: "Our Mission", text: "To promote sound moral and quality education built on Godly principles.", accent: PINK },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div style={{ borderRadius: 20, padding: 32, height: "100%", background: "rgba(255,255,255,0.06)", border: `2px solid ${item.accent}40` }}>
                  <span style={{ fontSize: "2rem", marginBottom: 16, display: "block" }}>{item.icon}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: 12, fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.70)" }}>{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.15} style={{ position: "relative", zIndex: 10 }}>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.50)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: 20 }}>
              Our Core Values
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: 12, maxWidth: 700, margin: "0 auto" }}>
              {coreValues.map((v) => (
                <span key={v} style={{ fontSize: "0.875rem", fontWeight: 600, padding: "9px 20px", borderRadius: 999, color: "#fff", background: "rgba(255,255,255,0.08)", border: `1px solid ${PINK}40` }}>
                  {v}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <ColorStrip />

        <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden", background: "#fff" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 10 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "6px 16px", borderRadius: 999, marginBottom: 20, background: `${WINE_RED}10`, color: WINE_RED, border: `1px solid ${WINE_RED}25` }}>
              📍 Visit & Reach Us
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: NAVY, lineHeight: 1.1, fontFamily: "var(--font-heading)" }}>
              Get In <em style={{ color: SKY_BLUE, fontStyle: "italic" }}>Touch</em>
            </h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 10 }}>
            {[
              { icon: "📍", title: "Our Address", color: WINE_RED, content: <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: `${NAVY}90`, margin: 0 }}>Plot 125/127 Eke Layout, Off Orji Udenta Street,<br />Near Timber Market, Nike Lake Road, Enugu.</p> },
              { icon: "✉️", title: "Email Us", color: SKY_BLUE, content: <a href="mailto:skyviewmontessorischoolenugu@gmail.com" style={{ fontSize: "0.84rem", fontWeight: 600, color: SKY_BLUE, wordBreak: "break-all" as const, textDecoration: "none" }}>skyviewmontessorischoolenugu@gmail.com</a> },
              { icon: "📞", title: "Call Us", color: PINK, content: <p style={{ margin: 0 }}><a href="tel:+2348033555262" style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: WINE_RED, textDecoration: "none" }}>+234 803 355 5262</a><a href="tel:+2348140841601" style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: WINE_RED, textDecoration: "none", marginTop: 4 }}>+234 814 084 1601</a></p> },
            ].map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div style={{ borderRadius: 20, padding: 28, height: "100%", background: `${card.color}08`, border: `2px solid ${card.color}25` }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 14, background: `${card.color}12`, fontSize: "1.5rem", marginBottom: 16 }}>{card.icon}</span>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: NAVY, marginBottom: 10, fontFamily: "var(--font-heading)" }}>{card.title}</h3>
                  {card.content}
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40, position: "relative", zIndex: 10 }}>
            <Link
              to="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#fff", fontSize: "0.84rem", fontWeight: 700, letterSpacing: "0.06em", padding: "12px 28px", borderRadius: 999, background: NAVY, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = WINE_RED; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = NAVY; }}
            >
              Contact Admissions →
            </Link>
          </div>
        </section>

        <ColorStrip />
      </div>
      <Footer />
    </>
  );
}