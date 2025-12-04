import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./VendorsPage.css";
import categoriesData from "../Data/categoriesData.js";

// Helper function to generate the correct URL based on category
const createFilterUrl = (mainCategory, option) => {
    // If it's a 'View All...' link, link directly to the main page without filters.
    if (option.startsWith("View All")) {
        // Assume 'Venues' links to /venues, others link elsewhere or back to /vendors
        return mainCategory === "Venues" ? "/venues" : "/vendors";
    }

    // For all specific sub-category options, pass a filter parameter.
    // The VenuesPage component will check the 'category' to determine the correct filter type (e.g., venueType).
    return `/venues?category=${mainCategory}&filter=${encodeURIComponent(option)}`;
};

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
                          <li key={option}>
                            {/* Use Link component to navigate with filter parameters */}
                            <Link 
                                to={createFilterUrl(cat.title, option)}
                                className={option.startsWith("View All") ? "view-all-link" : ""}
                            >
                                {option}
                            </Link>
                          </li>
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