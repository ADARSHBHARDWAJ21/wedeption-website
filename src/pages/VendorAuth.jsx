import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VendorAuth.css";

import { auth, googleLogin, sendOTP, logout } from "../firebase";
import { supabase } from "../supabase";

const VendorAuth = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("details"); // details → otp → done
  const [error, setError] = useState("");
  const [googleUserInfo, setGoogleUserInfo] = useState(null); // Store Google info temporarily

  // Ensure recaptcha container exists
  useEffect(() => {
    const container = document.getElementById("recaptcha-container");
    if (!container) {
      const newContainer = document.createElement("div");
      newContainer.id = "recaptcha-container";
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

  // Google Login - Only fetch profile, don't sign in yet
  const handleGoogleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      const result = await googleLogin();
      const user = result.user;

      // Store Google user info temporarily
      const googleInfo = {
        displayName: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
      };
      setGoogleUserInfo(googleInfo);

      // Pre-fill form fields
      if (!fullName) setFullName(user.displayName || "");
      if (!email) setEmail(user.email || "");

      // Sign out immediately - we only needed the profile info
      // Phone verification is still required
      await auth.signOut();

      setError(""); // Clear any errors
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Send OTP
  const handleSendOtp = async () => {
    setError("");

    if (!phone || phone.trim().length < 10) {
      setError("Enter a valid phone number with country code, e.g. +91XXXXXXXXXX");
      return;
    }

    try {
      setLoading(true);
      const confirmation = await sendOTP(phone.trim());
      setConfirmationResult(confirmation);
      setStep("otp");
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("OTP Error:", err);
      let errorMessage = "OTP sending failed. ";
      
      if (err.code === "auth/invalid-phone-number") {
        errorMessage += "Invalid phone number format. Please include country code (e.g., +91XXXXXXXXXX)";
      } else if (err.code === "auth/too-many-requests") {
        errorMessage += "Too many requests. Please try again later.";
      } else if (err.code === "auth/quota-exceeded") {
        errorMessage += "SMS quota exceeded. Please try again later.";
      } else {
        errorMessage += err.message || "Please try again.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp || otp.trim().length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    if (!confirmationResult) {
      setError("OTP session expired. Please request a new OTP.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await confirmationResult.confirm(otp.trim());
      const user = result.user;

      const firebaseUid = user.uid;
      // Determine login method - if we have Google info, it's a combined login
      const loginMethod = googleUserInfo ? "google_phone" : "phone";
      const finalEmail = email || googleUserInfo?.email || user.email || "";
      const finalFullName = fullName || googleUserInfo?.displayName || user.displayName || "";

      // Save or update vendor basic record (Supabase will be configured later)
      try {
        const { error: supaError } = await supabase
          .from("vendor_users")
          .upsert(
            {
              firebase_uid: firebaseUid,
              full_name: finalFullName,
              email: finalEmail,
              phone: phone,
              login_method: loginMethod,
            },
            { onConflict: "firebase_uid" }
          );

        if (supaError) {
          console.warn("Supabase not configured yet:", supaError);
          // Continue anyway - Supabase will be configured later
        }
      } catch (err) {
        console.warn("Supabase operation failed (will be configured later):", err);
        // Continue anyway - Supabase will be configured later
      }

      // Store locally with all user info
      const vendorUser = { 
        firebaseUid, 
        fullName: finalFullName, 
        email: finalEmail, 
        phone,
        googleInfo: googleUserInfo || null
      };
      localStorage.setItem("wedeption_vendor_user", JSON.stringify(vendorUser));

      setStep("done");

      // Redirect to full vendor registration form
      navigate("/vendor/register");
    } catch (err) {
      console.error("OTP Verification Error:", err);
      let errorMessage = "OTP verification failed. ";
      
      if (err.code === "auth/invalid-verification-code") {
        errorMessage = "Invalid OTP. Please check and try again.";
      } else if (err.code === "auth/code-expired") {
        errorMessage = "OTP has expired. Please request a new OTP.";
      } else {
        errorMessage += err.message || "Please try again.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vendor-auth-page">
      <div className="vendor-auth-card">
        <h1 className="vendor-auth-title">Vendor Login / Signup</h1>
        <p className="vendor-auth-subtitle">
          Login using Google (optional) and verify your phone number (mandatory)
        </p>

        {error && <div className="vendor-auth-error">{error}</div>}

        {/* GOOGLE LOGIN */}
        <div className="vendor-auth-section">
          <p className="vendor-auth-label">1. Optional: Continue with Google</p>

          <button
            className="vendor-btn vendor-btn-google"
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading || step === "otp"}
          >
            {loading ? "Signing in..." : "Continue with Google"}
          </button>
          
          {googleUserInfo && (
            <div style={{
              marginTop: "12px",
              padding: "10px 12px",
              background: "#f0f9ff",
              border: "1px solid #bae6fd",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#0369a1"
            }}>
              ✓ Google account connected. Please verify your phone number below.
            </div>
          )}

          <p className="vendor-hint">
            Google helps us fetch your email and name, but phone verification is required.
          </p>
        </div>

        {/* USER BASIC DETAILS */}
        <div className="vendor-auth-section">
          <p className="vendor-auth-label">2. Your Basic Details</p>

          <label className="vendor-field">
            <span>Full Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label className="vendor-field">
            <span>Email ID</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="vendor-field">
            <span>Phone Number (with country code) <span style={{color: "#dc2626"}}>*</span></span>
            <input
              type="tel"
              placeholder="+91XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={step === "otp"}
            />
          </label>

          {step === "details" && (
            <button
              className="vendor-btn vendor-btn-primary"
              type="button"
              disabled={loading || !phone.trim() || phone.trim().length < 10}
              onClick={handleSendOtp}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          )}
        </div>

        {/* OTP SECTION */}
        {step === "otp" && (
          <div className="vendor-auth-section">
            <p className="vendor-auth-label">3. Enter OTP</p>

            <label className="vendor-field">
              <span>OTP</span>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                maxLength="6"
                autoFocus
              />
            </label>

            <button
              className="vendor-btn vendor-btn-primary"
              type="button"
              disabled={loading}
              onClick={handleVerifyOtp}
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>
          </div>
        )}

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default VendorAuth;
