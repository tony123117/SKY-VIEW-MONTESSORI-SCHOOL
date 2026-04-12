import { MdOutlineArrowUpward, MdFormatQuote } from "react-icons/md";
import BrainButton from "./BrainButton";
import { HeroCarousel } from "./HeroCarousel";
import { FloatingIcons } from "./FloatingIcons";
import { motion } from "framer-motion";

import principalImg from "@/assets/ijeoma.jpeg"; // Replace with actual principal photo if available

export function HeroSection() {
  return (
    <div className="relative overflow-hidden font-heading min-h-fit section-hero-pink">
      {/* Childish floating decorations */}
      <div className="absolute top-21 left-10 text-3xl animate-float opacity-30 pointer-events-none">🎒</div>
      <div className="absolute top-40 right-20 text-4xl animate-float-slow opacity-20 pointer-events-none">✨</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-bounce-gentle opacity-25 pointer-events-none">🌟</div>
      <div className="absolute bottom-20 right-10 text-2xl animate-wiggle opacity-20 pointer-events-none">📚</div>
      <FloatingIcons />

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />

      {/* Main Content Container - Reduced py for mobile */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 py-8 md:py-20 px-4 relative z-20">
        
        {/* Title & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.span
            className="inline-block bg-white/25 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-3 border border-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            🎓 Enrolment Open for 2026/2027 Session
          </motion.span>
          <div className="leading-tight md:leading-[3.5rem]">
            <span className="text-white text-3xl md:text-5xl lg:text-[60px] font-bold drop-shadow-md block">
              Unlock a More
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold text-foreground drop-shadow-sm">
              Thoughtful Way to Learn.
            </h1>
          </div>
        </motion.div>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[600px] text-center text-sm md:text-base px-4 text-white/90 leading-relaxed drop-shadow-sm -mt-2"
        >
          We focus on more than academics. Our approach blends discipline,
          curiosity, and care to prepare students for lifelong learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <div className="relative inline-block">
            <BrainButton variant="primary" className="bg-foreground text-white border-none shadow-lg">
              <span className="flex items-center gap-2">
                Enroll my child <MdOutlineArrowUpward />
              </span>
            </BrainButton>
            <a href="https://portal.brainchildintschools.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer" aria-label="Enroll my child">
              <span className="sr-only">Enroll my child</span>
            </a>
          </div>

          <BrainButton variant="abstract" className="bg-white border-white/80 shadow-lg">
            <span className="text-accent flex items-center gap-2 font-bold">
              Tour Our Campus ✨
            </span>
          </BrainButton>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full mt-2"
        >
          <HeroCarousel />
        </motion.div>

        {/* --- RESPONSIVE & EXTENDED PRINCIPAL'S SPEECH --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* min-h ensures the box feels substantial regardless of content length */
            className="max-w-6xl w-full bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl border border-white/50 mt-16 relative flex flex-col justify-center overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20 relative z-10">
              
              {/* Profile Section */}
              <div className="flex flex-col items-center shrink-0 w-full lg:w-auto">
                <div className="relative">
                  {/* Playful background frame */}
                  <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-6 scale-105" />
                  <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-[1.5rem] overflow-hidden shadow-2xl border-[10px] border-white">
                    <img 
                      src={principalImg} 
                      alt="Principal of Brainchild International" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  {/* Small "Seal" decoration */}
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white p-3 rounded-full shadow-lg transform hover:rotate-12 transition-transform">
                    ✨
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-blue-900 mb-1">
                    Dr. Ijeoma O.
                  </h3>
                  <p className="text-sm text-primary uppercase tracking-[0.25em] font-black">
                    Director & Founder of Brain Child Int'l School
                  </p>
                </div>
              </div>

              {/* Speech Content Section */}
              <div className="flex-1">
                <div className="relative">
                  <MdFormatQuote className="text-6xl text-primary/20 absolute -top-8 -left-6" />
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground font-heading leading-[1.2] mb-8">
                    Welcome to a Place Where <span className="text-blue-600">Curiosity</span> Meets <span className="text-pink-500">Character</span>.
                  </h2>
                </div>
                
                <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-body">
                  <p>
                    At <strong>Brainchild International Schools</strong>, we believe that education is 
                    not the filling of a pail, but the lighting of a fire. Our journey started with 
                    a simple vision: to create a school where children are not just "taught," but 
                    where they are truly understood.
                  </p>
                  
                  <p>
                    We live in a world that is constantly changing. Because of this, our 
                    curriculum goes beyond textbooks. We focus on <strong>critical thinking</strong>, 
                    <strong>global citizenship</strong>, and <strong>moral integrity</strong>. 
                    By blending the rigorous standards of the British curriculum with the 
                    rich heritage of our Nigerian roots, we offer a unique experience that 
                    prepares our students for any stage in the world.
                  </p>
                  
                  <p className="hidden md:block">
                    Every child who walks through our gates is seen as a unique individual with 
                    infinite potential. Our small class sizes and "home-centred" philosophy 
                    ensure that your child receives the personalized attention they need to 
                    grow into a confident, compassionate leader.
                  </p>

                  <p className="font-semibold text-blue-700 pt-2">
                    We are honored to be part of your child&apos;s story. Welcome to our family!
                  </p>
                </div>

                {/* Trust Badge / Signature */}
                <div className="mt-12 flex flex-wrap items-center gap-6 py-6 border-t border-dashed border-gray-200">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <div className={`w-full h-full bg-primary/${i}0`} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Join <span className="text-foreground font-bold">500+ happy families</span> already enrolled.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
}