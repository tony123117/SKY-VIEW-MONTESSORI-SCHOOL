import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import director from "@/assets/SKYVIEW-IMAGES/director.png";

import buildingImg from "@/assets/SKYVIEW-IMAGES/building2.jpeg";
import musicImg from "@/assets/SKYVIEW-IMAGES/music.png";
import curiculum from "@/assets/SKYVIEW-IMAGES/FOOTBALL.png";

import img1 from "@/assets/SKYVIEW-IMAGES/director.png";
import img2 from "@/assets/SKYVIEW-IMAGES/computer.png";
import img3 from "@/assets/SKYVIEW-IMAGES/playground.png";
import img4 from "@/assets/SKYVIEW-IMAGES/craft.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ─── Brand palette (matches index.css) ─────────────────────────────────────
const WINE_RED = "#9B1C2C";
const SKY_BLUE = "#4A9EDB";
const PINK = "#FF6B9D";
const NAVY = "#1F3A5F";

// ─── data ────────────────────────────────────────────────────────────────────

const heroSlides = [
  { image: buildingImg, title: "Discover Skyview", subtitle: "Educational excellence since July 4th, 2015" },
  { image: musicImg, title: "Great Achievers", subtitle: "Creative thinkers, entrepreneurs, researchers, solution providers" },
  { image: curiculum, title: "Montessori Approach", subtitle: "Hands-on, interactive, and enjoyable learning" },
];

const stats = [
  { num: "10+", label: "Years of Excellence", color: WINE_RED },
  { num: "500+", label: "Alumni", color: PINK },
  { num: "30+", label: "Qualified Staff", color: SKY_BLUE },
];

// "Our Commitment to Excellence" — drawn from the school's About Us copy
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

// ─── colour strip ─────────────────────────────────────────────────────────────

function ColorStrip() {
  return (
    <div className="flex h-[5px] w-full">
      <div className="flex-1" style={{ background: WINE_RED }} />
      <div className="flex-1" style={{ background: SKY_BLUE }} />
      <div className="flex-1" style={{ background: PINK }} />
      <div className="flex-1" style={{ background: NAVY }} />
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>

        {/* ── TOP COLOUR STRIP ──────────────────────────────────────────── */}
        <ColorStrip />

        {/* ── HERO CAROUSEL ─────────────────────────────────────────────── */}
        <section className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide, i) => (
                <CarouselItem key={i}>
                  <div className="relative h-[62vh] md:h-[75vh] flex items-center justify-center overflow-hidden">

                    {/* bg image */}
                    <div className="absolute inset-0">
                      <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(135deg, ${NAVY}e0 0%, ${WINE_RED}55 55%, ${NAVY}e0 100%)` }}
                      />
                    </div>

                    {/* floating colour blobs */}
                    <div className="absolute top-8 right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none" style={{ background: `${PINK}30` }} />
                    <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full blur-2xl pointer-events-none" style={{ background: `${SKY_BLUE}25` }} />

                    {/* content */}
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                      <AnimatedSection>
                        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60 mb-3">
                          Skyview Montessori School
                        </p>

                        <span
                          className="inline-flex items-center gap-2 border text-white text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2 rounded-full mb-5"
                          style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                        >
                          🏫 About Us
                        </span>

                        <h1
                          className="text-4xl md:text-6xl leading-tight mb-4 text-white font-bold"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {slide.title.split(" ").map((word, wi) =>
                            wi === slide.title.split(" ").length - 1 ? (
                              <span key={wi} className="italic" style={{ color: PINK }}> {word}</span>
                            ) : (
                              <span key={wi}>{word} </span>
                            )
                          )}
                        </h1>
                        <p className="text-base text-white/75 max-w-md mx-auto leading-relaxed">
                          {slide.subtitle}
                        </p>
                      </AnimatedSection>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/15 border-white/25 text-white hover:bg-white/25" />
            <CarouselNext className="right-4 bg-white/15 border-white/25 text-white hover:bg-white/25" />
          </Carousel>
        </section>

        <ColorStrip />

        {/* ── STORY ─────────────────────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden bg-white">
          {/* soft tinted bg blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: `${PINK}10` }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: `${SKY_BLUE}10` }} />

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <AnimatedSection>
              {/* eyebrow */}
              <span
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border"
                style={{ background: `${WINE_RED}10`, color: WINE_RED, borderColor: `${WINE_RED}25` }}
              >
                📖 Our Story
              </span>

              <h2
                className="text-3xl md:text-4xl leading-tight mb-5 font-bold"
                style={{ fontFamily: "var(--font-heading)", color: NAVY }}
              >
                Educational Excellence{" "}
                <span className="italic" style={{ color: WINE_RED }}>Since 2015</span>
              </h2>

              <p className="text-[15px] leading-relaxed mb-4" style={{ color: `${NAVY}aa` }}>
                Skyview Montessori School began its journey of educational excellence on July 4th, 2015, and we
                attribute our growth in size, quality of education, and reputation to the grace of God. At Skyview,
                we are committed to providing a Montessori-style education that sets the standard for excellence.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: `${NAVY}aa` }}>
                Our curriculum is thoughtfully designed, drawing from both British and Nigerian topics to offer a
                well-rounded education. We believe in active learning, and our approach relies heavily on
                interactive, hands-on, and enjoyable activities that foster a love for learning.
              </p>
              <p className="text-[15px] leading-relaxed mb-10" style={{ color: `${NAVY}aa` }}>
                We refer to our students as the <strong>"Great Achievers"</strong> — and we aim to shape them into
                Creative Thinkers, Entrepreneurs, Researchers, and Solution Providers, ready to unlock their potential
                and turn their passion for learning into a lifelong habit.
              </p>

              {/* stats row */}
              <div className="flex gap-8 flex-wrap">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-4xl font-black"
                      style={{ fontFamily: "var(--font-heading)", color: s.color }}
                    >
                      {s.num}
                    </div>
                    <div className="text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color: `${NAVY}80` }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* photo grid */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {[img1, img2, img3, img4].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden rounded-2xl shadow-lg border-2 border-white"
                    style={{ height: "170px" }}
                  >
                    <img
                      src={img}
                      alt="school life"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ColorStrip />

        {/* ── OUR COMMITMENT TO EXCELLENCE ──────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden" style={{ background: "#FAF8F5" }}>
          <div className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle, ${PINK}22 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <AnimatedSection className="text-center mb-14 relative z-10">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border"
              style={{ background: `${SKY_BLUE}15`, color: SKY_BLUE, borderColor: `${SKY_BLUE}30` }}
            >
              ⭐ Our Commitment to Excellence
            </span>
            <h2
              className="text-3xl md:text-4xl leading-tight font-bold"
              style={{ fontFamily: "var(--font-heading)", color: NAVY }}
            >
              World-Class Learning,{" "}
              <span className="italic" style={{ color: PINK }}>Every Day</span>
            </h2>
            <p className="text-sm max-w-lg mx-auto mt-3" style={{ color: `${NAVY}90` }}>
              Your partner in providing the best educational experience for your child.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
            {commitments.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-white border-2 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300"
                  style={{ borderColor: `${WINE_RED}15` }}
                >
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4"
                    style={{ background: `${WINE_RED}10` }}
                  >
                    {item.icon}
                  </span>
                  <h3
                    className="text-base mb-2 font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: NAVY }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: `${NAVY}90` }}>{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <ColorStrip />

        {/* ── LEADERSHIP (DIRECTOR) ─────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden" style={{ background: `${SKY_BLUE}0c` }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: `${WINE_RED}10` }} />

          <AnimatedSection className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border"
              style={{ background: `${WINE_RED}10`, color: WINE_RED, borderColor: `${WINE_RED}25` }}
            >
              👑 Leadership
            </span>
            <h2
              className="text-3xl md:text-4xl leading-tight font-bold"
              style={{ fontFamily: "var(--font-heading)", color: NAVY }}
            >
              About Our{" "}
              <span className="italic" style={{ color: WINE_RED }}>School Director</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] grid md:grid-cols-[280px_1fr]"
            >
              {/* photo */}
              <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                <img src={director} alt="Dr. (Mrs.) Ijeoma Darling Onwubuya" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${NAVY}99 0%, transparent 45%)` }}
                />
                <span
                  className="absolute bottom-4 left-4 text-white text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
                  style={{ background: WINE_RED }}
                >
                  Director & Founder
                </span>
              </div>

              {/* bio */}
              <div className="px-7 md:px-10 py-8 md:py-10">
                <h3
                  className="text-xl md:text-2xl mb-1 font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: NAVY }}
                >
                  The Director: Mrs Amaka Phillip
                </h3>
                <p className="text-[12px] font-bold tracking-[0.1em] uppercase mb-5" style={{ color: SKY_BLUE }}>
                  17+ Years in Education
                </p>

                <p className="text-[14px] leading-relaxed mb-3" style={{ color: `${NAVY}aa` }}>
                  An independent, diligent, organised, and resourceful achiever with more than 17 years' experience
                  in the educational sector. She has good communication, organisational, and planning skills, with
                  administrative experience in the education sector, and has been able to manage the school
                  effortlessly with creative and innovative skills.
                </p>
                <p className="text-[14px] leading-relaxed mb-3" style={{ color: `${NAVY}aa` }}>
                  A progressive-minded educationist who believes that no child is a dullard — however, they unwrap
                  their God-given potential at different paces. She works tirelessly to discover the ability of
                  every child in her care, and is a team player and a leader par excellence, with the urge to lead
                  her team positively and efficiently for self-development and growth.
                </p>
                <p className="text-[14px] leading-relaxed mb-5" style={{ color: `${NAVY}aa` }}>
                  She is a graduate of English Language from the University of Nigeria, Nsukka, and also holds a
                  Master's degree in Ed/English from the University of Jos, Plateau State. She has attended various
                  courses to enhance professionalism and brings this to bear in the growth and quality of learning
                  at Skyview. She is a Christian, happily married, with children.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["B.A. English (UNN)", "M.Ed/English (UNIJOS)", "17+ Yrs Experience"].map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full"
                      style={{ background: `${SKY_BLUE}12`, color: SKY_BLUE }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ColorStrip />

        {/* ── VISION / MISSION / VALUES ─────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden" style={{ background: NAVY }}>
          {/* background glow blobs */}
          <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: `${SKY_BLUE}20` }} />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: `${WINE_RED}20` }} />
          <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full blur-2xl pointer-events-none" style={{ background: `${PINK}15` }} />

          {/* subtle dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <AnimatedSection className="relative z-10 text-center mb-14">
            <span
              className="inline-flex items-center gap-2 border text-white text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2 rounded-full mb-5"
              style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              ⭐ Vision, Mission & Values
            </span>
            <h2
              className="text-3xl md:text-4xl text-white leading-tight font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What We{" "}
              <span className="italic" style={{ color: PINK }}>Stand For</span>
            </h2>
          </AnimatedSection>

          <div className="relative z-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <AnimatedSection delay={0}>
              <div
                className="rounded-2xl p-8 h-full border-2"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: `${SKY_BLUE}40` }}
              >
                <span className="text-3xl mb-4 block select-none">🔭</span>
                <h3 className="text-xl mb-3 font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  To harness the potentials of each child towards holistic formation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div
                className="rounded-2xl p-8 h-full border-2"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: `${PINK}40` }}
              >
                <span className="text-3xl mb-4 block select-none">🎯</span>
                <h3 className="text-xl mb-3 font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  To promote sound moral and quality education built on Godly principles.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15} className="relative z-10">
            <h3 className="text-center text-white/80 text-[12px] font-bold tracking-[0.2em] uppercase mb-5">
              Our Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {coreValues.map((v) => (
                <span
                  key={v}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full text-white"
                  style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${PINK}40` }}
                >
                  {v}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <ColorStrip />

        {/* ── CONTACT ───────────────────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: `${WINE_RED}08` }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: `${SKY_BLUE}08` }} />

          <AnimatedSection className="text-center mb-12 relative z-10">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border"
              style={{ background: `${WINE_RED}10`, color: WINE_RED, borderColor: `${WINE_RED}25` }}
            >
              📍 Visit & Reach Us
            </span>
            <h2
              className="text-3xl md:text-4xl leading-tight font-bold"
              style={{ fontFamily: "var(--font-heading)", color: NAVY }}
            >
              Get In{" "}
              <span className="italic" style={{ color: SKY_BLUE }}>Touch</span>
            </h2>
            <p className="text-sm max-w-md mx-auto mt-3" style={{ color: `${NAVY}90` }}>
              We'd love to welcome you to the Skyview family. Reach out anytime.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto relative z-10">
            <AnimatedSection delay={0}>
              <div className="rounded-2xl p-7 h-full border-2" style={{ background: `${WINE_RED}08`, borderColor: `${WINE_RED}25` }}>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4" style={{ background: `${WINE_RED}12` }}>
                  📍
                </span>
                <h3 className="text-[15px] font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
                  Our Address
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: `${NAVY}90` }}>
                  Plot 125/127 Eke Layout, Off Orji Udenta Street,<br />
                  Near Timber Market, Nike Lake Road,<br />
                  Enugu, Nigeria.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="rounded-2xl p-7 h-full border-2" style={{ background: `${SKY_BLUE}08`, borderColor: `${SKY_BLUE}25` }}>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4" style={{ background: `${SKY_BLUE}12` }}>
                  ✉️
                </span>
                <h3 className="text-[15px] font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
                  Email Us
                </h3>
                <a
                  href="mailto:skyviewmontessorischoolenugu@gmail.com"
                  className="text-[13px] font-semibold leading-relaxed break-all hover:underline"
                  style={{ color: SKY_BLUE }}
                >
                  skyviewmontessorischoolenugu@gmail.com
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <div className="rounded-2xl p-7 h-full border-2" style={{ background: `${PINK}08`, borderColor: `${PINK}30` }}>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4" style={{ background: `${PINK}14` }}>
                  📞
                </span>
                <h3 className="text-[15px] font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: NAVY }}>
                  Call Us
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: `${NAVY}90` }}>
                  <a href="tel:+2348033555262" className="font-semibold hover:underline" style={{ color: WINE_RED }}>+234 803 355 5262</a>
                  <br />
                  <a href="tel:+2348140841601" className="font-semibold hover:underline" style={{ color: WINE_RED }}>+234 814 084 1601</a>
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-10 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white text-[13px] font-bold tracking-[0.06em] px-6 py-3 rounded-full transition-colors duration-200"
              style={{ background: NAVY }}
              onMouseEnter={(e) => (e.currentTarget.style.background = WINE_RED)}
              onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
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