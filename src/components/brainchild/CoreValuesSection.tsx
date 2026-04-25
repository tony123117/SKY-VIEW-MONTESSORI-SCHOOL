import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { FiStar, FiHeart, FiAward, FiShield, FiZap, FiSun } from "react-icons/fi";

const values = [
  { letter: "B", word: "Bravery", icon: <FiShield />, description: "Courage to try new things and stand up for what is right.", color: "text-rose-600", bg: "bg-rose-50/30", size: "lg:col-span-2" },
  { letter: "C", word: "Creativity", icon: <FiZap />, description: "Thinking outside the box and expressing ideas freely.", color: "text-blue-600", bg: "bg-blue-50/30", size: "lg:col-span-1" },
  { letter: "H", word: "Honour", icon: <FiAward />, description: "Respect for self, others, and the learning community.", color: "text-amber-600", bg: "bg-amber-50/30", size: "lg:col-span-1" },
  { letter: "I", word: "Ingenuity", icon: <FiStar />, description: "Resourcefulness and clever problem-solving skills.", color: "text-cyan-600", bg: "bg-cyan-50/30", size: "lg:col-span-2" },
  { letter: "L", word: "Love", icon: <FiHeart />, description: "Compassion, kindness, and care for one another.", color: "text-pink-600", bg: "bg-pink-50/30", size: "lg:col-span-1" },
  { letter: "D", word: "Discipline", icon: <FiSun />, description: "Self-control, focus, and commitment to excellence.", color: "text-indigo-600", bg: "bg-indigo-50/30", size: "lg:col-span-2" },
];

export function CoreValuesSection() {
  return (
    <section className="bg-[#FFF5F7] py-24 md:py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Background Micro-Detailing */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-100/40 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <AnimatedSection className="mb-24">
          <div className="flex flex-col items-center text-center">
            <span className="text-pink-600 font-black tracking-[0.5em] text-[10px] uppercase mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm border border-pink-50">
              The BCHILD Creed
            </span>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-slate-900 leading-none tracking-tighter mb-8">
              Core <span className="text-pink-500 italic font-light">Values.</span>
            </h2>
            <p className="max-w-2xl text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              We define our identity through six pillars that prepare every Brain Child pupil for a life of purpose.
            </p>
          </div>
        </AnimatedSection>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {values.map((v, i) => (
            <AnimatedSection key={v.letter} delay={0.1 * i} className={`${v.size}`}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full w-full bg-white/70 backdrop-blur-xl border border-white rounded-none p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(255,182,193,0.35)] overflow-hidden"
              >
                {/* Large Background Letter Watermark */}
                <span className={`absolute -right-4 -bottom-10 text-[180px] font-black opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 pointer-events-none ${v.color}`}>
                  {v.letter}
                </span>

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${v.bg} flex items-center justify-center rounded-none mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className={`${v.color} text-2xl`}>{v.icon}</div>
                  </div>
                  
                  <h3 className="text-3xl font-heading font-black text-slate-900 tracking-tighter mb-4 group-hover:text-pink-600 transition-colors">
                    {v.word}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed max-w-[280px] font-medium group-hover:text-slate-900 transition-colors">
                    {v.description}
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`h-[2px] w-8 ${v.color.replace('text', 'bg')} group-hover:w-16 transition-all duration-500`} />
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${v.color}`}>
                    0{i + 1}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}