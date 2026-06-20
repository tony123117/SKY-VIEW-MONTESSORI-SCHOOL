import { useState, useRef, useEffect, CSSProperties, ReactNode } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";

// ─── Brand palette (matches index.css) ─────────────────────────────────────
const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

// ─── Data ──────────────────────────────────────────────────────────────────
const ACTIVITIES = [
  { icon: "⚽", title: "Sports & Fitness", desc: "A variety of sports that help pupils develop physical fitness, teamwork, and sportsmanship.", accent: WINE_RED },
  { icon: "🎨", title: "Art & Creativity", desc: "From painting to sculpture, our art classes encourage self-expression and creative exploration.", accent: PINK },
  { icon: "🎵", title: "Music & Performing Arts", desc: "Pupils explore their musical talents through lessons in various instruments and theatrical performances.", accent: SKY_BLUE },
  { icon: "🔬", title: "STEM Activities", desc: "Hands-on science, technology, engineering, and math activities inspire curiosity and problem-solving skills.", accent: NAVY },
  { icon: "🌍", title: "Cultural & Language Clubs", desc: "Celebrating diversity and promoting multicultural awareness and language learning.", accent: WINE_RED },
  { icon: "🤝", title: "Community Service", desc: "Instilling responsibility and compassion through service projects, visits to old people's homes, and charitable donations.", accent: PINK },
];

const CLUBS = [
  { icon: "📖", title: "Reading Club", desc: "Encouraging a love for reading through book discussions, literary events, and library resources." },
  { icon: "🧪", title: "Science Club", desc: "Fostering a passion for science through experiments, exhibitions, and field trips." },
  { icon: "🌱", title: "Environmental Club", desc: "Raising awareness about environmental issues and promoting sustainability." },
  { icon: "🤖", title: "Coding & Robotics Club", desc: "Exploring the exciting world of programming and robotics." },
  { icon: "🖌️", title: "Art Club", desc: "Enhancing artistic skills and creativity through workshops and exhibitions." },
  { icon: "🎤", title: "Debate Club", desc: "Cultivating public speaking and critical thinking abilities." },
];

const EVENTS = [
  { icon: "🏃", title: "Annual Sports Day", desc: "A day filled with sportsmanship, teamwork, and friendly competition." },
  { icon: "🎭", title: "Cultural Festivals", desc: "Celebrating diverse cultures through music, dance, and food." },
  { icon: "🔬", title: "Science Fair", desc: "Showcasing pupils' scientific discoveries and innovations." },
  { icon: "🖼️", title: "Art Exhibitions", desc: "Displaying the creative talents of our budding artists." },
  { icon: "🎓", title: "Graduation Ceremony", desc: "Marking the transition to the next academic level with pride and accomplishment." },
  { icon: "👨‍👩‍👧", title: "Parent-Teacher Meetings", desc: "Strengthening the partnership between parents and educators for the benefit of our pupils." },
];

const NAV_ITEMS = [
  { href: "#activities", label: "Activities" },
  { href: "#clubs", label: "Clubs" },
  { href: "#events", label: "Events" },
  { href: "#partnership", label: "Partnership" },
];

// ─── Responsive styles injected once ──────────────────────────────────────
const RESPONSIVE_CSS = `
  .sl-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .sl-section-pad { padding: 80px 0; }
  .sl-inner { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
  .sl-inner-md { max-width: 860px; margin: 0 auto; padding: 0 20px; }
  .sl-hero-title { font-size: 48px; }

  @media (max-width: 768px) {
    .sl-grid-3 { grid-template-columns: 1fr !important; }
    .sl-section-pad { padding: 56px 0 !important; }
    .sl-inner { padding: 0 16px !important; }
    .sl-inner-md { padding: 0 16px !important; }
    .sl-hero-title { font-size: 30px !important; line-height: 1.25 !important; }
    .sl-h2 { font-size: 26px !important; }
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

function Eyebrow({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      style={{
        display: "inline-block", background: `${color}15`, color,
        fontSize: 11, fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.1em", padding: "6px 16px", borderRadius: 999, marginBottom: 16,
      }}
    >
      {children}
    </span>
  );
}

// ─── EXTRACURRICULAR ACTIVITIES ─────────────────────────────────────────────
function ActivitiesSection() {
  return (
    <section id="activities" className="sl-section-pad" style={{ background: "#fff" }}>
      <div className="sl-inner">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Eyebrow color={WINE_RED}>🌟 Beyond the Classroom</Eyebrow>
            <h2 className="sl-h2" style={{ fontSize: 36, fontWeight: 900, color: NAVY, margin: "0 0 12px" }}>
              Extracurricular Activities
            </h2>
            <p style={{ color: "#6b7280", fontSize: 15, margin: "0 auto", maxWidth: 560 }}>
              At Skyview Montessori School, we believe that education extends far beyond the
              classroom. A diverse range of activities, clubs, and events enrich the lives of our pupils.
            </p>
          </div>
        </Fade>
        <div className="sl-grid-3">
          {ACTIVITIES.map((a, i) => (
            <Fade key={a.title} delay={i * 0.06}>
              <div
                style={{
                  background: "#fff", border: `1.5px solid ${a.accent}20`, borderRadius: 20,
                  padding: "28px 26px", height: "100%", boxShadow: "0 2px 12px rgba(0,0,0,.04)",
                  transition: "all .25s",
                }}
              >
                <span
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 52, height: 52, borderRadius: 14, fontSize: 24, marginBottom: 16,
                    background: `${a.accent}12`,
                  }}
                >
                  {a.icon}
                </span>
                <h3 style={{ fontWeight: 800, color: NAVY, fontSize: 16, margin: "0 0 8px" }}>{a.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{a.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CLUBS ───────────────────────────────────────────────────────────────────
function ClubsSection() {
  return (
    <section id="clubs" className="sl-section-pad" style={{ background: "#FAF8F5" }}>
      <div className="sl-inner">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Eyebrow color={SKY_BLUE}>📚 Get Involved</Eyebrow>
            <h2 className="sl-h2" style={{ fontSize: 36, fontWeight: 900, color: NAVY, margin: "0 0 12px" }}>
              Clubs & Organisations
            </h2>
            <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>
              Spaces where pupils can pursue their passions, interests, and talents.
            </p>
          </div>
        </Fade>
        <div className="sl-grid-3">
          {CLUBS.map((c, i) => (
            <Fade key={c.title} delay={i * 0.06}>
              <div
                style={{
                  background: "#fff", border: `1.5px solid ${SKY_BLUE}20`, borderRadius: 20,
                  padding: "28px 26px", height: "100%", boxShadow: "0 2px 12px rgba(0,0,0,.04)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 52, height: 52, borderRadius: 14, fontSize: 24, marginBottom: 16,
                    background: `${SKY_BLUE}12`,
                  }}
                >
                  {c.icon}
                </span>
                <h3 style={{ fontWeight: 800, color: NAVY, fontSize: 16, margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────
function EventsSection() {
  return (
    <section id="events" className="sl-section-pad" style={{ background: NAVY, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: .08, backgroundImage: `radial-gradient(circle at 2px 2px, ${PINK} 1px, transparent 0)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div className="sl-inner" style={{ position: "relative" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span
              style={{
                display: "inline-block", background: "rgba(255,255,255,.1)", color: PINK,
                fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,.15)", marginBottom: 16,
              }}
            >
              🎉 Celebrations
            </span>
            <h2 className="sl-h2" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>
              Events & Celebrations
            </h2>
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: 15, margin: 0 }}>
              The moments that bring our pupils, parents, and educators together.
            </p>
          </div>
        </Fade>
        <div className="sl-grid-3">
          {EVENTS.map((e, i) => (
            <Fade key={e.title} delay={i * 0.06}>
              <div
                style={{
                  background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 20, padding: "28px 26px", height: "100%",
                }}
              >
                <span style={{ fontSize: 30, marginBottom: 14, display: "block" }}>{e.icon}</span>
                <h3 style={{ fontWeight: 800, color: "#fff", fontSize: 16, margin: "0 0 8px" }}>{e.title}</h3>
                <p style={{ color: "rgba(255,255,255,.6)", fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PARTNERSHIP / GOAL ─────────────────────────────────────────────────────
function PartnershipSection() {
  return (
    <section id="partnership" className="sl-section-pad" style={{ background: "#fff" }}>
      <div className="sl-inner-md">
        <Fade>
          <div
            style={{
              background: `linear-gradient(135deg, ${WINE_RED}08 0%, ${PINK}08 100%)`,
              border: `1.5px solid ${WINE_RED}18`, borderRadius: 28,
              padding: "48px 40px", textAlign: "center",
            }}
          >
            <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>🤝</span>
            <h2 className="sl-h2" style={{ fontSize: 30, fontWeight: 900, color: NAVY, margin: "0 0 16px" }}>
              A True Partnership
            </h2>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, margin: "0 auto 14px", maxWidth: 600 }}>
              Our Parent-Teacher Meetings strengthen the partnership between parents and educators
              for the benefit of our pupils — because the best outcomes happen when home and school
              work together.
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, margin: "0 auto", maxWidth: 600 }}>
              Our goal is to provide pupils with a well-rounded education that goes beyond academics,
              nurturing their passions, interests, and talents. These extracurricular activities,
              clubs, and events create a vibrant and engaging environment where pupils can truly thrive.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ─── ROOT ──────────────────────────────────────────────────────────────────
export default function CommunityPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", WebkitFontSmoothing: "antialiased" }}>
      <style>{RESPONSIVE_CSS}</style>
      <Navbar />

      <nav
        style={{
          position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,.97)",
          backdropFilter: "blur(8px)", borderBottom: `1.5px solid ${WINE_RED}10`,
          boxShadow: "0 1px 8px rgba(0,0,0,.04)",
        }}
      >
        <div className="sl-inner" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "12px 0", minWidth: "max-content" }}>
            {NAV_ITEMS.map(n => (
              <a
                key={n.href}
                href={n.href}
                style={{
                  padding: "7px 12px", fontSize: 11, fontWeight: 700, color: "#6b7280",
                  textDecoration: "none", borderRadius: 8, textTransform: "uppercase",
                  letterSpacing: "0.07em", whiteSpace: "nowrap", transition: "all .15s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${WINE_RED}10`; (e.currentTarget as HTMLAnchorElement).style.color = WINE_RED; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: NAVY, padding: "64px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .08, backgroundImage: `radial-gradient(circle at 2px 2px, ${PINK} 1px, transparent 0)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <span
            style={{
              display: "inline-block", background: "rgba(255,255,255,.1)", color: PINK,
              fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
              padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,.15)", marginBottom: 20,
            }}
          >
            Student Life
          </span>
          <h1 className="sl-hero-title" style={{ fontWeight: 900, color: "#fff", lineHeight: 1.15, margin: "0 0 16px" }}>
            Life at <span style={{ color: PINK }}>Skyview</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 16, margin: 0, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            Education that extends far beyond the classroom — explore the activities, clubs,
            and events that enrich pupil life at Skyview Montessori School.
          </p>
        </div>
      </div>

      <ActivitiesSection />
      <ClubsSection />
      <EventsSection />
      <PartnershipSection />
      <Footer />
    </div>
  );
}