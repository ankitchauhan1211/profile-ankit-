import React, { useState } from "react";
import "./getintouch.css";

function GetInTouch() {
  const formFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
    { label: "GitHub Profile", name: "github", type: "url", placeholder: "https://github.com/username" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData({
        ...formData,
        [name]: value.replace(/[^a-zA-Z\s]/g, ""),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="get-top" id="get_in_touch">

      {/* ✈️ Flying Plane */}
      <div className="plane">
        <svg
    width="70"
    height="70"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 30L62 2L42 62L30 36L2 30Z"
      fill="#ffffff"
      stroke="#ffc83d"
      strokeWidth="2"
    />
    <path
      d="M30 36L62 2"
      stroke="#ffc83d"
      strokeWidth="2"
    />
  </svg>
      </div>

      <div className="get-header">
        <h1>Get In Touch</h1>
        <b>Let's Connect & Collaborate</b>
      </div>

      <form className="get-form" onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Tell me about your project or idea..."
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button type="submit" className="send-btn">
          Send Message
        </button>

        {/* Floating Image */}
        <div className="form-image">
          <img src="./getintouch.png" alt="Get in touch" />
        </div>

        {/* Crackers (DON'T REMOVE) */}
        <span className="cracker c1"></span>
        <span className="cracker c2"></span>
        <span className="cracker c3"></span>
        <span className="cracker c4"></span>
      </form>
    </div>
  );
}

export default GetInTouch;
