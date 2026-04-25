import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion } from "framer-motion";
import principalImg from "@/assets/ijeoma.jpeg";
import computerImg from "@/assets/computer.jpeg";
import creativeImg from "@/assets/creative.jpeg";
import teachersImg from "@/assets/teachers.jpg";
import enterImg from "@/assets/enter.jpg";
import outsideImg from "@/assets/outside.jpg";
import danceImg from "@/assets/dance.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: creativeImg,
    title: "Our Story",
    subtitle: "Brainchild International Schools"
  },
  {
    image: teachersImg,
    title: "Excellence in Education",
    subtitle: "Nurturing young minds with excellence"
  },
  {
    image: enterImg,
    title: "Community & Growth",
    subtitle: "Where learning meets character"
  }
];

const leadership = [
  {
    name: "Dr. Ijeoma O.",
    role: "Director & Founder",
    image: principalImg,
    bio: "With over 15 years in early childhood education, Dr. Ijeoma brings passion and expertise to every aspect of Brainchild International Schools."
  },
  {
    name: "Mrs. Adebayo K.",
    role: "Head of Academics",
    image: teachersImg,
    bio: "Leading our academic excellence with innovative teaching methods and curriculum development."
  },
  {
    name: "Mr. Johnson T.",
    role: "Head of Operations",
    image: outsideImg,
    bio: "Ensuring smooth operations and creating a safe, nurturing environment for all students."
  }
];

const curriculumGroupA = [
  "Communication & Language",
  "Understanding the World",
  "British Integrated",
  "Mathematical Development",
  "Literacy & Language",
  "Phonological Awareness",
  "Expressive Arts & Design",
  "Personal, Social & Emotional"
];

const curriculumGroupB = [
  "English Language",
  "Verbal Reasoning",
  "Creative Writing",
  "French Language",
  "Igbo Language",
  "Christian Religious Studies",
  "Social Studies",
  "History",
  "Music",
  "Home Economics",
  "Physical & Health Education",
  "Mathematics",
  "Quantitative Reasoning",
  "Information & Communication Tech",
  "Vocational Skills",
  "Calligraphy",
  "Co-Curricular Activities",
  "Leadership Development"
];

const intellectualClubs = [
  { icon: "🎤", name: "Public Speaking", types: ["Spelling Bee", "Debate", "Recitation"] },
];

const skillBasedClubs = [
  { icon: "👨‍🍳", name: "Culinary Arts" },
  { icon: "🎵", name: "Music" },
  { icon: "💃", name: "Dance" },
  { icon: "🏊", name: "Swimming" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Carousel */}
        <section className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#303778]/80 via-[#4f78ed]/60 to-[#303778]/80"></div>
                    </div>
                    <div className="relative z-10 text-center text-white px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
                      <AnimatedSection>
                        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30 backdrop-blur-sm">
                          🏫 About Us
                        </span>
                        <h1 className="text-3xl md:text-5xl font-heading font-bold drop-shadow-lg mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                          {slide.subtitle}
                        </p>
                      </AnimatedSection>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25 left-4" />
            <CarouselNext className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25 right-4" />
          </Carousel>
        </section>

        {/* Our Story Section */}
        <section className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/20 px-4 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection>
                  <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                    📖 Our Story
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#303778] mb-6">
                    Founded on a Vision of Excellence
                  </h2>
                  <div className="space-y-4 text-[#303778]/80 leading-relaxed">
                    <p>
                      Brainchild International Schools was established with a simple yet powerful mission: to provide exceptional early childhood education that nurtures the whole child. Our founders recognized that every child deserves an environment where they can thrive academically, socially, and emotionally.
                    </p>
                    <p>
                      What started as a small preschool has grown into a comprehensive educational institution serving children from age 3 to 8. We've maintained our commitment to personalized attention, innovative teaching methods, and creating a loving community where every child feels valued and supported.
                    </p>
                    <p>
                      Today, Brainchild International Schools stands as a beacon of educational excellence, blending traditional values with modern teaching approaches to prepare our students for the challenges and opportunities of tomorrow.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={creativeImg}
                    alt="Creative learning"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={danceImg}
                    alt="Dance and movement"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                  />
                  <img
                    src={outsideImg}
                    alt="Outdoor activities"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={computerImg}
                    alt="Technology in education"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-gradient-to-r from-[#303778] via-[#4f78ed] to-[#303778] px-4 md:px-12 lg:px-24 py-16 md:py-24 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedSection>
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30 backdrop-blur-sm">
                  🎯 Our Purpose
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold drop-shadow-lg">
                  Mission & Vision
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#ffe1ec] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  To provide a nurturing, innovative educational environment that fosters academic excellence,
                  character development, and lifelong learning skills. We are committed to developing confident,
                  compassionate, and capable individuals who will positively impact their communities and the world.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#ffe1ec] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔭</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  To be the leading educational institution in our community, recognized for excellence in early
                  childhood education. We envision a world where every child has access to quality education that
                  celebrates their unique potential and prepares them to become responsible global citizens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/30 px-4 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedSection>
                <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                  👥 Our Leadership
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#303778]">
                  Meet Our Dedicated Team
                </h2>
                <p className="mt-4 text-[#303778]/80 max-w-2xl mx-auto">
                  Our experienced leadership team brings decades of educational expertise and a shared passion for child development.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f78ed]/20 to-[#303778]/20 rounded-full"></div>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#303778]">{leader.name}</h3>
                    <p className="text-[#4f78ed] font-semibold text-sm">{leader.role}</p>
                  </div>
                  <p className="text-[#303778]/80 text-sm leading-relaxed text-center">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-r from-[#303778] to-[#4f78ed] px-4 md:px-12 lg:px-24 py-16 md:py-24 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30 backdrop-blur-sm">
                💎 Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold drop-shadow-lg mb-8">
                What Drives Us Every Day
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "❤️", title: "Compassion", desc: "Caring for every child as our own" },
                  { icon: "🎓", title: "Excellence", desc: "Striving for the highest standards" },
                  { icon: "🤝", title: "Community", desc: "Building strong partnerships" },
                  { icon: "🌟", title: "Innovation", desc: "Embracing new teaching methods" },
                  { icon: "🌍", title: "Inclusivity", desc: "Welcoming all backgrounds" },
                  { icon: "🎯", title: "Purpose", desc: "Guiding children toward their potential" }
                ].map((value, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-3xl mb-3">{value.icon}</div>
                    <h3 className="text-lg font-heading font-bold mb-2">{value.title}</h3>
                    <p className="text-white/80 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Welcome Note Section */}
        <section id="welcome-note" className="bg-white px-4 md:px-12 lg:px-24 py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/20 rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#EF4444] mb-6">
                A Welcome from Our Principal
              </h2>
              <div className="prose prose-lg text-[#303778] space-y-4">
                <p className="text-lg leading-relaxed">
                  Welcome to Brainchild International Schools, where we believe every child is a unique learner with boundless potential. Our mission is to nurture not just academic excellence, but also the whole child—their creativity, character, and compassion.
                </p>
                <p className="text-lg leading-relaxed">
                  At Brainchild, we've thoughtfully designed an environment where children feel safe to explore, question, and grow. Our dedicated team of educators works collaboratively with parents to ensure that each child receives the personalized attention they deserve.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-[#EF4444]">
                  We invite you to join our vibrant learning community. Together, we can help your child discover their passions and unlock their true potential.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="bg-gradient-to-br from-[#303778] via-[#4f78ed] to-[#303778] px-4 md:px-12 lg:px-24 py-16 md:py-24 text-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Our Hybrid Curriculum For Quality Education
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                We have a hybrid curriculum which consists of the Nigerian curriculum by NERDC and the British Curriculum. The purpose is to provide a global perspective in our learning delivery.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pre-school & KG 1-3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-heading font-bold mb-6 text-[#ffe1ec]">
                  Pre-school & KG 1-3
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {curriculumGroupA.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#ffe1ec]/50 transition-all"
                    >
                      <p className="text-sm font-medium text-white/90">{subject}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Elementary 1-6 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-heading font-bold mb-6 text-[#ffe1ec]">
                  Elementary 1-6
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {curriculumGroupB.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.4 }}
                      className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-[#ffe1ec]/50 transition-all"
                    >
                      <p className="text-sm font-medium text-white/90">{subject}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments & Extra-Curricular Section */}
        <section id="departments" className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/20 px-4 md:px-12 lg:px-24 py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#EF4444] mb-4">
                Breakdown Of Our Departments
              </h2>
              <p className="text-[#303778]/80 text-lg">
                Our comprehensive departments ensure holistic development through co-curricular activities
              </p>
            </motion.div>

            {/* Intellectual Based Clubs */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-heading font-bold text-[#303778] mb-6"
              >
                🧠 Intellectual Based Clubs
              </motion.h3>
              <div className="grid md:grid-cols-1 gap-6">
                {intellectualClubs.map((club, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{club.icon}</span>
                      <h4 className="text-2xl font-heading font-bold text-[#EF4444]">{club.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3 ml-16">
                      {club.types.map((type, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-gradient-to-r from-[#4f78ed] to-[#303778] text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {type}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skill Based Clubs */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-heading font-bold text-[#303778] mb-6"
            >
              🎨 Skill Based Clubs
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillBasedClubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all text-center"
                >
                  <div className="text-5xl mb-4">{club.icon}</div>
                  <h4 className="text-lg font-heading font-bold text-[#303778]">{club.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra-Curricular Section */}
        <section id="extracurricular" className="bg-gradient-to-r from-[#303778] via-[#4f78ed] to-[#303778] px-4 md:px-12 lg:px-24 py-16 md:py-24 text-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Extra-Curricular Activities
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
                Our comprehensive selection of activities helps each child discover their unique talents and passions while building confidence, teamwork, and leadership skills.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { emoji: "🎤", name: "Public Speaking", desc: "Build confidence and oratory skills" },
                  { emoji: "🔬", name: "Science Club", desc: "Explore discovery and experimentation" },
                  { emoji: "📚", name: "Literary Club", desc: "Develop reading and writing abilities" },
                  { emoji: "🎨", name: "Art & Crafts", desc: "Express creativity through visual arts" },
                  { emoji: "🎭", name: "Drama & Theatre", desc: "Perform and develop stage presence" },
                  { emoji: "⚽", name: "Sports & Games", desc: "Build fitness and team spirit" },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#ffe1ec]/50 transition-all"
                  >
                    <div className="text-4xl mb-3">{activity.emoji}</div>
                    <h4 className="text-xl font-heading font-bold mb-2">{activity.name}</h4>
                    <p className="text-white/70 text-sm">{activity.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
