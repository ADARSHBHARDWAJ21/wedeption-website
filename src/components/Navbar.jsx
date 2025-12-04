import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const menuItems = [
  { label: "Home", hasDropdown: true, path: "/" },
  { label: "vendors", hasDropdown: true, path: "/vendors" },
  { label: "venues", hasDropdown: true, path: "/venues" },
  { label: "inspiration", hasDropdown: true, path: "/inspiration" },
  { label: "ai planner", hasDropdown: true, path: "/ai-planner" },
  { label: "vendor login", isNew: true, path: "/vendor-login" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Wedeption.</h1>

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
          <button className="book-btn">Book us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
