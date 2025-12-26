import { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import ThreeBackground from "./ThreeBackground";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div className="portfolio">
      <ThreeBackground />

      <nav className="navbar">
        <h2>Frontend Developer</h2>

        {/* Desktop Links */}
        <div className="nav-links desktop">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="nav-links mobile">
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        )}
      </nav>
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <h1>Ankit Chauhan</h1>
        <p className="role">Frontend Developer | React.js</p>
        <p className="location">Delhi, India</p>
      </motion.section>
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section"
      >
        <h2>About Me</h2>
        <p>
          I am a BCA student at Indira Gandhi National Open University with a strong
          interest in frontend web development. I enjoy building clean, responsive,
          and animated user interfaces using React.
        </p>
      </motion.section>
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section"
      >
        <h2>Skills</h2>
        <div className="skills">
          {["React.js", "HTML5", "CSS3", "JavaScript"].map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section"
      >
        <h2>Experience</h2>
        <div className="card">
          <h3>Frontend Developer</h3>
          <p>Divisium Techveda</p>
          <span>Feb 2025 – Oct 2025</span>
        </div>
      </motion.section>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section contact"
      >
        <h2>Contact</h2>
        <p>Email: ankitchauhan62870@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/ankit-chauhan-ab5492348"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a>
      </motion.section>
    </div>
  );
}
