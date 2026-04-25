import logo from "@/assets/brainlogo.png";
import x from "@/assets/icons/x.png";
import insta from "@/assets/icons/insta.png";
import facebook from "@/assets/icons/facebook.png";
import github from "@/assets/icons/github.png";
import footerImage from "@/assets/image.png"; 
import { AnimatedSection } from "./AnimatedSection";
import BrainChildLogo from "./BrainChildLogo";
import { Link } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="section-blue-dark font-heading text-white/90">
      {/* Floating Image ABOVE footer */}
      <div className="px-4 md:px-12 lg:px-24 flex justify-center relative z-20 -mt-20">
        <div className="w-full max-w-4xl shadow-2xl rounded-[28px] overflow-hidden"> 
          <img src={footerImage} alt="Build a better future" className="w-full h-auto object-cover block" />
        </div>
      </div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 pt-12 md:pt-20">
          {/* FIXED: Improved grid spanning for different screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 lg:gap-8">
            
            {/* Brand - FIXED: col-span-1 on mobile, col-span-2 on large to give logo room */}
            <div className="flex flex-col gap-4 text-white/60 sm:col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 group">
                <img src={logo} alt="Brainchild Logo" className="w-[48px] h-[48px] flex-shrink-0" />
                <div className="min-w-0"> {/* Added min-w-0 to prevent flex-child overflow */}
                  <h3 className="text-lg text-primary font-bold leading-tight truncate">
                    {BrainChildLogo()}
                  </h3>
                </div>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                At Brainchild International Schools, we focus on more than academics. We create a supportive space where children feel safe and inspired to learn.
              </p>
              <div className="flex gap-3">
                {[{ src: x, alt: "Twitter" }, { src: insta, alt: "Instagram" }, { src: facebook, alt: "Facebook" }, { src: github, alt: "GitHub" }].map((icon) => (
                  <div key={icon.alt} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-all active:scale-90">
                    <img src={icon.src} alt={icon.alt} className="w-4 h-4 invert" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Quick Links</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <li onClick={scrollToTop} className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">Back to top</li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/about">About us</Link>
                </li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/programs">Programs</Link>
                </li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/admissions">Admissions</Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Help</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/contact">Support</Link>
                </li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/admissions">Admission Req.</Link>
                </li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Resources</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/portal">Student Portal</Link>
                </li>
                <li className="hover:text-[#4f78ed] cursor-pointer transition-colors hover:translate-x-1 transform duration-200 w-fit">
                  <Link to="/about">Our Story</Link>
                </li>
              </ul>
            </div>

            {/* Contact - FIXED: col-span-1 to keep it compact */}
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Contact Us</h4>
              <ul className="flex flex-col gap-3 text-white/50 text-sm">
                <li className="hover:text-primary transition-colors">
                  <a href="tel:+2347061175897" className="flex items-center gap-2">📞 +234 706 117 5897</a>
                </li>
                <li className="hover:text-[#4f78ed] transition-colors break-all">
                  <a href="mailto:info@kaylaschool.com" className="flex items-center gap-2">✉️ info@kaylaschool.com</a>
                </li>
                <li className="text-xs leading-relaxed opacity-80 pt-2 border-t border-white/5">
                  📍 No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-10 gap-4 border-t border-white/10 mt-16 text-xs opacity-60">
            <p>Kayla School © 2026, All Rights Reserved</p>
            <div className="flex gap-6">
               <Link to="/about" className="hover:text-white transition-colors">Privacy</Link>
               <Link to="/about" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}