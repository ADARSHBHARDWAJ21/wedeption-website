import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import "./VendorDashboard.css";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlan = async () => {
      const vendorUser = JSON.parse(localStorage.getItem("wedeption_vendor_user"));
      if (!vendorUser) return navigate("/vendor/auth");

      if (!supabase) {
        console.warn("Supabase not configured, using default free plan");
        setPlan("free");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("business_listings")
          .select("subscription_plan, is_paid")
          .eq("firebase_uid", vendorUser.firebaseUid)
          .single();

        if (error) {
          console.error("Error loading plan:", error);
          setPlan("free"); // Default to free on error
        } else if (data?.is_paid && data.subscription_plan === "premium") {
          setPlan("premium");
        } else {
          setPlan("free");
        }
      } catch (err) {
        console.error("Error loading subscription plan:", err);
        setPlan("free"); // Default to free on error
      }

      setLoading(false);
    };

    loadPlan();
  }, [navigate]);

  const handleUpgrade = () => {
    navigate("/vendor/payment?plan=premium");
  };

  if (loading) return <div className="vd-loading">Loading Dashboard...</div>;

  const isPremium = plan === "premium";

  return (
    <div className="vd-container">

      {/* HEADER */}
      <div className="vd-header">
        <h1>Vendor Dashboard</h1>

        <div className="vd-header-actions">
          <input placeholder="Search" className="vd-search" />
          <button className="vd-upgrade-btn" onClick={handleUpgrade}>
            Upgrade Now
          </button>
        </div>
      </div>

      {/* TOP STATS */}
      <div className="vd-stats-grid">

        <div className="vd-stat-card">
          <h3>Profile Views</h3>
          <p className="vd-stat-number">1,254</p>
        </div>

        <div className="vd-stat-card">
          <h3>Total Inquiries</h3>
          <p className="vd-stat-number">12</p>
          <span className="vd-stat-sub">(3/5 used)</span>
        </div>

        <div className="vd-stat-card">
          <h3>Chat Messages</h3>
          <p className="vd-stat-number">45</p>
          <span className="vd-stat-sub">/ Unlimited</span>
        </div>

      </div>

      {/* LEADS TABLE */}
      <div className="vd-table-box">
        <h2>Inquiries / Leads</h2>

        <table className="vd-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rise Views</td>
              <td>New</td>
              <td>New</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Total Inquiries</td>
              <td>New</td>
              <td>New</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Hot Inquiries</td>
              <td>Contacted</td>
              <td>New</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RIGHT SIDEBAR CARDS */}
      <div className="vd-sidebar">

        {/* FREE FEATURE */}
        <div className="vd-sidebar-card">
          <h3>Profile & Feed Status</h3>
          <p>Visibility: Low (Upgrade for Top Ranking)</p>
        </div>

        {/* PREMIUM LOCKED */}
        <div className="vd-sidebar-card locked" onClick={handleUpgrade}>
          <div className="vd-lock-icon">🔒</div>
          <h3>Vendor CRM + Notes</h3>
          <p>Unlock Premium to manage leads efficiently</p>
        </div>

        <div className="vd-sidebar-card locked" onClick={handleUpgrade}>
          <div className="vd-lock-icon">🔒</div>
          <h3>Advanced Analytics</h3>
          <p>See report (Premium)</p>
        </div>
      </div>

    </div>
  );
};

export default VendorDashboard;
