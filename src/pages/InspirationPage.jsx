import React from "react";
import "./InspirationPage.css";

const tabs = [
  "All Categories",
  "Bridal Lehenga",
  "Outfits",
  "Blouse Designs",
  "Wedding Sarees",
  "Mehendi",
  "Jewellery",
  "Makeup",
  "Hairstyles",
  "Decor",
];

const inspirationData = [
  {
    id: 1,
    title: "Baani and Karan",
    subtitle: "Real Wedding • Udaipur",
    description: "Couple exchanging vows under a tree of marigolds.",
    image:
      "https://images.pexels.com/photos/4937744/pexels-photo-4937744.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Wedding Moments",
  },
  {
    id: 2,
    title: "Navranvi and Anuraman",
    subtitle: "Real Wedding • Delhi NCR",
    description: "The bride walks in with her mother for the varmala.",
    image:
      "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bridal Entry",
  },
  {
    id: 3,
    title: "Amala and Aditya",
    subtitle: "Real Wedding • Jodhpur",
    description: "Fun caricature pins make baraat gifts feel personal.",
    image:
      "https://images.pexels.com/photos/2959194/pexels-photo-2959194.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
  },
  {
    id: 4,
    title: "Nikita and Raghav",
    subtitle: "Real Wedding • Delhi NCR",
    description: "Stunning ivory bridal lehenga.",
    image:
      "https://images.pexels.com/photos/3718327/pexels-photo-3718327.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bridal Couture",
  },
  {
    id: 5,
    title: "Savera and Ishaan",
    subtitle: "Real Wedding • Delhi NCR",
    description: "Wedding day portrait with brick & emerald palette.",
    image:
      "https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Portraits",
  },
  {
    id: 6,
    title: "Apoorva and Sanjay",
    subtitle: "Real Wedding • Florida",
    description: "Gorgeous gold gown paired with deep ruby dupatta.",
    image:
      "https://images.pexels.com/photos/3014857/pexels-photo-3014857.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Reception Looks",
  },
  {
    id: 7,
    title: "Shikha and James",
    subtitle: "Real Wedding • Italy",
    description: "Couple share a laugh just after the ceremony.",
    image:
      "https://images.pexels.com/photos/265758/pexels-photo-265758.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Destination Weddings",
  },
  {
    id: 8,
    title: "Events by Sahiba",
    subtitle: "Decor Stylists • Delhi NCR",
    description: "Pretty pastels and hanging florals remake the sangeet.",
    image:
      "https://images.pexels.com/photos/214643/pexels-photo-214643.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Decor",
  },
  {
    id: 9,
    title: "Vinny and Sahil",
    subtitle: "Real Wedding • Mumbai",
    description: "Gorgeous fishtail dupatta drape for a night pheras look.",
    image:
      "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Lehengas",
  },
  {
    id: 10,
    title: "Shreya and Mahveer",
    subtitle: "Real Wedding • Udaipur",
    description: "Golden hour portraits on the palace terrace.",
    image:
      "https://images.pexels.com/photos/1729795/pexels-photo-1729795.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Couple Shoots",
  },
  {
    id: 11,
    title: "Eventztra Memories",
    subtitle: "Decor Stylists • Goa",
    description: "Geometric glass mandap that keeps things light.",
    image:
      "https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Decor",
  },
  {
    id: 12,
    title: "Pooja and Neeraj",
    subtitle: "Real Wedding • Jaipur",
    description: "Plush fringe backdrops for dreamy wedding pictures.",
    image:
      "https://images.pexels.com/photos/2959197/pexels-photo-2959197.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Stage Design",
  },
];

const InspirationPage = () => {
  return (
    <div className="inspiration-page">
      <header className="insp-hero">
        <div>
          <p className="insp-eyebrow">Home › Wedding Photos, Latest Trends & Ideas</p>
          <h1>Wedding Photos, Latest Trends & Ideas</h1>
          <p className="insp-subtitle">
            Browse from more than 5,000+ wedding projects, makeup looks, venues, decor ideas, and more.
          </p>
        </div>
        <button className="insp-cta-button">Upload Yours</button>
      </header>

      <section className="insp-tabs">
        {tabs.map((tab) => (
          <button key={tab} className={`insp-tab ${tab === "All Categories" ? "active" : ""}`}>
            {tab}
          </button>
        ))}
      </section>

      <section className="insp-controls">
        <div className="insp-sort">
          <span>Sort by:</span>
          <button className="active">Relevant</button>
          <button>Trending</button>
        </div>
        <div className="insp-search">
          <input type="text" placeholder="Search photos & ideas..." />
          <span className="insp-search-icon">🔍</span>
        </div>
      </section>

      <section className="insp-grid">
        {inspirationData.map((item) => (
          <article key={item.id} className="insp-card">
            <div className="insp-card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <button className="insp-pin" aria-label="Save inspiration">
                ♡
              </button>
            </div>
            <div className="insp-card-body">
              <p className="insp-card-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="insp-card-meta">{item.subtitle}</p>
              <p className="insp-card-desc">{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="insp-download">
        <div>
          <h2>Save wedding ideas on your phone</h2>
          <p>Find outfits, venues, and decor inspo from anywhere.</p>
        </div>
        <div className="insp-download-actions">
          <button className="insp-store-btn">App Store</button>
          <button className="insp-store-btn secondary">Google Play</button>
        </div>
      </section>
    </div>
  );
};

export default InspirationPage;

