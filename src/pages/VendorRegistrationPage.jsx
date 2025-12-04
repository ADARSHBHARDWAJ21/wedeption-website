import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const cleanOptionalString = (value) => {
  return !value || value.trim() === "" ? null : value;
};

// Helper to send OTP using Fast2SMS
const sendOtpViaFast2Sms = async (phoneNumber, otp) => {
  const FAST2SMS_API_KEY = "YOUR_FAST2SMS_API_KEY"
  ; // TODO: replace with your real key (prefer .env)
  const TEMPLATE_ID = "YOUR_DLT_TEMPLATE_ID"; // TODO: replace with your registered template ID

  const params = new URLSearchParams({
    authorization: FAST2SMS_API_KEY,
    route: "dlt",
    sender_id: "YOURID", // replace with your approved sender ID
    message: TEMPLATE_ID,
    variables_values: otp,
    numbers: phoneNumber,
    flash: "0",
  });

  const url = `https://www.fast2sms.com/dev/bulkV2?${params.toString()}`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to send OTP via Fast2SMS");
  }

  return response.json();
};

const VendorRegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    address: "",
    gstNumber: "",
    panCardNumber: "",
    experience: "",
    priceRange: "",
    services: [],
    website: "",
    instagram: "",
    facebook: "",
    youtube: "",
    brandStory: "",
    whyUs: "",
    deals: "",
    overtime: "",
    paymentTerms: "",
    userCancellation: "",
    vendorCancellation: "",
  });

  const [submitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null); // FIXED

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "services") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiError(null);

    try {
      // Validate required fields
      if (!formData.businessName.trim() || 
          !formData.contactPerson.trim() || 
          !formData.email.trim() || 
          !formData.phone.trim() || 
          !formData.city.trim() || 
          !formData.instagram.trim() || 
          !formData.whyUs.trim()) {
        setApiError("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      // Build form data object
      const vendorData = {
        business_name: formData.businessName.trim(),
        contact_name: formData.contactPerson.trim(),
        email: formData.email.trim(),
        contact_number: formData.phone.trim(),
        business_address: formData.address.trim(),
        gst_number: cleanOptionalString(formData.gstNumber),
        pan_card_number: cleanOptionalString(formData.panCardNumber),
        city: formData.city.trim(),
        instagram: formData.instagram.trim(),
        why_us: formData.whyUs.trim(),
        
        // Optional fields
        whatsapp: cleanOptionalString(formData.whatsapp),
        website: cleanOptionalString(formData.website),
        facebook: cleanOptionalString(formData.facebook),
        youtube: cleanOptionalString(formData.youtube),
        brand_story: cleanOptionalString(formData.brandStory),
        deals: cleanOptionalString(formData.deals),
        overtime: cleanOptionalString(formData.overtime),
        payment_terms: cleanOptionalString(formData.paymentTerms),
        user_cancellation: cleanOptionalString(formData.userCancellation),
        vendor_cancellation: cleanOptionalString(formData.vendorCancellation),
        price_range: cleanOptionalString(formData.priceRange),
        
        // Numeric fields
        experience: formData.experience ? parseInt(formData.experience, 10) : null,
        
        // Services array
        services: formData.services.length > 0 ? formData.services : [],
      };

      // Generate OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

      // Send OTP via Fast2SMS
      try {
        await sendOtpViaFast2Sms(formData.phone.trim(), generatedOtp);
        console.log("OTP sent successfully");
      } catch (otpError) {
        console.error("Error sending OTP:", otpError);
        setApiError("Could not send OTP. Please check the phone number and try again.");
        setLoading(false);
        return;
      }

      setLoading(false);

      // Navigate to OTP verification page with data
      navigate("/vendor-otp", {
        state: {
          phone: formData.phone.trim(),
          otp: generatedOtp,
          vendorData,
        },
      });
    } catch (error) {
      setLoading(false);
      console.error("Unexpected error:", error);
      setApiError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="vendor-page">
      <div className="vendor-hero">
        <div>
          <p className="vendor-eyebrow">Partner with Us</p>
          <h1>Register Your Wedding Business</h1>
          <p>
            Share a few details about your brand so we can showcase you to
            couples planning unforgettable celebrations.
          </p>
        </div>
        <button className="vendor-help-btn">Need help? Chat with us</button>
      </div>

      <form className="vendor-form" onSubmit={handleSubmit}>
        {apiError && <div className="submission-error">Error: {apiError}</div>}

        <section>
          <h2>1. Basic Business Details</h2>
          <div className="form-grid two">
            <label>
              Business Name
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Contact Person
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              WhatsApp Number
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              GST Number
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              PAN Card Number
              <input
                type="text"
                name="panCardNumber"
                value={formData.panCardNumber}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="full">
            Business Address
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
        </section>

        <section>
          <h2>2. Professional Information</h2>
          <div className="form-grid two">
            <label>
              Years of Experience
              <input
                type="number"
                name="experience"
                min="0"
                value={formData.experience}
                onChange={handleChange}
              />
            </label>
            <label>
              Price Range (Start - End)
              <input
                type="text"
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                placeholder="e.g. ₹50,000 - ₹3,00,000"
              />
            </label>
          </div>

          <div className="services-select">
            <p>Select all services you provide</p>
            <div className="services-grid">
              {serviceOptions.map((service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                  />
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
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </label>
            <label>
              Instagram Handle
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Facebook Handle (optional)
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
              />
            </label>
            <label>
              YouTube Channel Link (optional)
              <input
                type="url"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
              />
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
            <textarea
              name="brandStory"
              rows="3"
              value={formData.brandStory}
              onChange={handleChange}
              required
            />
          </label>
          <label className="full">
            Why should customers choose you?
            <textarea
              name="whyUs"
              rows="3"
              value={formData.whyUs}
              onChange={handleChange}
              required
            />
          </label>
          <label className="full">
            Exclusive deals or discounts
            <textarea
              name="deals"
              rows="2"
              value={formData.deals}
              onChange={handleChange}
            />
          </label>
        </section>

        <section>
          <h2>6. Charges & Terms</h2>
          <div className="form-grid two">
            <label>
              Overtime charges (if any)
              <input
                type="text"
                name="overtime"
                value={formData.overtime}
                onChange={handleChange}
              />
            </label>
            <label>
              Payment terms
              <input
                type="text"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleChange}
                placeholder="Advance %, remaining %, etc."
              />
            </label>
          </div>
          <label className="full">
            User cancellation policy
            <textarea
              name="userCancellation"
              rows="2"
              value={formData.userCancellation}
              onChange={handleChange}
            />
          </label>
          <label className="full">
            Vendor cancellation policy
            <textarea
              name="vendorCancellation"
              rows="2"
              value={formData.vendorCancellation}
              onChange={handleChange}
            />
          </label>
        </section>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Submit for Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationPage;
