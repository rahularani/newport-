import { motion } from "framer-motion";

const categories = [
  { title: "Core Skills", items: ["Java (Core + OOP)", "Python", "JavaScript (ES6+)"] },
  { title: "Frontend", items: ["React.js", "HTML5 & CSS3", "Framer Motion", "Responsive UI"] },
  { title: "Backend & Database", items: ["Firebase (Firestore, Auth)", "REST APIs", "Node.js"] },
  { title: "AI & Data Science", items: ["Machine Learning", "Deep Learning (CNN, UNet)", "Image Processing", "Medical Imaging"] },
  { title: "Tools & Platforms", items: ["Git & GitHub", "Google Colab", "VS Code", "Figma"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "#FFFFFF" }}>
      <p className="section-label">— Expertise</p>
      <h2 className="section-title">Skills & Tech Stack</h2>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <motion.div key={cat.title} className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}>
            <p className="skill-card-title">{cat.title}</p>
            {cat.items.map(item => (
              <div key={item} className="skill-item">
                <span className="skill-dot" />
                <span className="skill-name">{item}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
