const venues = [
  {
    id: 1,
    name: "Court Greens",
    location: "Laxmi Nagar, Bhopal",
    pricePerPlateVeg: 699,
    pricePerPlateNonVeg: 799,
    capacity: 350,
    rating: 4.9,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=60",
    functions: ["Wedding", "Engagement", "Reception"],
    overview:
      "Court Greens offers a scenic lawn setup with string lights, ideal for intimate weddings and outdoor receptions.",
    contact: {
      person: "Ms. Reena Sharma",
      phone: "+91 98765 43210",
      email: "court.greens@example.com",
      address: "Laxmi Nagar, Bhopal, Madhya Pradesh 462001",
      since: "2015",
    },
    areas: [
      { name: "Lawn", seating: 300, floating: 450 },
      { name: "Banquet Hall", seating: 200, floating: 350 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60",
    ],
    amenities: [
      "In-house catering",
      "Bridal room",
      "Parking",
      "Outside alcohol permitted",
      "DJ from panel",
    ],
    policies: {
      roomCount: 20,
      decorPolicy: "Decorators from panel",
      cateringPolicy: "In-house only, outside not allowed",
      alcoholPolicy: "Outside alcohol allowed, outside DJ not allowed",
      paymentPolicy: "30% advance to block the date",
      cancellationPolicy: "Advance not refundable",
    },
    reviewsData: [
      {
        id: "r1",
        author: "Ritika Solanki",
        rating: 5,
        date: "2 months ago",
        comment:
          "Beautiful location with amazing hospitality. The lawns looked gorgeous at night with their lighting setup.",
        recommendedFor: ["On-time Service", "Beautiful Banquet"],
      },
      {
        id: "r2",
        author: "Vikram Gupta",
        rating: 4.5,
        date: "5 months ago",
        comment:
          "Food quality was great and staff was helpful. Sound restriction post 10pm though, so plan accordingly.",
        recommendedFor: ["Great Food"],
      },
    ],
  },
  {
    id: 2,
    name: "Giovanni Village",
    location: "Shahpura, Bhopal",
    pricePerPlateVeg: 1150,
    pricePerPlateNonVeg: 1350,
    capacity: 500,
    rating: 5.0,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=60",
    functions: ["Wedding", "Corporate", "Anniversary"],
    overview:
      "A destination-style property with multiple lawns, luxury rooms and poolside areas perfect for multi-day celebrations.",
    contact: {
      person: "Mr. Nikhil Rawat",
      phone: "+91 98234 12345",
      email: "giovanni.village@example.com",
      address: "Shahpura, Bhopal, Madhya Pradesh 462039",
      since: "2012",
    },
    areas: [
      { name: "Royal Lawn", seating: 400, floating: 600 },
      { name: "Poolside", seating: 150, floating: 250 },
      { name: "Indoor Ballroom", seating: 250, floating: 400 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1440907247904-1f171a5b4745?auto=format&fit=crop&w=500&q=60",
    ],
    amenities: [
      "66 Rooms",
      "Poolside",
      "Multiple event spaces",
      "In-house catering",
      "Outside alcohol permitted",
      "Parking valet",
    ],
    policies: {
      roomCount: 66,
      decorPolicy: "Outside decorators allowed with royalty",
      cateringPolicy: "In-house catering mandatory",
      alcoholPolicy: "Outside alcohol allowed, corkage applicable",
      paymentPolicy: "40% advance, balance before event",
      cancellationPolicy:
        "Advance adjustable within 6 months, otherwise non-refundable",
    },
    reviewsData: [
      {
        id: "r3",
        author: "Ananya Trivedi",
        rating: 5,
        date: "1 month ago",
        comment:
          "We hosted a two-day destination wedding and everything from rooms to food was impeccable.",
        recommendedFor: ["Amazing Food", "Beautiful Banquet"],
      },
      {
        id: "r4",
        author: "Rahul Bhadoria",
        rating: 4.5,
        date: "3 months ago",
        comment:
          "Huge property with plenty of photo-ops. Slightly far from city center but worth it.",
        recommendedFor: ["On-time Service"],
      },
    ],
  },
  {
    id: 3,
    name: "The Maple Hotel",
    location: "Arera Colony, Bhopal",
    pricePerPlateVeg: 1599,
    pricePerPlateNonVeg: 1799,
    capacity: 250,
    rating: 4.8,
    reviews: 39,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=60",
    functions: ["Wedding", "Birthday", "Corporate"],
    overview:
      "Chic boutique hotel with contemporary interiors, ideal for cocktail parties and indoor ceremonies.",
    contact: {
      person: "Ms. Ila Kapoor",
      phone: "+91 98111 77889",
      email: "eventdesk@maplehotel.com",
      address: "Arera Colony, Bhopal, Madhya Pradesh 462016",
      since: "2018",
    },
    areas: [
      { name: "Maple Ballroom", seating: 180, floating: 280 },
      { name: "Rooftop Terrace", seating: 120, floating: 200 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60",
    ],
    amenities: [
      "Bridal Suite",
      "City view terrace",
      "Sound system",
      "In-house decor team",
    ],
    policies: {
      roomCount: 32,
      decorPolicy: "Decor by in-house team only",
      cateringPolicy: "In-house catering mandatory",
      alcoholPolicy: "In-house bar available, outside not permitted",
      paymentPolicy: "50% advance to reserve",
      cancellationPolicy:
        "Cancellation within 30 days of event forfeits full advance",
    },
    reviewsData: [
      {
        id: "r5",
        author: "Prerna Vyas",
        rating: 4.8,
        date: "4 months ago",
        comment:
          "Loved the modern interiors and quick service. Perfect for our cocktail night.",
        recommendedFor: ["Amazing Food", "Beautiful Banquet"],
      },
    ],
  },
  {
    id: 4,
    name: "Hotel Dishri Inn",
    location: "TT Nagar, Bhopal",
    pricePerPlateVeg: 999,
    pricePerPlateNonVeg: 1199,
    capacity: 150,
    rating: 4.6,
    reviews: 21,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=60",
    functions: ["Birthday", "Anniversary", "Corporate"],
    overview:
      "Compact indoor spaces for intimate gatherings with customizable menus and friendly staff.",
    contact: {
      person: "Mr. Rohit Soni",
      phone: "+91 98989 12121",
      email: "dishriinn.events@example.com",
      address: "TT Nagar, Bhopal, Madhya Pradesh 462003",
      since: "2010",
    },
    areas: [
      { name: "Banquet Hall", seating: 120, floating: 180 },
      { name: "Conference Hall", seating: 80, floating: 120 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=60",
    ],
    amenities: ["In-house catering", "Audio-visual setup", "Parking"],
    policies: {
      roomCount: 18,
      decorPolicy: "Outside decorators allowed",
      cateringPolicy: "In-house catering mandatory",
      alcoholPolicy: "Outside alcohol allowed, corkage applicable",
      paymentPolicy: "25% advance",
      cancellationPolicy: "Advance adjustable on weekday bookings",
    },
    reviewsData: [
      {
        id: "r6",
        author: "Sanika Patel",
        rating: 4.6,
        date: "6 months ago",
        comment:
          "Budget friendly and clean halls. Works great for birthdays or roka functions.",
        recommendedFor: ["Great Food"],
      },
    ],
  },
  {
    id: 5,
    name: "Vedanta Palace & Resort",
    location: "Kolar Road, Bhopal",
    pricePerPlateVeg: 1399,
    pricePerPlateNonVeg: 1599,
    capacity: 800,
    rating: 4.7,
    reviews: 48,
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=700&q=60",
    functions: ["Wedding", "Reception"],
    overview:
      "Grand palace-style resort with sprawling lawns, perfect for big fat Indian weddings.",
    contact: {
      person: "Ms. Harsha Deshmukh",
      phone: "+91 99770 11223",
      email: "sales@vedantapalace.com",
      address: "Kolar Road, Bhopal, Madhya Pradesh 462042",
      since: "2009",
    },
    areas: [
      { name: "Royal Courtyard", seating: 600, floating: 1000 },
      { name: "Crystal Ballroom", seating: 350, floating: 500 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529429617124-aee711a70412?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60",
    ],
    amenities: [
      "Luxury suites",
      "Pool",
      "In-house decor",
      "Multiple kitchens",
      "Valet parking",
    ],
    policies: {
      roomCount: 42,
      decorPolicy: "In-house decor mandatory",
      cateringPolicy: "In-house catering mandatory",
      alcoholPolicy: "Outside alcohol restricted",
      paymentPolicy: "50% advance, balance after event",
      cancellationPolicy: "Advance transferable for same-year dates",
    },
    reviewsData: [
      {
        id: "r7",
        author: "Devyani Kulkarni",
        rating: 4.7,
        date: "2 months ago",
        comment:
          "Venue is huge and opulent, the night lighting made our reception magical.",
        recommendedFor: ["Amazing Food", "On-time Service"],
      },
    ],
  },
  {
    id: 6,
    name: "Landmark Gardens",
    location: "MP Nagar, Bhopal",
    pricePerPlateVeg: 899,
    pricePerPlateNonVeg: 1099,
    capacity: 300,
    rating: 4.5,
    reviews: 32,
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=700&q=60",
    functions: ["Wedding", "Birthday", "Anniversary"],
    overview:
      "Garden venue with indoor backup, string lights and rustic mandap options.",
    contact: {
      person: "Mr. Sameer Sheikh",
      phone: "+91 97979 55544",
      email: "landmark.gardens@example.com",
      address: "MP Nagar Zone-II, Bhopal, Madhya Pradesh 462011",
      since: "2014",
    },
    areas: [
      { name: "Central Lawn", seating: 220, floating: 350 },
      { name: "Indoor Hall", seating: 150, floating: 250 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=60",
    ],
    amenities: ["Parking", "Generator backup", "In-house catering"],
    policies: {
      roomCount: 12,
      decorPolicy: "Outside decorators allowed",
      cateringPolicy: "In-house catering mandatory",
      alcoholPolicy: "Outside alcohol allowed with license",
      paymentPolicy: "35% advance",
      cancellationPolicy: "Advance refundable up to 60 days before event",
    },
    reviewsData: [
      {
        id: "r8",
        author: "Megha Jain",
        rating: 4.5,
        date: "8 months ago",
        comment:
          "Great mid-budget venue, loved the lawn ambience and flexible management.",
        recommendedFor: ["Great Food"],
      },
    ],
  },
];

export default venues;

