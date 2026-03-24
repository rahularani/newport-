import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section className="banner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}>
      <div style={{ flex: 1, minWidth: "240px" }}>
        <p className="section-label" style={{ color: "#7B7B7B" }}>— Resume</p>
        <h2 className="banner-title">
          Explore my technical expertise, projects & achievements in detail.
        </h2>
      </div>
      <a href="/resume.pdf" download className="banner-btn">Download Resume ↓</a>
    </motion.section>
  );
}
