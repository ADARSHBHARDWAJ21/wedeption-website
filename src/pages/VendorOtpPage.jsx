import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VendorRegistrationPage.css";

const VendorOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otpInput, setOtpInput] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const state = location.state || {};
  const { phone, otp, vendorData } = state;

  useEffect(() => {
    if (!phone || !otp || !vendorData) {
      // If user comes directly without state, send them back to registration
      navigate("/vendor-registration", { replace: true });
    }
  }, [phone, otp, vendorData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!otpInput.trim()) {
      setError("Please enter the OTP sent to your phone.");
      return;
    }

    if (otpInput.trim() !== otp) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setLoading(true);

    // Here you would send vendorData to your backend for final saving.
    console.log("Vendor registration confirmed:", vendorData);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    }, 800);
  };

  return (
    <div className="vendor-page">
      <div className="vendor-hero">
        <div>
          <p className="vendor-eyebrow">Verify OTP</p>
          <h1>Confirm Your Vendor Registration</h1>
          <p>
            We have sent a 6-digit OTP to your phone number {phone}. Enter it
            below to send your details for review.
          </p>
        </div>
      </div>

      <form className="vendor-form" onSubmit={handleSubmit}>
        {error && <div className="submission-error">Error: {error}</div>}
        {success && (
          <div className="submit-success">
            Your details have been submitted for review. Our team will contact
            you shortly.
          </div>
        )}

        <section>
          <h2>Enter OTP</h2>
          <div className="form-grid two">
            <label className="full">
              6-digit OTP
              <input
                type="text"
                maxLength="6"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                required
              />
            </label>
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Send for Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorOtpPage;


