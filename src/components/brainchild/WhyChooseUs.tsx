import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUsModal from "./WhyChooseUsModal";
import BrochurePanel from "./BrochurePanel";
import { AnimatedSection } from "./AnimatedSection";
import BrainButton from "./BrainButton";
import doodles from "@/assets/SKYVIEW-IMAGES/playground.png";
import getResponsiveSrc from '@/lib/image';
import { FileText } from "lucide-react";
import blocksImg from "@/assets/SKYVIEW-IMAGES/building-blocks.jpeg";
import artsImg from "@/assets/SKYVIEW-IMAGES/craft.jpeg";
import swimmingImg from "@/assets/SKYVIEW-IMAGES/swimming.jpeg";

// ─── Centralized Theme ─────────────────────────────────────
const THEME = {
  wineRed: "#9B1C2C",
  skyBlue: "#4A9EDB",
  pink: "#FF6B9D",
  navy: "#1F3A5F",
} as const;

type Filter = "All" | "Academics" | "Facilities" | "Pastoral";

type Reason = {
  number: string;
  title: string;
  description: string;
  color: string;
  image: string;
  category?: Filter;
  bullets?: string[];
};

type Testimonial = {
  initials: string;
  name: string;
  text: string;
  bg: string;
  textColor: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "Hands-On Montessori Learning",
    description:
      "Children learn by doing. Our Montessori approach encourages exploration, critical thinking, creativity, and problem-solving through engaging hands-on activities that build confidence and independence.",
    color: THEME.skyBlue,
    image: blocksImg, // children building with blocks
    category: "Academics",
    bullets: [
      "Interactive learning materials",
      "Critical thinking development",
      "Child-centered education",
    ],
  },
  {
    number: "02",
    title: "Creative Arts & Self-Expression",
    description:
      "We nurture creativity through arts, crafts, design projects, and cultural activities that help children express themselves while developing fine motor and imaginative skills.",
    color: THEME.pink,
    image: artsImg, // heart decorations
    category: "Pastoral",
    bullets: [
      "Arts & crafts projects",
      "Creative expression",
      "Confidence building activities",
    ],
  },
  {
    number: "03",
    title: "Swimming & Physical Development",
    description:
      "Our swimming program helps pupils develop water confidence, physical fitness, coordination, discipline, and teamwork in a safe and supervised environment.",
    color: THEME.skyBlue,
    image: swimmingImg, // swimming pool image
    category: "Facilities",
    bullets: [
      "Professional supervision",
      "Water safety skills",
      "Physical fitness & coordination",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    initials: "MO",
    name: "Mrs. Okoro",
    text: "My daughter loves school and has grown so much more confident since joining.",
    bg: `${THEME.pink}15`,
    textColor: THEME.pink,
  },
  {
    initials: "ME",
    name: "Mr. Emeka",
    text: "Excellent teachers and a warm, nurturing environment. Highly recommend.",
    bg: `${THEME.skyBlue}15`,
    textColor: THEME.skyBlue,
  },
  {
    initials: "MA",
    name: "Mrs. Ada",
    text: "Great facilities and genuinely caring staff. Our son is thriving here.",
    bg: `${THEME.wineRed}15`,
    textColor: THEME.wineRed,
  },
];

const FILTERS: Filter[] = ["All", "Academics", "Facilities", "Pastoral"];

export function WhyChooseUs() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [brochureOpen, setBrochureOpen] = React.useState(false);
  const [activeDetail, setActiveDetail] = React.useState<Reason | null>(null);

  const filteredReasons = React.useMemo(() => {
    if (filter === "All") return reasons;
    return reasons.filter((r) => r.category === filter);
  }, [filter]);

  const openDetail = React.useCallback((item: Reason) => {
    setActiveDetail(item);
    setModalOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setModalOpen(false);
    setTimeout(() => setActiveDetail(null), 300);
  }, []);

  const handleBrochureOpen = React.useCallback(() => {
    setBrochureOpen(true);
  }, []);

  return (
    <section
      className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 font-body relative overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Background doodle */}
      <img
        src={getResponsiveSrc(doodles)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute right-0 top-12 w-[180px] sm:w-[260px] md:w-[380px] opacity-5 pointer-events-none select-none"
      />

      {/* Ambient glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: `${THEME.pink}20` }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: `${THEME.skyBlue}15` }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {/* HEADER */}
        <header className="text-center mb-14 md:mb-20 flex flex-col items-center">
          <AnimatedSection>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
              style={{
                background: "rgba(155,28,44,0.08)",
                borderColor: "rgba(155,28,44,0.2)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: THEME.pink }}
              />
              <span
                className="text-[10px] font-black uppercase tracking-[0.125em]"
                style={{ color: THEME.wineRed }}
              >
                WHY SKY-VIEW NURSERY, PRIMARY & SECONDARY SCHOOL?
              </span>
            </div>

            <h2
              id="why-choose-us-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-[-0.025em] mb-6 px-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Parents <span style={{ color: THEME.pink }}>Choose</span> Us
            </h2>

            <p className="max-w-xl md:max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed px-2">
              At SKY-VIEW, we go beyond academics — creating a supportive environment where children feel safe, curious, and confident to learn and grow.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10 w-full flex justify-center">
            <div className="relative w-full sm:w-auto">
              <BrainButton
                className="w-full sm:w-auto text-white rounded-full px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${THEME.wineRed}, ${THEME.pink})`,
                  boxShadow: `0 20px 40px ${THEME.pink}40`,
                }}
              >
                Enroll my child
              </BrainButton>
              <a
                href="/contact"
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Go to enrollment page"
              />
            </div>
          </AnimatedSection>
        </header>

        {/* FILTERS + BROCHURE */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div
            className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none"
            role="tablist"
            aria-label="Filter reasons"
          >
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(f)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap flex-shrink-0 border transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={
                    isActive
                      ? {
                        background: THEME.wineRed,
                        color: "white",
                        borderColor: THEME.wineRed,
                        boxShadow: `0 4px 12px ${THEME.wineRed}30`,
                      }
                      : {
                        background: "white",
                        color: "#475569",
                        borderColor: "#e2e8f0",
                      }
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleBrochureOpen}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold active:scale-[0.97] transition-all duration-200 w-full sm:w-auto hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              background: THEME.navy,
              boxShadow: `0 4px 15px ${THEME.navy}30`,
            }}
            aria-label="Download school brochure"
          >
            <FileText size={16} aria-hidden="true" />
            Download Brochure
          </button>
        </div>

        {/* CARDS GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          role="region"
          aria-label="Reasons to choose Sky-View"
        >
          {filteredReasons.length > 0 ? (
            filteredReasons.map((item, i) => (
              <AnimatedSection key={item.number} delay={0.06 * i}>
                <WhyChooseUsCard {...item} onReadMore={() => openDetail(item)} />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500">
              No reasons found for this filter.
            </div>
          )}
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-20">
          <h3
            className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Parents Say
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: t.bg,
                      color: t.textColor,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-amber-400 text-sm mb-2">★★★★★</div>
                    <div className="font-semibold text-slate-800 mb-1">{t.name}</div>
                    <div className="text-slate-600 leading-relaxed text-[15px]">
                      "{t.text}"
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeDetail && (
        <WhyChooseUsModal
          open={modalOpen}
          onClose={closeModal}
          title={activeDetail.title}
          image={activeDetail.image}
          bullets={activeDetail.bullets ?? []}
          description={activeDetail.description}
          category={activeDetail.category}
          color={activeDetail.color}
          number={activeDetail.number}
          onOpenBrochure={handleBrochureOpen}
        />
      )}

      <BrochurePanel open={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </section>
  );
}