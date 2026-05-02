import logo from "@/assets/images/brainlogo.png";
import x from "@/assets/icons/x.png";
import insta from "@/assets/icons/insta.png";
import facebook from "@/assets/icons/facebook.png";
import github from "@/assets/icons/github.png";
import footerImage from "@/assets/images/image.png";
import { AnimatedSection } from "./AnimatedSection";
import BrainChildLogo from "./BrainChildLogo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { src: x, alt: "Twitter", href: "#" },
    { src: insta, alt: "Instagram", href: "#" },
    { src: facebook, alt: "Facebook", href: "#" },
    { src: github, alt: "GitHub", href: "#" }
  ];

  const quickLinks = [
    { label: "Back to top", onClick: scrollToTop },
    { label: "About us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Admissions", href: "/admissions" }
  ];

  return (
    <footer className="section-blue-dark font-heading text-white/90">
      {/* Floating Image ABOVE footer */}
      <motion.div
        className="px-4 md:px-12 lg:px-24 flex justify-center relative z-20 -mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-4xl shadow-2xl rounded-[28px] overflow-hidden hover:shadow-3xl transition-shadow duration-500">
          <img src={footerImage} alt="Build a better future" className="w-full h-auto object-cover block hover:scale-105 transition-transform duration-700" />
        </div>
      </motion.div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 pt-12 md:pt-20">
          {/* FIXED: Improved grid spanning for different screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 lg:gap-8">

            {/* Brand - FIXED: col-span-1 on mobile, col-span-2 on large to give logo room */}
            <motion.div
              className="flex flex-col gap-4 text-white/60 sm:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 group hover:text-white transition-colors">
                <motion.img
                  src={logo}
                  alt="Brainchild Logo"
                  className="w-[48px] h-[48px] flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div className="min-w-0">
                  <h3 className="text-lg text-primary font-bold leading-tight truncate">
                    {BrainChildLogo()}
                  </h3>
                </div>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                At Brain Child Nursery and Primary School, we focus on more than academics. We create a supportive space where children feel safe and inspired to learn.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((icon, idx) => (
                  <motion.a
                    key={icon.alt}
                    href={icon.href}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-all"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-4 h-4 invert" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Quick Links</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    className="w-fit"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 8, color: "#4f78ed" }}
                  >
                    {link.onClick ? (
                      <button onClick={link.onClick} className="hover:text-[#4f78ed] cursor-pointer transition-colors">
                        {link.label}
                      </button>
                    ) : (
                      <Link to={link.href || "/"} className="hover:text-[#4f78ed] cursor-pointer transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Help */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Help</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <motion.li className="w-fit" whileHover={{ x: 8 }}>
                  <Link to="/contact" className="hover:text-[#4f78ed] cursor-pointer transition-colors">Support</Link>
                </motion.li>
                <motion.li className="w-fit" whileHover={{ x: 8 }}>
                  <Link to="/admissions" className="hover:text-[#4f78ed] cursor-pointer transition-colors">Admission Req.</Link>
                </motion.li>
                <motion.li className="w-fit" whileHover={{ x: 8 }}>
                  <Link to="/contact" className="hover:text-[#4f78ed] cursor-pointer transition-colors">Contact</Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Resources</h4>
              <ul className="flex flex-col gap-2.5 text-white/50 text-sm">
                <motion.li className="w-fit" whileHover={{ x: 8 }}>
                  <Link to="/blog" className="hover:text-[#4f78ed] cursor-pointer transition-colors">Blog</Link>
                </motion.li>
                <motion.li className="w-fit" whileHover={{ x: 8 }}>
                  <Link to="/portal" className="hover:text-[#4f78ed] cursor-pointer transition-colors">Student Portal</Link>
                </motion.li>
                <motion.li className="w-fit" whileHover={{ x: 8 }}>
                  <Link to="/about" className="hover:text-[#4f78ed] cursor-pointer transition-colors">Our Story</Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1 xl:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">Contact Us</h4>
              <ul className="flex flex-col gap-3 text-white/50 text-sm">
                <motion.li className="hover:text-primary transition-colors" whileHover={{ x: 4 }}>
                  <a href="tel:+2347061175897" className="flex items-center gap-2">📞 +234 706 117 5897</a>
                </motion.li>
                <motion.li className="hover:text-[#4f78ed] transition-colors break-all" whileHover={{ x: 4 }}>
                  <a href="mailto:info@kaylaschool.com" className="flex items-center gap-2">✉️ info@kaylaschool.com</a>
                </motion.li>
                <li className="text-xs leading-relaxed opacity-80 pt-2 border-t border-white/5">
                  📍 No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 pb-10 gap-4 border-t border-white/10 mt-16 text-xs opacity-60 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p>Brain Child Nursery and Primary School © 2026, All Rights Reserved</p>
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/about" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </footer>
  );
}