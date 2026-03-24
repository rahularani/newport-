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
      padding: "100px 8% 60px",
    }}>
      <style>{`
        .hero-img {
          position: absolute;
          right: 8%;
          bottom: 0;
          height: 88%;
          width: auto;
          z-index: 2;
        }
        .hero-content { max-width: 55%; z-index: 3; position: relative; }
        .hero-hello {
          position: absolute; bottom: 8%; left: 7%;
          font-size: clamp(70px, 14vw, 160px);
          font-weight: 800; color: rgba(34,34,34,0.05);
          line-height: 1; letter-spacing: -4px; z-index: 1; user-select: none;
        }
        @media (max-width: 768px) {
          .hero-img {
            position: relative; right: auto; bottom: auto;
            width: 70%; max-width: 280px; height: auto;
            display: block; margin: 32px auto 0;
          }
          .hero-content { max-width: 100%; }
          .hero-hello { font-size: 80px; bottom: 4%; left: 4%; }
        }
        @media (max-width: 480px) {
          .hero-img { width: 80%; max-width: 240px; }
          .hero-hello { font-size: 56px; }
        }
      `}</style>

      {/* Vertical label — hide on mobile */}
      <div style={{
        position: "absolute", left: "16px", top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        fontSize: "0.6rem", letterSpacing: "3px",
        textTransform: "uppercase", color: "#7B7B7B", whiteSpace: "nowrap",
      }} className="desktop-only">
        Portfolio Website
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ display: "flex", gap: "32px", marginBottom: "24px" }}>
        {[{ num: "+3", label: "Real-world Projects" }, { num: "+5", label: "Tech Stacks" }].map(s => (
          <div key={s.label}>
            <p style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: "700", color: "#222222" }}>{s.num}</p>
            <p style={{ fontSize: "0.72rem", color: "#7B7B7B", marginTop: "2px" }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Main text */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
          — Information Technology Student
        </p>
        <h1 style={{
          fontSize: "clamp(1.6rem, 4vw, 3.2rem)", fontWeight: "800",
          color: "#222222", lineHeight: 1.2, marginBottom: "16px",
        }}>
          Building Intelligent Digital Experiences that Solve Real-World Problems
        </h1>
        <p style={{ color: "#7B7B7B", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: 1.8, marginBottom: "28px" }}>
          I'm Rahul R, an IT student passionate about crafting scalable applications,
          AI-driven solutions, and impactful user experiences.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="#portfolio" style={{
            background: "#222222", color: "#fff",
            padding: "12px 24px", borderRadius: "6px",
            fontSize: "0.82rem", fontWeight: "600",
          }}>View My Work</a>
          <a href="/resume.pdf" download style={{
            background: "#F8F8F8", color: "#222222",
            border: "1px solid #ebebeb",
            padding: "12px 24px", borderRadius: "6px",
            fontSize: "0.82rem", fontWeight: "600",
          }}>Download Resume ↓</a>
        </div>
      </motion.div>

      {/* Big Hello bg text */}
      <h1 className="hero-hello">Hello</h1>

      {/* Photo */}
      <motion.img
        src={rahulImg}
        alt="Rahul R"
        className="hero-img"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <div style={{
        position: "absolute", bottom: "24px", left: "8%",
        fontSize: "0.72rem", color: "#7B7B7B", letterSpacing: "1px", zIndex: 3,
      }}>
        Scroll down ↓
      </div>

      <style>{`
        @media (max-width: 768px) { .desktop-only { display: none; } }
      `}</style>
    </section>
  );
}
