import { motion } from "framer-motion";

const projects = [
  {
    title: "AgriBot AI", subtitle: "Smart Farming Automation Platform",
    desc: "A futuristic agriculture ecosystem empowering farmers through automation, AI, and digital marketplaces. Features remote-controlled farming robots, AI chatbot, real-time crop price prediction, and farmer-to-market direct selling.",
    tech: ["React", "Firebase", "AI Models", "IoT"],
    impact: "Reduces farmer dependency on middlemen and increases productivity using smart technology.",
    bg: "linear-gradient(135deg, #c8d8c0 0%, #a8c0a0 100%)", tag: "Agriculture + AI",
  },
  {
    title: "Diabetic Retinopathy Detection", subtitle: "Deep Learning Medical Imaging System",
    desc: "A deep learning-based system to detect and classify diabetic retinopathy severity. Supports image upload, automated prediction, and classification into Mild / Moderate / Severe using hybrid dataset training.",
    tech: ["Python", "TensorFlow", "CNN", "UNet"],
    impact: "Helps in early detection of blindness-causing disease using AI.",
    bg: "linear-gradient(135deg, #d0c8d8 0%, #b8a8c8 100%)", tag: "Healthcare + AI",
  },
  {
    title: "AgriKart", subtitle: "Agriculture E-Commerce Platform",
    desc: "A modern mobile-first application for farmers to buy and sell agricultural products seamlessly. Features smart search, live product suggestions, mobile-friendly UI with animations, and Firebase backend.",
    tech: ["React Native", "Firebase", "Framer Motion"],
    impact: "Bridges the gap between farmers and buyers with a seamless digital marketplace.",
    bg: "linear-gradient(135deg, #d8c8b8 0%, #c0a890 100%)", tag: "E-Commerce + Mobile",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="section" style={{ background: "#F8F8F8" }}>
      <p className="section-label">— Portfolio</p>
      <h2 className="section-title">Featured Projects</h2>
      <div>
        {projects.map((p, i) => (
          <motion.div key={p.title} className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}>
            <div className="project-bar" style={{ background: p.bg }} />
            <div className="project-body">
              <span className="project-tag">{p.tag}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-desc">{p.desc}</p>
              <p className="project-impact">💡 {p.impact}</p>
              <div className="project-techs">
                {p.tech.map(t => <span key={t} className="project-tech">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
