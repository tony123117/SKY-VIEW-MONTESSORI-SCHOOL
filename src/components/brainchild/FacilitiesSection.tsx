import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { FiMonitor, FiBook, FiMusic, FiSun, FiActivity, FiCpu } from "react-icons/fi";

const facilities = [
  { icon: <FiBook className="w-6 h-6" />, title: "Classrooms", description: "Air-conditioned, well lit and brightly coloured with decorations. An idea-stimulating learning environment.", emoji: "🏫" },
  { icon: <FiBook className="w-6 h-6" />, title: "Library", description: "A resource centre and a world of discovery for children, well stocked to encourage borrowing and reading.", emoji: "📚" },
  { icon: <FiCpu className="w-6 h-6" />, title: "Computer Lab", description: "Internet-connected systems for 21st century digital learning and technological exploration.", emoji: "💻" },
  { icon: <FiMonitor className="w-6 h-6" />, title: "Mini Science Lab", description: "Equipped for exciting practical demonstrations. Science comes alive with visuals and psychomotor skills.", emoji: "🔬" },
  { icon: <FiMusic className="w-6 h-6" />, title: "Music & Dance Studio", description: "Inspiring performing and creative arts for budding artists. A variety of musical instruments for children to learn.", emoji: "🎵" },
  { icon: <FiSun className="w-6 h-6" />, title: "Playground", description: "An attractive and fun place for physical activities, play, and social development.", emoji: "🎪" },
  { icon: <FiActivity className="w-6 h-6" />, title: "Sports Equipment", description: "Basketball, table tennis, and board games for physical development and sports skills building.", emoji: "⚽" },
];

export function FacilitiesSection() {
  return (
    <section className="section-blue px-4 md:px-12 lg:px-24 py-12 md:py-24 font-body relative overflow-hidden">
      {/* Childish decorations */}
      <div className="absolute top-10 left-10 text-3xl animate-wiggle opacity-25">🎨</div>
      <div className="absolute bottom-10 right-16 text-4xl animate-float opacity-25">🎈</div>
      <div className="absolute top-1/3 right-8 text-2xl animate-bounce-gentle opacity-20">🖍️</div>

      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-secondary bg-white/60 px-3 py-1 rounded-full inline-block mb-3">🏗️ Our Facilities</span>
            <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">World-Class Facilities</h2>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Our campus is designed with your child's comfort, safety, and development in mind.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <AnimatedSection key={f.title} delay={0.07 * i}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/95 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-md group cursor-pointer hover:shadow-xl hover:shadow-secondary/15 transition-all duration-300 h-full"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.emoji}</div>
                <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-secondary transition-colors duration-300 mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
