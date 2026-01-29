import React from "react";
import "./about.css";

function About() {
  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "React Router",
      "Material UI (MUI)",
    ],
    uiUx: [
      "Responsive Design",
      "Mobile-First Design",
      "Pixel Perfect UI",
      "Animations & Transitions",
    ],
    development: [
      "Admin Panels",
      "Dashboards",
      "Landing Pages",
      "Portfolio Websites",
      "API Integration",
    ],
    tools: ["Git", "GitHub", "REST APIs", "Reusable Components"],
  };

  return (
    <div className="about-top" id="about_us">
      <div className="bottom-container">
        <div>
          <div>
            <h1>About Me</h1>
            <b>A Glimpse Into My World</b>
          </div>

          <p>
            Hi, I’m Ankit Chauhan, a passionate Frontend / React.js Developer
            who loves turning ideas into clean, responsive, and interactive web
            experiences. I specialize in building modern user interfaces that
            are fast, scalable, and user-friendly. I have hands-on experience in
            developing admin dashboards, landing pages, portfolio websites, and
            business web applications with a strong focus on performance and
            design accuracy.
          </p>
        </div>
        <div>
            <img src="./laptop.png" alt="Avtar" />
        </div>
      </div>

      <section className="skills-section" id="skills">
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3 className="skill-heading">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>

              <ul>
                {items.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
