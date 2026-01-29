import { FaReact, FaLaptopCode, FaChartLine, FaShoppingCart,FaRocket } from "react-icons/fa";
// import { SiMaterialui, SiGsap } from "react-icons/si";

export const projects = [
  {
    id: 1,
    name: "Admin Dashboard",
    description:
      "A fully responsive admin dashboard with dynamic charts, tables, and user management functionality.",
    techStack: ["React.js", "Material UI", "Charts.js", "REST API"],
    logo: <FaChartLine size={50} color="#ffc83d" />, // React Icon
    link: "#",
  },
  {
    id: 2,
    name: "E-Commerce Landing Page",
    description:
      "A modern e-commerce landing page with interactive product sections, responsive design, and smooth animations.",
    techStack: ["React.js", "CSS3", "HTML5", "GSAP"],
    logo: <FaShoppingCart size={50} color="#ffc83d" />,
    link: "#",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact form with smooth scroll and animations.",
    techStack: ["React.js", "React Router", "CSS3", "Responsive Design"],
    logo: <FaLaptopCode size={50} color="#ffc83d" />,
    link: "#",
  },
  {
    id: 4,
    name: "Business Web App",
    description:
      "A business web application with multiple modules like dashboards, reports, and API integration.",
    techStack: ["React.js", "Material UI", "REST API", "Axios"],
    logo: <FaReact size={50} color="#61dafb" />,
    link: "#",
  },
  {
    id: 5,
    name: "Interactive Landing Page",
    description:
      "Landing page with animated elements, parallax scrolling, and smooth interactions.",
    techStack: ["React.js", "GSAP", "CSS3", "HTML5"],
    logo: <FaRocket size={50} color="#00ffbf" />,
    link: "#",
  },
];
