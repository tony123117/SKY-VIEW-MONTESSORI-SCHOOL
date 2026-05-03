import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import francis from "@/assets/images/Francis.jpeg";
import tonia from "@/assets/images/mrs tonia.jpeg";
import ogechi from "@/assets/images/ogechis.jpg";
import director from "@/assets/images/BrainChildDirector.jpeg";

import creativeImg from "@/assets/images/creative.jpeg";
import teachersImg from "@/assets/images/teachers.jpeg";
import enterImg from "@/assets/images/enter.jpg";
import outsideImg from "@/assets/images/outside.jpg";
import curiculum from "@/assets/images/curiculum.jpg";

import img1 from "@/assets/images/activities.jpg";
import img2 from "@/assets/images/544A7178.jpg.jpg";
import img3 from "@/assets/images/544A7188.jpg.jpg";
import img4 from "@/assets/images/544A7218.jpg.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ─── data ────────────────────────────────────────────────────────────────────

const heroSlides = [
  { image: creativeImg,  title: "Our Story",               subtitle: "Brain Child Nursery and Primary School" },
  { image: teachersImg,  title: "Excellence in Education", subtitle: "Nurturing young minds with excellence" },
  { image: enterImg,     title: "Community & Growth",      subtitle: "Where learning meets character" },
  { image: curiculum,    title: "Holistic Learning",       subtitle: "Growing hearts and minds together" },
];

const leadership = [
  {
    name: "Dr. (Mrs.) Ijeoma Darling Onwubuya",
    role: "Director & Founder",
    image: director,
    bio: "With over 15 years in early childhood education, Dr. Ijeoma brings passion and expertise to every aspect of Brain Child.",
    accent: "#f4831f",
    bar: "bg-[#f4831f]",
    initials: "IJ",
    bg: "from-[#1a1f5e] to-[#303778]",
  },
  {
    name: "Mr. Francis",
    role: "Head of Academics",
    image: francis,
    bio: "Leading our academic excellence with innovative teaching methods and curriculum development.",
    accent: "#4361ee",
    bar: "bg-[#4361ee]",
    initials: "FR",
    bg: "from-[#0d3b6e] to-[#185fa5]",
  },
  {
    name: "Ms. Tonia Edeh",
    role: "Head of Operations",
    image: tonia,
    bio: "Ensuring smooth operations and creating a safe, nurturing environment for all students.",
    accent: "#e63946",
    bar: "bg-[#e63946]",
    initials: "TE",
    bg: "from-[#5c1a3a] to-[#a0355e]",
  },
  {
    name: "Ezeorah Ogechi Regina",
    role: "Administrator",
    image: ogechi,
    bio: "Dedicated to creating safe and nurturing spaces where every child can thrive and grow.",
    accent: "#2dc653",
    bar: "bg-[#2dc653]",
    initials: "OR",
    bg: "from-[#1a3a1a] to-[#2d7a2d]",
  },
];

const values = [
  {
    icon: "❤️",
    title: "Compassion",
    desc: "We treat every child with care, empathy, and individual attention — helping them feel seen and valued every day.",
    bg: "bg-[#fff0f0]",
    border: "border-[#e63946]/20",
    pill: "bg-[#e63946]/10 text-[#e63946]",
  },
  {
    icon: "🏆",
    title: "Excellence",
    desc: "We pursue the highest standards in teaching, learning, and character formation in everything we do.",
    bg: "bg-[#fffbea]",
    border: "border-[#f9c74f]/30",
    pill: "bg-[#f9c74f]/20 text-[#b8860b]",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We embrace modern methods and creative thinking to keep students ready for a rapidly changing world.",
    bg: "bg-[#f0f4ff]",
    border: "border-[#4361ee]/20",
    pill: "bg-[#4361ee]/10 text-[#4361ee]",
  },
];

const teamMembers = [
  { name: "Dr. Ijeoma",     role: "Director",      image: director, color: "border-[#f4831f]" },
  { name: "Mr. Francis",    role: "Staff",          image: francis,  color: "border-[#4361ee]" },
  { name: "Ms. Tonia Edeh", role: "Head Teacher",   image: tonia,    color: "border-[#e63946]" },
  { name: "Ezeorah Ogechi", role: "Administrator",  image: ogechi,   color: "border-[#2dc653]" },
];

const stats = [
  { num: "15+", label: "Years of Excellence", color: "text-[#f4831f]" },
  { num: "500+", label: "Alumni",             color: "text-[#e63946]" },
  { num: "30+", label: "Qualified Staff",     color: "text-[#2dc653]" },
];

// ─── colour strip ─────────────────────────────────────────────────────────────

function ColorStrip() {
  return (
    <div className="flex h-[5px] w-full">
      <div className="flex-1 bg-[#e63946]" />
      <div className="flex-1 bg-[#4361ee]" />
      <div className="flex-1 bg-[#2dc653]" />
      <div className="flex-1 bg-[#f9c74f]" />
      <div className="flex-1 bg-[#f4831f]" />
      <div className="flex-1 bg-[#7b2d8b]" />
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,300;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

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
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f5e]/88 via-[#303778]/70 to-[#1a1f5e]/85" />
                    </div>

                    {/* floating colour blobs */}
                    <div className="absolute top-8 right-10 w-32 h-32 rounded-full bg-[#f4831f]/20 blur-2xl pointer-events-none" />
                    <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#2dc653]/15 blur-2xl pointer-events-none" />

                    {/* content */}
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                      <AnimatedSection>
                        {/* multicolour BRAIN CHILD letters */}
                        <div className="flex items-center justify-center gap-0 mb-3 select-none" style={{ fontFamily: "'Fraunces', serif" }}>
                          {["B","R","A","I","N"].map((l, li) => {
                            const cols = ["#4361ee","#e63946","#2dc653","#f9c74f","#f4831f"];
                            return <span key={li} className="text-3xl md:text-5xl font-black" style={{ color: cols[li] }}>{l}</span>;
                          })}
                          <span className="text-3xl md:text-5xl font-black text-white mx-2"> </span>
                          {["C","H","I","L","D"].map((l, li) => {
                            const cols = ["#7b2d8b","#4361ee","#e63946","#2dc653","#f9c74f"];
                            return <span key={li} className="text-3xl md:text-5xl font-black" style={{ color: cols[li] }}>{l}</span>;
                          })}
                        </div>
                        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60 mb-6">
                          Nursery &amp; Primary School
                        </p>

                        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2 rounded-full mb-5">
                          🏫 About Us
                        </span>

                        <h1
                          className="text-4xl md:text-6xl leading-tight mb-4 text-white"
                          style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
                        >
                          {slide.title.split(" ").map((word, wi) =>
                            wi === slide.title.split(" ").length - 1 ? (
                              <span key={wi} className="text-[#f9c74f] italic"> {word}</span>
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
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#f9c74f]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#4361ee]/8 blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <AnimatedSection>
              {/* eyebrow */}
              <span className="inline-flex items-center gap-2 bg-[#f4831f]/10 text-[#f4831f] text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border border-[#f4831f]/20">
                📖 Our Story
              </span>

              <h2
                className="text-3xl md:text-4xl leading-tight text-[#1a1f5e] mb-5"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
              >
                Founded on a{" "}
                <span className="text-[#e63946] italic">Vision of Excellence</span>
              </h2>

              <p className="text-[#1a1f5e]/65 text-[15px] leading-relaxed mb-4">
                Brain Child Nursery and Primary School was established to nurture the whole child — academically, socially, and emotionally — from their very first steps in education.
              </p>
              <p className="text-[#1a1f5e]/65 text-[15px] leading-relaxed mb-10">
                We combine traditional values with modern, research-backed teaching to prepare every student confidently for the future.
              </p>

              {/* stats row */}
              <div className="flex gap-8 flex-wrap">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className={`text-4xl font-black ${s.color}`}
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {s.num}
                    </div>
                    <div className="text-[11px] font-bold tracking-widest text-[#1a1f5e]/50 uppercase mt-1">
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

        {/* ── LEADERSHIP ────────────────────────────────────────────────── */}
        <section className="relative py-20 px-6 bg-[#f0f4ff] overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#7b2d8b]/8 blur-3xl pointer-events-none" />

          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#7b2d8b]/10 text-[#7b2d8b] text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border border-[#7b2d8b]/20">
              👑 Leadership
            </span>
            <h2
              className="text-3xl md:text-4xl leading-tight text-[#1a1f5e]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
            >
              Meet Our{" "}
              <span className="text-[#4361ee] italic">Leadership Team</span>
            </h2>
            <p className="text-[#1a1f5e]/55 text-sm max-w-md mx-auto mt-3">
              Dedicated educators and administrators shaping every child's journey.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {leadership.map((leader, i) => (
              <AnimatedSection key={leader.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#4361ee]/20 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_rgba(67,97,238,0.14)] transition-all duration-300 group"
                >
                  {/* photo */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 text-white text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                      style={{ background: leader.accent }}
                    >
                      {leader.role}
                    </span>
                  </div>

                  {/* colour bar */}
                  <div className={`h-[4px] w-full ${leader.bar}`} />

                  {/* body */}
                  <div className="px-5 pt-4 pb-5">
                    <h3
                      className="text-[15px] text-[#1a1f5e] leading-snug mb-2 font-bold"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-[12px] text-[#1a1f5e]/55 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <ColorStrip />

        {/* ── TEAM STRIP ────────────────────────────────────────────────── */}
        <section className="relative py-16 px-6 overflow-hidden bg-[#fffdf7]">
          <div className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(249,199,79,0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <AnimatedSection className="text-center mb-10 relative z-10">
            <span className="inline-flex items-center gap-2 bg-[#2dc653]/10 text-[#1d8a3a] text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-5 border border-[#2dc653]/25">
              🤝 Our Team
            </span>
            <h2
              className="text-3xl md:text-4xl leading-tight text-[#1a1f5e]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
            >
              The People{" "}
              <span className="text-[#e63946] italic">Behind the Magic</span>
            </h2>
            <p className="text-[#1a1f5e]/55 text-sm mt-3">
              Meet the dedicated people shaping our students' future.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto relative z-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="bg-white rounded-2xl p-4 text-center border-2 border-gray-100 hover:border-[#4361ee]/25 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 ${member.color} shadow-md`}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3
                  className="text-[14px] text-[#1a1f5e] leading-tight mb-1 font-bold"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#4361ee]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 relative z-10">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 bg-[#1a1f5e] text-white text-[13px] font-bold tracking-[0.06em] px-6 py-3 rounded-full hover:bg-[#303778] transition-colors duration-200"
            >
              View Full Team →
            </Link>
          </div>
        </section>

        <ColorStrip />

        {/* ── VALUES ────────────────────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden bg-[#1a1f5e]">
          {/* background glow blobs */}
          <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-[#4361ee]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-[#7b2d8b]/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-[#f4831f]/15 blur-2xl pointer-events-none" />

          {/* subtle dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <AnimatedSection className="relative z-10 text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2 rounded-full mb-5">
              ⭐ Our Values
            </span>
            <h2
              className="text-3xl md:text-4xl text-white leading-tight"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
            >
              What We{" "}
              <span className="text-[#f9c74f] italic">Stand For</span>
            </h2>
          </AnimatedSection>

          <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`${v.bg} ${v.border} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
                >
                  <span className="text-4xl mb-4 block select-none">{v.icon}</span>
                  <h3
                    className="text-2xl text-[#1a1f5e] mb-3 font-bold"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#1a1f5e]/65 leading-relaxed">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <ColorStrip />

      </div>

      <Footer />
    </>
  );
}