import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Core Skills",
    items: ["Java (Core + OOP)", "Python", "JavaScript (ES6+)"],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML5 & CSS3", "Framer Motion", "Responsive UI"],
  },
  {
    title: "Backend & Database",
    items: ["Firebase (Firestore, Auth)", "REST APIs", "Node.js"],
  },
  {
    title: "AI & Data Science",
    items: ["Machine Learning", "Deep Learning (CNN, UNet)", "Image Processing", "Medical Imaging"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git & GitHub", "Google Colab", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#FFFFFF" }}>
      <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
        — Expertise
      </p>
      <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#222222", marginBottom: "48px" }}>Skills & Tech Stack</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              background: "#F8F8F8", border: "1px solid #ebebeb",
              borderRadius: "10px", padding: "24px",
            }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "16px" }}>
              {cat.title}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {cat.items.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#222222", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "#222222" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
