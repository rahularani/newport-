import React from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <section id="aboutme" style={{ background: "#F8F8F8" }}>
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        style={{ display: "flex", gap: "80px", flexWrap: "wrap", alignItems: "flex-start" }}>

        <motion.div variants={fadeUp} style={{ flex: 1, minWidth: "280px" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
            — About Me
          </p>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#222222", marginBottom: "24px" }}>
            I design solutions,<br />not just code.
          </h2>
          <p style={{ color: "#7B7B7B", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "16px" }}>
            I am a highly motivated and curious developer who thrives on solving real-world problems
            using technology. My journey started with a strong foundation in programming and evolved
            into building intelligent systems powered by AI, automation, and modern web technologies.
          </p>
          <p style={{ color: "#7B7B7B", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "16px" }}>
            From developing machine learning models for healthcare to building futuristic agriculture
            platforms, I focus on creating systems that are not only functional but meaningful.
          </p>
          <p style={{ color: "#222222", fontStyle: "italic", fontSize: "0.9rem", borderLeft: "3px solid #222222", paddingLeft: "16px" }}>
            "I turn complex problems into simple, scalable systems."
          </p>
        </motion.div>

        <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[{ num: "3+", label: "Real-World Projects" }, { num: "2+", label: "AI/ML Systems Built" }, { num: "5+", label: "Tech Stacks" }].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "3rem", fontWeight: "900", color: "#222222", lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: "0.72rem", color: "#7B7B7B", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
