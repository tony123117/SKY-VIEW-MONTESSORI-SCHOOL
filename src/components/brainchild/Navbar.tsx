import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import BrainChildLogo from "./BrainChildLogo";

const navItems = [
  { label: "Home", href: "#home", color: "text-blue-500", type: "scroll" },
  { label: "About Us", href: "/about", color: "text-pink-500", type: "link" },
  { label: "Programs", href: "#programs", color: "text-purple-500", type: "scroll" },
  { label: "Admissions", href: "/admissions", color: "text-orange-500", type: "link" },
  { label: "Blog", href: "/blog", color: "text-green-500", type: "link" },
  { label: "Contact us", href: "#contact", color: "text-red-500", type: "scroll" },
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();
    setMenuOpen(false);

    if (item.type === "link") {
      navigate(item.href);
    } else {
      // If not on home page, navigate home first then scroll
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => smoothScroll(item.href), 300);
      } else {
        smoothScroll(item.href);
      }
    }
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-12 pt-4 pb-3 sticky top-0 z-50 bg-white/90 backdrop-blur-lg font-heading border-b border-primary/10 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} width={50} height={48} alt="Brainchild International Schools logo" className="md:w-[58px] md:h-[55px]" />
        <div>
          <p className="text-primary font-bold text-sm md:text-base leading-tight tracking-tight">
            {BrainChildLogo()}
          </p>
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item)}
              className={`text-sm font-medium transition-colors relative hover:opacity-80 
                ${item.color || 'text-foreground/80'} 
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
                after:transition-all after:duration-300 hover:after:w-full 
                ${item.color ? item.color.replace('text-', 'after:bg-') : 'after:bg-primary'}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-3 relative z-50">
        <a href="https://portal.brainchildintschools.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <BrainButton variant="secondary">
            Portal <FiUser />
          </BrainButton>
        </a>
        <a href="https://portal.brainchildintschools.com/enroll" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <BrainButton variant="primary">Enroll my child</BrainButton>
        </a>
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
                onClick={(e) => handleClick(e, item)}
                className={`text-lg transition-colors font-medium ${item.color || 'text-foreground hover:text-primary'}`}
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <a href="https://portal.brainchildintschools.com" target="_blank" rel="noopener noreferrer">
                <BrainButton variant="secondary" className="w-full">
                  Portal <FiUser />
                </BrainButton>
              </a>
              <a href="https://portal.brainchildintschools.com/enroll" target="_blank" rel="noopener noreferrer">
                <BrainButton variant="primary" className="w-full">
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
