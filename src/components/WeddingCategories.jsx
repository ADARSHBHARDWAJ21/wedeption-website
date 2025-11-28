import React from "react";
import "./WeddingCategories.css";

const categories = [
  {
    title: "Venues",
    description: "Banquet Halls, Marriage Garden / Lawn...",
    cta: "Venues",
    image:
      "https://images.unsplash.com/photo-1509610696553-9243bff0d966?auto=format&w=900&q=60",
    color: "#dae1ff",
  },
  {
    title: "Photographers",
    description: "Photographers",
    cta: "Photographers",
    image:
      "https://images.unsplash.com/photo-1520854223473-2be7f3df49f6?auto=format&w=900&q=60",
    color: "#f5d7bc",
  },
  {
    title: "Makeup",
    description: "Bridal Makeup Artists, Family Makeup",
    cta: "Makeup",
    image:
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&w=900&q=60",
    color: "#dfb1ab",
  },
  {
    title: "Planning & Decor",
    description: "Wedding Planners, Decorators",
    cta: "Planning & Decor",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&w=900&q=60",
    color: "#f9b088",
  },
  {
    title: "Virtual Planning",
    description: "Virtual planning",
    cta: "Virtual Planning",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=900&q=60",
    color: "#f7d8c1",
  },
  {
    title: "Mehndi",
    description: "Mehendi Artists",
    cta: "Mehndi",
    image:
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&w=900&q=60",
    color: "#decab1",
  },
];

const WeddingCategories = () => {
  return (
    <section className="wedding-categories">
      <div className="section-head">
        <div>
          <p className="section-label">Wedding Categories</p>
        </div>
        <button className="view-all">
          View all Categories <span>›</span>
        </button>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <article
            key={category.title}
            className="category-card"
            style={{ backgroundColor: category.color }}
          >
            <div className="category-text">
              <div className="category-name">
                {category.title} <span>⌄</span>
              </div>
              <p>{category.description}</p>
            </div>
            <div className="category-image">
              <img src={category.image} alt={category.title} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WeddingCategories;

