import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        background: "#222222", padding: "60px 8%",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "28px",
      }}>
      <div style={{ flex: 1, minWidth: "240px" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
          — Resume
        </p>
        <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: "800", color: "#FFFFFF", lineHeight: 1.3 }}>
          Explore my technical expertise, projects & achievements in detail.
        </h2>
      </div>
      <a href="/resume.pdf" download style={{
        background: "#FFFFFF", color: "#222222",
        padding: "14px 32px", borderRadius: "6px",
        fontWeight: "700", fontSize: "0.82rem", letterSpacing: "1px",
        textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0,
      }}>
        Download Resume ↓
      </a>
    </motion.section>
  );
}
