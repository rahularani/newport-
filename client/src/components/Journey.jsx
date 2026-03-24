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
    <section id="achievements" className="section" style={{ background: "#FFFFFF" }}>
      <p className="section-label">— Highlights</p>
      <h2 className="section-title">Achievements & Highlights</h2>
      <div>
        {achievements.map((a, i) => (
          <motion.div key={i} className="achievement-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}>
            <span className="achievement-icon">{a.icon}</span>
            <p className="achievement-text">{a.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="quote-box">
        <p className="quote-text">"Driven by curiosity, powered by consistency."</p>
      </div>
    </section>
  );
}
