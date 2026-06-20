import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiUser, FiBriefcase } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import SkyViewLogo from "./SkyViewLogo";
import logoImg from "@/assets/SKYVIEW-IMAGES/Logo.png";

const navItems = [
  { label: "Home",      href: "/" },
  { label: "Programs",  href: "/programs" },
  { label: "Admissions",href: "/admissions" },
  { label: "Gallery",   href: "/gallery" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
  { label: "Community", href: "/community" },
];

const aboutDropdownItems = [
  { label: "Welcome Note",               id: "welcome-note" },
  { label: "Curriculum",                 id: "curriculum" },
  { label: "Departments",                id: "departments" },
  { label: "Extra-curricular Activities",id: "extracurricular" },
];

const CSS = `
  *, *::before, *::after { box-sizing: border-box; }

  /* ── ROOT ── */
  .nv-root {
    position: sticky; top: 0; z-index: 999;
    width: 100%;
    transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    font-family: var(--font-heading, 'DM Sans', sans-serif);
  }

  /* Transparent at very top */
  .nv-root.nv-top {
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0,0,0,0.06);
    box-shadow: 0 1px 12px rgba(0,0,0,0.04);
  }

  /* Solid glass when scrolled */
  .nv-root.nv-scrolled {
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(155,28,44,0.10);
    box-shadow: 0 2px 28px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.9) inset;
  }

  /* Inner: logo | links | actions — 3-column grid */
  .nv-inner {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 56px);
    height: 84px;
    gap: 0;
  }

  /* ── LOGO ── */
  .nv-logo {
    display: flex; align-items: center; gap: 16px;
    text-decoration: none; flex-shrink: 0;
    min-width: 0; user-select: none;
    margin-right: clamp(20px, 4vw, 48px);
    padding: 6px 0;
  }
  .nv-logo-img {
    width: 58px; height: 58px;
    border-radius: 50%; object-fit: cover;
    box-shadow: 0 2px 14px rgba(155,28,44,0.24);
    transition: transform 0.25s;
    flex-shrink: 0;
  }
  .nv-logo:hover .nv-logo-img { transform: scale(1.07) rotate(3deg); }

  /* ── CENTER LINKS ── */
  .nv-links {
    display: flex; align-items: center; justify-content: center;
    gap: 2px; list-style: none; margin: 0; padding: 0;
  }
  .nv-link-li { position: relative; }

  .nv-link, .nv-dropdown-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 7px 13px; border-radius: 8px;
    font-size: 0.845rem; font-weight: 600;
    color: #2a2a3e; text-decoration: none;
    background: none; border: none; cursor: pointer;
    letter-spacing: 0.01em; white-space: nowrap;
    transition: color 0.18s, background 0.18s;
    font-family: inherit;
  }
  .nv-link:hover, .nv-dropdown-btn:hover {
    color: #9B1C2C; background: rgba(155,28,44,0.05);
  }
  .nv-link.active, .nv-dropdown-btn.active { color: #9B1C2C; }

  /* Animated underline */
  .nv-underline {
    position: absolute; bottom: -1px; left: 13px; right: 13px;
    height: 2px; border-radius: 999px; background: #9B1C2C;
  }

  /* ── DROPDOWNS ── */
  .nv-dropdown {
    position: absolute; top: calc(100% + 10px); left: 0;
    min-width: 210px;
    background: #fff; border-radius: 14px;
    border: 1px solid rgba(0,0,0,0.08);
    border-top: 3px solid #9B1C2C;
    box-shadow: 0 16px 48px rgba(0,0,0,0.11), 0 4px 12px rgba(0,0,0,0.06);
    overflow: hidden; z-index: 100;
  }
  .nv-dropdown-right { left: auto; right: 0; border-top-color: #4A9EDB; }

  .nv-drop-item {
    display: flex; align-items: center; gap: 9px;
    width: 100%; text-align: left; padding: 11px 18px;
    font-size: 0.84rem; font-weight: 500; color: #374151;
    background: none; border: none;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    cursor: pointer; text-decoration: none;
    transition: background 0.14s, color 0.14s;
    font-family: inherit;
  }
  .nv-drop-item:last-child { border-bottom: none; }
  .nv-drop-item:hover { background: #FFF5F6; color: #9B1C2C; }
  .nv-drop-item.portal:hover { background: #EFF8FF; color: #1D6FA4; }

  /* ── RIGHT ACTIONS ── */
  .nv-actions {
    display: flex; align-items: center; gap: 8px;
    justify-content: flex-end; flex-shrink: 0;
  }

  .nv-portal-btn {
    display: flex; align-items: center; gap: 5px;
    padding: 8px 16px; border-radius: 999px;
    font-size: 0.82rem; font-weight: 600;
    color: #374151; background: #F3F4F6;
    border: 1px solid rgba(0,0,0,0.09);
    cursor: pointer; white-space: nowrap;
    transition: background 0.18s;
    font-family: inherit;
  }
  .nv-portal-btn:hover { background: #E5E7EB; }

  .nv-enroll-btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 9px 22px; border-radius: 999px;
    font-size: 0.84rem; font-weight: 700;
    color: #fff; border: none; cursor: pointer;
    background: linear-gradient(135deg, #2980b9 0%, #4A9EDB 60%, #7BC8F0 100%);
    box-shadow: 0 4px 18px rgba(74,158,219,0.35);
    white-space: nowrap; letter-spacing: 0.01em;
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: inherit;
  }
  .nv-enroll-btn:hover { transform: translateY(-1px); box-shadow: 0 7px 24px rgba(74,158,219,0.45); }
  .nv-enroll-btn:active { transform: scale(0.97); }

  /* ── HAMBURGER ── */
  .nv-ham {
    display: none;
    flex-direction: column; gap: 5px;
    padding: 9px; border-radius: 10px;
    background: none; border: none; cursor: pointer;
    align-items: center; justify-content: center;
    color: #1a1a2e;
    transition: background 0.18s;
  }
  .nv-ham:hover { background: rgba(0,0,0,0.05); }
  .nv-ham svg { display: block; }

  /* ── MOBILE DRAWER ── */
  .nv-drawer {
    position: absolute; top: 100%; left: 0; right: 0;
    background: rgba(255,255,255,0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 16px 48px rgba(0,0,0,0.10);
    max-height: calc(100svh - 84px);
    overflow-y: auto;
    display: flex; flex-direction: column;
    padding: clamp(16px, 4vw, 24px);
    gap: 4px;
    z-index: 98;
  }

  .nv-drawer-section-label {
    font-size: 0.68rem; font-weight: 700;
    color: #9B1C2C; text-transform: uppercase;
    letter-spacing: 0.12em; padding: 4px 12px;
    margin-top: 4px;
  }
  .nv-drawer-item {
    display: block; padding: 11px 14px;
    font-size: 0.95rem; font-weight: 600;
    color: #1F2937; text-decoration: none;
    border-radius: 10px;
    border-left: 3px solid transparent;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    background: none; border-top: none; border-right: none; border-bottom: none;
    border-left: 3px solid transparent;
    cursor: pointer; text-align: left; width: 100%;
    font-family: inherit;
  }
  .nv-drawer-item:hover { background: rgba(155,28,44,0.04); color: #9B1C2C; border-left-color: #9B1C2C44; }
  .nv-drawer-item.active { background: #FFF5F6; color: #9B1C2C; border-left-color: #9B1C2C; }

  .nv-drawer-divider {
    height: 1px; background: rgba(0,0,0,0.07);
    margin: 8px 0;
  }

  .nv-drawer-portal-row { display: flex; gap: 8px; }
  .nv-drawer-portal-btn {
    flex: 1; display: flex; align-items: center; justify-content: center;
    gap: 7px; padding: 11px; border-radius: 999px;
    font-size: 0.88rem; font-weight: 600;
    text-decoration: none; transition: background 0.15s;
  }
  .nv-drawer-portal-student { background: #EFF8FF; color: #1D6FA4; }
  .nv-drawer-portal-student:hover { background: #dbeffe; }
  .nv-drawer-portal-staff { background: #FFF0F3; color: #9B1C2C; }
  .nv-drawer-portal-staff:hover { background: #ffe4ea; }

  .nv-drawer-enroll {
    display: flex; align-items: center; justify-content: center;
    gap: 7px; padding: 14px; border-radius: 999px;
    font-size: 0.95rem; font-weight: 700;
    color: #fff; text-decoration: none; margin-top: 6px;
    background: linear-gradient(135deg, #2980b9 0%, #4A9EDB 60%, #7BC8F0 100%);
    box-shadow: 0 4px 18px rgba(74,158,219,0.30);
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .nv-drawer-enroll:hover { transform: translateY(-1px); box-shadow: 0 7px 24px rgba(74,158,219,0.40); }

  /* ── RESPONSIVE ── */
  @media (min-width: 1280px) {
    .nv-links    { display: flex !important; }
    .nv-actions  { display: flex !important; }
    .nv-ham      { display: none  !important; }
    .nv-drawer   { display: none  !important; }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .nv-links   { display: flex !important; gap: 0 !important; }
    .nv-actions { display: flex !important; gap: 6px !important; }
    .nv-ham     { display: none !important; }
    .nv-link, .nv-dropdown-btn { font-size: 0.78rem !important; padding: 6px 10px !important; }
    .nv-portal-btn { padding: 7px 12px !important; font-size: 0.76rem !important; }
    .nv-enroll-btn { padding: 8px 16px !important; font-size: 0.78rem !important; }
    .nv-inner   { padding: 0 clamp(16px,3vw,32px) !important; }
    .nv-logo    { margin-right: clamp(16px, 2.5vw, 28px) !important; }
  }

  @media (max-width: 1023px) {
    .nv-links   { display: none !important; }
    .nv-actions { display: none !important; }
    .nv-ham     { display: flex !important; }
  }

  @media (max-width: 768px) {
    .nv-inner   { height: 72px; }
    .nv-logo    { gap: 12px; margin-right: 12px; }
    .nv-logo-img{ width: 46px; height: 46px; }
    .nv-drawer  { max-height: calc(100svh - 72px); }
  }

  @media (max-width: 480px) {
    .nv-inner   { height: 64px; padding: 0 14px; }
    .nv-logo    { gap: 10px; margin-right: 8px; }
    .nv-logo-img{ width: 40px; height: 40px; }
    .nv-drawer  { max-height: calc(100svh - 64px); padding: 12px; }
    .nv-drawer-portal-row { flex-direction: column; }
  }

  @media (max-width: 360px) {
    .nv-inner   { height: 58px; padding: 0 10px; }
    .nv-logo    { gap: 8px; margin-right: 6px; }
    .nv-logo-img{ width: 34px; height: 34px; }
  }
`;

// ── Portal dropdown ──────────────────────────────────────────────────────────
function PortalDropdown({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="nv-dropdown nv-dropdown-right"
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <a
            href="https://portal.brainchildintschools.com/student"
            target="_blank" rel="noopener noreferrer"
            className="nv-drop-item portal"
          >
            <FiUser size={14} /> Student Portal
          </a>
          <a
            href="https://portal.brainchildintschools.com/"
            target="_blank" rel="noopener noreferrer"
            className="nv-drop-item"
          >
            <FiBriefcase size={14} /> Staff Portal
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── About dropdown ───────────────────────────────────────────────────────────
function AboutDropdown({ open, onSelect }: { open: boolean; onSelect: (id: string) => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="nv-dropdown"
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          {aboutDropdownItems.map((item) => (
            <button
              key={item.id}
              className="nv-drop-item"
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Navbar ──────────────────────────────────────────────────────────────
export function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [aboutOpen,  setAboutOpen]  = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const location   = useLocation();
  const navigate   = useNavigate();
  const drawerRef  = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Body scroll lock when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close drawer on desktop resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024 && menuOpen) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [menuOpen]);

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  function handleAboutClick(id: string) {
    setAboutOpen(false);
    setMenuOpen(false);
    navigate("/about");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const aboutActive = location.pathname === "/about";

  return (
    <nav className={`nv-root${scrolled ? " nv-scrolled" : " nv-top"}`} role="banner">
      <style>{CSS}</style>

      <div className="nv-inner">

        {/* ── LOGO ── */}
        <Link to="/" className="nv-logo">
          <img src={logoImg} alt="Sky View logo" className="nv-logo-img" />
          <SkyViewLogo />
        </Link>

        {/* ── CENTER LINKS ── */}
        <ul className="nv-links" role="list">

          {/* About Us with dropdown */}
          <li
            className="nv-link-li"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`nv-dropdown-btn${aboutActive || aboutOpen ? " active" : ""}`}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
            >
              About Us
              <motion.span
                animate={{ rotate: aboutOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <FiChevronDown size={13} />
              </motion.span>
            </button>
            {(aboutActive || aboutOpen) && (
              <motion.span
                className="nv-underline"
                layoutId="nv-indicator"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <AboutDropdown open={aboutOpen} onSelect={handleAboutClick} />
          </li>

          {/* Regular links */}
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="nv-link-li">
                <Link
                  to={item.href}
                  className={`nv-link${active ? " active" : ""}`}
                >
                  {item.label}
                </Link>
                {active && (
                  <motion.span
                    className="nv-underline"
                    layoutId="nv-indicator"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── RIGHT ACTIONS ── */}
        <div className="nv-actions">

          {/* Portal dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setPortalOpen(true)}
            onMouseLeave={() => setPortalOpen(false)}
          >
            <button className="nv-portal-btn" aria-expanded={portalOpen}>
              Portal
              <motion.span
                animate={{ rotate: portalOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <FiChevronDown size={12} />
              </motion.span>
            </button>
            <PortalDropdown open={portalOpen} />
          </div>

          {/* Enroll CTA */}
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              className="nv-enroll-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Enroll My Child
            </motion.button>
          </Link>

          {/* Hamburger */}
          <button
            className="nv-ham"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen
                ? <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}>
                    <FiX size={22} />
                  </motion.span>
                : <motion.span key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}>
                    <FiMenu size={22} />
                  </motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={drawerRef}
            className="nv-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-label="Mobile navigation"
          >
            {/* About section */}
            <p className="nv-drawer-section-label">About Us</p>
            {aboutDropdownItems.map((item, i) => (
              <motion.button
                key={item.id}
                className="nv-drawer-item"
                onClick={() => handleAboutClick(item.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="nv-drawer-divider" />

            {/* Nav links */}
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (aboutDropdownItems.length + i) * 0.04 }}
              >
                <Link
                  to={item.href}
                  className={`nv-drawer-item${isActive(item.href) ? " active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: "block" }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <div className="nv-drawer-divider" />

            {/* Portal buttons */}
            <div className="nv-drawer-portal-row">
              <a
                href="https://portal.brainchildintschools.com/student"
                target="_blank" rel="noopener noreferrer"
                className="nv-drawer-portal-btn nv-drawer-portal-student"
                onClick={() => setMenuOpen(false)}
              >
                <FiUser size={14} /> Student Portal
              </a>
              <a
                href="https://portal.brainchildintschools.com/"
                target="_blank" rel="noopener noreferrer"
                className="nv-drawer-portal-btn nv-drawer-portal-staff"
                onClick={() => setMenuOpen(false)}
              >
                <FiBriefcase size={14} /> Staff Portal
              </a>
            </div>

            {/* Enroll CTA */}
            <Link
              to="/contact"
              className="nv-drawer-enroll"
              onClick={() => setMenuOpen(false)}
            >
              Enroll My Child →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}