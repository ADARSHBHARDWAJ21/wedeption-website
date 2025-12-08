import React, { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import "./VendorRegistrationPage.css";

const VendorRegister = () => {
  const navigate = useNavigate();

  // -------------------------
  // ALL FORM STATES
  // -------------------------
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [mwciNumber, setMwciNumber] = useState("");

  // Professional info
  const [yearsExperience, setYearsExperience] = useState("");
  const [services, setServices] = useState([]);
  const [priceRange, setPriceRange] = useState("");

  // Online presence
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");

  // Portfolio (URLs after file upload – will do later)
  const [portfolioUrls, setPortfolioUrls] = useState([]);

  // Highlights
  const [businessAbout, setBusinessAbout] = useState("");
  const [whyChoose, setWhyChoose] = useState("");
  const [deals, setDeals] = useState("");

  // Cancellation
  const [userCancellation, setUserCancellation] = useState("");
  const [vendorCancellation, setVendorCancellation] = useState("");

  // -------------------------
  // HANDLE SERVICES CHECKBOXES
  // -------------------------
  const toggleService = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service));
    } else {
      setServices([...services, service]);
    }
  };

  // -------------------------
  // SUBMIT HANDLER
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const vendorUser = JSON.parse(localStorage.getItem("wedeption_vendor_user"));
    if (!vendorUser) {
      alert("You must log in first.");
      return navigate("/vendor/login");
    }

    // BUILD THE EXACT PAYLOAD MATCHING SUPABASE TABLE
    const payload = {
      firebase_uid: vendorUser.firebaseUid,
      business_name: businessName,
      owner_name: ownerName,
      email,
      phone,
      whatsapp,
      city,
      gst_number: gstNumber,
      mwci_number: mwciNumber,
      years_experience: yearsExperience,
      services,
      price_range: priceRange,
      website,
      instagram,
      facebook,
      youtube,
      portfolio_urls: portfolioUrls,
      business_about: businessAbout,
      why_choose: whyChoose,
      deals,
      user_cancellation_policy: userCancellation,
      vendor_cancellation_policy: vendorCancellation,
      subscription_plan: "free",
      is_paid: false,
    };

    console.log("Sending to Supabase:", payload);

    const { data, error } = await supabase
      .from("business_listings")
      .insert([payload]);

    if (error) {
      console.error(error);
      alert("Failed to save business details: " + error.message);
      return;
    }

    alert("Business details saved successfully!");
    navigate("/vendor/dashboard");
  };

  return (
    <div className="vendor-register-container">
      <form className="vendor-form" onSubmit={handleSubmit}>
        <h2>Register Your Business</h2>

        {/* 1. Basic Business Details */}
        <h3>1. Basic Business Details</h3>
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="WhatsApp Number"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="GST Number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="MWCI Number"
          value={mwciNumber}
          onChange={(e) => setMwciNumber(e.target.value)}
        />

        {/* 2. Professional Information */}
        <h3>2. Professional Information</h3>
        <input
          type="text"
          placeholder="Years of Experience"
          value={yearsExperience}
          onChange={(e) => setYearsExperience(e.target.value)}
        />
        
        <div className="services-checkboxes">
          {[
            "Catering",
            "Photographer / Videographer",
            "Makeup Artist",
            "Wedding Hall",
            "Decorator",
            "DJ",
            "Mehendi Artist",
            "Event Planner",
          ].map((s) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={services.includes(s)}
                onChange={() => toggleService(s)}
              />
              {s}
            </label>
          ))}
        </div>

        <input
          type="text"
          placeholder="Price Range"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />

        {/* 3. Online Presence */}
        <h3>3. Online Presence</h3>
        <input
          type="text"
          placeholder="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instagram Handle"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <input
          type="text"
          placeholder="Facebook Profile"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <input
          type="text"
          placeholder="YouTube Channel"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        {/* 5. Business Highlights */}
        <h3>5. Business Highlights</h3>
        <textarea
          placeholder="Tell us about your business"
          value={businessAbout}
          onChange={(e) => setBusinessAbout(e.target.value)}
        />
        <textarea
          placeholder="Why should customers choose you?"
          value={whyChoose}
          onChange={(e) => setWhyChoose(e.target.value)}
        />
        <textarea
          placeholder="Exclusive deals or discounts"
          value={deals}
          onChange={(e) => setDeals(e.target.value)}
        />

        {/* 6. Cancellation Policies */}
        <h3>6. Cancellation Policies</h3>
        <textarea
          placeholder="User Cancellation Policy"
          value={userCancellation}
          onChange={(e) => setUserCancellation(e.target.value)}
        />
        <textarea
          placeholder="Vendor Cancellation Policy"
          value={vendorCancellation}
          onChange={(e) => setVendorCancellation(e.target.value)}
        />

        <button type="submit" className="vendor-submit-btn">
          Submit Business Details
        </button>
      </form>
    </div>
  );
};

export default VendorRegister;
