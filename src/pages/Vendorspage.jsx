import React, { useState } from "react";
import "./VendorsPage.css";
import categoriesData from "../Data/categoriesData.js";

const VendorsPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (title) => {
    setExpandedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div className="vendors-page">
      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Categories</h2>
          <p className="section-subtitle">
            Browse every vendor category in one place and plan your dream
            celebration with confidence.
          </p>
        </div>

        <div className="categories-grid">
          {categoriesData.map((cat) => {
            const isExpanded = expandedCategory === cat.title;
            return (
              <div key={cat.title}>
                <button
                  className={`category-card ${isExpanded ? "expanded" : ""}`}
                  style={{ background: cat.gradient }}
                  onClick={() => toggleCategory(cat.title)}
                >
                  <div className="category-content">
                    <div className="category-title">
                      <span>{cat.title}</span>
                      <span className="dropdown-icon">
                        {isExpanded ? "⌃" : "⌄"}
                      </span>
                    </div>
                    <p>{cat.desc}</p>
                  </div>
                  <div className="category-image">
                    <img src={cat.image} alt={cat.title} />
                  </div>
                </button>

                {isExpanded && cat.options && (
                  <div className="category-dropdown">
                    {cat.options.map((column, idx) => (
                      <ul key={idx}>
                        {column.map((option) => (
                          <li key={option}>{option}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default VendorsPage;
