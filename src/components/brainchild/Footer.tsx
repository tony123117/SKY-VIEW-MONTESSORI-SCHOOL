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
    { src: github, alt: "GitHub", href: "#" },
  ];

  const quickLinks = [
    { label: "↑ Back to top", onClick: scrollToTop },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Admissions", href: "/admissions" },
    { label: "Gallery", href: "/gallery" },
  ];

  const helpLinks = [
    { label: "Support", href: "/contact" },
    { label: "Admission Req.", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Student Portal", href: "/student-portal" },
    { label: "Staff Portal", href: "/staff-portal" },
    { label: "Our Story", href: "/about" },
  ];

  return (
    <footer className="section-blue-dark font-heading text-white/90 relative overflow-hidden">
      {/* Subtle background texture circles */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white/[0.02] border border-white/5 pointer-events-none" />
      <div className="absolute bottom-32 left-6 w-64 h-64 rounded-full bg-white/[0.02] border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.03] pointer-events-none" />

      {/* Floating Image ABOVE footer */}
      <motion.div
        className="px-4 md:px-12 lg:px-24 flex justify-center relative z-20 -mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-4xl shadow-2xl rounded-[28px] overflow-hidden hover:shadow-3xl transition-shadow duration-500 ring-1 ring-white/10">
          <img
            src={footerImage}
            alt="Build a better future"
            className="w-full h-auto object-cover block hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>

      <AnimatedSection>
        <div className="px-4 md:px-12 lg:px-24 pt-14 md:pt-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 lg:gap-8">

            {/* Brand */}
            <motion.div
              className="flex flex-col gap-5 text-white/60 sm:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 group w-fit">
                <motion.img
                  src={logo}
                  alt="Brainchild Logo"
                  className="w-[48px] h-[48px] flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div className="min-w-0">
                  <h3 className="text-lg text-primary font-bold leading-tight truncate group-hover:opacity-80 transition-opacity">
                    {BrainChildLogo()}
                  </h3>
                </div>
              </Link>

              <p className="text-sm leading-relaxed max-w-xs text-white/50">
                At Brain Child Nursery and Primary School, we focus on more than academics — we create a safe, inspiring space where every child thrives.
              </p>

              {/* Social icons */}
              <div className="flex gap-2.5">
                {socialLinks.map((icon, idx) => (
                  <motion.a
                    key={icon.alt}
                    href={icon.href}
                    aria-label={icon.alt}
                    className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/40 transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-4 h-4 invert opacity-70" />
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
              <h4 className="text-xs font-bold text-white/90 uppercase tracking-widest pb-2 border-b border-white/10">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5 text-white/45 text-sm">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    className="w-fit"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 6 }}
                  >
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href || "/"}
                        className="hover:text-primary transition-colors duration-200"
                      >
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
              <h4 className="text-xs font-bold text-white/90 uppercase tracking-widest pb-2 border-b border-white/10">
                Help
              </h4>
              <ul className="flex flex-col gap-2.5 text-white/45 text-sm">
                {helpLinks.map((link, idx) => (
                  <motion.li key={idx} className="w-fit" whileHover={{ x: 6 }}>
                    <Link
                      to={link.href}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-bold text-white/90 uppercase tracking-widest pb-2 border-b border-white/10">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-white/45 text-sm">
                {resourceLinks.map((link, idx) => (
                  <motion.li key={idx} className="w-fit" whileHover={{ x: 6 }}>
                    <Link
                      to={link.href}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1 xl:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xs font-bold text-white/90 uppercase tracking-widest pb-2 border-b border-white/10">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-3 text-white/45 text-sm">
                <motion.li whileHover={{ x: 4 }}>
                  <a
                    href="tel:+2347061175897"
                    className="flex items-start gap-2 hover:text-primary transition-colors duration-200"
                  >
                    <span className="mt-0.5">📞</span>
                    <span>+234 706 117 5897</span>
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 4 }}>
                  <a
                    href="mailto:info@kaylaschool.com"
                    className="flex items-start gap-2 hover:text-primary transition-colors duration-200 break-all"
                  >
                    <span className="mt-0.5">✉️</span>
                    <span>info@kaylaschool.com</span>
                  </a>
                </motion.li>
                <li className="flex items-start gap-2 text-xs leading-relaxed opacity-70 pt-2 border-t border-white/8">
                  <span className="mt-0.5 shrink-0">📍</span>
                  <span>No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider with glow */}
          <div className="relative mt-16">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Bottom bar */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center pt-8 pb-10 gap-4 text-xs text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>© 2026 Brain Child Nursery and Primary School. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-white/80 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/about" className="hover:text-white/80 transition-colors duration-200">Terms of Use</Link>
            </div>
          </motion.div>

        </div>
      </AnimatedSection>
    </footer>
  );
}