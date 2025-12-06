import React from "react";
import { useNavigate } from "react-router-dom";
import "./VendorSubscription.css";

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹999 / month",
    features: [
      "Profile listed on Wedeption",
      "Appear in search results",
      "1 portfolio album",
      "Basic support",
    ],
    color: "#e5e7eb",
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹2,499 / month",
    features: [
      "Priority search ranking",
      "5 portfolio albums",
      "Client enquiries",
      "Priority support",
      "Insights dashboard",
    ],
    color: "#dbeafe",
  },
  {
    id: "gold",
    name: "Gold Plan",
    price: "₹4,999 / month",
    features: [
      "Top search placement",
      "Unlimited portfolio albums",
      "Featured vendor badge",
      "Direct WhatsApp enquiries",
      "Dedicated account manager",
    ],
    color: "#fef3c7",
  },
];

const VendorSubscription = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planId) => {
    navigate(`/vendor/payment?plan=${planId}`);
  };

  return (
    <div className="vsp-page">
      <div className="vsp-container">
        <h1 className="vsp-title">Choose Your Subscription Plan</h1>
        <p className="vsp-subtitle">
          Select a plan and boost your business visibility on Wedeption.
        </p>

        <div className="vsp-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="vsp-card" style={{ background: plan.color }}>
              <h2 className="vsp-plan-title">{plan.name}</h2>
              <p className="vsp-plan-price">{plan.price}</p>

              <ul className="vsp-features">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              <button
                className="vsp-btn"
                onClick={() => handleSelectPlan(plan.id)}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorSubscription;
