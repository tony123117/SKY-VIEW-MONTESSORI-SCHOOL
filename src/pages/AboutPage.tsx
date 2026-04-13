import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { WhyChooseUs } from "@/components/brainchild/WhyChooseUs";
import { CoreValuesSection } from "@/components/brainchild/CoreValuesSection";
import { StatsSection } from "@/components/brainchild/StatsSection";
import principalImg from "@/assets/ijeoma.jpeg";
import { MdFormatQuote } from "react-icons/md";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero */}
        <div className="section-hero-pink px-4 md:px-12 lg:px-24 py-16 md:py-24 text-center relative overflow-hidden">
          <div className="absolute top-10 left-16 text-4xl animate-float opacity-25 pointer-events-none">🌟</div>
          <div className="absolute bottom-10 right-10 text-3xl animate-wiggle opacity-20 pointer-events-none">🎒</div>
          <AnimatedSection>
            <span className="inline-block bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/30">
              🏫 About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-md">
              Our Story & Mission
            </h1>
            <p className="mt-4 text-white/85 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Brainchild International Schools was founded with a simple belief: every child deserves an education that nurtures their whole being.
            </p>
          </AnimatedSection>
        </div>

        {/* Principal's Message */}
        <section className="section-pink-soft px-4 md:px-12 lg:px-24 py-12 md:py-20 relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-14 shadow-xl border border-white/50 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-6 scale-105" />
                      <div className="relative w-48 h-60 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <img src={principalImg} alt="Director" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-heading font-bold text-xl text-foreground">Dr. Ijeoma O.</h3>
                      <p className="text-xs text-primary uppercase tracking-widest font-bold">Director & Founder</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <MdFormatQuote className="text-5xl text-primary/20 mb-4" />
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                      Where <span className="text-secondary">Curiosity</span> Meets <span className="text-primary">Character</span>
                    </h2>
                    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                      <p>At <strong>Brainchild International Schools</strong>, we believe that education is not the filling of a pail, but the lighting of a fire. Our journey started with a simple vision: to create a school where children are not just "taught," but where they are truly understood.</p>
                      <p>We blend the rigorous standards of the British curriculum with the rich heritage of our Nigerian roots, offering a unique experience that prepares our students for any stage in the world.</p>
                      <p className="font-semibold text-secondary">We are honored to be part of your child's story. Welcome to our family!</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <StatsSection />
        <CoreValuesSection />
        <WhyChooseUs />
      </div>
      <Footer />
    </>
  );
}
