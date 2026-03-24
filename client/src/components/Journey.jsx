import React from "react";
import { motion } from "framer-motion";

const achievements = [
  { icon: "🚀", text: "Built multiple real-world projects solving agriculture and healthcare problems" },
  { icon: "💡", text: "Strong understanding of AI + Web Integration" },
  { icon: "🎯", text: "Developed end-to-end applications (Frontend + Backend + AI)" },
  { icon: "🤝", text: "Active participant in hackathons and tech events" },
  { icon: "📈", text: "Continuously improving problem-solving and system design skills" },
];

export default function Journey() {
  return (
    <section id="achievements" style={{ background: "#FFFFFF" }}>
      <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
        — Highlights
      </p>
      <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: "800", color: "#222222", marginBottom: "40px" }}>
        Achievements & Highlights
      </h2>
      <div>
        {achievements.map((a, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              display: "flex", alignItems: "flex-start", gap: "16px",
              padding: "20px 0", borderBottom: "1px solid #ebebeb",
            }}>
            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{a.icon}</span>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "#222222", lineHeight: 1.6 }}>{a.text}</p>
          </motion.div>
        ))}
      </div>
      <div style={{
        marginTop: "40px", background: "#F8F8F8", border: "1px solid #ebebeb",
        borderRadius: "10px", padding: "clamp(20px, 4vw, 32px)", textAlign: "center",
      }}>
        <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", fontWeight: "600", color: "#222222", fontStyle: "italic" }}>
          "Driven by curiosity, powered by consistency."
        </p>
      </div>
    </section>
  );
}
