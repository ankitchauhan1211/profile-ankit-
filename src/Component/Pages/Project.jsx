import React, { useEffect } from "react";
import "../Styles/project.css";

export default function Project() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const sparkle = document.createElement("span");
      sparkle.className = "cursor-sparkle";

      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

   useEffect(() => {
    // Page title when profile page opens
    document.title = "Happy New Year ॐ";

    return () => {
      // optional: page leave hone par reset
      document.title = "My App";
    };
  }, []);
  return (
    <section className="newyear-wrapper">

      {/* OM BACKGROUND */}
      <div className="om-background">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="om">ॐ</span>
        ))}
      </div>

      <div className="content">
        <div className="year-wrapper">
          <span className="sparkle-ring"></span>
          <h1 className="year">2026</h1>
        </div>

        <h2 className="title">Happy New Year</h2>
        <div className="stars">✨ ✨ ✨ ✨ ✨</div>
        <p className="subtitle">
          May this year bring you peace, prosperity, and divine blessings
        </p>
      </div>
    </section>
  );
}
