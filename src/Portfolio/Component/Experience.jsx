import React from "react";
import "./experience.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      image: "./project.png",
      title: "React.js & Frontend Developer",
      duration: "Experience: 1.5+ years",
      skills: [
        "Web application development using React.js, JavaScript, HTML5, CSS3, Material-UI (MUI), React Native",
        "Building responsive and interactive UIs for admin dashboards, landing pages, e-commerce projects",
        "Integrating APIs and managing state using Redux / Context API",
        "Experience with charting libraries (Recharts, MUI X Charts) for data visualization",
        "Implemented dynamic forms, tables, sorting, pagination, and filtering",
        "Worked on portfolio websites, dashboards, and small web apps for personal and client projects",
        "Familiar with Next.js routing, project structure, and optimization",
        "Strong focus on UI/UX, responsive design, and clean code",
      ],
      projects: [
        "Admin Dashboard App – Created a fully functional admin panel with dynamic tables, forms, and charts",
        "Landing Pages – Developed responsive landing pages with animations and interactive elements",
      ],
    },
    {
      id: 2,
      image: "./laptop.png",
      title: "React.js Developer",
      duration: "Experience: 1 year",
      skills: [
        "Developed reusable React components and state management with Redux",
        "Integrated REST APIs and GraphQL endpoints",
        "Built dashboards, analytics panels, and reporting modules",
      ],
      projects: ["Business Web App – Admin and reporting dashboard", "Interactive Landing Pages"],
    },
    {
      id: 3,
      image: "./getintouch.png",
      title: "Frontend ",
      duration: "Experience: 1 year",
      skills: [
        "Developed contact and feedback forms with validations",
        "Added interactive animations and floating elements",
        "Worked with React hooks and Context API for state management",
      ],
      projects: ["Get In Touch Feature – Contact section with SVG animations", "Portfolio website contact modules"],
    },
  ];

  return (
    <div className="experience-section" id="experience">
      <div className="experience-header">
        <h1>Experience</h1>
        <b>My Work & Skills at TechVeda</b>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <div className="exp-image">
              <img src={exp.image} alt={exp.title} />
            </div>
            <div className="exp-content">
              <h3 className="exp-title">{exp.title}</h3>
              <span className="exp-duration">{exp.duration}</span>

              <div className="exp-skills">
                <h4>Skills & Expertise:</h4>
                <ul>
                  {exp.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-projects">
                <h4>Projects Highlight:</h4>
                <ul>
                  {exp.projects.map((proj, i) => (
                    <li key={i}>{proj}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
