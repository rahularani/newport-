import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        padding: "20px 8%",
        background: scrolled ? "rgba(248,248,248,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ebebeb" : "none",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all 0.3s ease",
      }}>
      <div style={{
        width: "32px", height: "32px", background: "#222222",
        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: "700" }}>R</span>
      </div>

      <ul style={{ display: "flex", gap: "36px", listStyle: "none" }}>
        {[["About", "#aboutme"], ["Projects", "#portfolio"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{ fontSize: "0.82rem", color: "#7B7B7B", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#222222"}
              onMouseLeave={e => e.target.style.color = "#7B7B7B"}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        background: "#222222", color: "#fff",
        padding: "10px 20px", borderRadius: "6px",
        fontSize: "0.8rem", fontWeight: "500",
      }}>
        Let's Connect ↗
      </a>
    </motion.nav>
  );
}
