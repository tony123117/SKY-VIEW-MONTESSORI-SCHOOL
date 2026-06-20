import { useState } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";

import img1 from "@/assets/SKYVIEW-IMAGES/music.png";
import img2 from "@/assets/SKYVIEW-IMAGES/playground.png";
import img3 from "@/assets/SKYVIEW-IMAGES/craft.jpeg";
import getResponsiveSrc from '@/lib/image';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

const contactImages = [img1, img2, img3];

// ─── Brand palette (matches index.css) ─────────────────────────────────────
const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

const contactDetails = [
  {
    label: "Address",
    value: "Plot 125/127 Eke Layout\nOff Orji Udenta Street, Near Timber Market\nNike Lake Road, Enugu",
    icon: "↗",
    accent: WINE_RED,
  },
  {
    label: "Phone",
    value: "+234 803 355 5262\n+234 804 084 1601",
    icon: "↗",
    accent: SKY_BLUE,
  },
  {
    label: "Email",
    value: "skyviewmontessorischoolenugu@gmail.com",
    icon: "↗",
    accent: PINK,
  },
  {
    label: "Office Hours",
    value: "Monday – Friday: 8:00 AM – 3:00 PM",
    icon: "↗",
    accent: NAVY,
  },
];

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "admissions", label: "Admissions Inquiry" },
  { value: "programs", label: "Program Information" },
  { value: "tour", label: "Schedule a Tour" },
  { value: "general", label: "General Inquiry" },
];

const BACKEND_URL = "https://brainchild-backend-1pud.vercel.app";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    child_name: "",
    user_phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: formData.user_name,
          user_email: formData.user_email,
          child_name: formData.child_name,
          user_phone: formData.user_phone,
          message: formData.subject
            ? `[${subjects.find((s) => s.value === formData.subject)?.label}]\n\n${formData.message}`
            : formData.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.detail || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          user_name: "",
          user_email: "",
          child_name: "",
          user_phone: "",
          subject: "",
          message: "",
        });
      }, 5000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        .ct-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; overflow-x: hidden; }

        /* HERO */
        .ct-hero {
          background: ${NAVY};
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          min-height: 52vh;
          overflow: hidden;
          position: relative;
        }

        .ct-hero-img-col {
          position: relative;
          overflow: hidden;
          height: 52vh;
          min-height: 340px;
        }
        .ct-hero-img-col img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: transform 0.6s; }
        .ct-hero-img-col:hover img { transform: scale(1.04); }
        .ct-hero-img-col::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, ${NAVY}cc 100%);
        }

        .ct-hero-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 48px 60px;
          background: linear-gradient(to top, ${NAVY} 0%, transparent 100%);
          z-index: 10;
        }

        .ct-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;
          color: ${PINK}; margin-bottom: 14px;
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .ct-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: ${PINK}; flex-shrink: 0; }
        .ct-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.8rem, 4vw, 3.8rem);
          color: #FAF8F5; font-weight: 300; line-height: 1.1;
          max-width: 700px;
        }
        .ct-hero-title em { font-style: italic; color: ${PINK}; }
        .ct-hero-sub { color: #FAF8F566; font-size: 14px; line-height: 1.7; font-weight: 300; margin-top: 14px; max-width: 480px; }

        /* MAIN BODY */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0;
          max-width: 100%;
        }

        /* LEFT: CONTACT INFO */
        .ct-info {
          padding: 80px 60px;
          background: #FAF8F5;
          border-right: 1px solid ${NAVY}0c;
        }

        .ct-section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: ${WINE_RED}; margin-bottom: 12px; }
        .ct-section-title { font-family: 'Fraunces', serif; font-size: 2rem; color: #1A1A2E; font-weight: 300; margin-bottom: 48px; line-height: 1.2; }
        .ct-section-title em { font-style: italic; color: ${WINE_RED}; }

        .ct-detail-list { display: flex; flex-direction: column; gap: 0; margin-bottom: 48px; }
        .ct-detail-row {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 24px 0;
          border-bottom: 1px solid ${NAVY}0a;
          transition: background 0.2s;
        }
        .ct-detail-row:first-child { padding-top: 0; }
        .ct-detail-icon {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; flex-shrink: 0;
          border: 1px solid var(--accent);
          color: var(--accent);
          margin-top: 2px;
        }
        .ct-detail-label { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #1A1A2E44; margin-bottom: 5px; }
        .ct-detail-value { font-size: 14px; color: #1A1A2E; line-height: 1.6; font-weight: 300; white-space: pre-line; word-break: break-word; }

        /* Map placeholder */
        .ct-map {
          background: ${NAVY};
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 16/7;
          display: flex; align-items: center; justify-content: center;
        }
        .ct-map-text { font-family: 'Fraunces', serif; font-style: italic; color: #FAF8F533; font-size: 1.1rem; font-weight: 300; text-align: center; padding: 0 16px; }
        .ct-map-pin {
          position: absolute;
          width: 40px; height: 40px;
          border-radius: 50% 50% 50% 0;
          background: ${WINE_RED};
          transform: rotate(-45deg);
          top: 50%; left: 50%;
          margin-top: -20px; margin-left: -20px;
          animation: mapPulse 2s infinite;
        }
        .ct-map-pin::after {
          content: '';
          position: absolute;
          width: 14px; height: 14px;
          background: ${NAVY};
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        @keyframes mapPulse {
          0%, 100% { box-shadow: 0 0 0 0 ${WINE_RED}44; }
          50% { box-shadow: 0 0 0 16px transparent; }
        }

        /* RIGHT: FORM */
        .ct-form-col {
          padding: 80px 60px;
          background: ${NAVY};
        }

        .ct-form-title { font-family: 'Fraunces', serif; font-size: 2rem; color: #FAF8F5; font-weight: 300; margin-bottom: 8px; }
        .ct-form-title em { font-style: italic; color: ${PINK}; }
        .ct-form-sub { font-size: 14px; color: #FAF8F555; font-weight: 300; margin-bottom: 40px; line-height: 1.6; }

        .ct-form { display: flex; flex-direction: column; gap: 20px; }
        .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        .ct-field-label {
          display: block; font-size: 10px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #FAF8F544; margin-bottom: 8px;
        }
        .ct-input {
          width: 100%;
          background: #FAF8F508;
          border: 1px solid #FAF8F515;
          border-radius: 4px;
          padding: 14px 18px;
          font-size: 14px;
          color: #FAF8F5;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .ct-input::placeholder { color: #FAF8F533; }
        .ct-input:focus { border-color: ${PINK}; background: #FAF8F50c; }
        .ct-input option { background: ${NAVY}; color: #FAF8F5; }

        .ct-textarea {
          width: 100%;
          background: #FAF8F508;
          border: 1px solid #FAF8F515;
          border-radius: 4px;
          padding: 14px 18px;
          font-size: 14px;
          color: #FAF8F5;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          outline: none;
          transition: all 0.2s;
          resize: none;
          min-height: 140px;
          box-sizing: border-box;
        }
        .ct-textarea::placeholder { color: #FAF8F533; }
        .ct-textarea:focus { border-color: ${PINK}; background: #FAF8F50c; }

        .ct-submit {
          background: ${WINE_RED};
          color: #FAF8F5;
          border: none; cursor: pointer;
          padding: 18px 40px;
          border-radius: 4px;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.3s;
          width: 100%;
        }
        .ct-submit:hover:not(:disabled) { background: #7A1623; transform: translateY(-2px); box-shadow: 0 12px 32px ${WINE_RED}33; }
        .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .ct-submit.success { background: ${SKY_BLUE}; }

        .ct-success-msg {
          text-align: center;
          padding: 20px;
          background: ${SKY_BLUE}15;
          border: 1px solid ${SKY_BLUE}33;
          border-radius: 4px;
          color: ${SKY_BLUE};
          font-size: 14px;
          font-weight: 500;
          margin-top: 8px;
        }

        .ct-error-msg {
          text-align: center;
          padding: 16px 20px;
          background: ${WINE_RED}15;
          border: 1px solid ${WINE_RED}33;
          border-radius: 4px;
          color: ${WINE_RED};
          font-size: 14px;
          font-weight: 500;
          margin-top: 8px;
        }

        .ct-spinner {
          display: inline-block;
          width: 14px; height: 14px;
          border: 2px solid #FAF8F544;
          border-top-color: #FAF8F5;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          margin-right: 8px;
          vertical-align: middle;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════ */

        @media (max-width: 1024px) {
          .ct-info, .ct-form-col { padding: 64px 40px; }
        }

        @media (max-width: 900px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-info { border-right: none; border-bottom: 1px solid ${NAVY}0c; }
        }

        @media (max-width: 768px) {
          .ct-hero { grid-template-columns: 1fr; min-height: auto; }
          .ct-hero-img-col { display: none; height: 260px; }
          .ct-hero-img-col:first-child { display: block; }
          .ct-hero-content { padding: 28px 24px; position: relative; }
          .ct-info, .ct-form-col { padding: 48px 24px; }
          .ct-section-title, .ct-form-title { font-size: 1.6rem; }
          .ct-form-row { grid-template-columns: 1fr; gap: 16px; }
        }

        @media (max-width: 480px) {
          .ct-hero-img-col:first-child { height: 200px; }
          .ct-hero-content { padding: 20px 16px; }
          .ct-info, .ct-form-col { padding: 36px 16px; }
          .ct-detail-row { gap: 14px; }
          .ct-detail-icon { width: 34px; height: 34px; }
          .ct-submit { padding: 16px 24px; font-size: 12px; }
        }
      `}</style>

      <div className="ct-root">
        <Navbar />

        {/* HERO — 3-panel photo strip */}
        <section className="ct-hero">
          {contactImages.map((img, i) => (
            <div key={i} className="ct-hero-img-col">
              <ResponsiveImage src={img} alt={`Contact ${i + 1}`} widths={[480,768,1024]} />
            </div>
          ))}
          <div className="ct-hero-content">
            <div className="ct-eyebrow">Get In Touch</div>
            <h1 className="ct-hero-title">
              We'd love to <em>hear</em> from you
            </h1>
            <p className="ct-hero-sub">
              We're here to assist you and answer any questions you may have about Skyview Montessori School — admissions, school life, or anything else.
            </p>
          </div>
        </section>

        {/* BODY */}
        <div className="ct-body">

          {/* LEFT: INFO */}
          <AnimatedSection>
            <div className="ct-info">
              <div className="ct-section-label">Find Us</div>
              <h2 className="ct-section-title">Visit our <em>campus</em></h2>

              <div className="ct-detail-list">
                {contactDetails.map((d) => (
                  <div key={d.label} className="ct-detail-row" style={{ "--accent": d.accent } as React.CSSProperties}>
                    <div className="ct-detail-icon">{d.icon}</div>
                    <div>
                      <div className="ct-detail-label">{d.label}</div>
                      <div className="ct-detail-value">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="ct-map">
                <div className="ct-map-pin" />
                <span className="ct-map-text">Interactive map coming soon</span>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT: FORM */}
          <AnimatedSection delay={0.15}>
            <div className="ct-form-col">
              <div className="ct-section-label" style={{ color: PINK }}>Send a Message</div>
              <h2 className="ct-form-title">Let's <em>talk</em></h2>
              <p className="ct-form-sub">Fill out the form below and our team will get back to you within one business day.</p>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div>
                    <label className="ct-field-label">Parent / Guardian Name</label>
                    <input
                      type="text" name="user_name" value={formData.user_name}
                      onChange={handleInputChange} required
                      className="ct-input" placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="ct-field-label">Email Address</label>
                    <input
                      type="email" name="user_email" value={formData.user_email}
                      onChange={handleInputChange} required
                      className="ct-input" placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="ct-form-row">
                  <div>
                    <label className="ct-field-label">Child's Name</label>
                    <input
                      type="text" name="child_name" value={formData.child_name}
                      onChange={handleInputChange} required
                      className="ct-input" placeholder="Child's full name"
                    />
                  </div>
                  <div>
                    <label className="ct-field-label">Phone Number</label>
                    <input
                      type="tel" name="user_phone" value={formData.user_phone}
                      onChange={handleInputChange}
                      className="ct-input" placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="ct-field-label">Subject</label>
                  <select
                    name="subject" value={formData.subject}
                    onChange={handleInputChange}
                    className="ct-input"
                  >
                    {subjects.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="ct-field-label">Your Message</label>
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleInputChange} required
                    className="ct-textarea" placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className={`ct-submit${submitted ? " success" : ""}`}
                  disabled={loading || submitted}
                >
                  {loading && <span className="ct-spinner" />}
                  {submitted ? "✓ Message Sent!" : loading ? "Sending…" : "Send Message →"}
                </button>

                {submitted && (
                  <div className="ct-success-msg">
                    Thank you! We'll get back to you within one business day.
                  </div>
                )}

                {error && (
                  <div className="ct-error-msg">
                    ⚠ {error}
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>

        <Footer />
      </div>
    </>
  );
}