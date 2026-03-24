import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AgriBot AI",
    subtitle: "Smart Farming Automation Platform",
    desc: "A futuristic agriculture ecosystem empowering farmers through automation, AI, and digital marketplaces. Features remote-controlled farming robots, AI chatbot, real-time crop price prediction, and farmer-to-market direct selling.",
    tech: ["React", "Firebase", "AI Models", "IoT"],
    impact: "Reduces farmer dependency on middlemen and increases productivity using smart technology.",
    bg: "linear-gradient(135deg, #c8d8c0 0%, #a8c0a0 100%)",
    tag: "Agriculture + AI",
  },
  {
    title: "Diabetic Retinopathy Detection",
    subtitle: "Deep Learning Medical Imaging System",
    desc: "A deep learning-based system to detect and classify diabetic retinopathy severity. Supports image upload, automated prediction, and classification into Mild / Moderate / Severe using hybrid dataset training.",
    tech: ["Python", "TensorFlow", "CNN", "UNet"],
    impact: "Helps in early detection of blindness-causing disease using AI.",
    bg: "linear-gradient(135deg, #d0c8d8 0%, #b8a8c8 100%)",
    tag: "Healthcare + AI",
  },
  {
    title: "AgriKart",
    subtitle: "Agriculture E-Commerce Platform",
    desc: "A modern mobile-first application for farmers to buy and sell agricultural products seamlessly. Features smart search, live product suggestions, mobile-friendly UI with animations, and Firebase backend.",
    tech: ["React Native", "Firebase", "Framer Motion"],
    impact: "Bridges the gap between farmers and buyers with a seamless digital marketplace.",
    bg: "linear-gradient(135deg, #d8c8b8 0%, #c0a890 100%)",
    tag: "E-Commerce + Mobile",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" style={{ background: "#F8F8F8" }}>
      <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
        — Portfolio
      </p>
      <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#222222", marginBottom: "48px" }}>Featured Projects</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            style={{
              background: "#FFFFFF", border: "1px solid #ebebeb",
              borderRadius: "12px", overflow: "hidden",
              display: "flex", flexWrap: "wrap",
            }}>
            {/* Color band */}
            <div style={{ width: "8px", background: p.bg, flexShrink: 0 }} />

            {/* Content */}
            <div style={{ flex: 1, padding: "32px", minWidth: "260px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <span style={{
                    fontSize: "0.68rem", letterSpacing: "2px", textTransform: "uppercase",
                    color: "#7B7B7B", background: "#F8F8F8", border: "1px solid #ebebeb",
                    padding: "4px 12px", borderRadius: "20px",
                  }}>
                    {p.tag}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#222222", marginTop: "10px" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#7B7B7B", marginTop: "2px" }}>{p.subtitle}</p>
                </div>
              </div>

              <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "16px" }}>{p.desc}</p>

              <p style={{ fontSize: "0.82rem", color: "#222222", fontStyle: "italic", marginBottom: "20px" }}>
                💡 {p.impact}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    background: "#F8F8F8", border: "1px solid #ebebeb",
                    padding: "5px 14px", borderRadius: "20px",
                    fontSize: "0.75rem", color: "#222222",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
