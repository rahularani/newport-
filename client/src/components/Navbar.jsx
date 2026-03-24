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
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed", top: 0, width: "100%", zIndex: 100,
          padding: "16px 8%",
          background: scrolled ? "rgba(248,248,248,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #ebebeb" : "none",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          transition: "all 0.3s ease",
        }}>
        <div style={{
          width: "32px", height: "32px", background: "#222222",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: "700" }}>R</span>
        </div>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0 }}
          className="desktop-nav">
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} style={{ fontSize: "0.82rem", color: "#7B7B7B", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#222222"}
                onMouseLeave={e => e.target.style.color = "#7B7B7B"}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="desktop-nav"
          style={{
            background: "#222222", color: "#fff",
            padding: "10px 20px", borderRadius: "6px",
            fontSize: "0.8rem", fontWeight: "500", whiteSpace: "nowrap",
          }}>
          Let's Connect ↗
        </a>

        {/* Hamburger */}
        <button
          className="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: "5px", padding: "4px",
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "2px",
              background: "#222222", borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", top: "64px", left: 0, right: 0,
              background: "#fff", zIndex: 99,
              borderBottom: "1px solid #ebebeb",
              padding: "20px 8%", display: "flex", flexDirection: "column", gap: "16px",
            }}>
            {links.map(([label, href]) => (
              <a key={label} href={href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "1rem", color: "#222222", fontWeight: "500", padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              background: "#222222", color: "#fff",
              padding: "12px 20px", borderRadius: "6px",
              fontSize: "0.9rem", fontWeight: "600", textAlign: "center", marginTop: "8px",
            }}>
              Let's Connect ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}
