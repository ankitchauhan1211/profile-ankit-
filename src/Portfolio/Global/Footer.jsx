import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // agar aap React Router use kar rahe ho
import "./footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-content">
        {/* Social Links */}
        <div className="footer-social">
          <a
            href="https://github.com/ankitchauhan1211"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-chauhan-ab5492348/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#project">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about_us">About Us</a>
          <a href="#get_in_touch">Get In Touch</a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Ankit Chauhan | All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
