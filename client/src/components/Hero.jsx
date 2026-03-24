import React from "react";
import { motion } from "framer-motion";
import rahulImg from "../assets/rahul.png";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "#FFFFFF",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 8%",
      paddingTop: "80px",
    }}>
      {/* Vertical label */}
      <div style={{
        position: "absolute", left: "20px", top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        fontSize: "0.65rem", letterSpacing: "3px",
        textTransform: "uppercase", color: "#7B7B7B", whiteSpace: "nowrap",
      }}>
        Portfolio Website
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ position: "absolute", top: "120px", left: "8%", display: "flex", gap: "40px" }}>
        {[{ num: "+3", label: "Real-world Projects" }, { num: "+5", label: "Tech Stacks" }].map(s => (
          <div key={s.label}>
            <p style={{ fontSize: "1.6rem", fontWeight: "700", color: "#222222" }}>{s.num}</p>
            <p style={{ fontSize: "0.72rem", color: "#7B7B7B", marginTop: "2px" }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Main text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{ maxWidth: "55%", zIndex: 3 }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "16px" }}>
          — Information Technology Student
        </p>
        <h1 style={{
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: "800",
          color: "#222222", lineHeight: 1.2, marginBottom: "20px",
        }}>
          Building Intelligent Digital Experiences that Solve Real-World Problems
        </h1>
        <p style={{ color: "#7B7B7B", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "36px", maxWidth: "480px" }}>
          I'm Rahul R, an IT student passionate about crafting scalable applications,
          AI-driven solutions, and impactful user experiences.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href="#portfolio" style={{
            background: "#222222", color: "#fff",
            padding: "13px 28px", borderRadius: "6px",
            fontSize: "0.82rem", fontWeight: "600",
          }}>
            View My Work
          </a>
          <a href="/resume.pdf" download style={{
            background: "#F8F8F8", color: "#222222",
            border: "1px solid #ebebeb",
            padding: "13px 28px", borderRadius: "6px",
            fontSize: "0.82rem", fontWeight: "600",
          }}>
            Download Resume ↓
          </a>
        </div>
      </motion.div>

      {/* Big Hello bg text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        style={{
          position: "absolute", bottom: "8%", left: "7%",
          fontSize: "clamp(80px, 14vw, 160px)",
          fontWeight: "800", color: "rgba(34,34,34,0.06)",
          lineHeight: 1, letterSpacing: "-4px", zIndex: 1,
          userSelect: "none",
        }}>
        Hello
      </motion.h1>

      {/* Photo */}
      <motion.img
        src={rahulImg}
        alt="Rahul R"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          position: "absolute", right: "8%", bottom: 0,
          height: "90%", width: "auto", zIndex: 2,
        }}
      />

      {/* Scroll down */}
      <div style={{
        position: "absolute", bottom: "32px", left: "8%",
        fontSize: "0.72rem", color: "#7B7B7B", letterSpacing: "1px", zIndex: 3,
      }}>
        Scroll down ↓
      </div>
    </section>
  );
}
