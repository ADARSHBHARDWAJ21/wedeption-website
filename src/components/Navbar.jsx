import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const menuItems = [
  { label: "Home", hasDropdown: true, path: "/" },
  { label: "vendors", hasDropdown: true, path: "/vendors" },
  { label: "venues", hasDropdown: true, path: "/venues" },
  { label: "inspiration", hasDropdown: true, path: "/inspiration" },
  { label: "ai planner", hasDropdown: true, path: "/ai-planner" },
  { label: "vender registration", isNew: true, path: "/vendor-registration" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">PARTY LOGO</h1>

        <div className="nav-links-wrap">
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.label} className="nav-item">
                {item.path ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  <a href="#">{item.label}</a>
                )}
                {item.hasDropdown && <span className="chevron">⌄</span>}
                {item.isNew && <span className="nav-pill">New</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
          <button className="icon-button profile" aria-label="Profile">
            <span>👤</span>
          </button>
          <button className="icon-button cart" aria-label="Cart items">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M5 4h-1" />
              <path d="M6 4h15l-1.5 9h-12z" />
              <circle cx="9" cy="19" r="1.5" />
              <circle cx="18" cy="19" r="1.5" />
            </svg>
            <span className="cart-badge">3</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
