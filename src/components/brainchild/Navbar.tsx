import { useState } from "react";
import logo from "@/assets/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

function smoothScroll(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    smoothScroll(href);
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-12 pt-4 pb-3 sticky top-0 z-50 bg-white/90 backdrop-blur-lg font-heading border-b border-primary/10 shadow-sm">
      <div className="flex items-center gap-2">
        <img src={logo} width={50} height={48} alt="Brainchild International Schools logo" className="md:w-[58px] md:h-[55px]" />
        <div>
          <p className="text-primary font-bold text-sm md:text-base leading-tight tracking-tight">
            Brainchild
          </p>
          <p className="text-secondary text-[10px] md:text-xs font-semibold -mt-0.5">
            Int&apos;l Schools
          </p>
        </div>
      </div>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-foreground/80 text-sm font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-3">
        <BrainButton variant="secondary">
          Portal <FiUser />
        </BrainButton>
        <BrainButton variant="primary">Enroll my child</BrainButton>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-2xl text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden z-50 p-6 flex flex-col gap-4 border-t border-primary/10"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-lg text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <a href="/portal">
                <BrainButton variant="secondary">
                  Portal <FiUser />
                </BrainButton>
              </a>

              <a href="/enroll">
                <BrainButton variant="primary">
                  Enroll my child
                </BrainButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
