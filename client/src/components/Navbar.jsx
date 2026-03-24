import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["About", "#aboutme"],
  ["Projects", "#portfolio"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const menuItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" } }),
  exit: (i) => ({ opacity: 0, y: 16, transition: { delay: i * 0.04, duration: 0.2 } }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Active section detection
      const ids = ["home", "aboutme", "portfolio", "skills", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="nav-progress-track">
        <motion.div className="nav-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <motion.nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>

        {/* Logo */}
        <motion.a href="#home" className="nav-logo"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}>
          <span className="nav-logo-letter">R</span>
          <span className="nav-logo-glow" />
        </motion.a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} className={`nav-link${active === href ? " nav-link-active" : ""}`}>
                {label}
                <span className="nav-link-underline" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a href="#contact" className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}>
          <span>Let's Connect</span>
          <motion.span className="nav-cta-arrow"
            initial={{ x: 0 }} whileHover={{ x: 3 }}>↗</motion.span>
        </motion.a>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>

            <div className="mobile-menu-inner">
              {links.map(([label, href], i) => (
                <motion.a key={label} href={href}
                  className={`mob-link${active === href ? " mob-link-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit">
                  <span className="mob-link-num">0{i + 1}</span>
                  {label}
                </motion.a>
              ))}

              <motion.a href="#contact" className="mob-cta"
                onClick={() => setMenuOpen(false)}
                custom={links.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="show"
                exit="exit">
                Let's Connect ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
