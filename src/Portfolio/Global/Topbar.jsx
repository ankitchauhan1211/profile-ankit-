import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./topbar.css";
import Footer from "./Footer";

function Topbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const TopArray = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about_us" },
    { name: "Project", path: "#project" },
    { name: "Experience", path: "#experience" },
    { name: "Get In Touch", path: "#get_in_touch" },
  ];

  return (
    <>
      <div className="top-bar">
        {/* Hamburger for small screens */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "menu active" : "menu"}>
          {TopArray.map((data, index) => (
            <li key={index}>
              <a
                href={data.path}
                onClick={() => {
                  setActive(data.path);
                  setMenuOpen(false); // close menu on click
                }}
                className={active === data.path ? "top-link active" : "top-link"}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
      <Footer/>
    </>
  );
}

export default Topbar;
