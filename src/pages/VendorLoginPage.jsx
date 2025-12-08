import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VendorLoginPage.css";
import { sendOTP } from "../firebase";

const VendorLoginPage = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  // Create recaptcha container on mount
  useEffect(() => {
    const container = document.getElementById("recaptcha-container-login");
    if (!container) {
      const newContainer = document.createElement("div");
      newContainer.id = "recaptcha-container-login";
      newContainer.style.display = "none";
      document.body.appendChild(newContainer);
    }
    
    // Cleanup on unmount
    return () => {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
        } catch (e) {
          console.log("Error clearing recaptcha:", e);
        }
        window.recaptchaVerifier = null;
      }
    };
  }, []);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!phone.trim() || phone.trim().length < 10) {
      setError("Please enter a valid phone number with country code (e.g., +91XXXXXXXXXX)");
      return;
    }

    try {
      setLoading(true);
      const confirmation = await sendOTP(phone.trim());
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setError("");
    } catch (err) {
      console.error("OTP Error:", err);
      let errorMessage = "Failed to send OTP. ";
      
      if (err.code === "auth/invalid-phone-number") {
        errorMessage = "Invalid phone number format. Please include country code (e.g., +91XXXXXXXXXX)";
      } else if (err.code === "auth/too-many-requests") {
        errorMessage = "Too many requests. Please try again later.";
      } else if (err.code === "auth/quota-exceeded") {
        errorMessage = "SMS quota exceeded. Please try again later.";
      } else {
        errorMessage += err.message || "Please try again.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp.trim() || otp.trim().length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    if (!confirmationResult) {
      setError("OTP session expired. Please request a new OTP.");
      return;
    }

    try {
      setLoading(true);
      const result = await confirmationResult.confirm(otp.trim());
      const user = result.user;

      // Store user info locally
      const vendorUser = {
        firebaseUid: user.uid,
        phone: phone,
        email: user.email || "",
        fullName: user.displayName || "",
      };
      localStorage.setItem("wedeption_vendor_user", JSON.stringify(vendorUser));

      // Redirect to vendor dashboard after successful login
      navigate("/vendor/dashboard");
    } catch (err) {
      console.error("OTP Verification Error:", err);
      let errorMessage = "OTP verification failed. ";
      
      if (err.code === "auth/invalid-verification-code") {
        errorMessage = "Invalid OTP. Please check and try again.";
      } else if (err.code === "auth/code-expired") {
        errorMessage = "OTP has expired. Please request a new OTP.";
        setOtpSent(false);
        setConfirmationResult(null);
        setOtp("");
      } else {
        errorMessage += err.message || "Please try again.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
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
          
          {error && (
            <div style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
              padding: "12px 16px",
              borderRadius: "12px",
              fontSize: "14px",
              marginBottom: "20px"
            }}>
              {error}
            </div>
          )}

          <div className="form-grid two">
            <label className="full">
              Phone Number (with country code)
              <input
                type="tel"
                name="phone"
                placeholder="+91XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={otpSent}
                required
              />
            </label>
            {otpSent && (
              <label className="full">
                Enter OTP
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength="6"
                  required
                  autoFocus
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
          {otpSent && (
            <button
              type="button"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setConfirmationResult(null);
                setError("");
                if (window.recaptchaVerifier) {
                  window.recaptchaVerifier.clear();
                  window.recaptchaVerifier = null;
                }
              }}
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "500",
                background: "transparent",
                color: "#667eea",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              Change Phone Number
            </button>
          )}
        </div>
      </form>
      
      <div id="recaptcha-container-login"></div>

      <div className="vendor-form" style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <p>Don't have an account?</p>
        <button
          type="button"
          className="vendor-help-btn"
          onClick={() => navigate("/vendor/auth")}
        >
          Register as a Vendor
        </button>
      </div>
    </div>
  );
};

export default VendorLoginPage;


