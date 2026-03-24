import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <section id="aboutme" className="section" style={{ background: "#F8F8F8" }}>
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="about-grid">

        <motion.div variants={fadeUp} className="about-text">
          <p className="section-label">— About Me</p>
          <h2 className="section-title">I design solutions,<br />not just code.</h2>
          <p style={{ color: "#7B7B7B", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "16px" }}>
            I am a highly motivated and curious developer who thrives on solving real-world problems
            using technology. My journey started with a strong foundation in programming and evolved
            into building intelligent systems powered by AI, automation, and modern web technologies.
          </p>
          <p style={{ color: "#7B7B7B", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "16px" }}>
            From developing machine learning models for healthcare to building futuristic agriculture
            platforms, I focus on creating systems that are not only functional but meaningful.
          </p>
          <p className="about-quote">
            "I turn complex problems into simple, scalable systems."
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="about-stats">
          {[{ num: "3+", label: "Real-World Projects" }, { num: "2+", label: "AI/ML Systems Built" }, { num: "5+", label: "Tech Stacks" }].map(s => (
            <div key={s.label} className="about-stat">
              <p className="about-stat-num">{s.num}</p>
              <p className="about-stat-label">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
