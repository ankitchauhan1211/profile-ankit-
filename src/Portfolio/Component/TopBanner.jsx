import React from "react";
import { motion } from "framer-motion";
import "./topBanner.css";

function TopBanner() {
  return (
    <section className="top-banner" id="home">
      {/* BUBBLES */}
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      {/* Motion Wrapper for Content */}
      <motion.div
        className="banner-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div>
          <motion.p
            className="intro-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MY NAME IS
          </motion.p>

          <motion.h1
            className="main-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ankit <span>Chauhan</span> (Frontend Developer)
          </motion.h1>
        </div>

        <motion.h2
          className="portfolio-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          PORTFOLIO
        </motion.h2>

        <motion.h1
          className="portfolio-text2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          PORTFOLIO
        </motion.h1>

        <motion.button
          className="about-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          More ABOUT me
        </motion.button>

        <motion.div
          className="banner-avatar"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img src="./banner.png" alt="Avatar" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TopBanner;
