import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

// --- Footer Link Data (Mimicking the image content) ---
const planningLinks = [
  "Search By Vendor",
  "Search By City",
  "Download Our App",
  "Top Rated Vendors",
  "Destination Wedding",
];

const ideasLinks = [
  "Wedding Blog",
  "Wedding Inspiration Gallery",
  "Real Wedding",
  "Submit Wedding",
];

const galleryLinks = [
  "Bridal Wear",
  "Wedding Jewellery",
  "Bridal Makeup & Hair",
  "Wedding Decor",
  "Wedding Photography",
  "Groom Wear",
  "Invitations & Favors",
  "Wedding Accessories",
  "Mehendi Designs",
];

const homeLinks = [
  "About Wedeption",
  "Careers",
  "Contact Us",
  "Site Map",
  "Terms & Conditions",
  "Privacy Policy",
  "Cancellation Policy",
];

const invitationLinks = [
  "Wedding Card Designs",
  "Save the Date Templates",
  "Invitation Video Templates",
];

const Footer = () => {
  return (
    <footer className="site-footer new-design">
      
      {/* TOP SECTION: Contact, Alerts, Social, Apps */}
      <div className="footer-top-section">
        
        {/* Column 1: Planner Info */}
        <div className="footer-column info-column">
          <p className="footer-brand-title">Wedeption - Your Personal Wedding Planner</p>
          <p className="footer-sub-text">Plan your wedding with Us</p>
        </div>

        {/* Column 2: Contact Details */}
        <div className="footer-column contact-column">
          <p className="column-header">Contact us to get best deals</p>
          <div className="contact-details">
            <div>
              <p className="contact-label">For Vendors</p>
              <a href="mailto:vendors@wedeption.com">vendors@wedeption.com</a>
              <p className="contact-phone">0124-6822345</p>
            </div>
            <div>
              <p className="contact-label">For Users</p>
              <a href="mailto:users@wedeption.com">users@wedeption.com</a>
              <p className="contact-phone">0124-6822345</p>
            </div>
          </div>
        </div>

        {/* Column 3: Social Media Follow */}
        <div className="footer-column social-column">
          <p className="column-header">Follow us on:</p>
          <ul className="social-list">
            <li><a href="#"><FaFacebookF /> Facebook</a></li>
            <li><a href="#"><FaTwitter /> Twitter</a></li>
            <li><a href="#"><FaPinterestP /> Pinterest</a></li>
            <li><a href="#"><FaInstagram /> Instagram</a></li>
            <li><a href="#"><FaYoutube /> Youtube</a></li>
          </ul>
        </div>

        {/* Column 4: App Download Links */}
        <div className="footer-column app-column">
            <p className="column-header">Get The Wedeption App</p>
            <a href="#" className="app-link"><FaApple /> App Store</a>
            <a href="#" className="app-link"><FaGooglePlay /> Google Play</a>
        </div>
        
        {/* Full Width Row 1: Registered Address */}
        <div className="footer-column address-column full-width-sm">
            <p className="column-header">Registered Address</p>
            <address>
              Second Floor, Ocus Technopolis, Sector 54 Golf <br/>
              Course Road, Gurgaon, Haryana, India, 122002
            </address>
        </div>
        
        {/* Full Width Row 2: Blog Alerts & Vendor Registration */}
        <div className="footer-column blog-register-column full-width-sm">
            <div className="blog-alerts">
                <p className="column-header">Get Latest Blog Alerts</p>
                <form className="blog-form">
                    <input type="email" placeholder="Email" required />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <button className="vendor-register-btn">Register as a Vendor</button>
            </div>
        </div>

      </div>

      {/* BOTTOM SECTION: Extensive Navigation Links */}
      <div className="footer-bottom-nav">
        
        <div className="nav-group">
          <p className="nav-title">Start Planning</p>
          <ul>{planningLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
        
        <div className="nav-group">
          <p className="nav-title">Wedding Ideas</p>
          <ul>{ideasLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
        
        <div className="nav-group">
          <p className="nav-title">Photo Gallery</p>
          <ul>{galleryLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
        
        <div className="nav-group">
          <p className="nav-title">Home</p>
          <ul>{homeLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
        
        <div className="nav-group invitation-nav">
          <p className="nav-title">Wedding Invitation Maker</p>
          <ul>{invitationLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;