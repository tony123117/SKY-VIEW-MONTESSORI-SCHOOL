import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import computer from "@/assets/images/computer.jpeg";
import classRoomImg from "@/assets/images/curiculum.jpg";
import playgroundImg from "@/assets/images/outside.jpg";
import Music from "@/assets/images/music.jpg";

const facilities = [
  {
    title: "Classrooms",
    tag: "Learning",
    description: "Air-conditioned, well lit and brightly coloured with decorations. An idea-stimulating learning environment.",
    emoji: "🏫",
    border: "border-blue-200",
    titleColor: "text-blue-700",
    tagBg: "bg-blue-500",
    image: classRoomImg,
  },
  {
    title: "Library",
    tag: "Reading",
    description: "A resource centre and a world of discovery for children, well stocked to encourage borrowing and reading.",
    emoji: "📚",
    border: "border-pink-200",
    titleColor: "text-pink-700",
    tagBg: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Computer Lab",
    tag: "Digital",
    description: "Internet-connected systems for 21st century digital learning and technological exploration.",
    emoji: "💻",
    border: "border-red-200",
    titleColor: "text-red-700",
    tagBg: "bg-red-500",
    image: computer,
  },
  {
    title: "Mini Science Lab",
    tag: "Science",
    description: "Equipped for exciting practical demonstrations. Science comes alive with visuals and psychomotor skills.",
    emoji: "🔬",
    border: "border-emerald-200",
    titleColor: "text-emerald-700",
    tagBg: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Music & Dance Studio",
    tag: "Arts",
    description: "Inspiring performing and creative arts for budding artists. A variety of musical instruments for children to learn.",
    emoji: "🎵",
    border: "border-violet-200",
    titleColor: "text-violet-700",
    tagBg: "bg-violet-500",
    image: Music,
  },
  {
    title: "Playground",
    tag: "Outdoor",
    description: "An attractive and fun place for physical activities, play, and social development.",
    emoji: "🎪",
    border: "border-orange-200",
    titleColor: "text-orange-700",
    tagBg: "bg-orange-500",
    image: playgroundImg,
  },
  {
    title: "Sports Equipment",
    tag: "Sports",
    description: "Basketball, table tennis, and board games for physical development and sports skills building.",
    emoji: "⚽",
    border: "border-amber-200",
    titleColor: "text-amber-700",
    tagBg: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
  },
];

export function FacilitiesSection() {
  return (
    <section className="relative bg-[#EFF8FF] px-4 md:px-12 lg:px-24 py-14 md:py-24 overflow-hidden">

      {/* Notebook lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 27px, rgba(0,100,200,0.04) 27px, rgba(0,100,200,0.04) 28px)",
        }}
      />

      {/* Corner doodles */}
      <span
        className="absolute top-3 left-4 text-4xl opacity-[0.07] rotate-[-12deg] pointer-events-none select-none text-blue-900"
        style={{ fontFamily: "'Schoolbell', cursive" }}
      >
        📐
      </span>
      <span
        className="absolute bottom-4 right-5 text-4xl opacity-[0.07] rotate-[8deg] pointer-events-none select-none text-blue-900"
        style={{ fontFamily: "'Schoolbell', cursive" }}
      >
        🎈
      </span>

      {/* Ruler strip */}
      <div
        className="w-full h-1.5 rounded-full mb-10 opacity-50"
        style={{
          background:
            "repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 1px, transparent 1px, transparent 18px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white text-[13px] tracking-[0.1em] px-5 py-2 rounded-full mb-4"
              style={{ fontFamily: "'Schoolbell', cursive" }}
            >
              🏗️ Our Facilities
            </span>
            <h2
              className="text-3xl md:text-[40px] leading-tight text-[#1e3a5f]"
              style={{ fontFamily: "'Schoolbell', cursive" }}
            >
              World-Class{" "}
              <span className="text-rose-500">Facilities</span>
            </h2>
            <p
              className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Our campus is designed with your child's comfort, safety, and development in mind.
            </p>
          </div>
        </AnimatedSection>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {facilities.map((f, i) => (
            <AnimatedSection key={f.title} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`
                  group bg-white rounded-2xl overflow-hidden
                  border-2 ${f.border}
                  shadow-[0_3px_16px_rgba(0,0,0,0.07)]
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
                  transition-shadow duration-300
                  flex flex-col h-full
                `}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Soft dark overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Tag pill — top left */}
                  <span
                    className={`absolute top-3 left-3 ${f.tagBg} text-white text-[9px] font-extrabold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full`}
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {f.tag}
                  </span>

                  {/* Emoji bubble — bottom right */}
                  <div className="absolute bottom-2.5 right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[17px] select-none">
                    {f.emoji}
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex flex-col flex-grow px-5 pt-4 pb-5 overflow-hidden">
                  {/* Notebook lines */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(180deg, transparent 0px, transparent 22px, rgba(0,0,0,0.028) 22px, rgba(0,0,0,0.028) 23px)",
                    }}
                  />

                  <h3
                    className={`relative text-[17px] font-bold ${f.titleColor} mb-2 leading-tight`}
                    style={{ fontFamily: "'Schoolbell', cursive" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="relative text-[12px] text-gray-500 leading-relaxed flex-grow"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {f.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}