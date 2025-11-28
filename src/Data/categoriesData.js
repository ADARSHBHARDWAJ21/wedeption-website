const categoriesData = [
  {
    title: "Venues",
    desc: "Banquet Halls, Marriage Garden / Lawn...",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #b6d4ff, #f9c2ec)",
    options: [
      [
        "View All Venues",
        "Marriage Garden / Lawns",
        "Small Function / Party Halls",
        "Kalyana Mandapams",
        "Wedding Farmhouses",
      ],
      [
        "Banquet Halls",
        "Wedding Resorts",
        "Destination Wedding Venues",
        "4 Star & Above Wedding Hotels",
      ],
    ],
  },
  {
    title: "Photographers",
    desc: "Photographers",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f6d9cc, #f3bfa0)",
    options: [
      [
        "View All Photographers",
        "Candid Wedding",
        "Traditional Wedding",
        "Pre Wedding Shoots",
      ],
      ["Drone Shoots", "Cinematography", "Photo Booths"],
    ],
  },
  {
    title: "Makeup",
    desc: "Bridal Makeup Artists, Family Makeup",
    image:
      "https://images.unsplash.com/photo-1508182311256-e3f9a760b3db?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f5c7d4, #ef7da2)",
    options: [
      [
        "View All Makeup",
        "Bridal Makeup Artists",
        "Family Makeup",
        "HD Makeup",
      ],
      ["Airbrush Makeup", "Groom Makeup", "Hair Stylists"],
    ],
  },
  {
    title: "Planning & Decor",
    desc: "Wedding Planners, Decorators",
    image:
      "https://images.unsplash.com/photo-1490150028299-bf57be394ed5?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f9d5c6, #f69b7b)",
    options: [
      [
        "View All Planners",
        "Full Service Planners",
        "Day Of Coordinators",
      ],
      ["Decorators", "Theme Stylists", "Destination Planning"],
    ],
  },
  {
    title: "Virtual Planning",
    desc: "Virtual planning",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #eec5d8, #f8e0ef)",
    options: [
      [
        "View All Virtual Planning",
        "Budget Tracker",
        "Digital Guestlist",
      ],
      ["Vendor Discovery", "Online Consultations"],
    ],
  },
  {
    title: "Mehndi",
    desc: "Mehendi Artists",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #e3c4a8, #f0d7bc)",
    options: [
      [
        "View All Mehndi",
        "Bridal Mehndi",
        "Family Mehndi",
        "Arabic Mehndi",
      ],
      ["Rajasthani Mehndi", "Bombay Style", "Customization"],
    ],
  },
  {
    title: "Music & Dance",
    desc: "DJs, Sangeet Choreographer, Wedding...",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f5c1a1, #c57c5a)",
    options: [
      [
        "View All Music & Dance",
        "Wedding DJs",
        "Sangeet Choreographers",
      ],
      ["Live Bands", "Folk Performers", "MCs"],
    ],
  },
  {
    title: "Invites & Gifts",
    desc: "Invitations, Favors, Trousseau Packers...",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f7d2c6, #f5b18f)",
    options: [
      [
        "View All Invites",
        "Digital Invites",
        "Boxed Invites",
        "Gift Hampers",
      ],
      ["Edible Gifts", "Trousseau Packers", "Return Gifts"],
    ],
  },
  {
    title: "Food",
    desc: "Catering Services, Cake, Chaat & Food...",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f6c9e0, #f7a399)",
    options: [
      ["View All Food", "Wedding Caterers", "Live Counters", "Desserts"],
      ["Cake & Bakery", "Food Trucks", "Regional Cuisine"],
    ],
  },
  {
    title: "Pre Wedding Shoot",
    desc: "Pre Wedding Photographers",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #d7defc, #b7c0ff)",
    options: [
      [
        "View All Pre Wedding",
        "Destination Shoots",
        "Studio Concepts",
      ],
      ["Underwater Shoots", "Concept Shoots"],
    ],
  },
  {
    title: "Bridal Wear",
    desc: "Bridal Lehengas, Kanjeevaram / Silk Sa...",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #e8dccd, #d1c2ae)",
    options: [
      [
        "View All Bridal Wear",
        "Bridal Lehengas",
        "Pre Wedding Outfits",
      ],
      ["Silk Sarees", "Cocktail Gowns", "Custom Designers"],
    ],
  },
  {
    title: "Groom Wear",
    desc: "Sherwani, Wedding Suits / Tuxes, Sher...",
    image:
      "https://images.unsplash.com/photo-1487412720507-7da8d28bcbf1?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #d7f3f2, #b8d8dc)",
    options: [
      ["View All Groom Wear", "Sherwanis", "Indo-Westerns"],
      ["Tuxedos", "Jodhpuri Suits", "Accessories"],
    ],
  },
  {
    title: "Jewellery & Accessories",
    desc: "Jewellery, Flower Jewellery, Bridal Jew...",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #f3c3a8, #c75f3c)",
    options: [
      [
        "View All Jewellery",
        "Bridal Sets",
        "Temple Jewellery",
        "Polki & Kundan",
      ],
      ["Flower Jewellery", "Headpieces", "Bangles"],
    ],
  },
  {
    title: "Pandits",
    desc: "Wedding Pandits",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #e8c59a, #c1783a)",
    options: [
      [
        "View All Pandits",
        "North Indian Pandits",
        "South Indian Purohits",
      ],
      ["Destination Rituals", "Online Puja Services"],
    ],
  },
  {
    title: "Bridal Grooming",
    desc: "Beauty and Wellness",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=60",
    gradient: "linear-gradient(135deg, #d8dcff, #b2b8ff)",
    options: [
      [
        "View All Grooming",
        "Skincare Clinics",
        "Nutritionists",
        "Spa & Wellness",
      ],
      ["Hair Treatments", "Dental Care", "Fitness Studios"],
    ],
  },
];

export default categoriesData;