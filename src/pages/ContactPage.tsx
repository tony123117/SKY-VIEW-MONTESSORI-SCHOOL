import { useState } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";

import img1 from "@/assets/images/544A7353.jpg.jpg";
import img2 from "@/assets/images/544A7364.jpg.jpg";
import img3 from "@/assets/images/544A7290.jpg.jpg";

const contactImages = [img1, img2, img3];

const contactDetails = [
  {
    label: "Address",
    value: "No. 8 D.C Onyekwelu Street\nBeside LomaLinda Estate, Enugu",
    icon: "↗",
    accent: "#F4845F",
  },
  {
    label: "Phone",
    value: "+234 706 117 5897",
    icon: "↗",
    accent: "#4E9AF1",
  },
  {
    label: "Email",
    value: "info@kaylaschool.com",
    icon: "↗",
    accent: "#6C63FF",
  },
  {
    label: "Office Hours",
    value: "Mon – Fri: 7:30 AM – 4:00 PM\nSaturday: 8:00 AM – 12:00 PM",
    icon: "↗",
    accent: "#2DCE89",
  },
];

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "admissions", label: "Admissions Inquiry" },
  { value: "programs", label: "Program Information" },
  { value: "tour", label: "Schedule a Tour" },
  { value: "general", label: "General Inquiry" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ct-root { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #1A1A2E; }

        /* HERO */
        .ct-hero {
          background: #1A1A2E;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          min-height: 52vh;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 768px) { .ct-hero { grid-template-columns: 1fr; min-height: auto; } }

        .ct-hero-img-col {
          position: relative;
          overflow: hidden;
          height: 52vh;
          min-height: 340px;
        }
        @media (max-width: 768px) { .ct-hero-img-col { display: none; } .ct-hero-img-col:first-child { display: block; height: 260px; } }
        .ct-hero-img-col img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: transform 0.6s; }
        .ct-hero-img-col:hover img { transform: scale(1.04); }
        .ct-hero-img-col::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, #1A1A2Ecc 100%);
        }

        .ct-hero-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 48px 60px;
          background: linear-gradient(to top, #1A1A2E 0%, transparent 100%);
          z-index: 10;
        }
        @media (max-width: 768px) { .ct-hero-content { padding: 28px 24px; position: relative; } }

        .ct-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase;
          color: #F4845F; margin-bottom: 14px;
          display: flex; align-items: center; gap: 12px;
        }
        .ct-eyebrow::before { content: ''; display: block; width: 32px; height: 2px; background: #F4845F; }
        .ct-hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 3.8rem);
          color: #FAF8F5; font-weight: 300; line-height: 1.05;
          max-width: 700px;
        }
        .ct-hero-title em { font-style: italic; color: #F4845F; }
        .ct-hero-sub { color: #FAF8F566; font-size: 14px; line-height: 1.7; font-weight: 300; margin-top: 14px; max-width: 480px; }

        /* MAIN BODY */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0;
          max-width: 100%;
        }
        @media (max-width: 900px) { .ct-body { grid-template-columns: 1fr; } }

        /* LEFT: CONTACT INFO */
        .ct-info {
          padding: 80px 60px;
          background: #FAF8F5;
          border-right: 1px solid #1A1A2E0c;
        }
        @media (max-width: 768px) { .ct-info { padding: 60px 24px; border-right: none; border-bottom: 1px solid #1A1A2E0c; } }

        .ct-section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: #F4845F; margin-bottom: 12px; }
        .ct-section-title { font-family: 'Fraunces', serif; font-size: 2rem; color: #1A1A2E; font-weight: 300; margin-bottom: 48px; line-height: 1.2; }
        .ct-section-title em { font-style: italic; color: #F4845F; }

        .ct-detail-list { display: flex; flex-direction: column; gap: 0; margin-bottom: 48px; }
        .ct-detail-row {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 24px 0;
          border-bottom: 1px solid #1A1A2E0a;
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
        .ct-detail-value { font-size: 14px; color: #1A1A2E; line-height: 1.6; font-weight: 300; white-space: pre-line; }

        /* Map placeholder */
        .ct-map {
          background: #1A1A2E;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 16/7;
          display: flex; align-items: center; justify-content: center;
        }
        .ct-map-text { font-family: 'Fraunces', serif; font-style: italic; color: #FAF8F533; font-size: 1.1rem; font-weight: 300; }
        .ct-map-pin {
          position: absolute;
          width: 40px; height: 40px;
          border-radius: 50% 50% 50% 0;
          background: #F4845F;
          transform: rotate(-45deg);
          top: 50%; left: 50%;
          margin-top: -20px; margin-left: -20px;
          animation: mapPulse 2s infinite;
        }
        .ct-map-pin::after {
          content: '';
          position: absolute;
          width: 14px; height: 14px;
          background: #1A1A2E;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        @keyframes mapPulse {
          0%, 100% { box-shadow: 0 0 0 0 #F4845F44; }
          50% { box-shadow: 0 0 0 16px transparent; }
        }

        /* RIGHT: FORM */
        .ct-form-col {
          padding: 80px 60px;
          background: #1A1A2E;
        }
        @media (max-width: 768px) { .ct-form-col { padding: 60px 24px; } }

        .ct-form-title { font-family: 'Fraunces', serif; font-size: 2rem; color: #FAF8F5; font-weight: 300; margin-bottom: 8px; }
        .ct-form-title em { font-style: italic; color: #F4845F; }
        .ct-form-sub { font-size: 14px; color: #FAF8F555; font-weight: 300; margin-bottom: 40px; line-height: 1.6; }

        .ct-form { display: flex; flex-direction: column; gap: 20px; }
        .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 600px) { .ct-form-row { grid-template-columns: 1fr; } }

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
        .ct-input:focus { border-color: #F4845F; background: #FAF8F50c; }
        .ct-input option { background: #1A1A2E; color: #FAF8F5; }

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
        .ct-textarea:focus { border-color: #F4845F; background: #FAF8F50c; }

        .ct-submit {
          background: #F4845F;
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
        .ct-submit:hover { background: #e8734f; transform: translateY(-2px); box-shadow: 0 12px 32px #F4845F33; }
        .ct-submit.success { background: #2DCE89; }

        .ct-success-msg {
          text-align: center;
          padding: 20px;
          background: #2DCE8915;
          border: 1px solid #2DCE8933;
          border-radius: 4px;
          color: #2DCE89;
          font-size: 14px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>

      <div className="ct-root">
        <Navbar />

        {/* HERO — 3-panel photo strip */}
        <section className="ct-hero">
          {contactImages.map((img, i) => (
            <div key={i} className="ct-hero-img-col">
              <img src={img} alt={`Contact ${i + 1}`} />
            </div>
          ))}
          <div className="ct-hero-content">
            <div className="ct-eyebrow">Get In Touch</div>
            <h1 className="ct-hero-title">
              We'd love to <em>hear</em> from you
            </h1>
            <p className="ct-hero-sub">
              Whether it's a question about admissions, a tour request, or just a conversation — our doors are always open.
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
              <div className="ct-section-label" style={{ color: "#F4845F" }}>Send a Message</div>
              <h2 className="ct-form-title">Let's <em>talk</em></h2>
              <p className="ct-form-sub">Fill out the form below and our team will get back to you within one business day.</p>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div>
                    <label className="ct-field-label">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="ct-input" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="ct-field-label">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="ct-input" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="ct-form-row">
                  <div>
                    <label className="ct-field-label">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="ct-input" placeholder="+234 xxx xxx xxxx" />
                  </div>
                  <div>
                    <label className="ct-field-label">Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleInputChange} className="ct-input">
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="ct-field-label">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required className="ct-textarea" placeholder="Tell us how we can help you..." />
                </div>

                <button type="submit" className={`ct-submit${submitted ? " success" : ""}`}>
                  {submitted ? "✓ Message Sent!" : "Send Message →"}
                </button>

                {submitted && (
                  <div className="ct-success-msg">
                    Thank you! We'll get back to you within one business day.
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