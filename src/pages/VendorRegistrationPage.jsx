import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VendorRegistrationPage.css";
import { logout } from "../firebase";

const initialFormState = {
  // Section A – Basic Business Details
  businessName: "",
  contactPerson: "",
  email: "",
  phone: "",
  whatsapp: "",
  city: "",
  gstNumber: "",
  address: "",

  // Section B – Professional Information
  experience: "",
  services: [],
  priceRange: "",

  // Section C – Online Presence
  website: "",
  instagram: "",
  facebook: "",
  youtube: "",

  // Section D – Portfolio
  portfolioFiles: [],
  portfolioPreviews: [],

  // Section E – Highlights
  highlightTitle: "",
  whyChooseUs: "",
  offers: "",

  // Section F – Charges & Terms
  userCancellationPolicy: "",
  vendorCancellationPolicy: "",
  paymentTerms: "",
};

const SERVICE_OPTIONS = [
  "Catering",
  "Mehndi",
  "Makeup",
  "Photography",
  "Decoration",
  "DJ / Music",
  "Venue",
  "Pandit / Purohit",
];

const PRICE_RANGE_OPTIONS = [
  "₹0 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000 – ₹5,00,000",
  "₹5,00,000+",
];

const EXPERIENCE_OPTIONS = [
  "0–1 Years",
  "1–3 Years",
  "3–5 Years",
  "5–10 Years",
  "10+ Years",
];

const VendorRegister = () => {
  const navigate = useNavigate();
  const [vendorUser, setVendorUser] = useState(null);
  const [form, setForm] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Handle logout
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout? Your form data will be saved locally.")) {
      try {
        setLoggingOut(true);
        await logout();
        navigate("/vendor/auth");
      } catch (error) {
        console.error("Logout error:", error);
        // Even if Firebase logout fails, clear local storage and redirect
        localStorage.removeItem("wedeption_vendor_user");
        navigate("/vendor/auth");
      } finally {
        setLoggingOut(false);
      }
    }
  };

  // Protect this page – only allow if vendor is authenticated
  useEffect(() => {
    const stored = localStorage.getItem("wedeption_vendor_user");
    if (!stored) {
      navigate("/vendor/auth");
      return;
    }
    const parsed = JSON.parse(stored);
    setVendorUser(parsed);

    // Pre-fill email/phone if available
    setForm((prev) => ({
      ...prev,
      email: parsed.email || "",
      phone: parsed.phone || "",
      contactPerson: parsed.fullName || "",
    }));
  }, [navigate]);

  // Generic input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Checkbox handler for "services"
  const handleServiceToggle = (service) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, service],
        };
      }
    });
  };

  // File upload (portfolio)
  const handlePortfolioChange = (e) => {
    const files = Array.from(e.target.files || []);
    const previews = files.map((file) => URL.createObjectURL(file));

    setForm((prev) => ({
      ...prev,
      portfolioFiles: files,
      portfolioPreviews: previews,
    }));
  };

  // Submit (for now: only frontend, no Supabase yet)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // For now just log form data; backend integration will come later
    console.log("Vendor registration form submitted (frontend only):", form);

    setTimeout(() => {
      alert(
        "Form submitted (frontend only).\nLater this will be connected to Supabase + admin review."
      );
      setSubmitting(false);

      // Navigate to subscription page (UI only)
      navigate("/vendor/subscription");
    }, 600);
  };

  if (!vendorUser) {
    // while redirecting or loading
    return null;
  }

  return (
    <div className="vr-page">
      <div className="vr-container">
        <header className="vr-header">
          <div>
            <h1 className="vr-title">Register Your Wedding Business</h1>
            <p className="vr-subtitle">
              Tell us about your services so we can showcase you to couples on Wedeption.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="vr-vendor-pill">
              Logged in as{" "}
              <strong>
                {vendorUser.fullName || vendorUser.email || vendorUser.phone}
              </strong>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="vr-logout-btn"
            >
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </header>

        <form className="vr-form" onSubmit={handleSubmit}>
          {/* Section A – Basic Business Details */}
          <section className="vr-section">
            <h2 className="vr-section-title">A. Basic Business Details</h2>

            <div className="vr-grid">
              <div className="vr-field">
                <label>
                  Business Name <span className="vr-required">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Royal Weddings Caterers"
                  required
                />
              </div>

              <div className="vr-field">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={form.contactPerson}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="vr-field">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@business.com"
                />
              </div>

              <div className="vr-field">
                <label>
                  Phone Number <span className="vr-required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91XXXXXXXXXX"
                  required
                />
              </div>

              <div className="vr-field">
                <label>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="+91XXXXXXXXXX"
                />
              </div>

              <div className="vr-field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Delhi, Mumbai"
                />
              </div>

              <div className="vr-field">
                <label>GST Number (if any)</label>
                <input
                  type="text"
                  name="gstNumber"
                  value={form.gstNumber}
                  onChange={handleChange}
                  placeholder="e.g. 22AAAAA0000A1Z5"
                />
              </div>

              <div className="vr-field vr-field-full">
                <label>Business Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Complete address of your office or studio"
                  rows={2}
                />
              </div>
            </div>
          </section>

          {/* Section B – Professional Information */}
          <section className="vr-section">
            <h2 className="vr-section-title">B. Professional Information</h2>

            <div className="vr-grid">
              <div className="vr-field">
                <label>Years of Experience</label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience</option>
                  {EXPERIENCE_OPTIONS.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>
              </div>

              <div className="vr-field">
                <label>Average Price Range (per event)</label>
                <select
                  name="priceRange"
                  value={form.priceRange}
                  onChange={handleChange}
                >
                  <option value="">Select price range</option>
                  {PRICE_RANGE_OPTIONS.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="vr-field">
              <label>Services You Offer</label>
              <div className="vr-chips">
                {SERVICE_OPTIONS.map((service) => {
                  const active = form.services.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      className={`vr-chip ${active ? "vr-chip-active" : ""}`}
                      onClick={() => handleServiceToggle(service)}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section C – Online Presence */}
          <section className="vr-section">
            <h2 className="vr-section-title">C. Online Presence</h2>

            <div className="vr-grid">
              <div className="vr-field">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="vr-field">
                <label>Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  placeholder="Instagram profile link"
                />
              </div>

              <div className="vr-field">
                <label>Facebook</label>
                <input
                  type="url"
                  name="facebook"
                  value={form.facebook}
                  onChange={handleChange}
                  placeholder="Facebook page link"
                />
              </div>

              <div className="vr-field">
                <label>YouTube</label>
                <input
                  type="url"
                  name="youtube"
                  value={form.youtube}
                  onChange={handleChange}
                  placeholder="YouTube channel or video link"
                />
              </div>
            </div>
          </section>

          {/* Section D – Portfolio */}
          <section className="vr-section">
            <h2 className="vr-section-title">D. Portfolio</h2>

            <div className="vr-field">
              <label>Upload Sample Work (images)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePortfolioChange}
              />
              <p className="vr-hint">
                You can upload multiple images of your past work. These help couples trust your work.
              </p>
            </div>

            {form.portfolioPreviews?.length > 0 && (
              <div className="vr-portfolio-preview">
                {form.portfolioPreviews.map((src, idx) => (
                  <div key={idx} className="vr-portfolio-item">
                    <img src={src} alt={`Portfolio ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section E – Highlights */}
          <section className="vr-section">
            <h2 className="vr-section-title">E. Highlights</h2>

            <div className="vr-field">
              <label>Business Headline</label>
              <input
                type="text"
                name="highlightTitle"
                value={form.highlightTitle}
                onChange={handleChange}
                placeholder='e.g. "Luxury Wedding Caterers for Big-Fat Indian Weddings"'
              />
            </div>

            <div className="vr-field">
              <label>Why Should Couples Choose You?</label>
              <textarea
                name="whyChooseUs"
                value={form.whyChooseUs}
                onChange={handleChange}
                placeholder="Describe your uniqueness, style, quality, and what makes you different."
                rows={3}
              />
            </div>

            <div className="vr-field">
              <label>Current Offers (optional)</label>
              <textarea
                name="offers"
                value={form.offers}
                onChange={handleChange}
                placeholder="Any discount, package offers, complimentary services, etc."
                rows={2}
              />
            </div>
          </section>

          {/* Section F – Charges & Terms */}
          <section className="vr-section">
            <h2 className="vr-section-title">F. Charges & Terms</h2>

            <div className="vr-grid">
              <div className="vr-field vr-field-full">
                <label>Cancellation Policy (for clients)</label>
                <textarea
                  name="userCancellationPolicy"
                  value={form.userCancellationPolicy}
                  onChange={handleChange}
                  placeholder="Write what happens if a couple cancels. Refund policy, notice period, etc."
                  rows={3}
                />
              </div>

              <div className="vr-field vr-field-full">
                <label>Your Cancellation Policy</label>
                <textarea
                  name="vendorCancellationPolicy"
                  value={form.vendorCancellationPolicy}
                  onChange={handleChange}
                  placeholder="What happens if you are unable to serve the booking?"
                  rows={3}
                />
              </div>

              <div className="vr-field vr-field-full">
                <label>Payment Terms</label>
                <textarea
                  name="paymentTerms"
                  value={form.paymentTerms}
                  onChange={handleChange}
                  placeholder="Advance percentage, remaining payment timelines, payment modes, etc."
                  rows={3}
                />
              </div>
            </div>
          </section>

          {/* Actions */}
          <footer className="vr-footer">
            <button
              type="button"
              className="vr-btn vr-btn-secondary"
              onClick={() => alert("Draft saving will be implemented later.")}
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="vr-btn vr-btn-primary"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit for Review & Continue"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default VendorRegister;
