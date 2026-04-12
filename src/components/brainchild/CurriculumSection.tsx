import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const preschoolSubjects = [
  "Communication", "Knowledge & Understanding of the World", "Religion", "Numeracy",
  "Literacy", "Phonics", "Expressive Arts & Design", "Personal, Social & Emotional Development"
];

const elementarySubjects = [
  "English Language", "French Language", "Igbo Language", "Phonics",
  "Creative Writing", "Basic Science", "Computer Studies", "Mathematics",
  "Geography", "Christian Religious Studies", "Cultural & Creative Arts",
  "History", "Social Studies", "Home Economics", "Vocational Studies",
  "Verbal Reasoning", "Quantitative Reasoning"
];

export function CurriculumSection() {
  return (
    <section className="section-blue px-4 md:px-12 lg:px-24 py-12 md:py-24 font-body relative overflow-hidden">
      <div className="absolute top-8 right-12 text-3xl animate-float opacity-20 pointer-events-none">📖</div>
      <div className="absolute bottom-12 left-8 text-4xl animate-wiggle opacity-15 pointer-events-none">🌍</div>

      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-secondary bg-white/70 px-3 py-1 rounded-full inline-block mb-3">📝 Curriculum</span>
            <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">Hybrid Curriculum</h2>
            <p className="mt-4 text-foreground/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              We have a hybrid curriculum which consists of the <strong className="text-primary">Nigerian Curriculum by NERDC</strong> and the <strong className="text-secondary">British Curriculum</strong>. The purpose is to provide a global perspective in our learning delivery.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-8 shadow-md h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <span className="text-xl">🎒</span>
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-secondary">Pre-School & KG 1–3</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {preschoolSubjects.map((s) => (
                  <span key={s} className="text-xs font-medium bg-secondary/10 text-secondary px-3 py-1.5 rounded-full border border-secondary/20">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-8 shadow-md h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary">Elementary 1–6</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {elementarySubjects.map((s) => (
                  <span key={s} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
