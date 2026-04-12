import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { FiStar, FiHeart, FiAward, FiShield, FiZap, FiSun } from "react-icons/fi";

const values = [
  { letter: "B", word: "Bravery", icon: <FiShield className="w-5 h-5" />, description: "Courage to try new things and stand up for what is right." },
  { letter: "C", word: "Creativity", icon: <FiZap className="w-5 h-5" />, description: "Thinking outside the box and expressing ideas freely." },
  { letter: "H", word: "Honour", icon: <FiAward className="w-5 h-5" />, description: "Respect for self, others, and the learning community." },
  { letter: "I", word: "Ingenuity", icon: <FiStar className="w-5 h-5" />, description: "Resourcefulness and clever problem-solving skills." },
  { letter: "L", word: "Love", icon: <FiHeart className="w-5 h-5" />, description: "Compassion, kindness, and care for one another." },
  { letter: "D", word: "Discipline", icon: <FiSun className="w-5 h-5" />, description: "Self-control, focus, and commitment to excellence." },
];

export function CoreValuesSection() {
  return (
    <section id="about" className="section-pink px-4 md:px-12 lg:px-24 py-12 md:py-24 font-body relative overflow-hidden">
      {/* Decorative childish elements */}
      <div className="absolute top-10 right-10 text-4xl animate-float opacity-30">⭐</div>
      <div className="absolute bottom-20 left-10 text-3xl animate-float-slow opacity-30">🌈</div>
      <div className="absolute top-1/2 right-20 text-2xl animate-bounce-gentle opacity-20">✏️</div>

      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary bg-white/60 px-3 py-1 rounded-full inline-block mb-3">🏅 BCHILD Values</span>
            <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">Our Core Values</h2>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Our core values distinguish our students. They form the acronym <strong className="text-primary">BCHILD</strong> — the qualities we nurture in every Brain Child pupil.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.letter} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-md group cursor-pointer hover:shadow-xl hover:shadow-primary/15 transition-all duration-300 relative"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {v.letter}
                  </div>
                  <div className="text-secondary group-hover:scale-110 transition-transform">{v.icon}</div>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">{v.word}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{v.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
