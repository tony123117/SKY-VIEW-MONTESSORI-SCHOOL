import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiX, FiAward, FiBriefcase, FiBook, FiStar } from "react-icons/fi";
import ToniaImg from "@/assets/images/mrs tonia.jpeg";
import OgechiImg from "@/assets/images/ogechis.jpg";
import principalImg from "@/assets/images/BrainChildDirector.jpeg";
import francisImg from "@/assets/images/Francis.jpeg";

// ─── Types ────────────────────────────────────────────────────────────────────
interface TeamMember {
  id: string;
  name: string;
  role: string;
  accentColor: string;
  tagColor: string;
  img: string;
  shortBio: string;
  fullProfile: {
    headline: string;
    intro: string[];
    sections: { icon: React.ReactNode; title: string; content: string | string[] }[];
    quote?: string;
    credentials: string[];
  };
}

// ─── Team data ────────────────────────────────────────────────────────────────
const team: TeamMember[] = [
  {
    id: "director",
    name: "Dr. (Mrs.) Ijeoma Darling Onwubuya",
    role: "Director & Founder",
    accentColor: "#1d4ed8",
    tagColor: "bg-blue-100 text-blue-700",
    img: principalImg,
    shortBio:
      "The visionary founder of Brain Child International Schools, Dr. Onwubuya has dedicated over two decades to reshaping early education in South-East Nigeria — building a school where curiosity meets character.",
    fullProfile: {
      headline: "A Visionary Educator Who Lit a Fire in a Generation",
      intro: [
        "Dr. (Mrs.) Ijeoma Darling Onwubuya is the founding Director of Brain Child Nursery and Primary School — an institution she built not simply as a business, but as a mission. With more than twenty years in education, leadership, and child development, she has shaped the academic and moral foundations of hundreds of children across Enugu State.",
        "Her philosophy is rooted in the belief that education is not the filling of a pail, but the lighting of a fire. Under her leadership, Brain Child has grown from a small nursery into a nationally recognised institution celebrated for academic excellence, character formation, and innovative teaching.",
      ],
      sections: [
        {
          icon: <FiStar size={16} />,
          title: "Philosophy & Vision",
          content: [
            "Dr. Onwubuya believes that every child arrives in this world with unique gifts — and the job of the school is to discover, nurture, and amplify those gifts.",
            "She has championed a curriculum that balances cognitive development with emotional intelligence, ensuring children leave Brain Child not only academically equipped but morally grounded, socially confident, and genuinely curious about the world.",
            "Her vision extends beyond classrooms: she has invested in world-class facilities, trained and mentored a dedicated staff team, and built a culture of warmth and high standards that parents trust and children love.",
          ],
        },
        {
          icon: <FiBriefcase size={16} />,
          title: "Leadership & Impact",
          content: [
            "Founded Brain Child Nursery and Primary School — growing it into one of Enugu's most respected private schools.",
            "Introduced play-based and STEM-integrated learning frameworks years before they became mainstream in Nigerian early education.",
            "Built lasting partnerships with parents, viewing them as co-educators and key stakeholders in every child's journey.",
            "Mentored dozens of teachers, many of whom have gone on to leadership roles in education across the region.",
          ],
        },
        {
          icon: <FiBook size={16} />,
          title: "Academic Qualifications",
          content: [
            "Doctor of Philosophy (PhD) in Educational Administration.",
            "Master of Education — Curriculum Studies.",
            "B.Ed — Early Childhood & Primary Education.",
            "Certified School Leader — Nigerian Educational Research and Development Council (NERDC).",
          ],
        },
      ],
      quote:
        "I started Brain Child because I wanted a school where no child would ever feel invisible. Every child who walks through our gates deserves to feel seen, celebrated, and prepared for greatness.",
      credentials: ["PhD Education", "M.Ed Curriculum", "NERDC Certified", "20+ Years Leadership"],
    },
  },
  {
    id: "francis",
    name: "Mr. Francis",
    role: "Head of Grade Session",
    accentColor: "#0369a1",
    tagColor: "bg-sky-100 text-sky-700",
    img: francisImg,
    shortBio:
      "Mr. Francis brings structured academic rigour and motivational energy to Brain Child, overseeing curriculum delivery and staff coordination while championing every learner's potential.",
    fullProfile: {
      headline: "Where Vision Inspires Excellence — Every Single Day",
      intro: [
        "Mr. Francis is the Academic Coordinator and Deputy Head at Brain Child Nursery and Primary School — a role that places him at the heart of the school's day-to-day academic operations. Known for his disciplined approach, infectious enthusiasm, and genuine belief in every child's potential, Mr. Francis is a vital force in translating the school's vision into measurable outcomes.",
        "He oversees curriculum planning, staff development, learner assessment, and the overall academic environment — ensuring that every class, every lesson, and every interaction is aligned with Brain Child's commitment to excellence.",
      ],
      sections: [
        {
          icon: <FiStar size={16} />,
          title: "Approach to Education",
          content: [
            "Mr. Francis believes that true education goes beyond content delivery — it is about building the whole child. He actively champions an environment where academic rigor and personal encouragement coexist, recognising that children perform best when they feel safe, valued, and genuinely challenged.",
            "He leads regular staff workshops focused on differentiated instruction, data-driven teaching, and positive behaviour management — ensuring that Brain Child's classrooms remain dynamic, inclusive, and high-performing.",
          ],
        },
        {
          icon: <FiBriefcase size={16} />,
          title: "Key Responsibilities",
          content: [
            "Curriculum planning and timetabling across all year groups.",
            "Academic performance tracking and intervention design.",
            "Staff coordination, mentoring, and professional development facilitation.",
            "Liaising with parents on academic progress and developmental concerns.",
            "Overseeing examinations, report writing, and standards compliance.",
          ],
        },
        {
          icon: <FiAward size={16} />,
          title: "Notable Contributions",
          content: [
            "Implemented a structured literacy and numeracy intervention programme that significantly improved early-grade performance outcomes.",
            "Developed Brain Child's internal assessment framework — providing teachers with clear benchmarks and parents with meaningful progress reports.",
            "Introduced weekly peer-learning sessions that have strengthened collaboration among both staff and pupils.",
          ],
        },
        {
          icon: <FiBook size={16} />,
          title: "Qualifications",
          content: [
            "B.Ed — Education and Mathematics.",
            "Post Graduate Diploma in Education (PGDE) — School Management.",
            "TRCN Licensed — Teachers Registration Council of Nigeria.",
          ],
        },
      ],
      quote:
        "Every child has potential that's waiting to be activated. My job is to build the environment, the structure, and the culture where that activation happens — every day, in every classroom.",
      credentials: ["B.Ed Mathematics", "PGDE Management", "TRCN Licensed", "Academic Coordinator"],
    },
  },
  {
    id: "tonia",
    name: "Ms Tonia Edeh",
    role: "Head Teacher of Kindergarten Session",
    accentColor: "#be185d",
    tagColor: "bg-pink-100 text-pink-700",
    img: ToniaImg,
    shortBio:
      "With 15 years of experience and a classroom full of laughter, Ms Tonia turns learning letters into adventures — and has been the warm, patient heart of Brain Child's kindergarten for 8 years.",
    fullProfile: {
      headline: "The Teacher Every Child Remembers for the Rest of Their Life",
      intro: [
        "Ms Tonia Edeh is the Head Teacher of the Kindergarten section at Brain Child Nursery and Primary School — and for 8 years, she has been the warm, patient, and profoundly gifted educator who greets the school's youngest learners every morning with energy, love, and purpose.",
        "With 15 years of experience in early childhood education, Ms Tonia holds a teaching licence from the Teachers Registration Council of Nigeria (TRCN) and is passionate about laying strong foundations for lifelong learning. Her classroom is a place where children don't just learn — they grow, explore, and discover who they are.",
      ],
      sections: [
        {
          icon: <FiStar size={16} />,
          title: "Teaching Philosophy",
          content: [
            "Ms Tonia's approach to teaching is built on a simple but powerful belief: children learn best when they feel safe, loved, and genuinely excited. She creates that environment in her classroom every single day.",
            "She uses a rich blend of phonics, storytelling, songs, and play-based methods that transform abstract concepts into vivid, memorable experiences. Parents and guardians consistently say 'Ms Tonia is so good with kids' — not just because of her skill, but because of her ability to make every single child feel seen and celebrated.",
            "In her classroom, children learn more than ABCs. Ms Tonia nurtures confidence, kindness, and curiosity while ensuring each child progresses at their own pace — without pressure, without comparison.",
          ],
        },
        {
          icon: <FiBriefcase size={16} />,
          title: "My Experience at Brain Child",
          content:
            "I have been part of the Brain Child International School family for 8 years and still counting — and it is truly a place where children come first. What I love most about Brain Child is our shared belief that every child can learn when they feel safe, loved, and encouraged. The school gives me the support and freedom to teach reading through play, songs, and stories — that's why my pupils are always excited to learn. Being at Brain Child has helped me grow as a teacher. The management, parents, and fellow staff work together as one team for the children. My hope is that every child in my class leaves kindergarten confident, kind, and ready for the next level.",
        },
        {
          icon: <FiAward size={16} />,
          title: "Specialties",
          content: [
            "Early literacy and emergent reading development.",
            "Phonics instruction — blending, segmenting, and word recognition.",
            "Play-based and experiential learning methodologies.",
            "Numeracy foundations — number sense and early maths confidence.",
            "Social habits, emotional regulation, and kindness education.",
            "Grooming, routines, and school readiness skills.",
          ],
        },
        {
          icon: <FiBook size={16} />,
          title: "Qualifications & Credentials",
          content: [
            "HND — Early Childhood Education.",
            "PGDE — Post Graduate Diploma in Education (Early Childhood Specialisation).",
            "TRCN Licensed — Teachers Registration Council of Nigeria.",
            "8+ continuous years at Brain Child International School.",
          ],
        },
      ],
      quote:
        "I treat every child like my own. We'll laugh, play, and learn together — and your child will surprise you with what they can do.",
      credentials: ["HND", "PGDE Early Childhood", "TRCN Licensed", "8 Yrs Brain Child"],
    },
  },
  {
    id: "ogechi",
    name: "Ezeorah Ogechi Regina",
    role: "School Administrator | Admissions & Records",
    accentColor: "#0f766e",
    tagColor: "bg-teal-100 text-teal-700",
    img: OgechiImg,
    shortBio:
      "A meticulous administrator and admissions specialist with over five years in education, Ogechi combines a sharp financial auditing background with a warm, family-first approach to school operations.",
    fullProfile: {
      headline: "The Steady Hand Behind Every Smooth School Experience",
      intro: [
        "Ezeorah Ogechi Regina is the School Administrator and Admissions Specialist at Brain Child Nursery and Primary School — the professional whose precision, care, and organisational excellence ensures that every family's journey with the school is seamless, supported, and stress-free.",
        "A detail-oriented professional with over five years of experience in the educational sector, Ogechi brings a uniquely rigorous background in financial auditing and public administration to her role — combining zero-error documentation standards with the warmth and accessibility that families need when enrolling their children.",
      ],
      sections: [
        {
          icon: <FiStar size={16} />,
          title: "Core Expertise",
          content: [
            "Admissions & Enrollment: Deep expertise in guiding families through the entire enrollment funnel — from initial inquiry and school visits through to onboarding, orientation, and ongoing communication. Ogechi ensures every family feels informed, welcomed, and confident in their choice.",
            "Data Integrity: Exceptional accuracy in pupil record-keeping, leveraging her accountancy and auditing background to maintain documentation that is compliant, organised, and instantly accessible. Zero-error reporting is her standard.",
            "Strategic Administration: Skilled in managing official school correspondence, digital databases, timetabling coordination, and long-term operational planning — keeping Brain Child running efficiently behind the scenes.",
          ],
        },
        {
          icon: <FiBriefcase size={16} />,
          title: "Professional Background",
          content: [
            "Brain Child International School (2021–Present): Currently serving as Classroom Teacher and School Administrator, managing international curriculum progress tracking, pupil reporting, admissions workflows, and day-to-day school operations.",
            "State Audit, Umuahia: Previously served as an External Auditor — gaining rigorous, high-stakes experience in financial compliance, records management, and institutional oversight.",
            "Ministry of Finance, NYSC Year: Served as Junior Assistant to the Secretary during her National Youth Service Corps year, managing high-level administrative workflows and official government correspondence.",
          ],
        },
        {
          icon: <FiBook size={16} />,
          title: "Academic Qualifications",
          content: [
            "PGDE — Post Graduate Diploma in Education (National Open University of Nigeria).",
            "HND — Accountancy, Upper Credit (Institute of Management and Technology, Enugu).",
            "NECO — National Examinations Council.",
            "FSLC — First School Leaving Certificate.",
          ],
        },
      ],
      quote:
        "Every family that walks through our doors deserves clarity, warmth, and a smooth experience. I take pride in being the person who makes that happen.",
      credentials: ["PGDE Education", "HND Accountancy (Upper Credit)", "State Auditor", "5+ Yrs Education"],
    },
  },
];

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProfileModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  const accent = member.accentColor;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        style={{ background: "rgba(10,15,30,0.65)", backdropFilter: "blur(8px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 340, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[88vh] rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Hero strip */}
          <div
            className="relative flex-shrink-0 px-6 pt-7 pb-6"
            style={{ background: `linear-gradient(135deg, ${accent}15 0%, ${accent}08 100%)`, borderBottom: `1px solid ${accent}22` }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: `${accent}12`, color: accent }}
              onMouseEnter={(e) => (e.currentTarget.style.background = `${accent}22`)}
              onMouseLeave={(e) => (e.currentTarget.style.background = `${accent}12`)}
            >
              <FiX size={18} />
            </button>

            <div className="flex items-start gap-5 pr-10">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-lg" style={{ border: `3px solid ${accent}30` }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white" style={{ background: accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-1">{member.name}</h2>
                <p className="font-medium text-sm mb-3" style={{ color: accent }}>{member.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.fullProfile.credentials.map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ background: `${accent}12`, color: accent }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
            {/* Headline */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              {member.fullProfile.headline}
            </p>

            {/* Intro paragraphs */}
            <div className="space-y-3">
              {member.fullProfile.intro.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-sm sm:text-base">{p}</p>
              ))}
            </div>

            {/* Sections */}
            {member.fullProfile.sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}12`, color: accent }}>
                    {section.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">{section.title}</h3>
                </div>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2 ml-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600 leading-relaxed ml-2">{section.content}</p>
                )}
              </div>
            ))}

            {/* Quote */}
            {member.fullProfile.quote && (
              <blockquote className="rounded-xl p-4 sm:p-5" style={{ background: `${accent}08`, borderLeft: `4px solid ${accent}` }}>
                <p className="italic text-sm sm:text-base font-medium leading-relaxed" style={{ color: accent }}>
                  "{member.fullProfile.quote}"
                </p>
                <p className="text-xs text-slate-500 mt-2 font-semibold">— {member.name}</p>
              </blockquote>
            )}

            <div className="h-4" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Shared Read More button ──────────────────────────────────────────────────
function ReadMoreBtn({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 group"
      style={{ background: `${color}12`, color }}
      onMouseEnter={(e) => { e.currentTarget.style.background = `${color}22`; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = `${color}12`; }}
    >
      Read full profile
      <span className="transition-transform group-hover:translate-x-0.5 text-base leading-none">→</span>
    </button>
  );
}

// ─── Credential badge ─────────────────────────────────────────────────────────
function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: `${color}12`, color }}>
      {label}
    </span>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function TeamPage() {
  const [active, setActive] = useState<TeamMember | null>(null);

  const director = team[0];
  const francis = team[1];
  const tonia = team[2];
  const ogechi = team[3];

  return (
    <div className="bg-white min-h-screen font-heading">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 text-center px-4 overflow-hidden">
        {/* Subtle background geometry */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.04] bg-blue-600" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full opacity-[0.04] bg-pink-500" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl mx-auto relative"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4 bg-blue-50 px-4 py-1.5 rounded-full">Our People</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Meet the <span className="text-blue-600">Dedicated Team</span><br />Behind Every Bright Mind
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Passionate educators and administrators united by a single mission — to nurture excellence, character, and lifelong curiosity in every child.
          </p>

          {/* Team avatars preview */}
          <div className="flex items-center justify-center mt-8 gap-1">
            {team.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                style={{ border: "3px solid white", marginLeft: i > 0 ? "-8px" : 0, zIndex: team.length - i }}
                onClick={() => setActive(m)}
              >
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
              </motion.div>
            ))}
            <span className="ml-3 text-sm text-slate-500 font-medium">4 team members</span>
          </div>
        </motion.div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* ── Team Members ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-28 md:space-y-32">

          {/* ── Director ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Image */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-[3rem] rotate-2 scale-105"
                style={{ background: `${director.accentColor}10` }} />
              <div className="relative w-56 h-72 md:w-72 md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{ border: `6px solid white`, boxShadow: `0 32px 64px ${director.accentColor}22, 0 8px 24px rgba(0,0,0,0.08)` }}>
                <img src={director.img} alt={director.name} className="w-full h-full object-cover" />
              </div>
              {/* Floating tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 shadow-lg border border-slate-100 whitespace-nowrap">
                <p className="text-xs font-bold" style={{ color: director.accentColor }}>Director & Founder</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {director.fullProfile.credentials.map((c) => <Badge key={c} label={c} color={director.accentColor} />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                {director.name}
              </h2>
              <p className="font-semibold mb-5 text-sm" style={{ color: director.accentColor }}>{director.role}</p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-snug">
                Where <span style={{ color: director.accentColor }}>Curiosity</span> Meets{" "}
                <span className="text-pink-500">Character</span>.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">{director.shortBio}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                She focuses on critical thinking, global citizenship, and moral integrity — ensuring every child grows into a confident and capable individual ready to shape the world.
              </p>

              <ReadMoreBtn color={director.accentColor} onClick={() => setActive(director)} />
            </div>
          </motion.div>

          {/* ── Francis ──────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* Image */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-[3rem] rotate-2 scale-105"
                style={{ background: `${francis.accentColor}10` }} />
              <div className="relative w-56 h-72 md:w-72 md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{ border: `6px solid white`, boxShadow: `0 32px 64px ${francis.accentColor}22, 0 8px 24px rgba(0,0,0,0.08)` }}>
                <img src={francis.img} alt={francis.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 shadow-lg border border-slate-100 whitespace-nowrap">
                <p className="text-xs font-bold" style={{ color: francis.accentColor }}>Academic Coordinator</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {francis.fullProfile.credentials.map((c) => <Badge key={c} label={c} color={francis.accentColor} />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">{francis.name}</h2>
              <p className="font-semibold mb-5 text-sm" style={{ color: francis.accentColor }}>{francis.role}</p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-snug">
                Where Vision <span style={{ color: francis.accentColor }}>Inspires</span>{" "}
                <span className="text-pink-500">Excellence</span>.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">{francis.shortBio}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                He leads curriculum planning, staff development, and academic performance tracking — ensuring every class at Brain Child is dynamic, inclusive, and high-performing.
              </p>

              <ReadMoreBtn color={francis.accentColor} onClick={() => setActive(francis)} />
            </div>
          </motion.div>

          {/* ── Tonia ─────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
          >
            {/* Image (reversed side) */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-[3rem] -rotate-2 scale-105"
                style={{ background: `${tonia.accentColor}10` }} />
              <div className="relative w-56 h-72 md:w-72 md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{ border: `6px solid white`, boxShadow: `0 32px 64px ${tonia.accentColor}22, 0 8px 24px rgba(0,0,0,0.08)` }}>
                <img src={tonia.img} alt={tonia.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2 shadow-lg border border-slate-100 whitespace-nowrap">
                <p className="text-xs font-bold" style={{ color: tonia.accentColor }}>Head Teacher, KG</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tonia.fullProfile.credentials.map((c) => <Badge key={c} label={c} color={tonia.accentColor} />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">{tonia.name}</h2>
              <p className="font-semibold mb-5 text-sm" style={{ color: tonia.accentColor }}>{tonia.role}</p>

              <p className="text-slate-600 leading-relaxed mb-3">{tonia.shortBio}</p>

              {/* Specialties pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["Early literacy", "Phonics", "Play-based learning", "Numeracy", "Social development"].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: `${tonia.accentColor}10`, color: tonia.accentColor }}>{s}</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="rounded-xl p-4 text-sm italic font-medium leading-relaxed"
                style={{ background: `${tonia.accentColor}08`, borderLeft: `3px solid ${tonia.accentColor}`, color: tonia.accentColor }}>
                "I treat every child like my own. We'll laugh, play and learn together."
              </blockquote>

              <ReadMoreBtn color={tonia.accentColor} onClick={() => setActive(tonia)} />
            </div>
          </motion.div>

          {/* ── Ogechi ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100"
              style={{ background: "linear-gradient(135deg, #f0fdf9 0%, #f8fafc 100%)" }}>
              <div className="flex flex-col lg:flex-row items-center gap-8 p-8 md:p-12">

                {/* Image */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-[2rem] rotate-1 scale-105"
                    style={{ background: `${ogechi.accentColor}10` }} />
                  <div className="relative w-48 h-60 md:w-60 md:h-72 rounded-[2rem] overflow-hidden shadow-xl"
                    style={{ border: `5px solid white`, boxShadow: `0 20px 48px ${ogechi.accentColor}22` }}>
                    <img src={ogechi.img} alt={ogechi.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ogechi.fullProfile.credentials.map((c) => <Badge key={c} label={c} color={ogechi.accentColor} />)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{ogechi.name}</h3>
                  <p className="font-semibold mb-4 text-sm" style={{ color: ogechi.accentColor }}>{ogechi.role}</p>

                  <p className="text-slate-600 leading-relaxed mb-5">{ogechi.shortBio}</p>

                  {/* Grid highlights */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-5">
                    {[
                      { label: "Admissions", desc: "Enrollment guidance & onboarding" },
                      { label: "Data Integrity", desc: "Accurate records & compliance" },
                      { label: "Administration", desc: "Operations & planning" },
                      { label: "Audit", desc: "Financial oversight experience" },
                    ].map(({ label, desc }) => (
                      <div key={label} className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: ogechi.accentColor }} />
                        <div>
                          <p className="text-xs font-bold text-slate-700">{label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ReadMoreBtn color={ogechi.accentColor} onClick={() => setActive(ogechi)} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Modal ────────────────────────────────────────────────────────── */}
      {active && <ProfileModal member={active} onClose={() => setActive(null)} />}
    </div>
  );
}
