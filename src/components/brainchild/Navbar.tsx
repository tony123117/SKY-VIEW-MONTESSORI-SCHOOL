import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiUser, FiBriefcase } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const aboutDropdownItems = [
  { label: "Welcome Note", id: "welcome-note" },
  { label: "Curriculum", id: "curriculum" },
  { label: "Departments", id: "departments" },
  { label: "Extra-curricular Activities", id: "extracurricular" },
];

// ── Logo ──────────────────────────────────────────────────────────────────────
function NavLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        textDecoration: "none",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {/* Red circle mark */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #9B1C2C 0%, #C5305A 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 900,
          fontSize: "0.82rem",
          letterSpacing: "0.05em",
          flexShrink: 0,
          boxShadow: "0 2px 12px rgba(155,28,44,0.3)",
        }}
      >
        SKV
      </div>

      {/* Word-mark + tagline stacked, left-aligned */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
        {/* SKY · VIEW */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: "#4A9EDB",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-heading, sans-serif)",
            }}
          >
            SKY
          </span>
          <span
            style={{
              margin: "0 5px",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF6B9D, #9B1C2C)",
              display: "inline-block",
              flexShrink: 0,
              alignSelf: "center",
            }}
          />
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: 900,
              color: "#FF6B9D",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-heading, sans-serif)",
            }}
          >
            VIEW
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            margin: "3px 0 0",
            fontSize: "0.58rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "rgba(0,0,0,0.4)",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-body, sans-serif)",
          }}
        >
          Nursery · Primary · Secondary
        </p>
      </div>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) { document.body.style.overflow = ""; return; }
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleAboutClick(id: string) {
    setAboutOpen(false);
    setMenuOpen(false);
    navigate("/about");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: 72,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(155,28,44,0.12)"
          : "1px solid rgba(0,0,0,0.06)",
        boxShadow: scrolled
          ? "0 4px 32px rgba(0,0,0,0.08)"
          : "0 1px 12px rgba(0,0,0,0.04)",
        transition: "all 0.3s ease",
        fontFamily: "var(--font-heading, sans-serif)",
      }}
    >
      {/* ── Logo ── */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavLogo />
      </Link>

      {/* ── Desktop nav ── */}
      <ul
        style={{
          display: "none",
          gap: "2rem",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="desktop-nav"
      >
        {/* About Us dropdown */}
        <li
          style={{ position: "relative" }}
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: location.pathname === "/about" ? "#9B1C2C" : "#1F2937",
              padding: "4px 0",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#C5305A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = location.pathname === "/about" ? "#9B1C2C" : "#1F2937"; }}
          >
            About Us
            <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <FiChevronDown size={14} />
            </motion.span>
          </button>
          <span style={{
            position: "absolute", bottom: -2, left: 0, height: 2, borderRadius: 2,
            background: "#9B1C2C", transition: "width 0.25s ease",
            width: location.pathname === "/about" || aboutOpen ? "100%" : 0,
          }} />

          <AnimatePresence>
            {aboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute", top: "calc(100% + 12px)", left: 0,
                  minWidth: 220, background: "#fff", borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  overflow: "hidden", borderTop: "3px solid #9B1C2C",
                }}
              >
                {aboutDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAboutClick(item.id)}
                    style={{
                      width: "100%", textAlign: "left", padding: "11px 18px",
                      fontSize: "0.84rem", fontWeight: 500, color: "#374151",
                      background: "none", border: "none",
                      borderBottom: "1px solid rgba(0,0,0,0.05)", cursor: "pointer",
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#FFF5F6";
                      (e.currentTarget as HTMLButtonElement).style.color = "#9B1C2C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "none";
                      (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Regular nav links */}
        {navItems.map((item) => {
          const active = location.pathname === item.href;
          return (
            <li key={item.label} style={{ position: "relative" }}>
              <Link
                to={item.href}
                style={{
                  textDecoration: "none", fontSize: "0.875rem", fontWeight: 600,
                  color: active ? "#9B1C2C" : "#1F2937", padding: "4px 0",
                  transition: "color 0.2s", display: "block",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#C5305A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = active ? "#9B1C2C" : "#1F2937"; }}
              >
                {item.label}
              </Link>
              <span style={{
                position: "absolute", bottom: -2, left: 0, height: 2, borderRadius: 2,
                background: "#9B1C2C", transition: "width 0.25s ease",
                width: active ? "100%" : 0,
              }} />
            </li>
          );
        })}
      </ul>

      {/* ── Desktop action buttons ── */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="desktop-actions">
        {/* Portal dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setPortalOpen(true)}
          onMouseLeave={() => setPortalOpen(false)}
        >
          <button
            style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "8px 18px", borderRadius: 999, fontSize: "0.84rem",
              fontWeight: 600, color: "#374151", background: "#F3F4F6",
              border: "1px solid rgba(0,0,0,0.1)", cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#E5E7EB"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F3F4F6"; }}
          >
            Portal
            <motion.span animate={{ rotate: portalOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <FiChevronDown size={13} />
            </motion.span>
          </button>

          <AnimatePresence>
            {portalOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute", top: "calc(100% + 10px)", right: 0,
                  minWidth: 200, background: "#fff", borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  overflow: "hidden", borderTop: "3px solid #4A9EDB",
                }}
              >
                <a
                  href="https://portal.brainchildintschools.com/student"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "11px 18px",
                    fontSize: "0.84rem", fontWeight: 500, color: "#1D6FA4",
                    textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.05)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#EFF8FF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "none"; }}
                >
                  <FiUser size={14} /> Student Portal
                </a>
                <a
                  href="https://portal.brainchildintschools.com/"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "11px 18px",
                    fontSize: "0.84rem", fontWeight: 500, color: "#9B1C2C",
                    textDecoration: "none", transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FFF5F6"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "none"; }}
                >
                  <FiBriefcase size={14} /> Staff Portal
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enroll CTA — sky blue */}
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "9px 22px",
              borderRadius: 999,
              fontSize: "0.84rem",
              fontWeight: 700,
              color: "#fff",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #2980b9 0%, #4A9EDB 60%, #7BC8F0 100%)",
              boxShadow: "0 4px 18px rgba(74,158,219,0.4)",
              letterSpacing: "0.01em",
            }}
          >
            Enroll My Child
          </motion.button>
        </Link>
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        style={{
          display: "none", padding: 8, border: "none", background: "none",
          cursor: "pointer", color: "#1F2937", fontSize: "1.4rem", borderRadius: 8,
        }}
        className="mobile-hamburger"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
              padding: "1.5rem", display: "flex", flexDirection: "column",
              gap: "0.25rem", maxHeight: "calc(100vh - 72px)", overflowY: "auto",
            }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9B1C2C", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>
              About Us
            </p>
            {aboutDropdownItems.map((item) => (
              <button key={item.id} onClick={() => handleAboutClick(item.id)}
                style={{
                  textAlign: "left", padding: "8px 12px", fontSize: "0.9rem",
                  fontWeight: 500, color: "#374151", background: "none",
                  border: "none", cursor: "pointer", borderRadius: 8,
                }}
              >
                {item.label}
              </button>
            ))}

            <div style={{ height: 1, background: "rgba(0,0,0,0.07)", margin: "0.75rem 0" }} />

            {navItems.map((item) => (
              <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none", padding: "10px 12px", fontSize: "0.95rem",
                  fontWeight: 600,
                  color: location.pathname === item.href ? "#9B1C2C" : "#1F2937",
                  borderRadius: 8,
                  borderLeft: location.pathname === item.href ? "3px solid #9B1C2C" : "3px solid transparent",
                  background: location.pathname === item.href ? "#FFF5F6" : "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "0.75rem" }}>
              <a href="https://portal.brainchildintschools.com/student"
                target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, padding: "11px", borderRadius: 999, fontSize: "0.9rem",
                  fontWeight: 600, color: "#1D6FA4", background: "#EFF8FF", textDecoration: "none",
                }}
              >
                <FiUser size={15} /> Student Portal
              </a>
              <a href="https://portal.brainchildintschools.com/"
                target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, padding: "11px", borderRadius: 999, fontSize: "0.9rem",
                  fontWeight: 600, color: "#9B1C2C", background: "#FFF0F3", textDecoration: "none",
                }}
              >
                <FiBriefcase size={15} /> Staff Portal
              </a>
              <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                <button style={{
                  width: "100%", padding: "13px", borderRadius: 999, fontSize: "0.95rem",
                  fontWeight: 700, color: "#fff", border: "none", cursor: "pointer",
                  background: "linear-gradient(135deg, #2980b9 0%, #4A9EDB 60%, #7BC8F0 100%)",
                  boxShadow: "0 4px 18px rgba(74,158,219,0.3)",
                }}>
                  Enroll My Child
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}