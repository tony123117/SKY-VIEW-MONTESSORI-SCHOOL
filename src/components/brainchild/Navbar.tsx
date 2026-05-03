import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/images/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiMenu, FiX, FiChevronDown, FiUser, FiBriefcase } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import BrainChildLogo from "./BrainChildLogo";

const navItems = [
  { label: "Home", href: "/", color: "text-blue-500", bar: "bg-blue-500" },
  { label: "Programs", href: "/programs", color: "text-purple-500", bar: "bg-purple-500" },
  { label: "Admissions", href: "/admissions", color: "text-orange-500", bar: "bg-orange-500" },
  { label: "Gallery", href: "/gallery", color: "text-yellow-500", bar: "bg-yellow-500" },
  { label: "Blog", href: "/blog", color: "text-green-500", bar: "bg-green-500" },
  { label: "Contact", href: "/contact", color: "text-red-500", bar: "bg-red-500" },
];

const aboutDropdownItems = [
  { label: "Welcome Note", id: "welcome-note" },
  { label: "Curriculum", id: "curriculum" },
  { label: "Departments", id: "departments" },
  { label: "Extra-curricular Activities", id: "extracurricular" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutDropdownClick = (id: string) => {
    setAboutDropdownOpen(false);
    setMenuOpen(false);
    navigate("/about");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-12 pt-4 pb-3 sticky top-0 z-50 bg-white/90 backdrop-blur-lg font-heading border-b border-primary/10 shadow-sm">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-[50px] h-[48px] md:w-[58px] md:h-[55px]" />
        <div className="text-primary font-bold text-sm md:text-base leading-tight tracking-tight">
          <BrainChildLogo />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-6 items-center">
        {/* About Us (Pink Text) */}
        <li
          className="relative"
          onMouseEnter={() => setAboutDropdownOpen(true)}
          onMouseLeave={() => setAboutDropdownOpen(false)}
        >
          <button className={`text-sm font-medium transition-colors flex items-center gap-2 relative hover:opacity-70 text-pink-500`}>
            About Us
            <motion.div animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}>
              <FiChevronDown size={16} />
            </motion.div>
            {/* Animated Underline */}
            <div className={`absolute bottom-[-4px] left-0 h-[2px] bg-pink-500 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          <AnimatePresence>
            {aboutDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-56 bg-white border-t-4 border-pink-500 rounded-lg shadow-xl z-50 overflow-hidden"
              >
                {aboutDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAboutDropdownClick(item.id)}
                    className="w-full text-left px-5 py-3 text-sm hover:bg-pink-50 text-pink-600 transition-colors border-b border-gray-100 last:border-b-0 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Other Nav Items */}
        {navItems.map((item) => (
          <li key={item.label} className="group">
            <Link
              to={item.href}
              className={`text-sm font-medium transition-colors relative hover:opacity-70 ${item.color}`}
            >
              {item.label}
              {/* Dynamic Underline */}
              <span className={`absolute bottom-[-4px] left-0 h-[2px] transition-all duration-300 ${item.bar} 
                ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="hidden lg:flex gap-3 items-center">
        {/* Portal Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPortalDropdownOpen(true)}
          onMouseLeave={() => setPortalDropdownOpen(false)}
        >
          <BrainButton variant="secondary">
            Portal
            <motion.span
              className="inline-block ml-1"
              animate={{ rotate: portalDropdownOpen ? 180 : 0 }}
            >
              <FiChevronDown className="inline" size={14} />
            </motion.span>
          </BrainButton>

          <AnimatePresence>
            {portalDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white border-t-4 border-primary rounded-lg shadow-xl z-50 overflow-hidden"
              >
                <Link
                  to="/student-portal"
                  className="flex items-center gap-2 w-full px-5 py-3 text-sm hover:bg-blue-50 text-blue-600 transition-colors border-b border-gray-100 font-medium"
                >
                  <FiUser size={14} />
                  Student Portal
                </Link>
                <Link
                  to="/staff-portal"
                  className="flex items-center gap-2 w-full px-5 py-3 text-sm hover:bg-purple-50 text-purple-600 transition-colors font-medium"
                >
                  <FiBriefcase size={14} />
                  Staff Portal
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/contact">
          <BrainButton variant="primary">Enroll my child</BrainButton>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="lg:hidden text-2xl text-[#303778]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden z-50 p-6 flex flex-col gap-4 border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium text-pink-500">📚 About Us</p>
              {aboutDropdownItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleAboutDropdownClick(item.id)}
                  className="text-left text-sm text-pink-400 font-medium ml-4 py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium py-1 ${item.color}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <Link to="/student-portal" onClick={() => setMenuOpen(false)}>
                <BrainButton variant="secondary" className="w-full">
                  <FiUser className="inline mr-1" /> Student Portal
                </BrainButton>
              </Link>
              <Link to="/staff-portal" onClick={() => setMenuOpen(false)}>
                <BrainButton variant="secondary" className="w-full">
                  <FiBriefcase className="inline mr-1" /> Staff Portal
                </BrainButton>
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <BrainButton variant="primary" className="w-full">Enroll my child</BrainButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}