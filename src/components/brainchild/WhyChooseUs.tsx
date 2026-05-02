import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { AnimatedSection } from "./AnimatedSection";
import BrainButton from "./BrainButton";
import doodles from "@/assets/images/choosedoodles.png";
import AssemblyImg from '@/assets/images/assembly2.jpg';
import computerImg from '@/assets/images/computer.jpeg'

// Import your images
import creativeImg from "@/assets/images/creative.jpeg";
import teachersImg from "@/assets/images/teachers.jpeg";

import environmentImg from "@/assets/images/env.jpg";
import Curriculum from "@/assets/images/curiculum.jpg";
import parentsImg from "@/assets/images/parents.jpg";
import parents1Img from "@/assets/images/parents1.jpg";
import parents2Img from "@/assets/images/parents2.jpg";
import WhyChooseUsModal from "./WhyChooseUsModal";
import { Computer } from "lucide-react";
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
    title: "Child-Centered Approach",
    description: "Children are comfortable and confident in our classrooms, feeling safe and secure to explore and learn.",
    color: "text-amber-500",
    image: creativeImg,
    category: "Pastoral",
    bullets: ["Play-based early years", "Individual learning plans", "Safe nurturing classrooms"],
  },
  {
    number: "02",
    title: "Expert Educators",
    description: "Our passionate, trained teachers bring creativity and patience to every lesson, ensuring every child thrives.",
    color: "text-pink-500",
    image: teachersImg,
    category: "Academics",
    bullets: ["Certified teachers", "Continuous professional development", "Small class mentorship"],
  },
  {
    number: "03",
    title: "Modern Curriculum",
    description: "We blend Nigerian and British curricula with 21st-century skills, preparing students for a global future.",
    color: "text-blue-500",
    image: Curriculum,
    category: "Academics",
    bullets: ["STEAM integration", "Language & literacy focus", "Global competencies"],
  },
  {
    number: "04",
    title: "Safe Environment",
    description: "Security and well-being come first. Our campus is designed to give parents peace of mind every day.",
    color: "text-cyan-600",
    image: environmentImg,
    category: "Facilities",
    bullets: ["Secure campus", "Health & safety protocols", "Well-maintained play areas"],
  },
  {
    number: "05",
    title: "Character Building",
    description: "We nurture values like respect, empathy, and responsibility alongside academic excellence.",
    color: "text-purple-500",
    image: computerImg,
    category: "Pastoral",
    bullets: ["Values curriculum", "Leadership opportunities", "Community engagement"],
  },
  {
    number: "06",
    title: "Small Class Sizes",
    description: "Every child gets personal attention with our carefully maintained teacher-to-student ratios.",
    color: "text-green-500",
    image: Curriculum,
    category: "Academics",
    bullets: ["Low student:teacher ratio", "Personalised feedback", "Targeted interventions"],
  },
];

const testimonials = [
  { name: "Mrs. Okoro", text: "My daughter loves school and has grown so confident.", avatar: parentsImg },
  { name: "Mr. Emeka", text: "Excellent teachers and warm environment.", avatar: parents1Img },
  { name: "Mrs. Ada", text: "Great facilities and caring staff.", avatar: parents2Img },
];

export function WhyChooseUs() {
  const [filter, setFilter] = React.useState<string>("All");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeDetail, setActiveDetail] = React.useState<Reason | null>(null);

  const filtered = React.useMemo<Reason[]>(() => {
    if (filter === "All") return reasons;
    return reasons.filter((r) => r.category === filter);
  }, [filter]);

  const openDetail = (item: Reason) => {
    setActiveDetail(item);
    setModalOpen(true);
  };

  return (
    <section className="bg-[#FCF8F9] py-24 px-6 md:px-12 lg:px-24 font-body relative overflow-hidden">
      {/* Background Decor - Subtle & Premium */}
      <img
        src={doodles}
        alt=""
        className="absolute right-0 top-0 w-[450px] opacity-10 pointer-events-none"
      />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/40 rounded-full blur-[100px]" />

      <div className="relative max-w-[1400px] mx-auto">
        <header className="text-center mb-24 flex flex-col items-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-pink-600 text-xs font-black uppercase tracking-widest">Why Brain Child?</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
              Why Parents <span className="text-pink-500">Choose</span> Us.
            </h2>
            <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              At Brain Child Nursery and Primary School, we focus on more than academics. We create a
              supportive space where children feel safe, curious, and confident to
              learn.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <div className="relative inline-block">
              <BrainButton className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-12 py-5 font-bold shadow-2xl shadow-pink-200 transition-all active:scale-95">
                Enroll my child
              </BrainButton>
              <a href="https://portal.brainchildintschools.com/enroll" target="_blank" className="absolute inset-0 z-10" />
            </div>
          </AnimatedSection>
        </header>

        {/* Filters + Bento Grid Layout */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex gap-2">
            {['All', 'Academics', 'Facilities', 'Pastoral'].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded-full ${filter === f ? 'bg-blue-600 text-white' : 'bg-white border'}`} aria-pressed={filter === f}>{f}</button>
            ))}
          </div>
          <div>
            <a href="/brochure.pdf" className="px-4 py-2 rounded-full bg-blue-600 text-white" aria-label="Download brochure">Download Brochure</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.number} delay={0.08 * i}>
              <WhyChooseUsCard {...item} onReadMore={() => openDetail(item)} />
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials row */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">What parents say</h3>
          <div className="flex gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {modalOpen && activeDetail && (
          <WhyChooseUsModal open={modalOpen} onClose={() => setModalOpen(false)} title={activeDetail.title} image={activeDetail.image} bullets={activeDetail.bullets || []} description={activeDetail.description} />
        )}
      </div>
    </section>
  );
}