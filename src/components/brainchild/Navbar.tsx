import { useState } from "react";
import logo from "@/assets/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        {["Home", "About Us", "Admissions", "Blog", "Careers", "Contact us"].map((item) => (
          <li key={item}>
            <a
              href="/"
              className="text-foreground/80 text-sm font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
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
            {["Home", "About Us", "Admissions", "Blog", "Careers", "Contact us"].map((item) => (
              <a key={item} href="/" className="text-lg text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <BrainButton variant="secondary">
                Portal <FiUser />
              </BrainButton>
              <BrainButton variant="primary">Enroll my child</BrainButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
