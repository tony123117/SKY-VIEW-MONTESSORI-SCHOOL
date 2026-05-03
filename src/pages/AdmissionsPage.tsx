import { Link } from "react-router-dom";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import ContactSection from "@/components/brainchild/ContactSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/assets/images/544A7290.jpg.jpg";
import img2 from "@/assets/images/544A7328.jpg.jpg";
import img3 from "@/assets/images/544A7241.jpg.jpg";

const heroSlides = [
  { image: img1, label: "A" },
  { image: img2, label: "B" },
  { image: img3, label: "C" },
];

const steps = [
  { step: "01", title: "Enquiry & Tour", description: "Visit our campus or call us to learn more. Schedule a guided tour to see our facilities firsthand.", icon: "🏫" },
  { step: "02", title: "Application Form", description: "Complete and submit the enrollment form online via our parent portal or at the school office.", icon: "📝" },
  { step: "03", title: "Assessment", description: "Your child will participate in a brief, age-appropriate assessment to understand their learning level.", icon: "📋" },
  { step: "04", title: "Interview", description: "A brief meeting with the parents to discuss expectations, school policies, and your child's needs.", icon: "🤝" },
  { step: "05", title: "Admission Offer", description: "Upon successful assessment, you'll receive an admission letter with fee details and next steps.", icon: "🎉" },
  { step: "06", title: "Orientation", description: "New families attend an orientation session before term begins to settle in smoothly.", icon: "🌟" },
];

const requirements = [
  "Completed application form",
  "Birth certificate (original + copy)",
  "4 recent passport photographs",
  "Previous school report (if applicable)",
  "Immunization records",
  "Parent/guardian valid ID",
];

const fees = [
  { level: "Pre-School", age: "Ages 1½ – 2" },
  { level: "Nursery 1–3", age: "Ages 2 – 5" },
  { level: "Lower Grade (1–3)", age: "Ages 5 – 8" },
  { level: "Higher Grade (4–6)", age: "Ages 8 – 11" },
];

export default function AdmissionsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ad-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; }
        .ad-heading { font-family: 'Fraunces', serif; }

        /* HERO */
        .ad-hero {
          position: relative;
          height: 85vh;
          min-height: 560px;
          overflow: hidden;
        }
        .ad-hero-bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .ad-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(160deg, #1A1A2Ecc 0%, #1A1A2E88 40%, transparent 100%);
        }
        .ad-hero-content {
          position: absolute;
          top: 50%; left: 60px;
          transform: translateY(-50%);
          max-width: 580px;
          z-index: 10;
        }
        @media (max-width: 768px) { .ad-hero-content { left: 24px; right: 24px; } }

        /* CAROUSEL STRIP */
        .ad-carousel-strip {
          background: #1A1A2E;
          padding: 0;
          overflow: hidden;
        }
        .ad-carousel-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
          opacity: 0.7;
        }
        .ad-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;
          color: #F4845F; margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
        }
        .ad-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: #F4845F; }
        .ad-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          color: #FAF8F5; line-height: 1.05;
          font-weight: 300; margin-bottom: 24px;
        }
        .ad-hero-title em { font-style: italic; color: #F4845F; }
        .ad-hero-sub { color: #FAF8F5aa; font-size: 15px; line-height: 1.7; font-weight: 300; margin-bottom: 40px; }
        .ad-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #F4845F; color: #FAF8F5; padding: 16px 36px;
          border-radius: 4px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.3s;
        }
        .ad-btn-primary:hover { background: #e8734f; transform: translateY(-2px); box-shadow: 0 12px 32px #F4845F44; }
        .ad-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #FAF8F5; padding: 16px 36px;
          border-radius: 4px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: 1px solid #FAF8F540;
          cursor: pointer; transition: all 0.3s;
        }
        .ad-btn-ghost:hover { border-color: #FAF8F5; background: #FAF8F510; }
        .ad-btn-dark {
          display: inline-flex; align-items: center; gap: 10px;
          background: #1A1A2E; color: #FAF8F5; padding: 14px 32px;
          border-radius: 4px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer; transition: all 0.3s; width: 100%;
          justify-content: center;
        }
        .ad-btn-dark:hover { background: #2a2a4e; transform: translateY(-1px); }
        .ad-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #1A1A2E; padding: 14px 32px;
          border-radius: 4px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: 1px solid #1A1A2E44;
          cursor: pointer; transition: all 0.3s; width: 100%;
          justify-content: center;
        }
        .ad-btn-outline:hover { background: #1A1A2E; color: #FAF8F5; }

        /* INTRO STRIP */
        .ad-strip {
          background: #F4845F;
          padding: 28px 60px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          flex-wrap: wrap;
        }
        .ad-strip-text { font-family: 'Fraunces', serif; font-size: 1.1rem; color: #FAF8F5; font-weight: 300; font-style: italic; }
        .ad-strip-link { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #FAF8F5; text-decoration: none; border-bottom: 1px solid #FAF8F566; padding-bottom: 2px; }

        /* STEPS */
        .ad-steps { padding: 100px 60px; background: #FAF8F5; }
        @media (max-width: 768px) { .ad-steps { padding: 60px 24px; } }
        .ad-steps-header { margin-bottom: 64px; }
        .ad-steps-title { font-family: 'Fraunces', serif; font-size: clamp(2rem, 3.5vw, 3rem); color: #1A1A2E; font-weight: 300; line-height: 1.15; }
        .ad-steps-title em { font-style: italic; color: #F4845F; }
        .ad-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        @media (max-width: 768px) { .ad-steps-grid { grid-template-columns: 1fr; } }
        @media (max-width: 1024px) and (min-width: 769px) { .ad-steps-grid { grid-template-columns: repeat(2, 1fr); } }

        .ad-step-card {
          padding: 40px 36px;
          background: #1A1A2E06;
          border: 1px solid #1A1A2E10;
          position: relative;
          transition: all 0.3s;
        }
        .ad-step-card:hover { background: #1A1A2E0c; border-color: #F4845F44; }
        .ad-step-num {
          font-family: 'Fraunces', serif;
          font-size: 4rem; font-weight: 700;
          color: #1A1A2E08; line-height: 1;
          position: absolute; top: 24px; right: 28px;
        }
        .ad-step-icon { font-size: 2rem; margin-bottom: 20px; }
        .ad-step-title { font-family: 'Fraunces', serif; font-size: 1.3rem; color: #1A1A2E; margin-bottom: 12px; font-weight: 400; }
        .ad-step-desc { font-size: 13.5px; color: #1A1A2E77; line-height: 1.7; font-weight: 300; }

        /* REQUIREMENTS + FEES */
        .ad-details {
          background: #1A1A2E;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }
        @media (max-width: 768px) { .ad-details { grid-template-columns: 1fr; } }

        .ad-details-left {
          padding: 80px 60px;
          border-right: 1px solid #FAF8F510;
        }
        @media (max-width: 768px) { .ad-details-left { padding: 60px 24px; border-right: none; border-bottom: 1px solid #FAF8F510; } }

        .ad-details-right { padding: 80px 60px; }
        @media (max-width: 768px) { .ad-details-right { padding: 60px 24px; } }

        .ad-details-label { font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: #F4845F; margin-bottom: 16px; }
        .ad-details-title { font-family: 'Fraunces', serif; font-size: 1.8rem; color: #FAF8F5; font-weight: 300; margin-bottom: 40px; line-height: 1.2; }

        .ad-req-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
        .ad-req-item {
          display: flex; align-items: center; gap: 16px;
          padding-bottom: 16px; border-bottom: 1px solid #FAF8F510;
        }
        .ad-req-item:last-child { border-bottom: none; }
        .ad-req-check { width: 24px; height: 24px; border-radius: 50%; background: #F4845F22; border: 1px solid #F4845F44; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ad-req-check-inner { width: 8px; height: 8px; border-radius: 50%; background: #F4845F; }
        .ad-req-text { font-size: 14px; color: #FAF8F5bb; font-weight: 300; }

        .ad-fee-table { width: 100%; margin-bottom: 32px; }
        .ad-fee-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 0; border-bottom: 1px solid #FAF8F510;
        }
        .ad-fee-row:first-child { padding-top: 0; }
        .ad-fee-level { font-family: 'Fraunces', serif; font-size: 1rem; color: #FAF8F5; font-weight: 300; }
        .ad-fee-age { font-size: 12px; color: #FAF8F555; margin-top: 2px; }
        .ad-fee-cta { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #F4845F; text-decoration: none; transition: color 0.2s; }
        .ad-fee-cta:hover { color: #FAF8F5; }

        /* SUPPORT */
        .ad-support {
          padding: 100px 60px;
          background: #FAF8F5;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        @media (max-width: 768px) { .ad-support { grid-template-columns: 1fr; padding: 60px 24px; gap: 48px; } }
        .ad-support-title { font-family: 'Fraunces', serif; font-size: clamp(2rem, 3.5vw, 3rem); color: #1A1A2E; font-weight: 300; line-height: 1.15; margin-bottom: 20px; }
        .ad-support-title em { font-style: italic; color: #F4845F; }
        .ad-support-text { font-size: 15px; color: #1A1A2E77; line-height: 1.8; font-weight: 300; margin-bottom: 36px; }
        .ad-support-right { display: flex; flex-direction: column; gap: 2px; }
        .ad-support-card {
          background: #1A1A2E08; border: 1px solid #1A1A2E10;
          padding: 28px 32px; border-radius: 0;
          display: flex; align-items: center; justify-content: space-between;
          cursor: pointer; transition: all 0.2s; text-decoration: none;
        }
        .ad-support-card:hover { background: #F4845F11; border-color: #F4845F44; }
        .ad-support-card-label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #1A1A2E77; margin-bottom: 4px; }
        .ad-support-card-title { font-family: 'Fraunces', serif; font-size: 1rem; color: #1A1A2E; font-weight: 400; }
        .ad-support-card-arrow { font-size: 1.2rem; color: #F4845F; }
      `}</style>

      <div className="ad-root">
        <Navbar />

        {/* HERO */}
        <section className="ad-hero">
          <img src={img1} alt="Admissions hero" className="ad-hero-bg" />
          <div className="ad-hero-overlay" />
          <div className="ad-hero-content">
            <div className="ad-eyebrow">Brain Child — Admissions 2026</div>
            <h1 className="ad-hero-title">
              Your child's<br />journey starts <em>here</em>
            </h1>
            <p className="ad-hero-sub">
              We welcome families who believe education is more than grades — it's about character, curiosity, and joy.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/portal"><button className="ad-btn-primary">Apply Online →</button></Link>
              <Link to="/contact"><button className="ad-btn-ghost">Book a Tour</button></Link>
            </div>
          </div>
        </section>

        {/* IMAGE CAROUSEL STRIP */}
        <div className="ad-carousel-strip">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide, i) => (
                <CarouselItem key={i}>
                  <img src={slide.image} alt={`Campus ${i + 1}`} className="ad-carousel-img" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious style={{ left: 16, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }} />
            <CarouselNext style={{ right: 16, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }} />
          </Carousel>
        </div>

        {/* STRIP */}
        <div className="ad-strip">
          <span className="ad-heading" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1.1rem", color: "#FAF8F5", fontWeight: 300 }}>
            "Every great school begins with a family that chooses to believe."
          </span>
          <Link to="/contact" className="ad-strip-link">Get In Touch →</Link>
        </div>

        {/* STEPS */}
        <section className="ad-steps">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="ad-steps-header">
              <div className="ad-eyebrow" style={{ color: "#1A1A2E88" }}>
                <span style={{ background: "#1A1A2E88", width: 32, height: 2, display: "inline-block" }} />
                The Process
              </div>
              <h2 className="ad-heading ad-steps-title">
                Six simple steps to<br /><em>joining our family</em>
              </h2>
            </div>

            <div className="ad-steps-grid">
              {steps.map((step, i) => (
                <AnimatedSection key={step.step} delay={0.08 * i}>
                  <div className="ad-step-card">
                    <div className="ad-step-num">{step.step}</div>
                    <div className="ad-step-icon">{step.icon}</div>
                    <h3 className="ad-heading ad-step-title">{step.title}</h3>
                    <p className="ad-step-desc">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* REQUIREMENTS + FEES */}
        <section className="ad-details">
          <div className="ad-details-left">
            <div className="ad-details-label">Documents Needed</div>
            <h3 className="ad-heading ad-details-title">Admission requirements</h3>
            <ul className="ad-req-list">
              {requirements.map((req) => (
                <li key={req} className="ad-req-item">
                  <div className="ad-req-check"><div className="ad-req-check-inner" /></div>
                  <span className="ad-req-text">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ad-details-right">
            <div className="ad-details-label">Tuition Overview</div>
            <h3 className="ad-heading ad-details-title">Fee structure by level</h3>
            <div className="ad-fee-table">
              {fees.map((fee) => (
                <div key={fee.level} className="ad-fee-row">
                  <div>
                    <div className="ad-fee-level">{fee.level}</div>
                    <div className="ad-fee-age">{fee.age}</div>
                  </div>
                  <Link to="/contact" className="ad-fee-cta">Enquire →</Link>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/contact"><button className="ad-btn-dark" style={{ background: "#F4845F" }}>Get Full Fee Details</button></Link>
              <Link to="/portal"><button className="ad-btn-outline" style={{ color: "#FAF8F5", borderColor: "#FAF8F533" }}>Apply Online</button></Link>
            </div>
          </div>
        </section>

        {/* SUPPORT */}
        <section className="ad-support">
          <div>
            <div className="ad-eyebrow" style={{ color: "#1A1A2E55" }}>
              <span style={{ background: "#1A1A2E55", width: 32, height: 2, display: "inline-block" }} />
              Need Help?
            </div>
            <h2 className="ad-heading ad-support-title">
              We're here<br />every step of<br />the <em>way</em>
            </h2>
            <p className="ad-support-text">
              Our admissions team is ready to answer every question, guide you through the process, and ensure your family feels welcome before the first day of school.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/contact"><button className="ad-btn-primary">Contact Admissions →</button></Link>
              <Link to="/about"><button className="ad-btn-outline" style={{ width: "auto" }}>About Us</button></Link>
            </div>
          </div>

          <div className="ad-support-right">
            {[
              { label: "Quickest route", title: "Call our admissions office directly", href: "/contact" },
              { label: "Learn first", title: "Take a virtual tour of our campus", href: "/about" },
              { label: "Get started", title: "Fill out the online application form", href: "/portal" },
              { label: "All programs", title: "Explore what we offer at each level", href: "/programs" },
            ].map((item) => (
              <Link key={item.title} to={item.href} className="ad-support-card">
                <div>
                  <div className="ad-support-card-label">{item.label}</div>
                  <div className="ad-heading ad-support-card-title">{item.title}</div>
                </div>
                <span className="ad-support-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        <ContactSection />
        <Footer />
      </div>
    </>
  );
}