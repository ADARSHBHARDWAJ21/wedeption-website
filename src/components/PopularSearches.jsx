import React from "react";
import "./PopularSearches.css";

const venueData = [
  {
    title: "4 Star & Above Wedding Hotels",
    location: "All Localities",
    image:
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Banquet Halls",
    location: "All Localities",
    image:
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Marriage Garden / Lawns",
    location: "All Localities",
    image:
      "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const searchData = [
  {
    title: "Bridal Wear in Bhopal",
    image:
      "https://images.pexels.com/photos/3731987/pexels-photo-3731987.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Bridal Makeup Artists in Bhopal",
    image:
      "https://images.pexels.com/photos/3002763/pexels-photo-3002763.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Photographers in Bhopal",
    image:
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Invitations in Bhopal",
    image:
      "https://images.pexels.com/photos/2959197/pexels-photo-2959197.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Catering Services in Bhopal",
    image:
      "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const PopularSearches = () => {
  return (
    <section className="popular-searches">
      <div className="popular-block">
        <div className="popular-header">
          <h2>Popular Venue Searches</h2>
          <button aria-label="Next venues">➜</button>
        </div>
        <div className="popular-grid three">
          {venueData.map((venue) => (
            <article key={venue.title} className="popular-card">
              <img src={venue.image} alt={venue.title} loading="lazy" />
              <div>
                <h3>{venue.title}</h3>
                <a href="#">{venue.location}</a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="popular-block">
        <div className="popular-header">
          <h2>Popular Searches</h2>
          <button aria-label="Next searches">➜</button>
        </div>

        <div className="popular-grid five">
          {searchData.map((item) => (
            <article key={item.title} className="popular-card tall">
              <img src={item.image} alt={item.title} loading="lazy" />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;

