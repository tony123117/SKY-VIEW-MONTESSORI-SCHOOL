import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { ContactSection } from "@/components/brainchild/ContactSection";
import { Link } from "react-router-dom";

export default function AdmissionsPage() {
  const steps = [
    { step: "01", title: "Enquiry & Tour", description: "Visit our campus or call us to learn more about Brainchild. Schedule a guided tour to see our facilities firsthand.", icon: "🏫" },
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
    { level: "Nursery 1–3", age: "Ages 2½ – 5", term: "Contact us" },
    { level: "Lower Grade (1–3)", age: "Ages 5½ – 8", term: "Contact us" },
    { level: "Higher Grade (4–6)", age: "Ages 8½ – 11", term: "Contact us" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero */}
        <div className="section-hero-pink px-4 md:px-12 lg:px-24 py-16 md:py-24 text-center relative overflow-hidden">
          <div className="absolute top-10 right-16 text-4xl animate-float opacity-25 pointer-events-none">🎓</div>
          <div className="absolute bottom-10 left-10 text-3xl animate-bounce-gentle opacity-20 pointer-events-none">📚</div>
          <AnimatedSection>
            <span className="inline-block bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
              🎓 Admissions
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-md">
              Join the Brainchild Family
            </h1>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We welcome new families every term. Our admissions process is simple, transparent, and designed to make you feel right at home.
            </p>
          </AnimatedSection>
        </div>

        {/* Admission Steps */}
        <section className="section-pink-soft px-4 md:px-12 lg:px-24 py-12 md:py-20 relative overflow-hidden">
          <div className="absolute top-6 left-8 text-3xl animate-float opacity-15 pointer-events-none">✨</div>
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">📋 Process</span>
                <h2 className="text-2xl md:text-[40px] font-heading font-bold text-foreground">How to Enroll</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={0.08 * i}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{s.icon}</div>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Step {s.step}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Fees */}
        <section className="section-blue-soft px-4 md:px-12 lg:px-24 py-12 md:py-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/60 shadow-md h-full">
                <h3 className="text-xl font-heading font-bold text-secondary mb-6 flex items-center gap-2">📄 Requirements</h3>
                <ul className="space-y-3">
                  {requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-secondary mt-0.5">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/60 shadow-md h-full">
                <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-2">💰 Fee Structure</h3>
                <div className="space-y-4">
                  {fees.map((f) => (
                    <div key={f.level} className="flex justify-between items-center py-3 border-b border-border/30 last:border-none">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{f.level}</p>
                        <p className="text-xs text-muted-foreground">{f.age}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{f.term}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="https://portal.brainchildintschools.com/enroll" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-heading font-semibold text-sm hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
                      Apply Now →
                    </button>
                  </a>
                </div>
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
