import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUsModal from "./WhyChooseUsModal";
import BrochurePanel from "./BrochurePanel";
import { AnimatedSection } from "./AnimatedSection";
import BrainButton from "./BrainButton";
import doodles from "@/assets/images/choosedoodles.png";
import creativeImg from "@/assets/images/creative.jpeg";
import teachersImg from "@/assets/images/teachers.jpeg";
import environmentImg from "@/assets/images/env.jpg";
import enterImg from "@/assets/images/enter.jpg";
import Curriculum from "@/assets/images/curiculum.jpg";
import { FileText } from "lucide-react";

type Reason = {
  number: string;
  title: string;
  description: string;
  color: string;
  image: string;
  category?: string;
  bullets?: string[];
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "Guided Digital Exploration",
    description:
      "Children explore technology confidently in a guided computer-based learning environment that builds early digital skills and curiosity, feeling safe and secure.",
    color: "#F59E0B",
    image: creativeImg,
    category: "Pastoral",
    bullets: ["Play-based early years", "Individual learning plans", "Safe nurturing classrooms"],
  },
  {
    number: "02",
    title: "Expert Educators",
    description:
      "Our passionate, trained teachers bring creativity and patience to every lesson, ensuring every child thrives academically and emotionally.",
    color: "#E8386D",
    image: teachersImg,
    category: "Academics",
    bullets: ["Certified teachers", "Continuous professional development", "Small class mentorship"],
  },
  {
    number: "03",
    title: "Modern Curriculum",
    description:
      "We blend Nigerian and British curricula with 21st-century skills, preparing students for a global future with STEAM at the core.",
    color: "#1B4FD8",
    image: Curriculum,
    category: "Academics",
    bullets: ["STEAM integration", "Language & literacy focus", "Global competencies"],
  },
  {
    number: "04",
    title: "Safe Environment",
    description:
      "Security and well-being come first. Our campus is designed to give parents complete peace of mind every single day.",
    color: "#0891B2",
    image: environmentImg,
    category: "Facilities",
    bullets: ["Secure campus", "Health & safety protocols", "Well-maintained play areas"],
  },
  {
    number: "05",
    title: "Vocational Training",
    description:
      "We nurture values like respect, empathy, and responsibility alongside academic excellence to shape well-rounded individuals.",
    color: "#7C3AED",
    image: enterImg,
    category: "Pastoral",
    bullets: ["Values curriculum", "Leadership opportunities", "Community engagement"],
  },
  {
    number: "06",
    title: "Small Class Sizes",
    description:
      "Every child gets personal attention with our carefully maintained teacher-to-student ratios for truly personalised learning.",
    color: "#10B981",
    image: Curriculum,
    category: "Academics",
    bullets: ["Low student:teacher ratio", "Personalised feedback", "Targeted interventions"],
  },
];

const testimonials = [
  {
    initials: "MO",
    name: "Mrs. Okoro",
    text: "My daughter loves school and has grown so much more confident since joining.",
    bg: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    initials: "ME",
    name: "Mr. Emeka",
    text: "Excellent teachers and a warm, nurturing environment. Highly recommend.",
    bg: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    initials: "MA",
    name: "Mrs. Ada",
    text: "Great facilities and genuinely caring staff. Our son is thriving here.",
    bg: "bg-emerald-100",
    textColor: "text-emerald-700",
  },
];

const FILTERS = ["All", "Academics", "Facilities", "Pastoral"] as const;

export function WhyChooseUs() {
  const [filter, setFilter] = React.useState<string>("All");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [brochureOpen, setBrochureOpen] = React.useState(false);
  const [activeDetail, setActiveDetail] = React.useState<Reason | null>(null);

  const filtered = React.useMemo(
    () => (filter === "All" ? reasons : reasons.filter((r) => r.category === filter)),
    [filter]
  );

  const openDetail = (item: Reason) => {
    setActiveDetail(item);
    setModalOpen(true);
  };

  return (
    <section className="bg-[#FDF8F5] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 font-body relative overflow-hidden">
      {/* Background doodle */}
      <img
        src={doodles}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 w-[220px] sm:w-[300px] md:w-[450px] opacity-10 pointer-events-none select-none"
      />
      {/* Ambient glow */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-pink-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto">

        {/* ── HEADER ── */}
        <header className="text-center mb-14 md:mb-20 flex flex-col items-center">
          <AnimatedSection>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 mb-5">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-pink-600 text-[10px] font-black uppercase tracking-widest">
                Why Brain Child?
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-5 px-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Parents <span className="text-pink-500">Choose</span> Us.
            </h2>

            <p className="max-w-xl md:max-w-2xl mx-auto text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed px-2">
              At Brain Child Nursery and Primary School, we focus on more than academics —
              a supportive space where children feel safe, curious, and confident to learn.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8 w-full flex justify-center">
            <div className="relative w-full sm:w-auto">
              <BrainButton className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white rounded-full px-10 py-4 font-bold shadow-2xl shadow-pink-200 transition-all">
                Enroll my child
              </BrainButton>
              <a
                href="https://portal.brainchildintschools.com/enroll"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10"
              />
            </div>
          </AnimatedSection>
        </header>

        {/* ── FILTERS + BROCHURE ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 border transition-all ${
                  filter === f
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={() => setBrochureOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 active:scale-95 transition-all w-full sm:w-auto"
          >
            <FileText size={14} />
            Download Brochure
          </button>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.number} delay={0.07 * i}>
              <WhyChooseUsCard
                {...item}
                onReadMore={() => openDetail(item)}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="mt-14">
          <h3
            className="text-xl md:text-2xl font-black text-slate-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What parents say
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
              >
                {/* Avatar */}
                <div
                  className={`w-11 h-11 rounded-full ${t.bg} ${t.textColor} flex items-center justify-center font-black text-sm flex-shrink-0`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  {/* Stars */}
                  <div className="text-amber-400 text-xs mb-1">★★★★★</div>
                  <div className="text-sm font-bold text-slate-800 mb-1">{t.name}</div>
                  <div className="text-sm text-slate-500 leading-relaxed">{t.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DETAIL MODAL ── */}
      {activeDetail && (
        <WhyChooseUsModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={activeDetail.title}
          image={activeDetail.image}
          bullets={activeDetail.bullets ?? []}
          description={activeDetail.description}
          category={activeDetail.category}
          color={activeDetail.color}
          number={activeDetail.number}
          onOpenBrochure={() => setBrochureOpen(true)}
        />
      )}

      {/* ── BROCHURE PANEL ── */}
      <BrochurePanel
        open={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />
    </section>
  );
}