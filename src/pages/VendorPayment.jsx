import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./vendorPayment.css";

const PLAN_DETAILS = {
  basic: { name: "Basic Plan", price: "₹999 / month" },
  premium: { name: "Premium Plan", price: "₹2,499 / month" },
  gold: { name: "Gold Plan", price: "₹4,999 / month" },
};

const VendorPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const plan = new URLSearchParams(location.search).get("plan") || "basic";
  const details = PLAN_DETAILS[plan];

  const handlePayment = () => {
    alert("Payment UI only (Razorpay will be added later)");
    navigate("/vendor/dashboard");
  };

  return (
    <div className="vp-page">
      <div className="vp-card">
        <h1 className="vp-title">Complete Your Payment</h1>

        <div className="vp-section">
          <h3>Selected Plan</h3>
          <p className="vp-plan">{details.name}</p>
          <p className="vp-price">{details.price}</p>
        </div>

        <div className="vp-section">
          <h3>Order Summary</h3>
          <ul>
            <li>Subscription: {details.name}</li>
            <li>Total Amount: {details.price}</li>
          </ul>
        </div>

        <button className="vp-btn" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default VendorPayment;
