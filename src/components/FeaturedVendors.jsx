import React from "react";
import "./FeaturedVendors.css";

const vendorData = [
  {
    name: "Glam It Up by Myraa",
    category: "Bridal Makeup Artists",
    price: "₹ 15,000",
    image:
      "https://images.pexels.com/photos/3731987/pexels-photo-3731987.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: "4.9",
    priceNote: "per event",
  },
  {
    name: "Weddings by R Maheshwari",
    category: "Wedding Decorators",
    price: "₹ 3,00,000",
    priceNote: "onwards",
    image:
      "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: "4.9",
  },
  {
    name: "Giovanni Village",
    category: "Wedding Venues",
    price: "₹ 1,550",
    priceNote: "per plate",
    image:
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: "5.0",
  },
  {
    name: "The Wedding Donut",
    category: "Wedding Photographers",
    price: "₹ 35,000",
    priceNote: "per day",
    image:
      "https://images.pexels.com/photos/1574653/pexels-photo-1574653.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: "4.8",
  },
];

const FeaturedVendors = () => {
  return (
    <section className="featured-vendors">
      <div className="featured-header">
        <h2>Featured Vendors</h2>
        <button aria-label="See next vendors">➜</button>
      </div>

      <div className="vendors-row">
        {vendorData.map((vendor) => (
          <article key={vendor.name} className="vendor-card">
            <div className="vendor-image">
              <img src={vendor.image} alt={vendor.name} loading="lazy" />
              <span className="vendor-rating">★ {vendor.rating}</span>
            </div>
            <div className="vendor-info">
              <h3>{vendor.name}</h3>
              <p className="vendor-category">{vendor.category}</p>
              <p className="vendor-price">
                {vendor.price} <span>{vendor.priceNote}</span>
              </p>
            </div>
          </article>
        ))}
        <button className="vendors-next" aria-label="Next vendors">
          →
        </button>
      </div>
    </section>
  );
};

export default FeaturedVendors;

