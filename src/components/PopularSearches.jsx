import React from "react";
import "./PopularSearches.css";

// Updated data structure to include image URLs and a more detailed format
const popularSearches = [
  {
    id: 1,
    category: "4 Star & Above Wedding Hotels",
    description: "All Localities",
    image: "https://images.unsplash.com/photo-1579656592237-775f5d688849?auto=format&fit=crop&w=400&q=60",
    rating: "4.8", // Added rating for the badge
    price: "₹ 500", // Example price
    unit: "per plate" // Example unit
  },
  {
    id: 2,
    category: "Banquet Halls",
    description: "All Localities",
    image: "https://images.unsplash.com/photo-1542042125301-44755a9072a3?auto=format&fit=crop&w=400&q=60",
    rating: "4.5",
    price: "₹ 1,000",
    unit: "per plate"
  },
  {
    id: 3,
    category: "Marriage Garden / Lawns",
    description: "All Localities",
    image: "https://images.unsplash.com/photo-1582239499127-d0d359487920?auto=format&fit=crop&w=400&q=60",
    rating: "4.7",
    price: "₹ 800",
    unit: "per guest"
  },
  {
    id: 4,
    category: "Resorts & Farmhouses",
    description: "All Localities",
    image: "https://images.unsplash.com/photo-1627756184516-7287957790b3?auto=format&fit=crop&w=400&q=60",
    rating: "4.9",
    price: "₹ 1,500",
    unit: "per night"
  },
  {
    id: 5,
    category: "Small Function Halls",
    description: "All Localities",
    image: "https://images.unsplash.com/photo-1624534720611-e6e2f1f0a5f1?auto=format&fit=crop&w=400&q=60",
    rating: "4.2",
    price: "₹ 300",
    unit: "per hour"
  },
];

const PopularSearches = () => {
  // Function to scroll the container horizontally
  const scrollContainer = (direction) => {
    const container = document.querySelector(".popular-grid.horizontal-scroll");
    if (container) {
      const scrollAmount = 350; // Adjust scroll distance as needed
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="popular-searches">
      <div className="popular-block">
        <div className="popular-header">
          <h2>Popular Venue Searches</h2>
          <div className="nav-buttons">
            <button onClick={() => scrollContainer("left")} aria-label="Scroll left">
              &lt;
            </button>
            <button onClick={() => scrollContainer("right")} aria-label="Scroll right">
              &gt;
            </button>
          </div>
        </div>

        <div className="popular-grid horizontal-scroll">
          {popularSearches.map((search) => (
            <article key={search.id} className="popular-card new-design">
              <div className="card-image-wrapper">
                <img src={search.image} alt={search.category} loading="lazy" />
                {search.rating && (
                  <span className="rating-badge">
                    ⭐ {search.rating}
                  </span>
                )}
              </div>
              <div className="card-content">
                <h3>{search.category}</h3>
                <p className="card-description">{search.description}</p>
                {search.price && (
                  <p className="card-price">
                    <span className="price-value">{search.price}</span>
                    <span className="price-unit">{search.unit}</span>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;