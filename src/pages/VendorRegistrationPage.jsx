import React, { useState } from "react";
import "./VendorRegistrationPage.css";

const serviceOptions = [
  "Catering",
  "Photographer / Videographer",
  "Makeup Artist",
  "Wedding Hall",
  "Decorator",
  "DJ",
  "Mehendi Artist",
  "Event Planner",
];

const VendorRegistrationPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="vendor-page">
      <div className="vendor-hero">
        <div>
          <p className="vendor-eyebrow">Partner with Us</p>
          <h1>Register Your Wedding Business</h1>
          <p>
            Share a few details about your brand so we can showcase you to couples
            planning unforgettable celebrations.
          </p>
        </div>
        <button className="vendor-help-btn">Need help? Chat with us</button>
      </div>

      <form className="vendor-form" onSubmit={handleSubmit}>
        <section>
          <h2>1. Basic Business Details</h2>
          <div className="form-grid two">
            <label>
              Business Name
              <input type="text" name="businessName" required />
            </label>
            <label>
              Contact Person
              <input type="text" name="contactPerson" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone Number
              <input type="tel" name="phone" required />
            </label>
            <label>
              WhatsApp Number
              <input type="tel" name="whatsapp" />
            </label>
            <label>
              City
              <input type="text" name="city" required />
            </label>
          </div>
          <label className="full">
            Business Address
            <textarea name="address" rows="2" required />
          </label>
        </section>

        <section>
          <h2>2. Professional Information</h2>
          <div className="form-grid two">
            <label>
              Years of Experience
              <input type="number" name="experience" min="0" />
            </label>
            <label>
              Price Range (Start - End)
              <input type="text" name="priceRange" placeholder="e.g. ₹50,000 - ₹3,00,000" />
            </label>
          </div>
          <div className="services-select">
            <p>Select all services you provide</p>
            <div className="services-grid">
              {serviceOptions.map((service) => (
                <label key={service}>
                  <input type="checkbox" name="services" value={service} />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2>3. Online Presence</h2>
          <div className="form-grid two">
            <label>
              Website URL (optional)
              <input type="url" name="website" />
            </label>
            <label>
              Instagram Handle
              <input type="text" name="instagram" required />
            </label>
            <label>
              Facebook Handle (optional)
              <input type="text" name="facebook" />
            </label>
            <label>
              YouTube Channel Link (optional)
              <input type="url" name="youtube" />
            </label>
          </div>
        </section>

        <section>
          <h2>4. Portfolio</h2>
          <label className="full file-input">
            Upload portfolio images
            <input type="file" name="portfolioImages" multiple accept="image/*" />
          </label>
          <label className="full">
            Portfolio / Video links
            <textarea
              name="portfolioLinks"
              rows="2"
              placeholder="Google Drive, Instagram, YouTube links, etc."
            />
          </label>
        </section>

        <section>
          <h2>5. Business Highlights</h2>
          <label className="full">
            Tell us about your brand
            <textarea name="brandStory" rows="3" required />
          </label>
          <label className="full">
            Why should customers choose you?
            <textarea name="whyUs" rows="3" required />
          </label>
          <label className="full">
            Exclusive deals or discounts
            <textarea name="deals" rows="2" />
          </label>
        </section>

        <section>
          <h2>6. Charges & Terms</h2>
          <div className="form-grid two">
            <label>
              Overtime charges (if any)
              <input type="text" name="overtime" />
            </label>
            <label>
              Payment terms
              <input type="text" name="paymentTerms" placeholder="Advance %, remaining %, etc." />
            </label>
          </div>
          <label className="full">
            User cancellation policy
            <textarea name="userCancellation" rows="2" />
          </label>
          <label className="full">
            Vendor cancellation policy
            <textarea name="vendorCancellation" rows="2" />
          </label>
        </section>

        <div className="form-actions">
          <button type="submit">Submit for Review</button>
          {submitted && <span className="submit-success">Thanks! We&apos;ll review and reach out soon.</span>}
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationPage;

