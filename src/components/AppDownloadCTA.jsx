import React from "react";
import "./AppDownloadCTA.css";
import { FaHeart, FaListUl, FaStore, FaGooglePlay } from "react-icons/fa";

// Note: Using a placeholder image for the phone, as external images for assets should be avoided.
const phoneImageUrl = "https://placehold.co/250x500/E8F3FF/2563EB?text=Wedeption%0AComing%20Soon";

const AppDownloadCTA = () => {
  return (
    <section className="app-cta-section">
      <div className="cta-container">
        {/* Left Content Column */}
        <div className="cta-content">
          <h1>Download The Wedeption Mobile App Today!</h1>
          
          <div className="feature-row">
            <p><FaHeart className="feature-icon heart" /> Save Wedding Ideas</p>
            <p><FaStore className="feature-icon store" /> Shortlist Vendors</p>
            <p><FaListUl className="feature-icon list" /> Get Free Wedding Checklist</p>
          </div>

          <div className="download-form-group">
            <p className="sms-text">
              We&rsquo;re currently testing the app. Get notified when it launches!
            </p>
            
            {/* Input with Coming Soon indicator */}
            <div className="input-with-flag">
              <span className="country-code">🇮🇳 +91</span>
              <input 
                type="tel" 
                placeholder="Enter your phone number (Coming Soon)"
                disabled 
              />
            </div>

            <button className="download-btn disabled-btn" disabled>
              Download the App (Coming Soon)
            </button>
            
            <div className="store-icons">
                <FaStore className="store-icon" />
                <FaGooglePlay className="store-icon" />
            </div>
          </div>
        </div>

        {/* Right Mobile Mockup Column */}
        <div className="cta-mockup-wrapper">
          {/* Using a placeholder image that matches the blue color scheme */}
          <img src={phoneImageUrl} alt="Wedeption Mobile App Mockup" className="mobile-mockup" />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;