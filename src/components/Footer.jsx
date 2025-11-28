import React from "react";
import "./Footer.css";

const quickLinks = [
  "Vendors",
  "Venues",
  "Inspiration",
  "AI Planner",
  "Vendor Registration",
];

const services = [
  "Wedding Planning",
  "Decor & Styling",
  "Catering",
  "Photography",
  "Beauty & Makeup",
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Wedeption</h3>
          <p>
            Curating India’s most loved wedding vendors, venues, and inspiration to
            make every celebration unforgettable.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Top Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Get weekly inspo, planning tips, and exclusive offers.</p>
          <form className="footer-newsletter">
            <input type="email" placeholder="Email address" />
            <button type="submit">Join</button>
          </form>
          <small>We respect your inbox.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wedeption. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

