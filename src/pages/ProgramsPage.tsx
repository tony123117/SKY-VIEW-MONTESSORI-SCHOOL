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
import kidsStudyingImg from "@/assets/images/hold.jpg";
import activitiesImg from "@/assets/images/curiculum.jpg";
import creativeImg from "@/assets/images/kids.jpg";

const programsImages = [kidsStudyingImg, activitiesImg, creativeImg];

const programs = [
  {
    title: "Early Years",
    age: "Ages 1½ – 5",
    number: "01",
    description:
      "Our play-based curriculum fosters curiosity, creativity, and social skills through hands-on learning experiences.",
    features: ["Play-based learning", "Social development", "Basic literacy & numeracy", "Creative arts"],
    accent: "#F4845F",
  },
  {
    title: "Primary Education",
    age: "Ages 5 – 11",
    number: "02",
    description:
      "Comprehensive primary education that builds strong foundations in all core subjects with emphasis on critical thinking.",
    features: ["Core curriculum", "STEM activities", "Arts & music", "Physical education"],
    accent: "#4E9AF1",
  },
  {
    title: "After School",
    age: "Ages 5 – 15",
    number: "03",
    description:
      "Enriching after-school activities including coding, robotics, arts, sports, and language clubs.",
    features: ["Coding & robotics", "Arts & crafts", "Sports activities", "Language clubs"],
    accent: "#6C63FF",
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

        .pg-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; }
        .pg-heading { font-family: 'Fraunces', serif; }

        /* HERO */
        .pg-hero {
          min-height: 92vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .pg-hero { grid-template-columns: 1fr; min-height: auto; }
          .pg-hero-right { display: none; }
        }

        .pg-hero-left {
          background: #1A1A2E;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
          position: relative;
          overflow: hidden;
        }
        .pg-hero-left::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, #F4845F33 0%, transparent 70%);
          pointer-events: none;
        }
        .pg-hero-left::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, #4E9AF133 0%, transparent 70%);
          pointer-events: none;
        }

        .pg-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #F4845F;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .pg-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background: #F4845F;
        }

        .pg-hero-title {
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1.05;
          color: #FAF8F5;
          margin-bottom: 28px;
          font-weight: 300;
        }
        .pg-hero-title em { font-style: italic; color: #F4845F; }

        .pg-hero-desc {
          color: #FAF8F5aa;
          font-size: 15px;
          line-height: 1.8;
          max-width: 380px;
          margin-bottom: 48px;
          font-weight: 300;
        }

        .pg-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #F4845F;
          color: #FAF8F5;
          padding: 16px 36px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }
        .pg-btn-primary:hover { background: #e8734f; transform: translateY(-2px); box-shadow: 0 12px 32px #F4845F44; }

        .pg-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #FAF8F5;
          padding: 16px 36px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #FAF8F540;
          transition: all 0.3s;
          cursor: pointer;
        }
        .pg-btn-ghost:hover { border-color: #FAF8F5; background: #FAF8F510; }

        .pg-hero-right {
          position: relative;
          overflow: hidden;
        }
        .pg-hero-right img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.85) saturate(1.1);
        }
        .pg-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #1A1A2E44 0%, transparent 60%);
        }

        /* Floating badge */
        .pg-float-badge {
          position: absolute;
          bottom: 48px; left: -28px;
          background: #FAF8F5;
          border-radius: 12px;
          padding: 20px 24px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.2);
          min-width: 200px;
        }
        .pg-float-badge-num { font-family: 'Fraunces', serif; font-size: 2.4rem; color: #1A1A2E; line-height: 1; }
        .pg-float-badge-label { font-size: 11px; color: #1A1A2E88; font-weight: 500; margin-top: 4px; letter-spacing: 0.1em; text-transform: uppercase; }

        /* STATS */
        .pg-stats {
          background: #F4845F;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 640px) { .pg-stats { grid-template-columns: repeat(2, 1fr); } }
        .pg-stat-item {
          padding: 40px 32px;
          border-right: 1px solid #FAF8F522;
          text-align: center;
        }
        .pg-stat-item:last-child { border-right: none; }
        .pg-stat-num { font-family: 'Fraunces', serif; font-size: 2.8rem; color: #FAF8F5; font-weight: 700; }
        .pg-stat-label { font-size: 12px; color: #FAF8F5bb; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px; }

        /* CAROUSEL SECTION */
        .pg-carousel-section {
          padding: 100px 60px;
          background: #FAF8F5;
        }
        @media (max-width: 768px) { .pg-carousel-section { padding: 60px 24px; } }
        .pg-carousel-section .pg-eyebrow { color: #1A1A2E88; }
        .pg-carousel-section .pg-eyebrow::before { background: #1A1A2E88; }

        /* PROGRAMS */
        .pg-programs {
          background: #1A1A2E;
          padding: 100px 60px;
        }
        @media (max-width: 768px) { .pg-programs { padding: 60px 24px; } }
        .pg-programs-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 64px;
          gap: 24px;
          flex-wrap: wrap;
        }
        .pg-programs-title { font-family: 'Fraunces', serif; font-size: clamp(2rem, 4vw, 3.5rem); color: #FAF8F5; line-height: 1.1; font-weight: 300; }
        .pg-programs-title em { font-style: italic; color: #F4845F; }
        .pg-programs-sub { color: #FAF8F555; font-size: 14px; max-width: 260px; line-height: 1.7; font-weight: 300; }

        .pg-program-list { display: flex; flex-direction: column; gap: 2px; }
        .pg-program-card {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          gap: 40px;
          padding: 40px 48px;
          background: #FAF8F508;
          border: 1px solid #FAF8F510;
          border-radius: 4px;
          transition: all 0.35s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .pg-program-card { grid-template-columns: 1fr; gap: 20px; padding: 28px 24px; }
          .pg-program-features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .pg-program-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--accent);
          transform: scaleY(0);
          transition: transform 0.35s;
          transform-origin: bottom;
        }
        .pg-program-card:hover { background: #FAF8F512; border-color: var(--accent)33; }
        .pg-program-card:hover::before { transform: scaleY(1); }

        .pg-program-num { font-family: 'Fraunces', serif; font-size: 3rem; color: #FAF8F515; font-weight: 700; line-height: 1; }
        .pg-program-body-title { font-family: 'Fraunces', serif; font-size: 1.6rem; color: #FAF8F5; margin-bottom: 6px; font-weight: 300; }
        .pg-program-age { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; color: var(--accent); }
        .pg-program-desc { color: #FAF8F566; font-size: 13.5px; line-height: 1.7; font-weight: 300; }
        .pg-program-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          min-width: 280px;
        }
        .pg-feature-pill {
          background: #FAF8F508;
          border: 1px solid #FAF8F515;
          border-radius: 100px;
          padding: 7px 14px;
          font-size: 12px;
          color: #FAF8F577;
          font-weight: 500;
          white-space: nowrap;
          text-align: center;
        }

        /* CTA */
        .pg-cta {
          position: relative;
          overflow: hidden;
          background: #FAF8F5;
          padding: 120px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 768px) { .pg-cta { grid-template-columns: 1fr; padding: 60px 24px; gap: 40px; } }
        .pg-cta-bg-text {
          position: absolute;
          font-family: 'Fraunces', serif;
          font-size: 18vw;
          font-weight: 900;
          color: #1A1A2E06;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }
        .pg-cta-title { font-family: 'Fraunces', serif; font-size: clamp(2rem, 4vw, 3.5rem); color: #1A1A2E; line-height: 1.1; font-weight: 300; margin-bottom: 24px; }
        .pg-cta-title em { font-style: italic; color: #F4845F; }
        .pg-cta-desc { color: #1A1A2E77; font-size: 15px; line-height: 1.8; margin-bottom: 40px; font-weight: 300; }
        .pg-cta-right { display: flex; flex-direction: column; gap: 20px; }
        .pg-cta-card {
          background: #1A1A2E;
          border-radius: 12px;
          padding: 32px;
          color: #FAF8F5;
        }
        .pg-cta-card-label { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #F4845F; font-weight: 600; margin-bottom: 10px; }
        .pg-cta-card-title { font-family: 'Fraunces', serif; font-size: 1.3rem; margin-bottom: 8px; font-weight: 300; }
        .pg-cta-card-text { font-size: 13px; color: #FAF8F566; line-height: 1.6; font-weight: 300; }
      `}</style>

      <div className="pg-root">
        <Navbar />

        {/* HERO */}
        <section className="pg-hero">
          <div className="pg-hero-left">
            <div className="pg-eyebrow">Brain Child School — Programs</div>
            <h1 className="pg-heading pg-hero-title">
              Education<br />that <em>shapes</em><br />the future
            </h1>
            <p className="pg-hero-desc">
              From early childhood to primary years, our programs are crafted to nurture potential, inspire curiosity, and build lasting foundations.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/admissions"><button className="pg-btn-primary">Enroll Now →</button></Link>
              <Link to="/contact"><button className="pg-btn-ghost">Learn More</button></Link>
            </div>
          </div>
          <div className="pg-hero-right">
            <img src={kidsStudyingImg} alt="Students learning" />
            <div className="pg-hero-overlay" />
            <div style={{ position: "absolute", bottom: 48, right: 40 }}>
              <div className="pg-float-badge">
                <div className="pg-float-badge-num">500+</div>
                <div className="pg-float-badge-label">Happy learners</div>
              </div>
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
                        width: "100%",
                        height: 480,
                        objectFit: "cover",
                        borderRadius: 8,
                        display: "block",
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious style={{ background: "#1A1A2E", color: "#FAF8F5", border: "none" }} />
              <CarouselNext style={{ background: "#1A1A2E", color: "#FAF8F5", border: "none" }} />
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
                    style={{ "--accent": program.accent }}
                  >
                    <div className="pg-program-num">{program.number}</div>
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
            <div className="pg-eyebrow" style={{ color: "#1A1A2E55" }}>
              <span style={{ background: "#1A1A2E55", width: 32, height: 2, display: "inline-block", marginRight: 12 }} />
              Start Today
            </div>
            <h2 className="pg-heading pg-cta-title">Ready to give your child the <em>best start?</em></h2>
            <p className="pg-cta-desc">Join hundreds of families who chose Brain Child as the place where their children discovered a love of learning.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/admissions"><button className="pg-btn-primary" style={{ background: "#1A1A2E", color: "#FAF8F5" }}>Start Application →</button></Link>
              <Link to="/contact"><button className="pg-btn-ghost" style={{ color: "#1A1A2E", borderColor: "#1A1A2E55" }}>Talk to Us</button></Link>
            </div>
          </div>
          <div className="pg-cta-right" style={{ position: "relative", zIndex: 1 }}>
            <div className="pg-cta-card">
              <div className="pg-cta-card-label">Early Years</div>
              <div className="pg-heading pg-cta-card-title">Play-first, learn-always</div>
              <div className="pg-cta-card-text">Children thrive when joy and discovery come first. Our early years program is built on this belief.</div>
            </div>
            <div className="pg-cta-card" style={{ background: "#F4845F" }}>
              <div className="pg-cta-card-label" style={{ color: "#FAF8F5bb" }}>Primary Education</div>
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