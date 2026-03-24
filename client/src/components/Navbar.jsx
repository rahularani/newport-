import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [["About", "#aboutme"], ["Projects", "#portfolio"], ["Skills", "#skills"], ["Contact", "#contact"]];

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}>

        <div className="nav-logo">
          <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: "700" }}>R</span>
        </div>

        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Let's Connect ↗</a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}>
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href="#contact" className="mob-cta" onClick={() => setMenuOpen(false)}>Let's Connect ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
