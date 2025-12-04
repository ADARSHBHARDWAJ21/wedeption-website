import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"; 
import "./VenuesPage.css";
import venues from "../Data/venuesData";

const localities = [
  "Arera Colony",
  "Ashoka Garden",
  "Avinash Nagar",
  "Awadhpuri",
  "Ayodhya Nagar",
  "Bagmugaliya",
  "Laxmi Nagar",
  "Shahpura",
  "TT Nagar",
  "Kolar Road",
  "MP Nagar",
];

const guestRanges = [
  { label: "< 100", min: 0, max: 99 },
  { label: "100-250", min: 100, max: 250 },
  { label: "250-500", min: 250, max: 500 },
  { label: "500-1000", min: 500, max: 1000 },
  { label: "> 1000", min: 1001, max: Infinity },
];

const roomCountRanges = [
  { label: "< 30", min: 0, max: 30 },
  { label: "31-60", min: 31, max: 60 },
  { label: "61-100", min: 61, max: 100 },
  { label: "101-150", min: 101, max: 150 },
  { label: "151-200", min: 151, max: 200 },
  { label: "200+", min: 200, max: Infinity },
];

const pricePerPlateRanges = [
  { label: "< ₹ 1,000", min: 0, max: 999 },
  { label: "₹ 1,000 - ₹ 1,500", min: 1000, max: 1500 },
  { label: "₹ 1,500 - ₹ 2,000", min: 1500, max: 2000 },
  { label: "₹ 2,000 - ₹ 3,000", min: 2000, max: 3000 },
  { label: "> ₹ 3,000", min: 3001, max: Infinity },
];

const rentalCostRanges = [
  { label: "< ₹ 1 Lakh", min: 0, max: 99999 },
  { label: "₹ 1 Lakh - ₹ 2 Lakhs", min: 100000, max: 199999 },
  { label: "₹ 2 Lakhs - ₹ 4 Lakhs", min: 200000, max: 399999 },
  { label: "₹ 4 Lakhs - ₹ 6 Lakhs", min: 400000, max: 599999 },
  { label: "> ₹ 6 Lakhs", min: 600000, max: Infinity },
];

const venueTypes = [
  "Banquet Halls",
  "Marriage Garden / Lawns",
  "4 Star & Above Wedding Hotels",
  "5 Star Hotels",
  "3 Star Hotels with Banquets",
  "Convention / Function Halls",
];

const spaceTypes = ["Indoor", "Outdoor", "Poolside", "Terrace / Rooftop"];

const ratingOptions = [
  { label: "4.5+", min: 4.5 },
  { label: "4.0+", min: 4.0 },
  { label: "3.5+", min: 3.5 },
  { label: "3.0+", min: 3.0 },
];

const VenuesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [localitySearch, setLocalitySearch] = useState("");
  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState([]);
  const [selectedRoomCounts, setSelectedRoomCounts] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRentalCost, setSelectedRentalCost] = useState(null);
  const [selectedVenueTypes, setSelectedVenueTypes] = useState([]); 
  const [selectedSpaces, setSelectedSpaces] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Refs for filter sections (remains unchanged)
  const localityRef = useRef(null);
  const guestsRef = useRef(null);
  const roomCountRef = useRef(null);
  const priceRef = useRef(null);
  const rentalRef = useRef(null);
  const venueTypeRef = useRef(null);
  const spaceRef = useRef(null);
  const ratingRef = useRef(null);


  // --- FIX: EFFECT TO READ URL PARAMETERS AND APPLY FILTERS ON LOAD ---
  useEffect(() => {
    const filterValue = searchParams.get('filter');
    const categoryType = searchParams.get('category');
    
    // 1. Check if we have incoming URL filters for Venues
    if (filterValue && categoryType === "Venues") {
        const decodedFilter = decodeURIComponent(filterValue);
        
        // FIX: Only call setState if the current state is different to prevent cascade
        if (venueTypes.includes(decodedFilter)) {
            
            const isFilterApplied = selectedVenueTypes.length === 1 && selectedVenueTypes[0] === decodedFilter;
            
            if (!isFilterApplied) {
                // FIX: Setting state is safe here because the conditional check prevents unnecessary renders
                setSelectedVenueTypes([decodedFilter]);
            }
        }
        
        // 2. Clear URL parameters *only if they exist* to prevent cascade
        if (searchParams.has('filter') || searchParams.has('category')) {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete('filter');
            newSearchParams.delete('category');
            
            // Calling setSearchParams triggers a re-render/re-run of useEffect.
            // The logic above ensures this re-run doesn't infinitely set state.
            setSearchParams(newSearchParams, { replace: true });
        }
    }
    // Dependency array ensures safety: selectedVenueTypes is used in the comparison, 
    // and searchParams triggers the check.
  }, [searchParams, setSearchParams, selectedVenueTypes]); 

  // Close dropdown when clicking outside (remains unchanged)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.filter-dropdown-wrapper')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const filteredLocalities = useMemo(() => {
    return localities.filter((loc) =>
      loc.toLowerCase().includes(localitySearch.toLowerCase())
    );
  }, [localitySearch]);

  const toggleLocality = (locality) => {
    setSelectedLocalities((prev) =>
      prev.includes(locality)
        ? prev.filter((l) => l !== locality)
        : [...prev, locality]
    );
  };

  const toggleGuestRange = (range) => {
    setSelectedGuests((prev) =>
      prev.some((r) => r.label === range.label)
        ? prev.filter((r) => r.label !== range.label)
        : [...prev, range]
    );
  };

  const toggleRoomCount = (range) => {
    setSelectedRoomCounts((prev) =>
      prev.some((r) => r.label === range.label)
        ? prev.filter((r) => r.label !== range.label)
        : [...prev, range]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.some((r) => r.label === range.label)
        ? prev.filter((r) => r.label !== range.label)
        : [...prev, range]
    );
  };

  const toggleVenueType = (type) => {
    setSelectedVenueTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleSpace = (space) => {
    setSelectedSpaces((prev) =>
      prev.includes(space) ? prev.filter((s) => s !== space) : [...prev, space]
    );
  };

  const filteredVenues = useMemo(() => {
    return venues.filter((venue) => {
      // Locality filter
      if (
        selectedLocalities.length > 0 &&
        !selectedLocalities.includes(venue.locality)
      ) {
        return false;
      }

      // Guest capacity filter
      if (selectedGuests.length > 0) {
        const matchesGuestRange = selectedGuests.some(
          (range) => venue.capacity >= range.min && venue.capacity <= range.max
        );
        if (!matchesGuestRange) return false;
      }

      // Room count filter
      if (selectedRoomCounts.length > 0) {
        const matchesRoomCount = selectedRoomCounts.some(
          (range) =>
            venue.policies.roomCount >= range.min &&
            venue.policies.roomCount <= range.max
        );
        if (!matchesRoomCount) return false;
      }

      // Price per plate filter
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some(
          (range) =>
            (venue.pricePerPlateVeg >= range.min &&
              venue.pricePerPlateVeg <= range.max) ||
            (venue.pricePerPlateNonVeg >= range.min &&
              venue.pricePerPlateNonVeg <= range.max)
        );
        if (!matchesPrice) return false;
      }

      // Rental cost filter
      if (selectedRentalCost) {
        if (
          venue.rentalCost < selectedRentalCost.min ||
          venue.rentalCost > selectedRentalCost.max
        ) {
          return false;
        }
      }

      // Venue type filter 
      if (
        selectedVenueTypes.length > 0 &&
        !selectedVenueTypes.includes(venue.venueType)
      ) {
        return false;
      }

      // Space type filter
      if (selectedSpaces.length > 0) {
        const matchesSpace = selectedSpaces.some((space) =>
          venue.spaceTypes.includes(space)
        );
        if (!matchesSpace) return false;
      }

      // Rating filter
      if (selectedRating && venue.rating < selectedRating.min) {
        return false;
      }

      return true;
    });
  }, [
    selectedLocalities,
    selectedGuests,
    selectedRoomCounts,
    selectedPriceRanges,
    selectedRentalCost,
    selectedVenueTypes, 
    selectedSpaces,
    selectedRating,
  ]);

  const resetFilters = () => {
    setSelectedLocalities([]);
    setSelectedGuests([]);
    setSelectedRoomCounts([]);
    setSelectedPriceRanges([]);
    setSelectedRentalCost(null);
    setSelectedVenueTypes([]);
    setSelectedSpaces([]);
    setSelectedRating(null);
    setLocalitySearch("");
    setOpenDropdown(null);
  };

  const scrollToFilter = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      ref.current.style.backgroundColor = '#fff5f8';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.backgroundColor = '';
        }
      }, 1000);
    }
  };

  const toggleDropdown = (filterName) => {
    setOpenDropdown(openDropdown === filterName ? null : filterName);
  };

  const getActiveCount = (filterName) => {
    switch (filterName) {
      case 'locality':
        return selectedLocalities.length;
      case 'guests':
        return selectedGuests.length;
      case 'roomCount':
        return selectedRoomCounts.length;
      case 'price':
        return selectedPriceRanges.length;
      case 'rental':
        return selectedRentalCost ? 1 : 0;
      case 'venueType':
        return selectedVenueTypes.length;
      case 'space':
        return selectedSpaces.length;
      case 'rating':
        return selectedRating ? 1 : 0;
      default:
        return 0;
    }
  };

  return (
    <div className="venues-page-wrapper">
      <header className="venues-header">
        <p className="breadcrumb">Home &gt; Vendors &gt; Wedding Venues</p>
        <h1>Wedding Venues in Bhopal</h1>
        <p className="results-info">
          Showing {filteredVenues.length} results based on your current filters.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="filter-bar-container">
        <div className="filter-bar">
          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('locality') > 0 ? 'active' : ''} ${openDropdown === 'locality' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('locality');
                scrollToFilter(localityRef);
              }}
            >
              Locality {getActiveCount('locality') > 0 && `(${getActiveCount('locality')})`} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'locality' && (
              <div className="filter-dropdown-menu">
                {filteredLocalities.slice(0, 6).map((locality) => (
                  <label key={locality} className="dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedLocalities.includes(locality)}
                      onChange={() => toggleLocality(locality)}
                    />
                    <span>{locality}</span>
                  </label>
                ))}
                {filteredLocalities.length > 6 && (
                  <button className="more-link">More ▸</button>
                )}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('guests') > 0 ? 'active' : ''} ${openDropdown === 'guests' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('guests');
                scrollToFilter(guestsRef);
              }}
            >
              No. of Guests {getActiveCount('guests') > 0 && `(${getActiveCount('guests')})`} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'guests' && (
              <div className="filter-dropdown-menu">
                {guestRanges.map((range) => (
                  <label key={range.label} className="dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedGuests.some((r) => r.label === range.label)}
                      onChange={() => toggleGuestRange(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('roomCount') > 0 ? 'active' : ''} ${openDropdown === 'roomCount' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('roomCount');
                scrollToFilter(roomCountRef);
              }}
            >
              Room Count {getActiveCount('roomCount') > 0 && `(${getActiveCount('roomCount')})`} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'roomCount' && (
              <div className="filter-dropdown-menu">
                {roomCountRanges.map((range) => (
                  <label key={range.label} className="dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedRoomCounts.some((r) => r.label === range.label)}
                      onChange={() => toggleRoomCount(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('price') > 0 ? 'active' : ''} ${openDropdown === 'price' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('price');
                scrollToFilter(priceRef);
              }}
            >
              Price per plate (Rs) {getActiveCount('price') > 0 && `(${getActiveCount('price')})`} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'price' && (
              <div className="filter-dropdown-menu">
                {pricePerPlateRanges.map((range) => (
                  <label key={range.label} className="dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.some((r) => r.label === range.label)}
                      onChange={() => togglePriceRange(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('rental') > 0 ? 'active' : ''} ${openDropdown === 'rental' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('rental');
                scrollToFilter(rentalRef);
              }}
            >
              Rental Cost {getActiveCount('rental') > 0 && '(1)'} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'rental' && (
              <div className="filter-dropdown-menu">
                {rentalCostRanges.map((range) => (
                  <label key={range.label} className="dropdown-option">
                    <input
                      type="radio"
                      name="rentalCost"
                      checked={selectedRentalCost?.label === range.label}
                      onChange={() => setSelectedRentalCost(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('venueType') > 0 ? 'active' : ''} ${openDropdown === 'venueType' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('venueType');
                scrollToFilter(venueTypeRef);
              }}
            >
              Venue Type {getActiveCount('venueType') > 0 && `(${getActiveCount('venueType')})`} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'venueType' && (
              <div className="filter-dropdown-menu">
                {venueTypes.map((type) => (
                  <label key={type} className="dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedVenueTypes.includes(type)}
                      onChange={() => toggleVenueType(type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('space') > 0 ? 'active' : ''} ${openDropdown === 'space' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('space');
                scrollToFilter(spaceRef);
              }}
            >
              Space {getActiveCount('space') > 0 && `(${getActiveCount('space')})`} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'space' && (
              <div className="filter-dropdown-menu">
                {spaceTypes.map((space) => (
                  <label key={space} className="dropdown-option">
                    <input
                      type="checkbox"
                      checked={selectedSpaces.includes(space)}
                      onChange={() => toggleSpace(space)}
                    />
                    <span>{space}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-dropdown-wrapper">
            <button
              className={`filter-dropdown ${getActiveCount('rating') > 0 ? 'active' : ''} ${openDropdown === 'rating' ? 'open' : ''}`}
              onClick={() => {
                toggleDropdown('rating');
                if (!showMoreFilters) setShowMoreFilters(true);
                setTimeout(() => scrollToFilter(ratingRef), 100);
              }}
            >
              Rating {getActiveCount('rating') > 0 && '(1)'} <span className="dropdown-icon">▼</span>
            </button>
            {openDropdown === 'rating' && (
              <div className="filter-dropdown-menu">
                {ratingOptions.map((option) => (
                  <label key={option.label} className="dropdown-option">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating?.label === option.label}
                      onChange={() => setSelectedRating(option)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="venues-layout">
        {/* Filter Panel */}
        <aside className="venues-filter-panel">
            <h3>Filters</h3>

            {/* Locality Filter */}
            <div className="filter-group" ref={localityRef}>
              <p className="filter-title">Locality</p>
              <input
                type="text"
                placeholder="Search Locality"
                value={localitySearch}
                onChange={(e) => setLocalitySearch(e.target.value)}
                className="locality-search"
              />
              <div className="filter-options">
                {filteredLocalities.slice(0, 6).map((locality) => (
                  <label key={locality} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedLocalities.includes(locality)}
                      onChange={() => toggleLocality(locality)}
                    />
                    <span>{locality}</span>
                  </label>
                ))}
                {filteredLocalities.length > 6 && (
                  <button className="more-link">More ▸</button>
                )}
              </div>
            </div>

            {/* No. of Guests Filter */}
            <div className="filter-group" ref={guestsRef}>
              <p className="filter-title">No. of Guests</p>
              <div className="filter-options">
                {guestRanges.map((range) => (
                  <label key={range.label} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedGuests.some((r) => r.label === range.label)}
                      onChange={() => toggleGuestRange(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Room Count Filter */}
            <div className="filter-group" ref={roomCountRef}>
              <p className="filter-title">Room Count</p>
              <div className="filter-options">
                {roomCountRanges.map((range) => (
                  <label key={range.label} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedRoomCounts.some(
                        (r) => r.label === range.label
                      )}
                      onChange={() => toggleRoomCount(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price per plate Filter */}
            <div className="filter-group" ref={priceRef}>
              <p className="filter-title">Price per plate (Rs)</p>
              <div className="filter-options">
                {pricePerPlateRanges.map((range) => (
                  <label key={range.label} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.some(
                        (r) => r.label === range.label
                      )}
                      onChange={() => togglePriceRange(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
                <button className="more-link">More ▸</button>
              </div>
            </div>

            {/* Rental Cost Filter */}
            <div className="filter-group" ref={rentalRef}>
              <p className="filter-title">Rental Cost</p>
              <div className="filter-options">
                {rentalCostRanges.map((range) => (
                  <label key={range.label} className="filter-radio">
                    <input
                      type="radio"
                      name="rentalCost"
                      checked={selectedRentalCost?.label === range.label}
                      onChange={() => setSelectedRentalCost(range)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Venue Type Filter */}
            <div className="filter-group" ref={venueTypeRef}>
              <p className="filter-title">Venue Type</p>
              <div className="filter-options">
                {venueTypes.map((type) => (
                  <label key={type} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedVenueTypes.includes(type)}
                      onChange={() => toggleVenueType(type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
                <button className="more-link">More ▸</button>
              </div>
            </div>

            {/* Space Filter */}
            <div className="filter-group" ref={spaceRef}>
              <p className="filter-title">Space</p>
              <div className="filter-options">
                {spaceTypes.map((space) => (
                  <label key={space} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedSpaces.includes(space)}
                      onChange={() => toggleSpace(space)}
                    />
                    <span>{space}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            {showMoreFilters && (
              <div className="filter-group" ref={ratingRef}>
                <p className="filter-title">Rating</p>
                <div className="filter-options">
                  {ratingOptions.map((option) => (
                    <label key={option.label} className="filter-radio">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating?.label === option.label}
                        onChange={() => setSelectedRating(option)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <button className="reset-filter" onClick={resetFilters}>
              Reset Filters
            </button>

            {!showMoreFilters && (
              <button
                className="show-more-filters"
                onClick={() => setShowMoreFilters(true)}
              >
                Show more filters ▼
              </button>
            )}
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