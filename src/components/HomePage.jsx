// src/components/HomePage.jsx

import React from "react";
import "./HomePage.css";
import heroImg from "../assets/adarsh.png";

import WeddingCategories from "./WeddingCategories";
import PopularSearches from "./PopularSearches";
import FeaturedVendors from "./FeaturedVendors";
import GalleryLookFor from "./GalleryLookFor";
import RealWeddingStories from "./RealWeddingStories"; 
import AppDownloadCTA from "./AppDownloadCTA"; // <-- IMPORT NEW COMPONENT
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-left">
          <h1 className="hero-title">
            Your Perfect Event Starts Here. <br />
            Find Top Vendors <span>Instantly.</span>
          </h1>

          <p className="hero-subtext">
            Shop curated party essentials designed to make hosting effortless.
          </p>

          <div className="hero-btn-group">
            <button className="primary-btn">Browse Shop</button>
            <button className="outline-btn">Plan Your Party</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Event Banner" />
        </div>

      </section>

      {/* EXISTING SECTIONS */}
      <PopularSearches />
      <FeaturedVendors />
      <WeddingCategories />
      <GalleryLookFor />
      <RealWeddingStories /> 
      <AppDownloadCTA /> {/* <-- RENDER NEW CTA HERE */}
      <Footer />
    </>
  );
};

export default HomePage;