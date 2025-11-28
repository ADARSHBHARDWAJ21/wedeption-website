import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./VenuesPage.css";
import venues from "../Data/venuesData";

const functionTypes = [
  "All",
  "Wedding",
  "Birthday",
  "Anniversary",
  "Engagement",
  "Corporate",
  "Reception",
];

const guestOptions = [
  { label: "Any", value: "any", range: [0, Infinity] },
  { label: "Up to 100", value: "upto-100", range: [0, 100] },
  { label: "100 - 250", value: "100-250", range: [100, 250] },
  { label: "250 - 500", value: "250-500", range: [250, 500] },
  { label: "500+", value: "500+", range: [500, Infinity] },
];

const VenuesPage = () => {
  const [selectedFunction, setSelectedFunction] = useState("All");
  const [selectedGuests, setSelectedGuests] = useState("any");

  const filteredVenues = useMemo(() => {
    const { range } =
      guestOptions.find((option) => option.value === selectedGuests) ||
      guestOptions[0];

    return venues.filter((venue) => {
      const inFunction =
        selectedFunction === "All" ||
        venue.functions.includes(selectedFunction);
      const inCapacity =
        venue.capacity >= range[0] && venue.capacity <= range[1];
      return inFunction && inCapacity;
    });
  }, [selectedFunction, selectedGuests]);

  return (
    <div className="venues-page-wrapper">
      <header className="venues-header">
        <p className="breadcrumb">Home &gt; Vendors &gt; Wedding Venues</p>
        <h1>Wedding Venues in Bhopal</h1>
        <p className="results-info">
          Showing {filteredVenues.length} results based on your current filters.
        </p>
      </header>

      <div className="venues-layout">
        <aside className="venues-filter-panel">
          <h3>Filters</h3>
          <div className="filter-group">
            <p className="filter-title">Function Type</p>
            <div className="function-pill-group">
              {functionTypes.map((type) => (
                <button
                  key={type}
                  className={`function-pill ${
                    selectedFunction === type ? "active" : ""
                  }`}
                  onClick={() => setSelectedFunction(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <p className="filter-title">Number of Guests</p>
            <select
              value={selectedGuests}
              onChange={(e) => setSelectedGuests(e.target.value)}
            >
              {guestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            className="reset-filter"
            onClick={() => {
              setSelectedFunction("All");
              setSelectedGuests("any");
            }}
          >
            Reset Filters
          </button>
        </aside>

        <section className="venues-list">
          {filteredVenues.map((venue) => (
            <Link
              to={`/venues/${venue.id}`}
              className="venue-card"
              key={venue.id}
            >
              <div className="venue-image">
                <img src={venue.image} alt={venue.name} />
              </div>
              <div className="venue-info">
                <div className="venue-meta">
                  <h3>{venue.name}</h3>
                  <span className="rating-badge">
                    {venue.rating.toFixed(1)} • {venue.reviews} reviews
                  </span>
                </div>
                <p className="venue-location">{venue.location}</p>
                <div className="venue-price">
                  <div>
                    <span className="price-label">Veg</span>
                    <p>₹ {venue.pricePerPlateVeg} per plate</p>
                  </div>
                  <div>
                    <span className="price-label">Non-Veg</span>
                    <p>₹ {venue.pricePerPlateNonVeg} per plate</p>
                  </div>
                  <div>
                    <span className="price-label">Capacity</span>
                    <p>Up to {venue.capacity} guests</p>
                  </div>
                </div>
                <div className="venue-functions">
                  {venue.functions.map((fn) => (
                    <span key={fn}>{fn}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {filteredVenues.length === 0 && (
            <div className="empty-state">
              <p>No venues match your filters. Try broadening criteria.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default VenuesPage;

