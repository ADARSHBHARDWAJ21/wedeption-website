import React from "react";
import "./HomePage.css";
import heroImg from "../assets/adarsh.png";
import OccasionCategories from "./OccasionCategories.jsx";
import WeddingCategories from "./WeddingCategories";
import PopularSearches from "./PopularSearches";
import FeaturedVendors from "./FeaturedVendors";
import GalleryLookFor from "./GalleryLookFor";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
          Your Perfect Event Starts Here. Find Top Vendors . <br />
            <span>Instantly.</span>
          </h1>
          <p>
            Shop curated party essentials designed to make hosting effortless.
          </p>

          <div className="hero-buttons">
            <button className="browse-btn">Browse Shop</button>
            <button className="plan-btn">Plan Your Party</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Party Girls" />
        </div>
      </section>
      <OccasionCategories />
 
      <PopularSearches />
      <FeaturedVendors />
      <WeddingCategories />
      <GalleryLookFor />
      <Footer />
    
    </>
  );
};

export default HomePage;
