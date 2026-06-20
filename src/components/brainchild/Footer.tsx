import logo from "@/assets/SKYVIEW-IMAGES/Logo.png";
import insta from "@/assets/icons/insta.png";
import facebook from "@/assets/icons/facebook.png";
import footerImage from "@/assets/images/image.png";
import { AnimatedSection } from "./AnimatedSection";
import SkyViewLogo from "./SkyViewLogo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { src: insta, alt: "Instagram", href: "https://www.instagram.com/brainchildschool?igsh=MWsxYWd0MzV1cmJxeQ==" },
    { src: facebook, alt: "Facebook", href: "https://www.facebook.com/brain.child.50309" },
    {
      alt: "YouTube",
      href: "https://youtube.com/@bravotechublive?si=hpcgVIBJ9gAAQfOz",
      svg: (
        <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor", opacity: 0.7 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      alt: "TikTok",
      href: "https://www.tiktok.com/@bravotechmedia0?_r=1&_t=ZS-963EpZ3Zezs",
      svg: (
        <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor", opacity: 0.7 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
        </svg>
      ),
    },
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
    { label: "Student Portal", href: "https://portal.brainchildintschools.com/student" },
    { label: "Staff Portal", href: "https://portal.brainchildintschools.com/" },
    { label: "Our Story", href: "/about" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--color-blue-dark, #0f1f3d)",
        color: "rgba(255,255,255,0.9)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-heading)",
      }}
    >
      {/* ── Decorative background circles ── */}
      <div style={{ position: "absolute", top: 80, right: 40, width: 384, height: 384, borderRadius: "50%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 128, left: 24, width: 256, height: 256, borderRadius: "50%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "rgba(155,28,44,0.03)", pointerEvents: "none" }} />

      {/* ══════════════════════════════════
          FOOTER IMAGE — always shows well
          - negative margin pulls it up over the section above
          - min-height + object-fit ensure it never collapses
          - box-shadow lifts it off the background
      ══════════════════════════════════ */}
      <motion.div
        style={{
          padding: "0 clamp(16px, 5vw, 96px)",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 20,
          marginTop: -80,       /* lifts image above footer edge */
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 32px 72px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
            /* Enforce a minimum visible height so the image never squashes */
            minHeight: 180,
            flexShrink: 0,
          }}
        >
          <img
            src={footerImage}
            alt="Build a better future"
            style={{
              width: "100%",
              height: "auto",
              /* clamp: never shorter than 180px, never taller than 420px */
              minHeight: "clamp(180px, 28vw, 420px)",
              maxHeight: 420,
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              transition: "transform 0.7s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </motion.div>

      {/* ── Main footer body ── */}
      <AnimatedSection>
        <div
          style={{
            padding: "clamp(48px, 6vw, 80px) clamp(16px, 5vw, 96px) 0",
          }}
        >
          {/* Grid: brand + 4 link columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "clamp(28px, 4vw, 40px)",
            }}
          >
            {/* Brand column — spans wider on large screens */}
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                color: "rgba(255,255,255,0.6)",
                gridColumn: "span 2",
                minWidth: 0,
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, width: "fit-content" }}>
                <motion.img
                  src={logo}
                  alt="Sky View Logo"
                  style={{ width: 64, height: "auto", flexShrink: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div style={{ fontSize: "1.1rem", color: "var(--color-primary, #9B1C2C)", fontWeight: 700, lineHeight: 1.2 }}>
                  <SkyViewLogo />
                </div>
              </Link>

              <p style={{ fontSize: 13, lineHeight: 1.75, maxWidth: 280, color: "rgba(255,255,255,0.45)", margin: 0 }}>
                At Skyview Montessori School, we focus on more than academics — we create a safe, inspiring space where every child thrives.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {socialLinks.map((icon, idx) => (
                  <motion.a
                    key={icon.alt}
                    href={icon.href}
                    aria-label={icon.alt}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", textDecoration: "none", flexShrink: 0,
                      transition: "background 0.25s, border-color 0.25s",
                    }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(155,28,44,0.3)";
                      e.currentTarget.style.borderColor = "rgba(155,28,44,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    }}
                  >
                    {icon.svg
                      ? icon.svg
                      : <img src={icon.src} alt={icon.alt} style={{ width: 16, height: 16, filter: "invert(1)", opacity: 0.7 }} />
                    }
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <FooterCol title="Quick Links" delay={0}>
              {quickLinks.map((link, idx) => (
                <FooterLink key={idx} delay={idx * 0.05}>
                  {link.onClick ? (
                    <button onClick={link.onClick} style={linkStyle}>
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.href!} style={linkStyle}>
                      {link.label}
                    </Link>
                  )}
                </FooterLink>
              ))}
            </FooterCol>

            {/* Help */}
            <FooterCol title="Help" delay={0.1}>
              {helpLinks.map((link, idx) => (
                <FooterLink key={idx}>
                  <Link to={link.href} style={linkStyle}>{link.label}</Link>
                </FooterLink>
              ))}
            </FooterCol>

            {/* Resources */}
            <FooterCol title="Resources" delay={0.2}>
              {resourceLinks.map((link, idx) => (
                <FooterLink key={idx}>
                  <Link to={link.href} style={linkStyle}>{link.label}</Link>
                </FooterLink>
              ))}
            </FooterCol>

            {/* Contact */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 style={colHeadStyle}>Contact Us</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <motion.li whileHover={{ x: 4 }}>
                  <a href="tel:+2348033555262" style={{ ...linkStyle, display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ marginTop: 1 }}>📞</span>
                    <span>+234 803 355 5262</span>
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 4 }}>
                  <a
                    href="mailto:skyviewmontessorischoolenugu@gmail.com"
                    style={{ ...linkStyle, display: "flex", alignItems: "flex-start", gap: 8, wordBreak: "break-all" }}
                  >
                    <span style={{ marginTop: 1 }}>✉️</span>
                    <span>skyviewmontessorischoolenugu@gmail.com</span>
                  </a>
                </motion.li>
                <li style={{
                  display: "flex", alignItems: "flex-start", gap: 8,
                  fontSize: 12, lineHeight: 1.65, color: "rgba(255,255,255,0.4)",
                  paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <span style={{ marginTop: 2, flexShrink: 0 }}>📍</span>
                  <span>Plot 125/127 Eke Layout, off Orji Udenta Street, near Timber Market, Nike Lake Road, Enugu, Nigeria.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div style={{ position: "relative", marginTop: 56 }}>
            <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)" }} />
          </div>

          {/* Bottom bar */}
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 28,
              paddingBottom: 36,
              gap: 12,
              fontSize: 12,
              color: "rgba(255,255,255,0.38)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ margin: 0 }}>Bravotechmedia © 2026, All Rights Reserved</p>
            <div style={{ display: "flex", gap: 24 }}>
              <Link to="/about" style={{ color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
              >
                Privacy Policy
              </Link>
              <Link to="/about" style={{ color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
              >
                Terms of Use
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </footer>
  );
}

/* ── Shared sub-components ── */

const colHeadStyle: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)",
  textTransform: "uppercase", letterSpacing: "0.12em",
  paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.10)",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  fontSize: 13, color: "rgba(255,255,255,0.45)",
  textDecoration: "none", transition: "color 0.2s",
  background: "none", border: "none", cursor: "pointer", padding: 0,
  fontFamily: "inherit",
};

function FooterCol({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 style={colHeadStyle}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </ul>
    </motion.div>
  );
}

function FooterLink({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.li
      style={{ width: "fit-content" }}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ x: 6 }}
      onMouseEnter={(e) => {
        const a = e.currentTarget.querySelector("a, button") as HTMLElement | null;
        if (a) a.style.color = "var(--color-primary, #9B1C2C)";
      }}
      onMouseLeave={(e) => {
        const a = e.currentTarget.querySelector("a, button") as HTMLElement | null;
        if (a) a.style.color = "rgba(255,255,255,0.45)";
      }}
    >
      {children}
    </motion.li>
  );
}