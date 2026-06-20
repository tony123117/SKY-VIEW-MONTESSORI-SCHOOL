import { Link } from "react-router-dom";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import kidsStudyingImg from "@/assets/SKYVIEW-IMAGES/BUILDING2.jpeg";
import activitiesImg from "@/assets/SKYVIEW-IMAGES/playground.png";
import creativeImg from "@/assets/SKYVIEW-IMAGES/swimming.jpeg";

const programsImages = [kidsStudyingImg, activitiesImg, creativeImg];

const programs = [
  {
    title: "Early Years",
    age: "Ages 1½ – 5",
    number: "01",
    description:
      "Our play-based curriculum fosters curiosity, creativity, and social skills through hands-on learning experiences.",
    features: ["Play-based learning", "Social development", "Basic literacy & numeracy", "Creative arts"],
    accent: "#9B1C2C",
  },
  {
    title: "Primary Education",
    age: "Ages 5 – 11",
    number: "02",
    description:
      "Comprehensive primary education that builds strong foundations in all core subjects with emphasis on critical thinking.",
    features: ["Core curriculum", "STEM activities", "Arts & music", "Physical education"],
    accent: "#4A9EDB",
  },
  {
    title: "After School",
    age: "Ages 5 – 15",
    number: "03",
    description:
      "Enriching after-school activities including coding, robotics, arts, sports, and language clubs.",
    features: ["Coding & robotics", "Arts & crafts", "Sports activities", "Language clubs"],
    accent: "#FF6B9D",
  },
];

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "15+", label: "Years of Excellence" },
  { value: "40+", label: "Qualified Educators" },
];

export default function ProgramsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        .pg-root { font-family: 'DM Sans', sans-serif; background: #FFF6F8; color: #5A1018; }
        .pg-heading { font-family: 'Fraunces', serif; }

        /* ── HERO ── */
        .pg-hero {
          min-height: 92vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }

        .pg-hero-left {
          background: #3D0B11;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
          order: 2;
        }
        .pg-hero-left::before {
          content: '';
          position: absolute; top: -120px; right: -120px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, #9B1C2C33 0%, transparent 70%);
          pointer-events: none;
        }
        .pg-hero-left::after {
          content: '';
          position: absolute; bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, #4A9EDB33 0%, transparent 70%);
          pointer-events: none;
        }

        .pg-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em;
          text-transform: uppercase; color: #FF6B9D; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .pg-eyebrow::before {
          content: ''; display: block; width: 32px; height: 2px; background: #FF6B9D;
        }

        .pg-hero-title {
          font-size: clamp(2.4rem, 5vw, 5rem);
          line-height: 1.05; color: #FFF6F8; margin-bottom: 28px; font-weight: 300;
        }
        .pg-hero-title em { font-style: italic; color: #FF6B9D; }

        .pg-hero-desc {
          color: #FFF6F8aa; font-size: 15px; line-height: 1.8;
          max-width: 380px; margin-bottom: 48px; font-weight: 300;
        }

        .pg-btn-row { display: flex; gap: 14px; flex-wrap: wrap; }

        .pg-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #9B1C2C; color: #FFF6F8; padding: 14px 28px;
          border-radius: 999px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none;
          transition: all 0.3s; border: none; cursor: pointer; white-space: nowrap;
        }
        .pg-btn-primary:hover { background: #7A1623; transform: translateY(-2px); box-shadow: 0 12px 32px #9B1C2C44; }

        .pg-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #FFF6F8; padding: 14px 28px;
          border-radius: 999px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none;
          border: 1px solid #FFF6F840; transition: all 0.3s; cursor: pointer; white-space: nowrap;
        }
        .pg-btn-ghost:hover { border-color: #FFF6F8; background: #FFF6F810; }

        .pg-hero-right {
          position: relative; overflow: hidden; order: 1;
        }
        .pg-hero-right img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.85) saturate(1.1);
        }
        .pg-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #5A101844 0%, transparent 60%);
        }

        .pg-float-badge {
          position: absolute; bottom: 48px; left: 40px;
          background: #4A9EDB; border-radius: 12px; padding: 20px 24px;
          box-shadow: 0 24px 64px rgba(74,158,219,0.35); min-width: 180px;
        }
        .pg-float-badge-num {
          font-family: 'Fraunces', serif; font-size: 2.4rem; color: #FFFFFF; line-height: 1;
        }
        .pg-float-badge-label {
          font-size: 11px; color: #FFFFFFcc; font-weight: 500;
          margin-top: 4px; letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* ── STATS ── */
        .pg-stats {
          background: #2E7EB8;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        .pg-stat-item {
          padding: 36px 24px; border-right: 1px solid #FFF6F822; text-align: center;
        }
        .pg-stat-item:last-child { border-right: none; }
        .pg-stat-num { font-family: 'Fraunces', serif; font-size: 2.4rem; color: #FFF6F8; font-weight: 700; }
        .pg-stat-label {
          font-size: 11px; color: #FFF6F8bb; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px;
        }

        /* ── CAROUSEL SECTION ── */
        .pg-carousel-section {
          padding: 80px 60px; background: #FFF6F8;
        }
        .pg-carousel-section .pg-eyebrow { color: #5A101888; }
        .pg-carousel-section .pg-eyebrow::before { background: #5A101888; }

        /* ── PROGRAMS ── */
        .pg-programs { background: #3D0B11; padding: 100px 60px; }
        .pg-programs-header {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; margin: 0 auto 72px; gap: 18px; max-width: 600px;
        }
        .pg-programs-title {
          font-family: 'Fraunces', serif; font-size: clamp(2rem, 4vw, 3.5rem);
          color: #FFF6F8; line-height: 1.1; font-weight: 300;
        }
        .pg-programs-title em { font-style: italic; color: #4A9EDB; }
        .pg-programs-sub { color: #FFF6F855; font-size: 14px; max-width: 260px; line-height: 1.7; font-weight: 300; }

        .pg-program-list { display: flex; flex-direction: column; gap: 2px; }
        .pg-program-card {
          display: grid; grid-template-columns: 1fr auto 80px;
          align-items: center; gap: 40px; padding: 40px 48px;
          background: #FFF6F808; border: 1px solid #FFF6F810;
          border-radius: 14px; transition: all 0.35s; cursor: default;
          position: relative; overflow: hidden;
        }
        .pg-program-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px; background: var(--accent);
          transform: scaleY(0); transition: transform 0.35s; transform-origin: bottom;
        }
        .pg-program-card:hover { background: #FFF6F812; border-color: var(--accent)33; }
        .pg-program-card:hover::before { transform: scaleY(1); }

        .pg-program-num {
          font-family: 'Fraunces', serif; font-size: 3rem;
          color: #FFF6F815; font-weight: 700; line-height: 1;
        }
        .pg-program-body-title {
          font-family: 'Fraunces', serif; font-size: 1.6rem;
          color: #FFF6F8; margin-bottom: 6px; font-weight: 300;
        }
        .pg-program-age {
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; margin-bottom: 12px; color: var(--accent);
        }
        .pg-program-desc { color: #FFF6F866; font-size: 13.5px; line-height: 1.7; font-weight: 300; }
        .pg-program-features-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px; min-width: 260px;
        }
        .pg-feature-pill {
          background: #FFF6F808; border: 1px solid #FFF6F815; border-radius: 100px;
          padding: 7px 14px; font-size: 12px; color: #FFF6F877;
          font-weight: 500; white-space: nowrap; text-align: center;
        }

        /* ── CTA ── */
        .pg-cta {
          position: relative; overflow: hidden; background: #FFF6F8;
          padding: 120px 60px; display: grid;
          grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .pg-cta-bg-text {
          position: absolute; font-family: 'Fraunces', serif;
          font-size: 18vw; font-weight: 900; color: #5A101806;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          white-space: nowrap; pointer-events: none; user-select: none; letter-spacing: -0.05em;
        }
        .pg-cta-title {
          font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 4vw, 3.5rem);
          color: #5A1018; line-height: 1.1; font-weight: 300; margin-bottom: 24px;
        }
        .pg-cta-title em { font-style: italic; color: #9B1C2C; }
        .pg-cta-desc { color: #5A101877; font-size: 15px; line-height: 1.8; margin-bottom: 40px; font-weight: 300; }
        .pg-cta-right { display: flex; flex-direction: column; gap: 20px; }
        .pg-cta-card {
          background: #3D0B11; border-radius: 12px; padding: 32px; color: #FFF6F8;
        }
        .pg-cta-card-label {
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #FF6B9D; font-weight: 600; margin-bottom: 10px;
        }
        .pg-cta-card-title {
          font-family: 'Fraunces', serif; font-size: 1.3rem; margin-bottom: 8px; font-weight: 300;
        }
        .pg-cta-card-text { font-size: 13px; color: #FFF6F866; line-height: 1.6; font-weight: 300; }

        /* ════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════ */

        /* Tablet — ≤ 1024px */
        @media (max-width: 1024px) {
          .pg-hero { min-height: auto; }
          .pg-hero-left { padding: 60px 40px; }
          .pg-program-card { grid-template-columns: 1fr; gap: 20px; padding: 32px 28px; }
          .pg-program-num { display: none; }
          .pg-program-features-grid { min-width: unset; grid-template-columns: 1fr 1fr; }
          .pg-cta { padding: 80px 40px; gap: 48px; }
        }

        /* Mobile — ≤ 768px */
        @media (max-width: 768px) {
          /* Hero: stack vertically, image on top */
          .pg-hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .pg-hero-right {
            order: 1;
            height: 260px;
          }
          .pg-hero-left {
            order: 2;
            padding: 48px 24px;
            text-align: left;
            align-items: flex-start;
          }
          /* hide right-align overrides on mobile */
          .pg-hero-left[style] { text-align: left !important; align-items: flex-start !important; }
          .pg-eyebrow[style] { flex-direction: row !important; }
          .pg-hero-desc[style] { margin-left: 0 !important; }
          .pg-btn-row[style] { justify-content: flex-start !important; }

          .pg-float-badge {
            display: none; /* too cramped on mobile */
          }

          /* Stats: 2 columns */
          .pg-stats { grid-template-columns: repeat(2, 1fr); }
          .pg-stat-item:nth-child(2) { border-right: none; }
          .pg-stat-item { padding: 28px 16px; border-bottom: 1px solid #FFF6F822; }
          .pg-stat-item:nth-child(3),
          .pg-stat-item:nth-child(4) { border-bottom: none; }
          .pg-stat-num { font-size: 2rem; }

          /* Carousel */
          .pg-carousel-section { padding: 48px 20px; }
          .pg-carousel-section img { height: 240px !important; }

          /* Programs */
          .pg-programs { padding: 60px 20px; }
          .pg-programs-header { margin-bottom: 48px; }
          .pg-program-card { padding: 28px 20px; }
          .pg-program-features-grid { grid-template-columns: 1fr 1fr; }
          .pg-feature-pill { font-size: 11px; padding: 6px 10px; white-space: normal; text-align: center; }

          /* CTA */
          .pg-cta {
            grid-template-columns: 1fr;
            padding: 60px 24px;
            gap: 40px;
          }
          .pg-cta-bg-text { font-size: 28vw; }
          .pg-cta-card { padding: 24px 20px; }
          .pg-cta-card-title { font-size: 1.1rem; }
        }

        /* Small mobile — ≤ 480px */
        @media (max-width: 480px) {
          .pg-hero-title { font-size: 2.2rem; }
          .pg-hero-left { padding: 40px 20px; }
          .pg-hero-desc { font-size: 14px; margin-bottom: 32px; }
          .pg-btn-primary, .pg-btn-ghost { padding: 12px 22px; font-size: 12px; }
          .pg-btn-row { flex-direction: column; width: 100%; }
          .pg-btn-primary, .pg-btn-ghost { width: 100%; justify-content: center; }
          .pg-stats { grid-template-columns: repeat(2, 1fr); }
          .pg-stat-num { font-size: 1.8rem; }
          .pg-stat-label { font-size: 10px; }
          .pg-programs { padding: 48px 16px; }
          .pg-program-body-title { font-size: 1.3rem; }
          .pg-program-features-grid { grid-template-columns: 1fr; }
          .pg-cta { padding: 48px 16px; }
          .pg-cta-title { font-size: 1.8rem; }
          .pg-cta-desc { font-size: 14px; }
        }
      `}</style>

      <div className="pg-root">
        <Navbar />

        {/* HERO */}
        <section className="pg-hero">
          <div className="pg-hero-right">
            <img src={kidsStudyingImg} alt="Students learning" />
            <div className="pg-hero-overlay" />
            <div className="pg-float-badge" style={{ position: "absolute", bottom: 48, left: 40 }}>
              <div className="pg-float-badge-num">500+</div>
              <div className="pg-float-badge-label">Happy learners</div>
            </div>
          </div>
          <div className="pg-hero-left" style={{ textAlign: "right", alignItems: "flex-end" }}>
            <div className="pg-eyebrow" style={{ flexDirection: "row-reverse" }}>
              Sky View School — Programs
            </div>
            <h1 className="pg-heading pg-hero-title">
              Education<br />that <em>shapes</em><br />the future
            </h1>
            <p className="pg-hero-desc" style={{ marginLeft: "auto" }}>
              From early childhood to primary years, our programs are crafted to nurture potential, inspire curiosity, and build lasting foundations.
            </p>
            <div className="pg-btn-row" style={{ justifyContent: "flex-end" }}>
              <Link to="/admissions"><button className="pg-btn-primary">Enroll Now →</button></Link>
              <Link to="/contact"><button className="pg-btn-ghost">Learn More</button></Link>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="pg-stats">
          {stats.map((s) => (
            <div key={s.label} className="pg-stat-item">
              <div className="pg-stat-num">{s.value}</div>
              <div className="pg-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* IMAGE CAROUSEL */}
        <section className="pg-carousel-section">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="pg-eyebrow" style={{ marginBottom: 40 }}>Our Campus Life</div>
            <Carousel className="w-full">
              <CarouselContent>
                {programsImages.map((image, i) => (
                  <CarouselItem key={i} style={{ paddingLeft: 16 }}>
                    <img
                      src={image}
                      alt={`Campus life ${i + 1}`}
                      style={{
                        width: "100%", height: 480, objectFit: "cover",
                        borderRadius: 8, display: "block",
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious style={{ background: "#5A1018", color: "#FFF6F8", border: "none" }} />
              <CarouselNext style={{ background: "#5A1018", color: "#FFF6F8", border: "none" }} />
            </Carousel>
          </div>
        </section>

        {/* PROGRAMS LIST */}
        <section className="pg-programs">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="pg-programs-header">
              <h2 className="pg-programs-title">Our <em>three</em><br />core programs</h2>
              <p className="pg-programs-sub">Every program is thoughtfully designed by educators who understand what children need at each stage of growth.</p>
            </div>

            <div className="pg-program-list">
              {programs.map((program, i) => (
                <AnimatedSection key={program.title} delay={0.1 * i}>
                  <div
                    className="pg-program-card"
                    style={{ "--accent": program.accent } as React.CSSProperties}
                  >
                    <div>
                      <div className="pg-program-age">{program.age}</div>
                      <h3 className="pg-program-body-title">{program.title}</h3>
                      <p className="pg-program-desc">{program.description}</p>
                    </div>
                    <div className="pg-program-features-grid">
                      {program.features.map((f) => (
                        <div key={f} className="pg-feature-pill">{f}</div>
                      ))}
                    </div>
                    <div className="pg-program-num">{program.number}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pg-cta">
          <div className="pg-cta-bg-text">Enroll</div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="pg-eyebrow" style={{ color: "#5A101855" }}>
              <span style={{ background: "#5A101855", width: 32, height: 2, display: "inline-block", marginRight: 12 }} />
              Start Today
            </div>
            <h2 className="pg-heading pg-cta-title">
              Ready to give your child the <em>best start?</em>
            </h2>
            <p className="pg-cta-desc">
              Join hundreds of families who chose Sky View as the place where their children discovered a love of learning.
            </p>
            <div className="pg-btn-row">
              <Link to="/admissions">
                <button className="pg-btn-primary" style={{ background: "#5A1018", color: "#FFF6F8" }}>
                  Start Application →
                </button>
              </Link>
              <Link to="/contact">
                <button className="pg-btn-ghost" style={{ color: "#5A1018", borderColor: "#5A101855" }}>
                  Talk to Us
                </button>
              </Link>
            </div>
          </div>
          <div className="pg-cta-right" style={{ position: "relative", zIndex: 1 }}>
            <div className="pg-cta-card">
              <div className="pg-cta-card-label">Early Years</div>
              <div className="pg-heading pg-cta-card-title">Play-first, learn-always</div>
              <div className="pg-cta-card-text">Children thrive when joy and discovery come first. Our early years program is built on this belief.</div>
            </div>
            <div className="pg-cta-card" style={{ background: "#2E7EB8" }}>
              <div className="pg-cta-card-label" style={{ color: "#FFF6F8bb" }}>Primary Education</div>
              <div className="pg-heading pg-cta-card-title">Strong roots, bold futures</div>
              <div className="pg-cta-card-text">Academic excellence delivered with warmth, imagination, and real-world relevance.</div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}