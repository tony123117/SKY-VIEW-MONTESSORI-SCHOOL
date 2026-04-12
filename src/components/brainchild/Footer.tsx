import logo from "@/assets/brainlogo.png";
import x from "@/assets/icons/x.png";
import insta from "@/assets/icons/insta.png";
import facebook from "@/assets/icons/facebook.png";
import github from "@/assets/icons/github.png";
import visa from "@/assets/icons/visa.png";
import mastercard from "@/assets/icons/mastercard.png";
import paypal from "@/assets/icons/paypal.png";
import applepay from "@/assets/icons/applepay.png";
import gpay from "@/assets/icons/gpay.png";
import footerImage from "@/assets/image.png"; 
import { AnimatedSection } from "./AnimatedSection";
import BrainChildLogo from "./BrainChildLogo";

export function Footer() {
  return (
    <footer className="section-blue-dark font-heading text-white/90">
      
      {/* Top Image */}
      {/* Floating Image ABOVE footer */}
        <div className="px-4 md:px-12 lg:px-24 flex justify-center relative z-20 -mt-20 md:-mt-20">
        <div className="w-full max-w-4xl shadow-2xl rounded-[28px] overflow-hidden"> 
          <img
            src={footerImage}
            alt="Build a better future"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 pt-12 md:pt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            
            {/* Brand */}
            <div className="flex flex-col gap-4 text-white/60 col-span-2 md:col-span-1">
              <div className="flex items-start gap-3">
                <img src={logo} alt="Brainchild Logo" className="w-[48px] h-[48px] flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-primary font-bold leading-tight">
                    {BrainChildLogo()}
                  </h3>
                  
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                At Brainchild Int&apos;l, we focus on more than academics. We create a supportive space where children feel safe.
              </p>
              <div className="flex gap-3">
                {[{ src: x, alt: "Twitter" }, { src: insta, alt: "Instagram" }, { src: facebook, alt: "Facebook" }, { src: github, alt: "GitHub" }].map((icon) => (
                  <div key={icon.alt} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                    <img src={icon.src} alt={icon.alt} className="w-4 h-4 invert" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                {["Back to top", "About us", "Enrollment", "Careers"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">{item}</li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Help</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                {["Customer Support", "Admission Requirements", "Terms & Conditions", "Privacy Policy"].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">{item}</li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                {["E-brochure / Curriculum", "Staff Portal Tutorial", "Read our Blog", "Meet our Admin"].map((item) => (
                  <li key={item} className="hover:text-secondary cursor-pointer transition-colors hover:translate-x-1 transform duration-200">{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <li className="hover:text-primary cursor-pointer transition-colors">+234 706 117 5897</li>
                <li className="hover:text-primary cursor-pointer transition-colors">+234 705 449 8469</li>
                <li className="hover:text-secondary cursor-pointer transition-colors break-all"> info@brainchildintschools.com</li>
                <li className="hover:text-primary cursor-pointer transition-colors leading-relaxed">
                  No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-6 gap-4 border-t border-white/10 mt-10">
            <p className="text-white text-sm">
              Bravotechmedia © 2026, All Rights Reserved
            </p>
            <div className="flex gap-2">
             
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}