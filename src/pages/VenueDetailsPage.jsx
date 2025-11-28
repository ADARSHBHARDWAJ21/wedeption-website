import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import venues from "../Data/venuesData";
import "./VenueDetailsPage.css";

const VenueDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const venue = venues.find((item) => item.id === Number(id));

  if (!venue) {
    return (
      <div className="venue-details-wrapper">
        <button className="back-link" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="empty-state">Sorry, venue not found.</div>
      </div>
    );
  }

  return (
    <div className="venue-details-wrapper">
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Back to results
      </button>

      {/* HERO TOP SECTION */}
      <header className="venue-details-hero">
        <div className="hero-image">
          <img src={venue.image} alt={venue.name} />
        </div>

        <div className="hero-content">
          <div className="hero-heading">
            <div>
              <h1>{venue.name}</h1>
              <p>{venue.location}</p>

              <div className="hero-tags">
                {venue.functions.slice(0, 3).map((fn) => (
                  <span key={fn}>{fn}</span>
                ))}
              </div>
            </div>

            <div className="hero-rating">
              <span className="hero-rating-value">{venue.rating.toFixed(1)}</span>
              <span>{venue.reviews} reviews</span>
            </div>
          </div>

          <p className="hero-overview">{venue.overview}</p>

          <div className="hero-info-grid">
            <div>
              <span>Veg Price</span>
              <strong>₹ {venue.pricePerPlateVeg} per plate</strong>
            </div>
            <div>
              <span>Non-Veg Price</span>
              <strong>₹ {venue.pricePerPlateNonVeg} per plate</strong>
            </div>
            <div>
              <span>Guest Capacity</span>
              <strong>Up to {venue.capacity} guests</strong>
            </div>
          </div>

          <div className="hero-actions">
            <button className="primary-btn">Check Availability & Prices</button>
            <button className="secondary-btn">Send Enquiry</button>
          </div>
        </div>
      </header>

      {/* DETAILS GRID */}
      <section className="details-grid">
        <div className="main-column">
          {/* AREAS */}
          <section className="detail-card">
            <h2>Areas Available</h2>
            <div className="areas-grid">
              {venue.areas.map((area) => (
                <div key={area.name} className="area-tile">
                  <h4>{area.name}</h4>
                  <p>
                    {area.seating} Seating • {area.floating} Floating
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section className="detail-card">
            <div className="section-header">
              <h2>Portfolio</h2>
              <button className="text-link">View 20+ photos</button>
            </div>
            <div className="gallery-grid">
              {venue.gallery.map((src, idx) => (
                <img key={idx} src={src} alt={`${venue.name} gallery ${idx}`} />
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section className="detail-card">
            <h2>About {venue.name}</h2>
            <p>{venue.overview}</p>
          </section>

          {/* AMENITIES */}
          <section className="detail-card">
            <h2>Amenities</h2>
            <div className="pill-group">
              {venue.amenities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          {/* POLICIES */}
          <section className="detail-card">
            <h2>Policies</h2>
            <div className="policy-grid">
              {Object.entries(venue.policies).map(([key, value]) => (
                <div key={key}>
                  <span className="policy-label">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* REVIEWS */}
          <section className="detail-card">
            <div className="section-header">
              <h2>Reviews ({venue.reviews})</h2>
              <button className="text-link">Write a review</button>
            </div>

            <div className="review-summary">
              <strong>{venue.rating.toFixed(1)}</strong>
              <div>
                <p>Average rating</p>
                <p className="muted">
                  Based on {venue.reviews} reviews updated recently
                </p>
              </div>
            </div>

            <div className="reviews-list">
              {venue.reviewsData.map((review) => (
                <article key={review.id} className="review-card">
                  <div className="review-head">
                    <div>
                      <h4>{review.author}</h4>
                      <p className="muted">{review.date}</p>
                    </div>
                    <span className="rating-chip">{review.rating.toFixed(1)}</span>
                  </div>

                  <p>{review.comment}</p>

                  {review.recommendedFor?.length ? (
                    <div className="pill-group">
                      {review.recommendedFor.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* ⭐ NEW CONTACT FORM EXACTLY LIKE IMAGE */}
        <aside className="sidebar">
          <div className="detail-card sticky-card contact-card">
            <h3 className="starting-price-title">Starting Price</h3>
            <p className="starting-price-value">
              ₹ {venue.pricePerPlateVeg} per plate{" "}
              <span className="tax-text">(taxes extra)</span>
            </p>
            <p className="veg-label">Veg price</p>

            <div className="contact-buttons">
              <button className="send-btn">📩 Send Message</button>
              <button className="contact-btn">📞 View Contact</button>
            </div>

            <h4 className="form-title">Hi {venue.name},</h4>

            <form className="vendor-form">
              <div className="form-group">
                <label>Full name*</label>
                <input type="text" placeholder="Required" />
              </div>

              <div className="form-group phone-group">
                <label>Phone*</label>
                <div className="phone-input">
                  <span className="flag">🇮🇳 +91</span>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Enter email" />
              </div>

              <div className="form-group">
                <label>Function date*</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>No of guests* (min 50)</label>
                <input type="number" placeholder="50+" />
              </div>

              <div className="form-group">
                <label>No of rooms</label>
                <input type="number" placeholder="Optional" />
              </div>

              <h4 className="form-sub-title">Function Type</h4>
              <div className="radio-group">
                <label>
                  <input type="radio" name="functionType" /> Pre-Wedding
                </label>
                <label>
                  <input type="radio" name="functionType" /> Wedding
                </label>
              </div>

              <h4 className="form-sub-title">Function Time</h4>
              <div className="radio-group">
                <label>
                  <input type="radio" name="functionTime" /> Evening
                </label>
                <label>
                  <input type="radio" name="functionTime" /> Day
                </label>
              </div>

              <div className="toggle-row">
                <label>Notify me on Whatsapp</label>
                <input type="checkbox" className="toggle-switch" />
              </div>

              <button type="button" className="check-btn">
                Check Availability & Prices
              </button>
            </form>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default VenueDetailsPage;


