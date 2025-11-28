import React from "react";
import "./OccasionCategories.css";
import { FaBirthdayCake, FaBaby, FaGraduationCap, FaHeart, FaGlassCheers } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const categories = [
  { label: "Birthday Party", icon: <FaBirthdayCake />, bg: "#FFD1E8" },
  { label: "Wedding ceremoney", icon: <FaBaby />, bg: "#BDE7FF" },
  { label: "Graduation", icon: <FaGraduationCap />, bg: "#D7C7FF" },
  { label: "Anniversary", icon: <FaHeart />, bg: "#FFDADA" },
  { label: "Prom Night", icon: <FaGlassCheers />, bg: "#ACF3FF" },
  { label: "Engagement ceremony", icon: <FaGlassCheers />, bg: "#ACF3FF" },
];

const OccasionCategories = () => {
  return (
    <section className="categories-wrapper">
      <div className="categories-container">
        <h2 className="categories-title">Let’s Get the occasion Started.</h2>
        <p className="categories-subtitle">
          Pick an occasion to explore matching party supplies.
        </p>

        <div className="chip-row">
          <img src="https://cdn-icons-png.flaticon.com/512/742/742995.png" alt="confetti" className="confetti" />

          {categories.map((cat, i) => (
            <div
              key={i}
              className="chip"
              style={{ backgroundColor: cat.bg }}
            >
              <span className="chip-icon">{cat.icon}</span>
              <span className="chip-text">{cat.label}</span>
            </div>
          ))}

          <div className="chip arrow-chip">
            <FiArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OccasionCategories;
