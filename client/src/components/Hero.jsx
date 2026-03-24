import React from "react";
import { motion } from "framer-motion";
import rahulImg from "../assets/rahul.png";

export default function Hero() {
  return (
    <section className="hero">
      {/* Stats */}
      <motion.div className="hero-stats"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}>
        {[{ num: "+3", label: "Real-world Projects" }, { num: "+5", label: "Tech Stacks" }].map(s => (
          <div key={s.label}>
            <p className="hero-stat-num">{s.num}</p>
            <p className="hero-stat-label">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div className="hero-content"
        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}>
        <p className="section-label">— Information Technology Student</p>
        <h1 className="hero-title">
          Building Intelligent Digital Experiences that Solve Real-World Problems
        </h1>
        <p className="hero-sub">
          I'm Rahul R, an IT student passionate about crafting scalable applications,
          AI-driven solutions, and impactful user experiences.
        </p>
        <div className="hero-btns">
          <a href="#portfolio" className="hero-btn-primary">View My Work</a>
          <a href="/resume.pdf" download className="hero-btn-secondary">Download Resume ↓</a>
        </div>
      </motion.div>

      {/* Big bg text */}
      <motion.p className="hero-hello"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}>
        Hello
      </motion.p>

      {/* Photo */}
      <motion.img src={rahulImg} alt="Rahul R" className="hero-img"
        initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }} />

      <p className="hero-scroll">Scroll down ↓</p>
    </section>
  );
}
