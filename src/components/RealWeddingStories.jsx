import React from "react";
import "./RealWeddingStories.css";

const weddingStories = [
  {
    id: 1,
    couple: "Aishwarya and Ansh",
    description: "Pretty Multi-Cultural Wedding With A Vintage-Inspired Sabyasachi Lehenga",
    date: "24 December 2024",
    image: "https://images.unsplash.com/photo-1533038531553-625062a4d0f7?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    couple: "Purnima and Nathan",
    description: "Cross-Culture Wedding In Bhopal Reminiscent Of The DeepVeer Wedding!",
    date: "22 July 2024",
    image: "https://images.unsplash.com/photo-1542042125301-44755a9072a3?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    couple: "Eshita & Rutvan",
    description: "Regal Bhopal Wedding With A Riot of Colour!",
    date: "23 August 2017",
    image: "https://images.unsplash.com/photo-1550970631-591147a0665f?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 4,
    couple: "Sanya and Dev",
    description: "Intimate Garden Wedding in the heart of the city.",
    date: "10 April 2025",
    image: "https://images.unsplash.com/photo-1520854223473-2be7f3df49f6?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 5,
    couple: "Kabir and Zara",
    description: "Destination Wedding in Udaipur with a Modern Twist.",
    date: "01 June 2024",
    image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=400&q=60",
  },
];

const RealWeddingStories = () => {
  return (
    <section className="wedding-stories-section">
      <h2 className="stories-title">Real Wedding Stories</h2>
      
      <div className="stories-container">
        {weddingStories.map((story) => (
          <article key={story.id} className="story-card">
            <div className="story-image-wrapper">
              <img src={story.image} alt={`Wedding of ${story.couple}`} loading="lazy" />
              <button className="stories-next-btn" aria-label="Next story">
                {/* Arrow icon shown on the right-most card in the image */}
                {story.id === 3 ? "›" : ""} 
              </button>
            </div>
            <div className="story-content">
              <h3>{story.couple}</h3>
              <p className="story-description">{story.description}</p>
              <p className="story-date">{story.date}</p>
            </div>
          </article>
        ))}
        {/* Navigation button visible on the right of the container, placed outside the card for standard list view */}
        <button className="stories-nav-arrow" aria-label="Scroll next">
             ›
        </button>
      </div>
    </section>
  );
};

export default RealWeddingStories;