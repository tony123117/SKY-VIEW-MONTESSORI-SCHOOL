import { Link } from "react-router-dom";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import ContactSection from "@/components/brainchild/ContactSection";

import img1 from "@/assets/images/544A7290.jpg.jpg";
import img2 from "@/assets/images/544A7328.jpg.jpg";
import img3 from "@/assets/images/544A7241.jpg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: img1,
    title: "Join Our Family",
    subtitle: "Where every child belongs"
  },
  {
    image: img2,
    title: "Your Child's Future Starts Here",
    subtitle: "Excellence in early education"
  },
  {
    image: img3,
    title: "Personalized Learning Journey",
    subtitle: "Tailored to every child's needs"
  }
];

export default function AdmissionsPage() {
  const steps = [
    { step: "01", title: "Enquiry & Tour", description: "Visit our campus or call us to learn more about Brain Child. Schedule a guided tour to see our facilities firsthand.", icon: "🏫" },
    { step: "02", title: "Application Form", description: "Complete and submit the enrollment application form online via our parent portal or at the school office.", icon: "📝" },
    { step: "03", title: "Assessment", description: "Your child will participate in a brief, age-appropriate assessment to help us understand their learning level.", icon: "📋" },
    { step: "04", title: "Interview", description: "A brief meeting with the parents to discuss expectations, school policies, and your child's needs.", icon: "🤝" },
    { step: "05", title: "Admission Offer", description: "Upon successful assessment, you'll receive an admission letter with fee details and next steps.", icon: "🎉" },
    { step: "06", title: "Welcome & Orientation", description: "New families attend an orientation session before the term begins to settle in smoothly.", icon: "🌟" },
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate (original + copy)",
    "4 recent passport photographs",
    "Previous school report (if applicable)",
    "Immunization records",
    "Parent/guardian valid ID",
  ];

  const fees = [
    { level: "Pre-School", age: "Ages 1½ – 2", term: "Contact us" },
    { level: "Nursery 1–3", age: "Ages 2–5", term: "Contact us" },
    { level: "Lower Grade (1–3)", age: "Ages 5–8", term: "Contact us" },
    { level: "Higher Grade (4–6)", age: "Ages 8–11", term: "Contact us" },
  ];

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
                          🎓 Admissions
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

        {/* Process Overview */}
        <section className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/20 px-4 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedSection>
                <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                  📋 Simple Process
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#303778]">
                  Your Path to Joining Brain Child
                </h2>
                <p className="mt-4 text-[#303778]/80 max-w-2xl mx-auto">
                  We've designed a straightforward admissions process to make joining our community as smooth as possible.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#4f78ed]/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="bg-[#303778] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Step {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#303778] mb-3">{step.title}</h3>
                  <p className="text-[#303778]/80 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Fees */}
        <section className="bg-gradient-to-r from-[#303778] via-[#4f78ed] to-[#303778] px-4 md:px-12 lg:px-24 py-16 md:py-24 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedSection>
                <span className="inline-block bg-[#ffe1ec]/20 text-[#ffe1ec] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#ffe1ec]/30 backdrop-blur-sm">
                  📄 Details
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold drop-shadow-lg">
                  Everything You Need to Know
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">📋</span>
                  Admission Requirements
                </h3>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#ffe1ec] text-xl mt-0.5">✓</span>
                      <span className="text-white/90">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">💰</span>
                  Fee Structure
                </h3>
                <div className="space-y-4 mb-8">
                  {fees.map((fee, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/20 last:border-none">
                      <div>
                        <p className="font-semibold text-white">{fee.level}</p>
                        <p className="text-sm text-white/70">{fee.age}</p>
                      </div>
                      <Link to="/contact" className="text-[#ffe1ec] hover:underline font-semibold">
                        {fee.term}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <Link to="/contact">
                    <button className="w-full bg-gradient-to-r from-[#ffe1ec] to-[#4f78ed] text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                      Get Fee Details
                    </button>
                  </Link>
                  <Link to="/portal">
                    <button className="w-full bg-white/20 border-2 border-white/30 text-white py-3 rounded-full font-semibold hover:bg-white/30 transition-all">
                      Apply Online
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-gradient-to-br from-[#ffe1ec] to-[#4f78ed]/30 px-4 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                🤝 Support
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#303778] mb-6">
                We're Here to Help
              </h2>
              <p className="text-[#303778]/80 text-lg mb-8">
                Have questions about admissions? Our dedicated team is ready to assist you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#4f78ed] to-[#303778] text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    Contact Admissions
                  </button>
                </Link>
                <Link to="/about">
                  <button className="bg-white border-2 border-[#303778] text-[#303778] px-8 py-3 rounded-full font-semibold hover:bg-[#303778] hover:text-white transition-all">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ContactSection />
      </div>
      <Footer />
    </>
  );
}