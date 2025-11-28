import React from "react";
import "./GalleryLookFor.css";

const galleryItems = [
  {
    title: "Bridal Lehenga",
    image:
      "https://images.pexels.com/photos/4582664/pexels-photo-4582664.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Outfits",
    image:
      "https://images.pexels.com/photos/276633/pexels-photo-276633.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Blouse Designs",
    image:
      "https://images.pexels.com/photos/1261425/pexels-photo-1261425.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Wedding Sarees",
    image:
      "https://images.pexels.com/photos/2959195/pexels-photo-2959195.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mehndi Designs",
    image:
      "https://images.pexels.com/photos/1619485/pexels-photo-1619485.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const GalleryLookFor = () => {
  return (
    <section className="gallery-look">
      <div className="gallery-header">
        <h2>Gallery to Look for</h2>
        <button aria-label="Next gallery">➜</button>
      </div>
      <div className="gallery-row">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <p>{item.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GalleryLookFor;

