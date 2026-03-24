import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "#FFFFFF" }}>
      <p className="section-label">— Contact</p>
      <div className="contact-grid">

        <motion.div className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="contact-title">Let's Build Something Amazing Together 🚀</h2>
          {[
            { icon: "📧", label: "Email", value: "rahulramesharani@gmail.com", href: "mailto:rahulramesharani@gmail.com" },
            { icon: "📱", label: "Phone", value: "9677823318", href: "tel:9677823318" },
            { icon: "🔗", label: "LinkedIn", value: "rahul-r-it", href: "https://www.linkedin.com/in/rahul-r-it" },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">{c.icon}</span>
              <div>
                <p className="contact-link-label">{c.label}</p>
                <p className="contact-link-value">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <input className="form-input" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input className="form-input" name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea className="form-input form-textarea" name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="form-btn">Send Message →</button>
          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
