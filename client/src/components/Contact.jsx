import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const inputStyle = {
  width: "100%", padding: "13px 16px", marginBottom: "14px",
  background: "#F8F8F8", border: "1px solid #ebebeb",
  borderRadius: "6px", color: "#222222", fontSize: "0.9rem",
  outline: "none", fontFamily: "inherit", transition: "border-color 0.2s",
};

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
    <section id="contact" style={{ background: "#FFFFFF" }}>
      <p style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", color: "#7B7B7B", marginBottom: "12px" }}>
        — Contact
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "48px" }}>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, minWidth: "260px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", fontWeight: "800", color: "#222222", marginBottom: "24px", lineHeight: 1.2 }}>
            Let's Build Something Amazing Together 🚀
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: "📧", label: "Email", value: "rahulramesharani@gmail.com", href: "mailto:rahulramesharani@gmail.com" },
              { icon: "📱", label: "Phone", value: "9677823318", href: "tel:9677823318" },
              { icon: "🔗", label: "LinkedIn", value: "rahul-r-it", href: "https://www.linkedin.com/in/rahul-r-it" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px", background: "#F8F8F8", border: "1px solid #ebebeb",
                borderRadius: "8px", color: "#222222", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#222222"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#ebebeb"}>
                <span style={{ fontSize: "1.1rem" }}>{c.icon}</span>
                <div>
                  <p style={{ fontSize: "0.65rem", color: "#7B7B7B", letterSpacing: "1px", textTransform: "uppercase" }}>{c.label}</p>
                  <p style={{ fontSize: "clamp(0.78rem, 2vw, 0.88rem)", fontWeight: "600", marginTop: "2px", wordBreak: "break-all" }}>{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, minWidth: "280px" }}>
          <input style={inputStyle} name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required
            onFocus={e => e.target.style.borderColor = "#222222"}
            onBlur={e => e.target.style.borderColor = "#ebebeb"} />
          <input style={inputStyle} name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required
            onFocus={e => e.target.style.borderColor = "#222222"}
            onBlur={e => e.target.style.borderColor = "#ebebeb"} />
          <textarea style={{ ...inputStyle, height: "130px", resize: "vertical" }}
            name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required
            onFocus={e => e.target.style.borderColor = "#222222"}
            onBlur={e => e.target.style.borderColor = "#ebebeb"} />
          <button type="submit" style={{
            background: "#222222", color: "#FFFFFF", border: "none",
            padding: "14px 36px", borderRadius: "6px",
            fontWeight: "700", fontSize: "0.82rem", letterSpacing: "1px",
            textTransform: "uppercase", cursor: "pointer", width: "100%",
          }}>
            Send Message →
          </button>
          {status && <p style={{ marginTop: "14px", color: "#7B7B7B", textAlign: "center", fontSize: "0.85rem" }}>{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
