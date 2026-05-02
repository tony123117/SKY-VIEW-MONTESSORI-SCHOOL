import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/images/brainlogo.png";
import BrainButton from "./BrainButton";
import { FiMenu, FiX, FiChevronDown, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import BrainChildLogo from "./BrainChildLogo";

const navItems = [
  { label: "Home", href: "/", color: "text-blue-500", bar: "bg-blue-500" },
  { label: "Programs", href: "/programs", color: "text-purple-500", bar: "bg-purple-500" },
  { label: "Admissions", href: "/admissions", color: "text-orange-500", bar: "bg-orange-500" },
  { label: "Gallery", href: "/gallery", color: "text-pink-500", bar: "bg-pink-500" },
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
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

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
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-12 pt-4 pb-3 sticky top-0 z-50 bg-white/90 backdrop-blur-xl font-heading border-b border-primary/10 shadow-sm">

      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-[50px] h-[48px] md:w-[58px] md:h-[55px]" />
        <div className="text-primary font-bold text-sm md:text-base leading-tight tracking-tight">
          <BrainChildLogo />
        </div>
      </Link>

      {/* DESKTOP NAV */}
      <ul className="hidden lg:flex gap-6 items-center">

        {/* ABOUT */}
        <li
          className="relative group"
          onMouseEnter={() => setAboutDropdownOpen(true)}
          onMouseLeave={() => setAboutDropdownOpen(false)}
        >
          <button className="text-sm font-medium text-pink-500 flex items-center gap-2">
            About Us
            <motion.div animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}>
              <FiChevronDown size={16} />
            </motion.div>
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
                    className="w-full text-left px-5 py-3 text-sm hover:bg-pink-50 text-pink-600 border-b last:border-b-0"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* NAV ITEMS */}
        {navItems.map((item) => (
          <li key={item.label} className="group">
            <Link
              to={item.href}
              className={`text-sm font-medium relative transition-all ${item.color}`}
            >
              {item.label}
              <span
                className={`absolute bottom-[-4px] left-0 h-[2px] transition-all ${item.bar} ${location.pathname === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* DESKTOP BUTTONS */}
      <div className="hidden lg:flex gap-3">
        <a
          href="https://portal.brainchildintschools.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrainButton variant="secondary">
            Staff Portal <FiUser className="inline ml-1" />
          </BrainButton>
        </a>

        <a
          href="https://portal.brainchildintschools.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrainButton variant="secondary">
            Student Portal
          </BrainButton>
        </a>

        <Link to="/contact">
          <BrainButton variant="primary">
            Enroll my child
          </BrainButton>
        </Link>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        className="lg:hidden text-2xl text-[#303778]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* MOBILE MENU (FIXED) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden z-50 p-6 flex flex-col gap-4 border-t overflow-hidden"
          >

            {/* NAV LINKS */}
            <div className="flex flex-col gap-3">

              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/programs" onClick={closeMenu}>Programs</Link>
              <Link to="/admissions" onClick={closeMenu}>Admissions</Link>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>

              {/* ABOUT MOBILE */}
              <div className="pt-3 border-t">
                <p className="text-sm font-semibold text-pink-500 mb-2">
                  About Us
                </p>

                {aboutDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAboutDropdownClick(item.id)}
                    className="block w-full text-left py-2 text-sm text-gray-600"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PORTALS */}
            <div className="flex flex-col gap-3 pt-4 border-t">

              <a
                href="https://portal.brainchildintschools.com/staff/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrainButton variant="secondary" className="w-full">
                  Staff Portal
                </BrainButton>
              </a>

              <a
                href="https://portal.brainchildintschools.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrainButton variant="secondary" className="w-full">
                  Student Portal
                </BrainButton>
              </a>

              <Link to="/contact" onClick={closeMenu}>
                <BrainButton variant="primary" className="w-full">
                  Enroll my child
                </BrainButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}