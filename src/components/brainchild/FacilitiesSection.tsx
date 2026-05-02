import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
// Import local images
import computer from "@/assets/images/computer.jpeg";
import classRoomImg from "@/assets/images/classImg.jpeg";
import playgroundImg from "@/assets/images/outside.jpg";
import  Music  from "@/assets/images/music.jpg";

const facilities = [
  { 
    title: "Classrooms", 
    description: "Air-conditioned, well lit and brightly coloured with decorations. An idea-stimulating learning environment.", 
    emoji: "🏫", 
    color: "text-blue-500",
    image: classRoomImg // Using the local imported image
  },
  { 
    title: "Library", 
    description: "A resource centre and a world of discovery for children, well stocked to encourage borrowing and reading.", 
    emoji: "📚", 
    color: "text-pink-500",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Computer Lab", 
    description: "Internet-connected systems for 21st century digital learning and technological exploration.", 
    emoji: "💻", 
    color: "text-red-500",
    image: computer // Using the local imported image
  },
  { 
    title: "Mini Science Lab", 
    description: "Equipped for exciting practical demonstrations. Science comes alive with visuals and psychomotor skills.", 
    emoji: "🔬", 
    color: "text-green-500",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Music & Dance Studio", 
    description: "Inspiring performing and creative arts for budding artists. A variety of musical instruments for children to learn.", 
    emoji: "🎵", 
    color: "text-blue-500",
    image: Music
  },
  { 
    title: "Playground", 
    description: "An attractive and fun place for physical activities, play, and social development.", 
    emoji: "🎪", 
    color: "text-red-500",
    image: playgroundImg
  },
  { 
  title: "Sports Equipment", 
  description: "Basketball, table tennis, and board games for physical development and sports skills building.", 
  emoji: "⚽", 
  color: "text-amber-500",
  image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop" 
},
];

export function FacilitiesSection() {
  return (
    <section className="bg-[#f0f9ff] px-4 md:px-12 lg:px-24 py-12 md:py-24 font-body relative overflow-hidden">
      {/* Decorative Background Icons */}
      <div className="absolute top-10 left-10 text-3xl animate-bounce-gentle opacity-20 pointer-events-none">🎨</div>
      <div className="absolute bottom-10 right-16 text-4xl animate-float opacity-20 pointer-events-none">🎈</div>

      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-blue-600 bg-white px-3 py-1 rounded-full inline-block mb-3 shadow-sm border border-blue-100">🏗️ Our Facilities</span>
            <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">World-Class Facilities</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Our campus is designed with your child's comfort, safety, and development in mind.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <AnimatedSection key={f.title} delay={0.07 * i}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 h-full border border-gray-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center shadow-lg">
                    <span className="text-xl">{f.emoji}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`text-lg font-bold ${f.color} mb-2`}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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