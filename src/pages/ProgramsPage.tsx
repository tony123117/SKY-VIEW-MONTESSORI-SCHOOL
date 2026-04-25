import { Link } from "react-router-dom";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import kidsStudyingImg from "@/assets/students.jpg";
import activitiesImg from "@/assets/class.jpg";
import creativeImg from "@/assets/creative.jpeg";

const programsImages = [kidsStudyingImg, activitiesImg, creativeImg];

const programs = [
  {
    title: "Early Years Program",
    age: "Ages 1½ – 5",
    description: "Our play-based curriculum fosters curiosity, creativity, and social skills through hands-on learning experiences.",
    features: ["Play-based learning", "Social development", "Basic literacy & numeracy", "Creative arts"],
    color: "from-[#ffe1ec] to-[#4f78ed]/20"
  },
  {
    title: "Primary Education",
    age: "Ages 5 – 11",
    description: "Comprehensive primary education that builds strong foundations in all core subjects with emphasis on critical thinking.",
    features: ["Core curriculum", "STEM activities", "Arts & music", "Physical education"],
    color: "from-[#4f78ed]/20 to-[#303778]/30"
  },
  {
    title: "After School Programs",
    age: "Ages 5 – 15",
    description: "Enriching after-school activities including coding, robotics, arts, sports, and language clubs.",
    features: ["Coding & robotics", "Arts & crafts", "Sports activities", "Language clubs"],
    color: "from-[#303778]/20 to-[#ffe1ec]"
  }
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Carousel */}
        <section className="bg-gradient-to-br from-[#ffe1ec] via-[#4f78ed]/20 to-[#303778]/30 px-4 md:px-12 lg:px-24 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                Our Programs
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#303778] drop-shadow-lg mb-4">
                Comprehensive Education for Every Child
              </h1>
              <p className="text-[#303778]/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                From early childhood development to advanced learning, our programs are designed to nurture potential and inspire growth.
              </p>
            </div>

            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {programsImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`Programs ${index + 1}`}
                        className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl border border-white/20"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25" />
              <CarouselNext className="border-white/70 bg-white/15 text-white shadow-lg hover:bg-white/25" />
            </Carousel>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="px-4 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <AnimatedSection key={program.title} delay={0.1 * index}>
                  <div className={`bg-gradient-to-br ${program.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20`}>
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-[0.35em] font-black text-[#303778] bg-white/20 px-3 py-1 rounded-full">
                        {program.age}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#303778] mb-4">
                      {program.title}
                    </h3>
                    <p className="text-[#303778]/80 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#303778]/70">
                          <span className="w-2 h-2 bg-[#4f78ed] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#303778] via-[#4f78ed] to-[#303778] px-4 md:px-12 lg:px-24 py-16 md:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 drop-shadow-lg">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join our community of learners and give your child the foundation they need for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="bg-gradient-to-r from-[#ffe1ec] to-[#4f78ed] text-[#303778] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-lg">
                  Start Application
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}