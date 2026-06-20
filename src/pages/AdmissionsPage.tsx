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

import img1 from "@/assets/SKYVIEW-IMAGES/music.png";
import img2 from "@/assets/SKYVIEW-IMAGES/computer.png";
import img3 from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";

const heroSlides = [
  { image: img1, label: "A" },
  { image: img2, label: "B" },
  { image: img3, label: "C" },
];

const steps = [
  { step: "01", title: "Inquiry", description: "Reach out to us! Contact our admissions team to express your interest and gather initial information.", icon: "📞" },
  { step: "02", title: "School Tour", description: "We invite you to visit our beautiful citadel of learning to get a firsthand look at our facilities and educational environment.", icon: "🏫" },
  { step: "03", title: "Application Form", description: "Obtain the official application form from our school office or download it from our website.", icon: "📝" },
  { step: "04", title: "Complete the Application", description: "Fill out the application form with accurate information, providing all necessary documents and details.", icon: "✍️" },
  { step: "05", title: "Submit the Application", description: "Return the completed application form, along with the required documents, to our admissions office within the specified deadline.", icon: "📬" },
  { step: "06", title: "Interview / Assessment", description: "Depending on the grade level, your child may be invited for an interview or assessment to understand their readiness for our programme.", icon: "📋" },
  { step: "07", title: "Admission Offer", description: "If your child meets our criteria, we will send you an admission offer. Congratulations!", icon: "🎉" },
  { step: "08", title: "Enrollment", description: "Once you receive the admission offer, complete the enrollment process by submitting the required documents and fees.", icon: "🌟" },
];

const requirements = [
  "A completed application form",
  "Birth certificate or valid proof of age",
  "Medical records and immunization history",
  "Previous school records (if applicable)",
  "Passport-sized photographs of your child",
  "Copies of parent/guardian identification",
  "Contact information for emergency purposes",
];

const applicationForms = [
  { label: "Download", title: "Get the form from our website", href: "http://www.skyviewmontessorischool.com.ng" },
  { label: "In Person", title: "Collect from our school office during office hours", href: "/contact" },
];

export default function AdmissionsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        .ad-root { font-family: 'DM Sans', sans-serif; background: #FFF6F8; color: #5A1018; }
        .ad-heading { font-family: 'Fraunces', serif; }

        /* ── HERO ── */
        .ad-hero {
          position: relative; height: 85vh; min-height: 520px; overflow: hidden;
        }
        .ad-hero-bg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; z-index: 0;
        }
        .ad-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(160deg, #5A1018cc 0%, #9B1C2C66 40%, transparent 100%);
        }
        .ad-hero-content {
          position: absolute; bottom: 60px; right: 60px;
          max-width: 560px; text-align: right; z-index: 10;
        }

        .ad-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;
          color: #FF6B9D; margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
        }
        .ad-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: #FF6B9D; }

        .ad-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          color: #FFF6F8; line-height: 1.05; font-weight: 300; margin-bottom: 20px;
        }
        .ad-hero-title em { font-style: italic; color: #FF6B9D; }

        .ad-hero-sub {
          color: #FFF6F8aa; font-size: 15px; line-height: 1.7;
          font-weight: 300; margin-bottom: 36px;
        }

        .ad-btn-row { display: flex; gap: 14px; flex-wrap: wrap; }

        .ad-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #9B1C2C; color: #FFF6F8; padding: 14px 28px;
          border-radius: 999px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.3s; white-space: nowrap;
        }
        .ad-btn-primary:hover { background: #7A1623; transform: translateY(-2px); box-shadow: 0 12px 32px #9B1C2C44; }

        .ad-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #FFF6F8; padding: 14px 28px;
          border-radius: 999px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: 1px solid #FFF6F840;
          cursor: pointer; transition: all 0.3s; white-space: nowrap;
        }
        .ad-btn-ghost:hover { border-color: #FFF6F8; background: #FFF6F810; }

        .ad-btn-dark {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #3D0B11; color: #FFF6F8; padding: 14px 32px;
          border-radius: 999px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.3s; width: 100%;
        }
        .ad-btn-dark:hover { background: #2a2a4e; transform: translateY(-1px); }

        .ad-btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: transparent; color: #5A1018; padding: 14px 32px;
          border-radius: 999px; font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; border: 1px solid #5A101844;
          cursor: pointer; transition: all 0.3s; width: 100%;
        }
        .ad-btn-outline:hover { background: #3D0B11; color: #FFF6F8; }

        /* ── CAROUSEL STRIP ── */
        .ad-carousel-strip { background: #3D0B11; overflow: hidden; }
        .ad-carousel-img {
          width: 100%; height: 320px; object-fit: cover;
          display: block; opacity: 0.7;
        }

        /* ── STRIP ── */
        .ad-strip {
          background: #2E7EB8; padding: 24px 48px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
        }
        .ad-strip-text {
          font-family: 'Fraunces', serif; font-size: 1rem;
          color: #FFF6F8; font-weight: 300; font-style: italic;
        }
        .ad-strip-link {
          font-size: 12px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; color: #FFF6F8; text-decoration: none;
          border-bottom: 1px solid #FFF6F866; padding-bottom: 2px; white-space: nowrap;
        }

        /* ── STEPS ── */
        .ad-steps { padding: 80px 60px; background: #FFF6F8; }
        .ad-steps-header { margin-bottom: 56px; }
        .ad-steps-title {
          font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 3.5vw, 3rem);
          color: #5A1018; font-weight: 300; line-height: 1.15;
        }
        .ad-steps-title em { font-style: italic; color: #9B1C2C; }
        .ad-steps-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
        }
        .ad-step-card {
          padding: 36px 32px; background: #5A101806;
          border: 1px solid #5A101810; border-radius: 16px;
          box-shadow: 0 8px 24px rgba(90,16,24,0.04);
          position: relative; transition: all 0.3s;
        }
        .ad-step-card:hover { background: #5A10180c; border-color: #9B1C2C44; }
        .ad-step-num {
          font-family: 'Fraunces', serif; font-size: 4rem; font-weight: 700;
          color: #5A101808; line-height: 1; position: absolute; top: 24px; right: 24px;
        }
        .ad-step-icon { font-size: 2rem; margin-bottom: 16px; }
        .ad-step-title {
          font-family: 'Fraunces', serif; font-size: 1.2rem;
          color: #5A1018; margin-bottom: 10px; font-weight: 400;
        }
        .ad-step-desc { font-size: 13.5px; color: #5A101877; line-height: 1.7; font-weight: 300; }

        /* ── REQUIREMENTS + FORMS ── */
        .ad-details {
          background: #3D0B11;
          display: grid; grid-template-columns: 1fr 1fr; min-height: 600px;
        }
        .ad-details-left {
          padding: 72px 56px; border-right: 1px solid #FFF6F810;
        }
        .ad-details-right { padding: 72px 56px; }

        .ad-details-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em;
          text-transform: uppercase; color: #FF6B9D; margin-bottom: 16px;
        }
        .ad-details-title {
          font-family: 'Fraunces', serif; font-size: 1.8rem; color: #FFF6F8;
          font-weight: 300; margin-bottom: 40px; line-height: 1.2;
        }
        .ad-details-blurb {
          font-size: 13.5px; color: #FFF6F877; font-weight: 300;
          line-height: 1.7; margin-bottom: 36px; margin-top: -16px;
        }

        .ad-req-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
        .ad-req-item {
          display: flex; align-items: center; gap: 14px;
          padding-bottom: 14px; border-bottom: 1px solid #FFF6F810;
        }
        .ad-req-item:last-child { border-bottom: none; }
        .ad-req-check {
          width: 24px; height: 24px; border-radius: 50%;
          background: #4A9EDB22; border: 1px solid #4A9EDB44;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ad-req-check-inner { width: 8px; height: 8px; border-radius: 50%; background: #4A9EDB; }
        .ad-req-text { font-size: 14px; color: #FFF6F8bb; font-weight: 300; }

        .ad-forms-list { display: flex; flex-direction: column; gap: 2px; margin-bottom: 32px; }
        .ad-forms-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 0; border-bottom: 1px solid #FFF6F810;
          text-decoration: none; transition: all 0.2s;
        }
        .ad-forms-card:last-child { border-bottom: none; }
        .ad-forms-card:hover { padding-left: 8px; }
        .ad-forms-card-label {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: #FF6B9D; margin-bottom: 4px;
        }
        .ad-forms-card-title { font-family: 'Fraunces', serif; font-size: 1rem; color: #FFF6F8; font-weight: 300; }
        .ad-forms-cta { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #4A9EDB; }

        /* ── SUPPORT ── */
        .ad-support {
          padding: 100px 60px; background: #FFF6F8;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .ad-support-title {
          font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 3.5vw, 3rem);
          color: #5A1018; font-weight: 300; line-height: 1.15; margin-bottom: 20px;
        }
        .ad-support-title em { font-style: italic; color: #9B1C2C; }
        .ad-support-text { font-size: 15px; color: #5A101877; line-height: 1.8; font-weight: 300; margin-bottom: 36px; }
        .ad-support-right { display: flex; flex-direction: column; gap: 2px; }
        .ad-support-card {
          background: #5A101808; border: 1px solid #5A101810;
          padding: 24px 28px; display: flex; align-items: center;
          justify-content: space-between; cursor: pointer;
          transition: all 0.2s; text-decoration: none;
        }
        .ad-support-card:hover { background: #9B1C2C11; border-color: #9B1C2C44; }
        .ad-support-card-label {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: #5A101877; margin-bottom: 4px;
        }
        .ad-support-card-title { font-family: 'Fraunces', serif; font-size: 0.95rem; color: #5A1018; font-weight: 400; }
        .ad-support-card-arrow { font-size: 1.1rem; color: #9B1C2C; flex-shrink: 0; margin-left: 12px; }

        /* ════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════ */

        /* Tablet — ≤ 1024px */
        @media (max-width: 1024px) {
          .ad-hero-content { right: 36px; bottom: 40px; max-width: 480px; }
          .ad-steps { padding: 72px 40px; }
          .ad-details-left, .ad-details-right { padding: 60px 40px; }
          .ad-support { padding: 80px 40px; gap: 48px; }
        }

        /* Mobile — ≤ 768px */
        @media (max-width: 768px) {
          /* Hero: shrink height, move content to bottom-left */
          .ad-hero { height: 70vh; min-height: 460px; }
          .ad-hero-content {
            left: 24px; right: 24px; bottom: 32px;
            text-align: left; max-width: 100%;
          }
          .ad-eyebrow[style] { flex-direction: row !important; }
          .ad-btn-row[style] { justify-content: flex-start !important; }

          /* Carousel strip shorter on mobile */
          .ad-carousel-img { height: 220px; }

          /* Strip: stack vertically */
          .ad-strip { padding: 20px 24px; flex-direction: column; align-items: flex-start; gap: 12px; }

          /* Steps: 1 column */
          .ad-steps { padding: 56px 24px; }
          .ad-steps-grid { grid-template-columns: 1fr; gap: 16px; }
          .ad-step-card { padding: 28px 24px; }
          .ad-step-num { font-size: 3rem; top: 16px; right: 16px; }

          /* Details: stack vertically */
          .ad-details { grid-template-columns: 1fr; }
          .ad-details-left { padding: 56px 24px; border-right: none; border-bottom: 1px solid #FFF6F810; }
          .ad-details-right { padding: 56px 24px; }
          .ad-details-title { font-size: 1.5rem; margin-bottom: 28px; }

          /* Support: stack vertically */
          .ad-support { grid-template-columns: 1fr; padding: 60px 24px; gap: 40px; }
          .ad-support-card { padding: 20px 20px; }
          .ad-support-card-title { font-size: 0.85rem; word-break: break-word; }
        }

        /* Small mobile — ≤ 480px */
        @media (max-width: 480px) {
          .ad-hero { height: 80vh; min-height: 420px; }
          .ad-hero-content { left: 16px; right: 16px; bottom: 24px; }
          .ad-hero-title { font-size: 2rem; }
          .ad-hero-sub { font-size: 13px; margin-bottom: 24px; }

          .ad-btn-row { flex-direction: column; }
          .ad-btn-primary, .ad-btn-ghost { width: 100%; justify-content: center; }

          .ad-steps { padding: 40px 16px; }
          .ad-steps-header { margin-bottom: 36px; }
          .ad-step-card { padding: 24px 20px; }
          .ad-step-icon { font-size: 1.6rem; margin-bottom: 12px; }
          .ad-step-title { font-size: 1.05rem; }
          .ad-step-desc { font-size: 13px; }

          .ad-details-left, .ad-details-right { padding: 40px 16px; }
          .ad-req-text { font-size: 13px; }

          .ad-support { padding: 40px 16px; }
          .ad-support-title { font-size: 1.8rem; }
          .ad-support-text { font-size: 13.5px; }

          .ad-btn-dark, .ad-btn-outline { font-size: 12px; padding: 12px 20px; }
        }
      `}</style>

      <div className="ad-root">
        <Navbar />

        {/* HERO */}
        <section className="ad-hero">
          <img src={img1} alt="Admissions hero" className="ad-hero-bg" />
          <div className="ad-hero-overlay" />
          <div className="ad-hero-content">
            <div className="ad-eyebrow" style={{ flexDirection: "row-reverse" }}>
              Sky View Montessori School — Admissions
            </div>
            <h1 className="ad-hero-title">
              Your child's<br />journey starts <em>here</em>
            </h1>
            <p className="ad-hero-sub">
              We're committed to providing your child with a top-notch education that sparks a lifelong love for learning.
            </p>
            <div className="ad-btn-row" style={{ justifyContent: "flex-end" }}>
              <a href="http://www.skyviewmontessorischool.com.ng" target="_blank" rel="noreferrer">
                <button className="ad-btn-primary">Download Form →</button>
              </a>
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
          <span className="ad-heading" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1rem", color: "#FFF6F8", fontWeight: 300 }}>
            "We're excited to welcome your child to the Sky View family."
          </span>
          <Link to="/contact" className="ad-strip-link">Get In Touch →</Link>
        </div>

        {/* STEPS */}
        <section className="ad-steps">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="ad-steps-header">
              <div className="ad-eyebrow" style={{ color: "#5A101888" }}>
                <span style={{ background: "#5A101888", width: 32, height: 2, display: "inline-block" }} />
                Admission Process Overview
              </div>
              <h2 className="ad-heading ad-steps-title">
                Eight simple steps to<br /><em>joining our family</em>
              </h2>
            </div>
            <div className="ad-steps-grid">
              {steps.map((step, i) => (
                <AnimatedSection key={step.step} delay={0.06 * i}>
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

        {/* REQUIREMENTS + APPLICATION FORMS */}
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
            <div className="ad-details-label">Get Started</div>
            <h3 className="ad-heading ad-details-title">Application forms</h3>
            <p className="ad-details-blurb">
              You can access our application forms by downloading from our website or
              collecting a copy at our school office during office hours.
            </p>
            <div className="ad-forms-list">
              {applicationForms.map((form) => (
                <a
                  key={form.label}
                  href={form.href}
                  target={form.href.startsWith("http") ? "_blank" : undefined}
                  rel={form.href.startsWith("http") ? "noreferrer" : undefined}
                  className="ad-forms-card"
                >
                  <div>
                    <div className="ad-forms-card-label">{form.label}</div>
                    <div className="ad-forms-card-title">{form.title}</div>
                  </div>
                  <span className="ad-forms-cta">→</span>
                </a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="http://www.skyviewmontessorischool.com.ng" target="_blank" rel="noreferrer">
                <button className="ad-btn-dark" style={{ background: "#9B1C2C" }}>
                  Download Application Form
                </button>
              </a>
              <Link to="/contact">
                <button className="ad-btn-outline" style={{ color: "#FFF6F8", borderColor: "#FFF6F833" }}>
                  Contact Admissions Office
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SUPPORT */}
        <section className="ad-support">
          <div>
            <div className="ad-eyebrow" style={{ color: "#5A101855" }}>
              <span style={{ background: "#5A101855", width: 32, height: 2, display: "inline-block" }} />
              Need Help?
            </div>
            <h2 className="ad-heading ad-support-title">
              We're here<br />every step of<br />the <em>way</em>
            </h2>
            <p className="ad-support-text">
              Our admissions team is here to assist you at every step — for any
              inquiries or to schedule a school tour, reach out to us directly.
            </p>
            <div className="ad-btn-row">
              <Link to="/contact"><button className="ad-btn-primary">Contact Admissions →</button></Link>
              <Link to="/about">
                <button className="ad-btn-outline" style={{ width: "auto" }}>About Us</button>
              </Link>
            </div>
          </div>

          <div className="ad-support-right">
            {[
              { label: "Call us", title: "+234 803 355 5262 / +234 804 084 1601", href: "tel:+2348033555262", external: true },
              { label: "Email us", title: "skyviewmontessorischoolenugu@gmail.com", href: "mailto:skyviewmontessorischoolenugu@gmail.com", external: true },
              { label: "Visit us", title: "Plot 125/127 Eke Layout, off Orji Udenta Street, near Timber Market, Nike Lake Road, Enugu", href: "/contact", external: false },
              { label: "Online", title: "Download the application form from our website", href: "http://www.skyviewmontessorischool.com.ng", external: true },
            ].map((item) =>
              item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="ad-support-card">
                  <div style={{ minWidth: 0 }}>
                    <div className="ad-support-card-label">{item.label}</div>
                    <div className="ad-heading ad-support-card-title">{item.title}</div>
                  </div>
                  <span className="ad-support-card-arrow">→</span>
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="ad-support-card">
                  <div style={{ minWidth: 0 }}>
                    <div className="ad-support-card-label">{item.label}</div>
                    <div className="ad-heading ad-support-card-title">{item.title}</div>
                  </div>
                  <span className="ad-support-card-arrow">→</span>
                </Link>
              )
            )}
          </div>
        </section>

        <ContactSection />
        <Footer />
      </div>
    </>
  );
}