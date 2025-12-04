import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VendorRegistrationPage.css";

const VendorLoginPage = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);

    // Placeholder: integrate with real OTP API later
    setTimeout(() => {
      console.log("OTP sent to:", phone);
      setOtpSent(true);
      setLoading(false);
    }, 800);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp.trim()) return;
    setLoading(true);

    // Placeholder: integrate with real OTP verification later
    setTimeout(() => {
      console.log("OTP verified for:", phone, "with OTP:", otp);
      setLoading(false);
      alert("Logged in successfully (demo only).");
    }, 800);
  };

  return (
    <div className="vendor-page">
      <div className="vendor-hero">
        <div>
          <p className="vendor-eyebrow">Vendor Login</p>
          <h1>Access Your Vendor Account</h1>
          <p>
            Login using your registered phone number and OTP, or register as a
            new vendor to start getting leads.
          </p>
        </div>
      </div>

      <form className="vendor-form" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
        <section>
          <h2>Login with Phone Number</h2>
          <div className="form-grid two">
            <label className="full">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            {otpSent && (
              <label className="full">
                Enter OTP
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </label>
            )}
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : otpSent
              ? "Verify OTP & Login"
              : "Send OTP"}
          </button>
        </div>
      </form>

      <div className="vendor-form" style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <p>Don't have an account?</p>
        <button
          type="button"
          className="vendor-help-btn"
          onClick={() => navigate("/vendor-registration")}
        >
          Register as a Vendor
        </button>
      </div>
    </div>
  );
};

export default VendorLoginPage;


