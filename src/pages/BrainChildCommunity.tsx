import { useState, useRef, useEffect, CSSProperties, ReactNode } from "react";
import { Navbar } from "@/components/brainchild/Navbar";

// ─── Types ─────────────────────────────────────────────────────────────────
interface FormData {
  parentName: string; email: string; phone: string;
  childName: string; dob: string; program: string;
  prevSchool: string; message: string; howHeard: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const PROGRAMS = [
  { id: "preschool", label: "Pre-School",  ages: "Ages 1½–2",  termFee: 85000,  regFee: 15000, uniform: 12000, books: 8000  },
  { id: "nursery",   label: "Nursery 1–3", ages: "Ages 2½–5",  termFee: 95000,  regFee: 15000, uniform: 14000, books: 10000 },
  { id: "lower",     label: "Lower Grade", ages: "Ages 5½–8",  termFee: 110000, regFee: 18000, uniform: 16000, books: 14000 },
  { id: "upper",     label: "Upper Grade", ages: "Ages 8½–11", termFee: 125000, regFee: 18000, uniform: 16000, books: 18000 },
];

const TESTIMONIALS = [
  { name: "Mrs. Adaeze Okonkwo", role: "Parent of Chidi, Nursery 2",       text: "Brain Child has transformed my son's love for learning. The teachers are incredibly nurturing and patient. Chidi comes home every day excited to tell me what he learned!", initials: "AO", color: "#e11d48" },
  { name: "Mr. Emeka Eze",        role: "Parent of Amara, Lower Grade",     text: "The facilities here are world-class for a nursery school. Computer lab, science lab, music studio — my daughter is getting a complete education. Best decision we ever made.", initials: "EE", color: "#7c3aed" },
  { name: "Mrs. Ngozi Obi",       role: "Parent of Tochukwu, Upper Grade",  text: "My son has won two academic competitions since joining Brain Child. The teachers push every child to excel while keeping learning fun. I couldn't be prouder.", initials: "NO", color: "#0284c7" },
  { name: "Dr. Chioma Nwosu",     role: "Parent of Twins, Nursery 1",       text: "Having both twins in the same school and seeing them thrive individually speaks to how well the teachers understand each child's unique needs. Exceptional care.", initials: "CN", color: "#7c3aed" },
  { name: "Mr. Kelechi Anozie",   role: "Parent of Zara, Pre-School",       text: "I was nervous about my daughter starting school so young, but Brain Child's Pre-School program made her transition so smooth. She loves every minute of it!", initials: "KA", color: "#b45309" },
  { name: "Mrs. Ifeoma Chukwu",   role: "Parent of David, Lower Grade",     text: "The communication from teachers is outstanding. I always know exactly how my child is doing. The school feels like an extended family.", initials: "IC", color: "#be185d" },
];

const NEWS = [
  { date: "Apr 15, 2026", category: "Event",     title: "Annual Cultural Day — A Spectacular Success",           excerpt: "Over 300 parents and guests attended our vibrant Cultural Day showcase, featuring dances, drama, and art exhibitions from every class.", icon: "🎭", accent: "#0284c7" },
  { date: "Mar 30, 2026", category: "STEM",      title: "New STEM Lab Equipment Installed",                      excerpt: "Brain Child has upgraded its science and computer labs with new interactive boards and robotics kits, enhancing STEM education across all grades.", icon: "🔬", accent: "#7c3aed" },
  { date: "Mar 12, 2026", category: "Sports",    title: "Inter-House Sports Day — Green House Emerges Champion", excerpt: "Students showcased incredible athletic talent at our annual Sports Day. Green House won the overall trophy after a thrilling final day of competition.", icon: "🏅", accent: "#b45309" },
  { date: "Feb 20, 2026", category: "Community", title: "Parent-Teacher Conference Draws Record Attendance",     excerpt: "This term's PTA meeting had our highest ever attendance rate, reflecting the strong partnership between Brain Child and our parent community.", icon: "🤝", accent: "#be185d" },
];

const ACHIEVEMENTS = [
  { title: "Best Primary School Award",   year: "2025", category: "Institution", icon: "🥇", desc: "Enugu Education Board"       },
  { title: "National Math Olympiad",      year: "2025", category: "Academic",    icon: "📐", desc: "Top 10 — National Finals"    },
  { title: "Inter-School Art Exhibition", year: "2025", category: "Arts",        icon: "🎨", desc: "1st Place — South East Zone" },
  { title: "Junior Robotics Challenge",   year: "2024", category: "STEM",        icon: "🤖", desc: "2nd Place — State Finals"    },
  { title: "Cultural Dance Competition",  year: "2024", category: "Arts",        icon: "💃", desc: "1st Place — Enugu State"     },
  { title: "Reading & Literacy Award",    year: "2024", category: "Academic",    icon: "📚", desc: "Excellence Recognition"      },
  { title: "Environmental Science Quiz",  year: "2023", category: "STEM",        icon: "🌿", desc: "1st Place — Zone B"          },
];

const STAFF = [
  { name: "Dr. (Mrs.) Ijeoma Darling Onwubuya", role: "Director & Founder",               subject: "Director & Founder",   exp: "18 yrs", initials: "ID" },
  { name: "Mr. Francis",                         role: "Head of Grade Session",             subject: "Upper Grade Lead",      exp: "12 yrs", initials: "MF" },
  { name: "Ms Tonia Edeh",                       role: "Head Teacher of Kindergarten Session", subject: "Kindergarten Lead",  exp: "9 yrs",  initials: "TE" },
  { name: "Ezeorah Ogechi Regina",               role: "School Administrator",              subject: "School Administrator", exp: "7 yrs",  initials: "EO" },
];

const STAFF_COLORS = ["#0f172a","#1e3a5f","#1e40af","#2563eb","#7c3aed","#0284c7","#c9a84c","#be185d"];

const NAV_ITEMS = [
  { href: "#admissions",  label: "Apply"        },
  { href: "#fees",        label: "Fees"         },
  { href: "#testimonials",label: "Reviews"      },
  { href: "#news",        label: "News"         },
  { href: "#achievements",label: "Achievements" },
  { href: "#staff",       label: "Our Team"     },
  { href: "#newsletter",  label: "Newsletter"   },
];

const fmt = (n: number) => `₦${n.toLocaleString()}`;
const API = "https://brainchild-backend-1pud.vercel.app/api/send";

// ─── Responsive styles injected once ──────────────────────────────────────
const RESPONSIVE_CSS = `
  .cp-form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .cp-news-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .cp-achieve-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
  .cp-staff-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
  .cp-section-pad { padding: 80px 0; }
  .cp-inner { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
  .cp-inner-sm { max-width: 680px; margin: 0 auto; padding: 0 20px; }
  .cp-inner-md { max-width: 860px; margin: 0 auto; padding: 0 20px; }
  .cp-inner-fee { max-width: 560px; margin: 0 auto; padding: 0 20px; }
  .cp-hero-title { font-size: 52px; }
  .cp-card-pad { padding: 36px 32px; }
  .cp-testimonial-pad { padding: 40px 48px; }
  .cp-newsletter-pad { padding: 56px 48px; }
  .cp-step-labels { display: flex; justify-content: center; gap: 72px; font-size: 11px; }

  @media (max-width: 768px) {
    .cp-form-2col { grid-template-columns: 1fr !important; gap: 0 !important; }
    .cp-news-grid { grid-template-columns: 1fr !important; }
    .cp-achieve-grid { grid-template-columns: repeat(2,1fr) !important; gap: 12px !important; }
    .cp-staff-grid { grid-template-columns: repeat(2,1fr) !important; gap: 12px !important; }
    .cp-section-pad { padding: 56px 0 !important; }
    .cp-inner { padding: 0 16px !important; }
    .cp-inner-sm { padding: 0 16px !important; }
    .cp-inner-md { padding: 0 16px !important; }
    .cp-inner-fee { padding: 0 16px !important; }
    .cp-hero-title { font-size: 34px !important; line-height: 1.2 !important; }
    .cp-card-pad { padding: 24px 18px !important; }
    .cp-testimonial-pad { padding: 24px 20px !important; }
    .cp-newsletter-pad { padding: 36px 24px !important; }
    .cp-step-labels { gap: 28px !important; }
    .cp-h2 { font-size: 26px !important; }
    .cp-step-bar { width: 36px !important; }
    .cp-news-item-mb { margin-bottom: 0; }
    .cp-fee-price { font-size: 48px !important; }
  }

  @media (max-width: 420px) {
    .cp-achieve-grid { grid-template-columns: 1fr !important; }
    .cp-hero-title { font-size: 28px !important; }
  }
`;

// ─── useFade hook ──────────────────────────────────────────────────────────
function useFade(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "-50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

interface FadeProps { children: ReactNode; delay?: number; style?: CSSProperties; }
function Fade({ children, delay = 0, style = {} }: FadeProps) {
  const [ref, v] = useFade();
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(24px)",
        transition: `opacity .55s ${delay}s cubic-bezier(.22,1,.36,1), transform .55s ${delay}s cubic-bezier(.22,1,.36,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const INP: CSSProperties = {
  width: "100%", border: "1.5px solid #bfdbfe", borderRadius: 10,
  padding: "10px 14px", fontSize: 14, background: "#f8f6f0",
  outline: "none", color: "#0f172a", boxSizing: "border-box",
};

const LBL: CSSProperties = {
  display: "block", fontSize: 11, fontWeight: 700, color: "#c9a84c",
  textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6,
};

// ─── ADMISSION ─────────────────────────────────────────────────────────────
function AdmissionSection() {
  const [step, setStep]   = useState(1);
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [form, setForm]   = useState<FormData>({
    parentName: "", email: "", phone: "", childName: "",
    dob: "", program: "", prevSchool: "", message: "", howHeard: "Social Media",
  });
  const up = (k: keyof FormData, v: string) => setForm(f => ({ ...f, [k]: v }));

  const selectedProgram = PROGRAMS.find(p => p.id === form.program);

  const handleSubmit = async () => {
    setStatus("sending");
    const programLabel = selectedProgram ? `${selectedProgram.label} (${selectedProgram.ages})` : form.program;
    const messageBody = [
      `=== APPLICATION FORM SUBMISSION ===`, ``,
      `Program: ${programLabel}`,
      `Child's Date of Birth: ${form.dob || "N/A"}`,
      `Previous School: ${form.prevSchool || "None"}`,
      `How they heard about us: ${form.howHeard}`, ``,
      `Additional Notes: ${form.message || "None"}`,
    ].join("\n");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name:  form.parentName,
          user_email: form.email,
          child_name: form.childName,
          user_phone: form.phone,
          message:    messageBody,
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const resetForm = () => {
    setStatus("idle"); setStep(1);
    setForm({ parentName: "", email: "", phone: "", childName: "", dob: "", program: "", prevSchool: "", message: "", howHeard: "Social Media" });
  };

  return (
    <section id="admissions" className="cp-section-pad" style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -120, width: 350, height: 350, borderRadius: "50%", background: "#f8f6f0", pointerEvents: "none" }} />
      <div className="cp-inner-sm" style={{ position: "relative" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", background: "#fef9ec", color: "#c9a84c", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, marginBottom: 16 }}>Admissions Open</span>
            <h2 className="cp-h2" style={{ fontSize: 36, fontWeight: 900, color: "#0f172a", margin: "0 0 12px", lineHeight: 1.15 }}>Apply Online Today</h2>
            <p style={{ color: "#6b7280", fontSize: 15, margin: 0, maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>Complete the form below and our admissions team will contact you within 24 hours.</p>
          </div>
        </Fade>

        <Fade delay={0.08}>
          {/* Step indicator */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 8 }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, background: step >= s ? "#c9a84c" : "#f3f4f6", color: step >= s ? "#fff" : "#9ca3af", transition: "all .3s", flexShrink: 0 }}>{s}</div>
                {s < 3 && <div className="cp-step-bar" style={{ width: 64, height: 2, background: step > s ? "#c9a84c" : "#e5e7eb", transition: "all .4s" }} />}
              </div>
            ))}
          </div>
          <div className="cp-step-labels" style={{ display: "flex", justifyContent: "center", gap: 72, fontSize: 11, color: "#9ca3af", fontWeight: 600, marginBottom: 32, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {["Parent Info", "Child Info", "Details"].map((l, i) => (
              <span key={i} style={{ color: step >= i + 1 ? "#1d4ed8" : "#9ca3af", fontWeight: step >= i + 1 ? 700 : 600 }}>{l}</span>
            ))}
          </div>
        </Fade>

        <Fade delay={0.12}>
          <div className="cp-card-pad" style={{ background: "#fff", border: "1.5px solid #eff6ff", borderRadius: 20, boxShadow: "0 8px 40px #c9a84c10" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#0f172a", margin: "0 0 8px" }}>Application Submitted!</h3>
                <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 320, margin: "0 auto" }}>Thank you, <strong>{form.parentName}</strong>! We'll reach out to <strong>{form.email}</strong> within 24 hours.</p>
                <button onClick={resetForm} style={{ marginTop: 20, fontSize: 13, color: "#c9a84c", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", fontWeight: 600 }}>
                  Submit another application
                </button>
              </div>
            ) : (
              <div>
                {step === 1 && (
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginTop: 0, marginBottom: 24 }}>Parent / Guardian Information</h3>
                    <div style={{ marginBottom: 20 }}>
                      <label style={LBL}>Full Name *</label>
                      <input style={INP} placeholder="e.g. Mrs. Adaeze Okafor" value={form.parentName} onChange={e => up("parentName", e.target.value)} />
                    </div>
                    <div className="cp-form-2col" style={{ marginBottom: 0 }}>
                      <div style={{ marginBottom: 16 }}>
                        <label style={LBL}>Email Address *</label>
                        <input type="email" style={INP} placeholder="you@example.com" value={form.email} onChange={e => up("email", e.target.value)} />
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <label style={LBL}>WhatsApp / Phone *</label>
                        <input type="tel" style={INP} placeholder="+234 800 000 0000" value={form.phone} onChange={e => up("phone", e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginTop: 0, marginBottom: 24 }}>Child's Information</h3>
                    <div style={{ marginBottom: 20 }}>
                      <label style={LBL}>Child's Full Name *</label>
                      <input style={INP} placeholder="e.g. Chukwuemeka Okafor" value={form.childName} onChange={e => up("childName", e.target.value)} />
                    </div>
                    <div className="cp-form-2col" style={{ marginBottom: 20 }}>
                      <div style={{ marginBottom: 16 }}>
                        <label style={LBL}>Date of Birth *</label>
                        <input type="date" style={INP} value={form.dob} onChange={e => up("dob", e.target.value)} />
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <label style={LBL}>Program Applying For *</label>
                        <select style={INP} value={form.program} onChange={e => up("program", e.target.value)}>
                          <option value="">Select program…</option>
                          {PROGRAMS.map(p => <option key={p.id} value={p.id}>{p.label} ({p.ages})</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={LBL}>Previous School (if any)</label>
                      <input style={INP} placeholder="Leave blank if first school" value={form.prevSchool} onChange={e => up("prevSchool", e.target.value)} />
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginTop: 0, marginBottom: 24 }}>Additional Details</h3>
                    <div style={{ marginBottom: 20 }}>
                      <label style={LBL}>How did you hear about us?</label>
                      <select style={INP} value={form.howHeard} onChange={e => up("howHeard", e.target.value)}>
                        <option>Social Media</option>
                        <option>Word of Mouth</option>
                        <option>Google Search</option>
                        <option>Flyer / Signboard</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={LBL}>Any Special Needs or Notes?</label>
                      <textarea style={{ ...INP, resize: "none", height: 100 }} placeholder="Allergies, learning needs, or anything we should know…" value={form.message} onChange={e => up("message", e.target.value)} />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f8f6f0", border: "1.5px solid #bfdbfe", borderRadius: 10, padding: 14 }}>
                      <input type="checkbox" id="consent" style={{ marginTop: 2, accentColor: "#c9a84c", flexShrink: 0 }} />
                      <label htmlFor="consent" style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6 }}>I consent to Brain Child Nursery and Primary School contacting me regarding this application and storing my information securely.</label>
                    </div>
                    {status === "error" && (
                      <p style={{ color: "#dc2626", fontSize: 13, marginTop: 12, textAlign: "center" }}>Something went wrong. Please try again.</p>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, paddingTop: 24, borderTop: "1.5px solid #f0f7ff" }}>
                  {step > 1
                    ? <button onClick={() => setStep(s => s - 1)} style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", background: "none", border: "none", cursor: "pointer", padding: "10px 0" }}>← Back</button>
                    : <div />
                  }
                  <button
                    disabled={status === "sending"}
                    onClick={() => { if (step < 3) setStep(s => s + 1); else handleSubmit(); }}
                    style={{ padding: "12px 24px", background: status === "sending" ? "#94a3b8" : "linear-gradient(135deg,#c9a84c,#a07830)", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 12, border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", boxShadow: "0 4px 16px #c9a84c30", transition: "all .2s", whiteSpace: "nowrap" }}
                  >
                    {step < 3 ? "Continue →" : status === "sending" ? "Submitting…" : "Submit 🎓"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ─── FEES ──────────────────────────────────────────────────────────────────
function FeeSection() {
  return (
    <section id="fees" className="cp-section-pad" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: .07, backgroundImage: "radial-gradient(circle at 2px 2px,#fcd34d 1px,transparent 0)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div className="cp-inner-fee" style={{ position: "relative" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ display: "inline-block", background: "rgba(255,255,255,.1)", color: "#bfdbfe", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,.1)", marginBottom: 16 }}>School Fees</span>
            <h2 className="cp-h2" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Simple, Flat Fee</h2>
            <p style={{ color: "#bfdbfe", fontSize: 14, margin: 0 }}>One straightforward admission fee for all classes — no hidden charges.</p>
          </div>
        </Fade>
        <Fade delay={0.08}>
          <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 24, padding: "40px 36px", textAlign: "center" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#bfdbfe", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 12px" }}>Annual Admission Fee — All Classes</p>
            <div className="cp-fee-price" style={{ fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 8 }}>₦20,000</div>
            <p style={{ color: "#fcd34d", fontSize: 13, margin: "0 0 32px" }}>Per child · Per academic year</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left", marginBottom: 32 }}>
              {[
                { icon: "✅", text: "Applies to all programs — Pre-School through Upper Grade" },
                { icon: "✅", text: "Covers full academic year tuition" },
                { icon: "✅", text: "Contact us to discuss payment arrangements" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: "#bfdbfe", fontSize: 13 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <a href="tel:+2347061175897" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 0", background: "#c9a84c", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 12, textDecoration: "none" }}>
              📞 Call Us to Enrol
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="cp-section-pad" style={{ background: "#f9fafb" }}>
      <div className="cp-inner-md">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", background: "#fef9ec", color: "#c9a84c", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, marginBottom: 16 }}>Parent Voices</span>
            <h2 className="cp-h2" style={{ fontSize: 36, fontWeight: 900, color: "#0f172a", margin: "0 0 12px" }}>What Families Say</h2>
            <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>Real words from parents who trust us with their most precious ones.</p>
          </div>
        </Fade>
        <Fade delay={0.08}>
          <div className="cp-testimonial-pad" style={{ background: "#fff", border: "1.5px solid #f0f7ff", borderRadius: 24, position: "relative", boxShadow: "0 8px 48px #c9a84c0d", marginBottom: 28 }}>
            <div style={{ position: "absolute", top: 24, right: 24, fontSize: 60, color: "#f0f7ff", lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 15, background: t.color, flexShrink: 0 }}>{t.initials}</div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: 15 }}>{t.name}</div>
                <div style={{ color: "#c9a84c", fontSize: 13, marginTop: 2 }}>{t.role}</div>
              </div>
              <div style={{ display: "flex", gap: 1, flexShrink: 0 }}>{[1,2,3,4,5].map(s => <span key={s} style={{ color: "#fbbf24", fontSize: 18 }}>★</span>)}</div>
            </div>
            <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.75, fontStyle: "italic", margin: 0, position: "relative", zIndex: 1 }}>"{t.text}"</p>
          </div>
        </Fade>
        <Fade delay={0.12}>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {TESTIMONIALS.map((tm, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: "#fff", background: tm.color, border: "none", cursor: "pointer", opacity: active === i ? 1 : .4, transform: active === i ? "scale(1.12)" : "scale(1)", transition: "all .2s" }}>
                {tm.initials}
              </button>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ─── NEWS ──────────────────────────────────────────────────────────────────
function NewsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="news" className="cp-section-pad" style={{ background: "#fff" }}>
      <div className="cp-inner">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", background: "#fef9ec", color: "#c9a84c", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, marginBottom: 16 }}>Latest Updates</span>
            <h2 className="cp-h2" style={{ fontSize: 36, fontWeight: 900, color: "#0f172a", margin: "0 0 12px" }}>News & Announcements</h2>
            <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>Stay up to date with everything happening at Brain Child.</p>
          </div>
        </Fade>
        <div className="cp-news-grid">
          {NEWS.map((item, i) => (
            <Fade key={i} delay={i * .06}>
              <div onClick={() => setExpanded(expanded === i ? null : i)} style={{ background: "#fff", border: "1.5px solid #f3f4f6", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "box-shadow .2s", boxShadow: expanded === i ? "0 12px 48px rgba(0,0,0,.08)" : "0 2px 8px rgba(0,0,0,.04)", height: "100%" }}>
                <div style={{ height: 4, background: item.accent }} />
                <div style={{ padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 999, background: item.accent, color: "#fff" }}>{item.category}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8, fontWeight: 500 }}>{item.date}</div>
                  <h3 style={{ fontWeight: 800, color: "#0f172a", fontSize: 14, lineHeight: 1.4, margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: "0 0 10px" }}>{item.excerpt}</p>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#c9a84c" }}>{expanded === i ? "Show less ↑" : "Read more →"}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ACHIEVEMENTS ──────────────────────────────────────────────────────────
function AchievementsSection() {
  return (
    <section id="achievements" className="cp-section-pad" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
      <div className="cp-inner" style={{ position: "relative" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", background: "rgba(251,191,36,.15)", color: "#fbbf24", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(251,191,36,.2)", marginBottom: 16 }}>Hall of Fame</span>
            <h2 className="cp-h2" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Student Achievements Wall</h2>
            <p style={{ color: "#bfdbfe", fontSize: 14, margin: 0 }}>Celebrating the wins that make Brain Child proud.</p>
          </div>
        </Fade>
        <div className="cp-achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <Fade key={i} delay={i * .05}>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 18, padding: "24px 18px", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{a.icon}</div>
                <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", padding: "3px 10px", borderRadius: 999, background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.65)", border: "1px solid rgba(255,255,255,.12)", marginBottom: 10 }}>{a.category}</span>
                <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 13, lineHeight: 1.35, margin: "0 0 6px" }}>{a.title}</h3>
                <p style={{ color: "#bfdbfe", fontSize: 11, margin: "0 0 8px" }}>{a.desc}</p>
                <div style={{ color: "rgba(134,239,172,.5)", fontSize: 11, fontFamily: "monospace" }}>{a.year}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STAFF ─────────────────────────────────────────────────────────────────
function StaffSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="staff" className="cp-section-pad" style={{ background: "#f9fafb" }}>
      <div className="cp-inner">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "inline-block", background: "#fef9ec", color: "#c9a84c", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, marginBottom: 16 }}>Our People</span>
            <h2 className="cp-h2" style={{ fontSize: 36, fontWeight: 900, color: "#0f172a", margin: "0 0 12px" }}>Meet Our Team</h2>
            <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>Dedicated, experienced educators who make Brain Child the special place it is.</p>
          </div>
        </Fade>
        <div className="cp-staff-grid">
          {STAFF.map((s, i) => (
            <Fade key={i} delay={i * .05}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ background: "#fff", border: "1.5px solid #f3f4f6", borderRadius: 20, padding: 24, textAlign: "center", boxShadow: hovered === i ? "0 12px 40px #c9a84c12" : "0 2px 8px rgba(0,0,0,.04)", transform: hovered === i ? "translateY(-4px)" : "none", transition: "all .25s" }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 16, background: STAFF_COLORS[i] }}>
                  {s.initials}
                </div>
                <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 13, lineHeight: 1.3 }}>{s.name}</div>
                <div style={{ color: "#c9a84c", fontSize: 12, fontWeight: 600, marginTop: 4 }}>{s.role}</div>
                <div style={{ color: "#9ca3af", fontSize: 11, marginTop: 2 }}>{s.subject}</div>
                {hovered === i && (
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1.5px solid #f0f7ff" }}>
                    <span style={{ display: "inline-block", fontSize: 11, background: "#fef9ec", color: "#c9a84c", padding: "3px 10px", borderRadius: 999, fontWeight: 600 }}>{s.exp} experience</span>
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── NEWSLETTER ────────────────────────────────────────────────────────────
function NewsletterSection() {
  const [name,   setName]   = useState("");
  const [email,  setEmail]  = useState("");
  const [type,   setType]   = useState("parent");
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const NL_INP: CSSProperties = {
    background: "rgba(255,255,255,.1)", border: "1.5px solid rgba(255,255,255,.15)",
    color: "#fff", borderRadius: 12, padding: "13px 18px",
    fontSize: 14, outline: "none", boxSizing: "border-box", width: "100%",
  };

  const handleSubscribe = async () => {
    if (!email || !name) return;
    setStatus("sending");
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name:  name,
          user_email: email,
          child_name: "N/A",
          user_phone: "N/A",
          message:    `=== NEWSLETTER SUBSCRIPTION ===\n\nSubscriber Type: ${type}\nName: ${name}\nEmail: ${email}\n\nThis person has subscribed to the Brain Child newsletter.`,
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="newsletter" className="cp-section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 16px" }}>
        <Fade>
          <div className="cp-newsletter-pad" style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)", borderRadius: 28, textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 20px 80px #c9a84c20" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📬</div>
              <h2 className="cp-h2" style={{ fontSize: 30, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Stay in the Loop</h2>
              <p style={{ color: "#bfdbfe", fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>Get school news, event updates, and term reminders delivered straight to your inbox.</p>

              {status === "success" ? (
                <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 16, padding: 24 }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: 17, margin: "0 0 6px" }}>You're subscribed, {name}!</p>
                  <p style={{ color: "#bfdbfe", fontSize: 13, margin: 0 }}>We'll keep you updated on everything at Brain Child.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 6, flexWrap: "wrap" }}>
                    {["parent", "guardian", "alumni"].map(t => (
                      <button key={t} onClick={() => setType(t)} style={{ padding: "6px 16px", borderRadius: 999, fontSize: 12, fontWeight: 700, textTransform: "capitalize", background: type === t ? "#c9a84c" : "rgba(255,255,255,.1)", color: type === t ? "#fff" : "#bfdbfe", border: "none", cursor: "pointer", transition: "all .2s" }}>{t}</button>
                    ))}
                  </div>
                  <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} style={NL_INP} />
                  <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} style={NL_INP} />
                  <button
                    onClick={handleSubscribe}
                    disabled={status === "sending"}
                    style={{ padding: "14px 0", background: status === "sending" ? "#a07830" : "#c9a84c", color: "#fff", fontWeight: 800, fontSize: 14, borderRadius: 12, border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", boxShadow: "0 4px 20px rgba(201,168,76,.35)", transition: "all .2s" }}
                  >
                    {status === "sending" ? "Subscribing…" : "Subscribe — It's Free ✉️"}
                  </button>
                  {status === "error" && (
                    <p style={{ color: "#fca5a5", fontSize: 12, margin: 0 }}>Something went wrong. Please try again.</p>
                  )}
                  <p style={{ color: "#fcd34d", fontSize: 12, margin: 0 }}>No spam. Unsubscribe anytime.</p>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ─── ROOT ──────────────────────────────────────────────────────────────────
export default function CommunityPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <style>{RESPONSIVE_CSS}</style>
      <Navbar />

      <nav style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,.97)", backdropFilter: "blur(8px)", borderBottom: "1.5px solid #eff6ff", boxShadow: "0 1px 8px rgba(201,168,76,.06)" }}>
        <div className="cp-inner" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "12px 0", minWidth: "max-content" }}>
            {NAV_ITEMS.map(n => (
              <a key={n.href} href={n.href}
                style={{ padding: "7px 12px", fontSize: 11, fontWeight: 700, color: "#6b7280", textDecoration: "none", borderRadius: 8, textTransform: "uppercase", letterSpacing: "0.07em", whiteSpace: "nowrap", transition: "all .15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0f7ff"; (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)", padding: "64px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .08, backgroundImage: "radial-gradient(circle at 2px 2px,#fcd34d 1px,transparent 0)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <h1 className="cp-hero-title" style={{ fontWeight: 900, color: "#fff", lineHeight: 1.15, margin: "0 0 16px" }}>
            Join the Brain Child<br /><span style={{ color: "#fcd34d" }}>Family</span>
          </h1>
          <p style={{ color: "#bfdbfe", fontSize: 16, margin: 0, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Apply online, explore fees, read parent stories, and meet the team that makes us special.
          </p>
        </div>
      </div>

      <AdmissionSection />
      <FeeSection />
      <TestimonialsSection />
      <NewsSection />
      <AchievementsSection />
      <StaffSection />
      <NewsletterSection />
    </div>
  );
}