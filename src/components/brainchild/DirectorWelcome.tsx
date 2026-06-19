import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiBriefcase, FiBook, FiHeart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import directorImg from "@/assets/skyview-images/director.png";
const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

const director = {
  name: "The Director",
  role: "Director & Founder — Sky View Nursery, Primary & Secondary School",
  headline: "An Independent Achiever Who Unlocks Every Child's God-Given Potential",
  intro: [
    "Our Director is an independent, diligent, organised, and resourceful achiever with more than 17 years of experience in the educational sector. She possesses exceptional communication, organisational, and planning skills, and has leveraged her administrative expertise to manage Sky View effortlessly — combining creative and innovative approaches that keep the school at the forefront of quality education.",
    "A progressive-minded educationist, she firmly believes that no child is a dullard; rather, every child unwraps their God-given potential at their own unique pace. She works tirelessly to discover the ability of every child in her care, ensuring that each one is seen, celebrated, and given the opportunity to shine.",
  ],
  sections: [
    {
      icon: <FiStar size={16} />,
      title: "Philosophy & Vision",
      content: [
        "She believes no child is a dullard — every child simply unwraps their God-given potential at a different pace, and it is the school's sacred duty to wait, watch, and nurture that unfolding.",
        "Her progressive mindset drives a learning environment that is warm, structured, and deeply attentive to the individual needs of every pupil in her care.",
        "She works tirelessly to create a school culture where curiosity is celebrated, character is formed, and each child leaves more confident than they arrived.",
      ],
    },
    {
      icon: <FiBriefcase size={16} />,
      title: "Leadership & Impact",
      content: [
        "Over 17 years of hands-on experience leading and growing Sky View into one of Enugu's trusted private schools.",
        "Managed the school effortlessly through creative and innovative leadership — building systems, culture, and community simultaneously.",
        "A team player and leader par excellence, she consistently drives her team toward self-development, growth, and professional excellence.",
        "Attended numerous professional development courses, bringing global best practices directly into Sky View's classrooms.",
      ],
    },
    {
      icon: <FiBook size={16} />,
      title: "Academic Qualifications",
      content: [
        "B.A. English Language — University of Nigeria, Nsukka.",
        "Master of Education (M.Ed) in English Education — University of Jos, Plateau State.",
        "Continuous professional development through specialised courses in education leadership and pedagogy.",
      ],
    },
    {
      icon: <FiHeart size={16} />,
      title: "Personal",
      content: [
        "A committed Christian whose faith shapes her compassionate and purpose-driven approach to education.",
        "Happily married with children — giving her a deeply personal stake in the quality of education she provides.",
      ],
    },
  ],
  quote:
    "No child is a dullard. Every single child in my care carries a God-given potential that is waiting to be unwrapped — and I consider it my life's work to help them find it.",
  credentials: ["17+ Years Experience", "B.A. English (UNN)", "M.Ed English Ed (UNIJOS)", "Education Leader"],
};

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        fontSize: "0.7rem",
        padding: "4px 12px",
        borderRadius: 999,
        fontWeight: 700,
        background: `${color}12`,
        color,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

export default function DirectorWelcome() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif" }}>

      {/* ── Hero banner ── */}
      <section style={{ position: "relative", padding: "80px 24px 60px", textAlign: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 340, height: 340, borderRadius: "50%",
          background: WINE_RED, opacity: 0.05, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: -40,
          width: 220, height: 220, borderRadius: "50%",
          background: PINK, opacity: 0.05, pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}
        >
          <span style={{
            display: "inline-block", fontSize: "0.68rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: 18, padding: "6px 18px", borderRadius: 999,
            color: SKY_BLUE, background: `${SKY_BLUE}10`,
          }}>
            About Our School Director
          </span>

          <h1 style={{
            margin: "0 0 18px", fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900, color: "#0f172a", lineHeight: 1.08, letterSpacing: "-0.025em",
          }}>
            Welcome to{" "}
            <span style={{ color: WINE_RED }}>Sky View</span>
          </h1>

          <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
            A personal look at the founder who built a school where no child is ever invisible
            — and every potential is given room to flourish.
          </p>
        </motion.div>
      </section>

      {/* divider */}
      <div style={{ maxWidth: 900, margin: "0 auto 0", padding: "0 24px" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, #e2e8f0, transparent)" }} />
      </div>

      {/* ── Main director section ── */}
      <section style={{ padding: "72px 24px 96px" }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 56,
            alignItems: "flex-start",
          }}
        >
          {/* Image column */}
          <div style={{ position: "relative", flexShrink: 0, margin: "0 auto" }}>
            <div style={{
              position: "absolute", inset: 0,
              borderRadius: 40, rotate: "2deg", scale: "1.05",
              background: `${WINE_RED}10`,
            }} />
            <div style={{
              position: "relative",
              width: 240, height: 320,
              borderRadius: 36,
              overflow: "hidden",
              border: "6px solid #fff",
              boxShadow: `0 32px 64px ${WINE_RED}22, 0 8px 24px rgba(0,0,0,0.08)`,
              background: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "5rem",
            }}>
              <img src={directorImg} alt="Director" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
              background: "#fff", borderRadius: 12, padding: "8px 18px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              border: "1px solid #f1f5f9", whiteSpace: "nowrap",
            }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 800, color: WINE_RED, margin: 0 }}>
                Director &amp; Founder
              </p>
            </div>
          </div>

          {/* Text column */}
          <div style={{ flex: 1, minWidth: 280 }}>
            {/* Credential badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              {director.credentials.map((c) => <Badge key={c} label={c} color={WINE_RED} />)}
            </div>

            <h2 style={{
              margin: "0 0 6px",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.1,
            }}>
              {director.name}
            </h2>

            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: WINE_RED, marginBottom: 20 }}>
              {director.role}
            </p>

            <h3 style={{
              fontSize: "1.1rem", fontWeight: 800, color: "#1e293b",
              marginBottom: 18, lineHeight: 1.35,
            }}>
              Where <span style={{ color: WINE_RED }}>Curiosity</span> Meets{" "}
              <span style={{ color: PINK }}>Character</span>.
            </h3>

            <p style={{
              fontSize: "1rem", fontWeight: 700, color: "#1e293b",
              lineHeight: 1.5, marginBottom: 14,
            }}>
              {director.headline}
            </p>

            {/* Always-visible: first intro paragraph only */}
            <p style={{ color: "#475569", lineHeight: 1.78, marginBottom: 10, fontSize: "0.92rem" }}>
              {director.intro[0]}
            </p>

            {/* ── Expandable content ── */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  {/* Second intro paragraph */}
                  <p style={{ color: "#475569", lineHeight: 1.78, marginBottom: 24, fontSize: "0.92rem" }}>
                    {director.intro[1]}
                  </p>

                  {/* All sections */}
                  {director.sections.map((section) => (
                    <div key={section.title} style={{ marginBottom: 22 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: 8,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: `${WINE_RED}12`, color: WINE_RED, flexShrink: 0,
                        }}>
                          {section.icon}
                        </div>
                        <h3 style={{ fontWeight: 800, color: "#1e293b", fontSize: "0.9rem", margin: 0 }}>
                          {section.title}
                        </h3>
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", marginLeft: 8 }}>
                        {section.content.map((item, i) => (
                          <li key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                            <span style={{
                              marginTop: 7, width: 6, height: 6, borderRadius: "50%",
                              background: WINE_RED, flexShrink: 0,
                            }} />
                            <span style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.7 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Quote */}
                  <blockquote style={{
                    margin: "28px 0 0",
                    padding: "16px 20px",
                    borderRadius: 14,
                    background: `${WINE_RED}08`,
                    borderLeft: `4px solid ${WINE_RED}`,
                  }}>
                    <p style={{
                      fontStyle: "italic", fontSize: "0.92rem",
                      fontWeight: 600, color: WINE_RED, lineHeight: 1.7, margin: "0 0 8px",
                    }}>
                      "{director.quote}"
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "#94a3b8", margin: 0, fontWeight: 700 }}>
                      — {director.name}
                    </p>
                  </blockquote>

                  {/* Closing note */}
                  <div style={{
                    marginTop: 20, padding: "14px 18px", borderRadius: 14,
                    background: `${NAVY}08`, color: NAVY,
                    fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.6,
                  }}>
                    Thank you for trusting Sky View Nursery, Primary &amp; Secondary School
                    with your child's earliest and most formative years.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Read More / Read Less button ── */}
            <button
              onClick={() => setExpanded((v) => !v)}
              style={{
                marginTop: 20,
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "10px 22px",
                borderRadius: 999,
                border: `1.5px solid ${WINE_RED}`,
                background: expanded ? WINE_RED : "transparent",
                color: expanded ? "#fff" : WINE_RED,
                fontWeight: 700,
                fontSize: "0.82rem",
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "all 0.25s ease",
              }}
            >
              {expanded ? (
                <><FiChevronUp size={15} /> Read Less</>
              ) : (
                <><FiChevronDown size={15} /> Read More</>
              )}
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export { DirectorWelcome };