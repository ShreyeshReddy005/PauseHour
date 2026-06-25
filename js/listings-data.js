/**
 * Pause Hour Listings Database - World Class Curated Edition (v3)
 * High-fidelity listings containing actual transit and daypass locations in India.
 * Fully optimized, highly descriptive, and styled without star rating references.
 */
const initialListings = [
  {
    id: "lobby-1",
    title: "Lemon Tree Premier Transit Lounge",
    category: "lobby",
    rating: 4.88,
    reviewsCount: 142,
    city: "Delhi NCR",
    location: "Aerocity, near IGI T3 Terminal",
    lat: 28.5562,
    lng: 77.1218,
    host: "Lemon Tree Hotels Group",
    hostAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&fit=crop&q=80",
    price: 650, // Price in INR per slot
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&fit=crop&q=80"
    ],
    description: "The ultimate solution for long transit gaps at Delhi IGI. Relax in a premium, quiet hotel lobby specifically designed for transiting travellers. Catch up on work in dedicated high-speed Wi-Fi work pods, securely store your heavy luggage, take a refreshing hot shower, and enjoy a select snack bar. Perfect for families and business professionals looking for a premium pause between flights.",
    amenities: [
      { name: "Secure Luggage Storage", icon: "briefcase" },
      { name: "Hot Showers & Towels", icon: "shower-head" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Ergonomic Work Desks", icon: "laptop" },
      { name: "Snack & Coffee Bar", icon: "coffee" },
      { name: "Board & Console Games", icon: "gamepad-2" },
      { name: "AC Lounge Seating", icon: "sofa" },
      { name: "Flight Status Display", icon: "plane" }
    ],
    transitTags: ["Baggage Drop Vault", "Hot Showers", "Dedicated Soundproof Work Pods"],
    targetAudience: "Transit Travellers & Business Commuters",
    ratingBreakdown: { cleanliness: 4.9, service: 4.8, value: 4.8 }
  },
  {
    id: "lobby-2",
    title: "Plaza Premium IGI T3 Transit Lounge",
    category: "lobby",
    rating: 4.91,
    reviewsCount: 324,
    city: "Delhi NCR",
    location: "IGI Airport Terminal 3, International Departures",
    lat: 28.5570,
    lng: 77.1010,
    host: "Plaza Premium Services",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop&q=80",
    price: 1200,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&fit=crop&q=80"
    ],
    description: "Located right inside Terminal 3 of Delhi International Airport, this executive transit lounge offers travelers cozy private sleeping capsules, gourmet buffet dining, high-speed corporate workspaces, and clean private hot shower cabins. The absolute benchmark for luxury airport layovers.",
    amenities: [
      { name: "Baggage Drop Vault", icon: "briefcase" },
      { name: "Premium Hot Showers", icon: "shower-head" },
      { name: "Gourmet Buffet Dining", icon: "utensils" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Soundproof Cabins", icon: "laptop" },
      { name: "Interactive Games Area", icon: "gamepad-2" }
    ],
    transitTags: ["Terminal 3 Inside", "Private Recliners", "Hot Showers Included"],
    targetAudience: "International Transit Travellers",
    ratingBreakdown: { cleanliness: 4.9, service: 4.9, value: 4.9 }
  },
  {
    id: "lobby-3",
    title: "Keys Select Transit Lounge & Workspace",
    category: "lobby",
    rating: 4.65,
    reviewsCount: 98,
    city: "Mumbai",
    location: "Andheri East, 10 mins from Terminal 1",
    lat: 19.1136,
    lng: 72.8697,
    host: "Keys Select Hotels Group",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop&q=80",
    price: 480,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&fit=crop&q=80"
    ],
    description: "A comfortable, fully air-conditioned smart lobby for travelers with late evening flights or long layovers. It features modular working cabins, locker rooms, clean private freshen-up rooms, and board games like Foosball and Carrom to keep you relaxed. Drop your bags at our secure reception and head out to see Mumbai bag-free, or rest in our cozy lounge.",
    amenities: [
      { name: "Baggage Drop Vault", icon: "briefcase" },
      { name: "Freshen Up Rooms", icon: "bath" },
      { name: "Fast Wi-Fi", icon: "wifi" },
      { name: "Foosball & Board Games", icon: "dribbble" },
      { name: "Charging Stations", icon: "battery-charging" },
      { name: "Complimentary Tea/Coffee", icon: "coffee" },
      { name: "Comfortable Couches", icon: "sofa" }
    ],
    transitTags: ["Baggage Vault", "Cozy Lounge", "Airport Shuttle Available"],
    targetAudience: "Transit Travellers & Families",
    ratingBreakdown: { cleanliness: 4.5, service: 4.7, value: 4.6 }
  },
  {
    id: "lobby-4",
    title: "Adani Transit Executive Lounge",
    category: "lobby",
    rating: 4.94,
    reviewsCount: 412,
    city: "Mumbai",
    location: "Chhatrapati Shivaji Terminal 2 departures",
    lat: 19.0974,
    lng: 72.8750,
    host: "Adani Lounge Services",
    hostAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&fit=crop&q=80",
    price: 1350,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&fit=crop&q=80"
    ],
    description: "Located at the departures tier of Mumbai T2, this ultra-luxury lounge offers transit passengers premium recliners, gourmet cuisine curated by chefs, dynamic flight information screens, private luggage lockers, and deluxe shower compartments. Enjoy top-tier comfort while waiting for your connection.",
    amenities: [
      { name: "Secure Luggage Storage", icon: "briefcase" },
      { name: "Luxury Shower Spa", icon: "shower-head" },
      { name: "Chef-Curated Buffet", icon: "utensils" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Executive Work Cabins", icon: "laptop" },
      { name: "Complimentary Cocktail Bar", icon: "glass-water" }
    ],
    transitTags: ["T2 Departures Inside", "Executive Recliners", "Deluxe Shower Spa"],
    targetAudience: "First Class & Corporate Transit",
    ratingBreakdown: { cleanliness: 5.0, service: 4.9, value: 4.8 }
  },
  {
    id: "lobby-5",
    title: "Ginger Business Lobby Lounge",
    category: "lobby",
    rating: 4.58,
    reviewsCount: 81,
    city: "Pune",
    location: "Hinjewadi Phase 1 IT Park",
    lat: 18.5913,
    lng: 73.7389,
    host: "Ginger Partner Lobbies",
    hostAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&fit=crop&q=80",
    price: 399,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&fit=crop&q=80"
    ],
    description: "Designed for business consultants and developers in Pune's IT corridor. If you have checked out of your hotel but have a late meeting, drop your heavy luggage, take a desk, connect to high-speed internet, and join video calls in sound-proof pods. Shower facilities are available to freshen up before your journey.",
    amenities: [
      { name: "Secure Luggage Lockers", icon: "lock" },
      { name: "Sound-Proof Call Cabins", icon: "mic" },
      { name: "High-Speed Wi-Fi", icon: "wifi" },
      { name: "Shower Cabins", icon: "shower-head" },
      { name: "Printer/Scanner Access", icon: "printer" },
      { name: "Unlimited Premium Coffee", icon: "coffee" }
    ],
    transitTags: ["Sound-Proof Call Pods", "Luggage Storage", "Shower Facility"],
    targetAudience: "Tech Professionals & Business Consultants",
    ratingBreakdown: { cleanliness: 4.6, service: 4.5, value: 4.6 }
  },
  {
    id: "lobby-6",
    title: "Trident Nariman Point Transit Suite",
    category: "lobby",
    rating: 4.92,
    reviewsCount: 164,
    city: "Mumbai",
    location: "Nariman Point, South Mumbai",
    lat: 18.9272,
    lng: 72.8205,
    host: "Trident Oberoi Resorts",
    hostAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&fit=crop&q=80",
    price: 950,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1000&fit=crop&q=80"
    ],
    description: "Located at Mumbai's iconic Nariman Point, this executive transit suite offers travellers panoramic sea views, high-speed business centers, dedicated soundproof conference pods, personal luggage deposits, and a luxurious marble shower area. The ideal marine-drive retreat for corporate executives in between meetings or transit.",
    amenities: [
      { name: "Panoramic Ocean Seating", icon: "waves" },
      { name: "Sound-Proof Call Cabins", icon: "mic" },
      { name: "Valet Baggage Vault", icon: "briefcase" },
      { name: "Hot Marble Showers", icon: "shower-head" },
      { name: "Rooftop Solarium Lounge", icon: "sun" },
      { name: "Unlimited Premium Coffee", icon: "coffee" }
    ],
    transitTags: ["Executive Transit Lounge", "Sea-View Desks", "Valet Baggage Storage"],
    targetAudience: "Business Executives & Solo Travellers",
    ratingBreakdown: { cleanliness: 4.9, service: 4.9, value: 4.9 }
  },
  {
    id: "luxury-1",
    title: "Taj Lands End Infinity Pool & Wellness Club",
    category: "luxury",
    rating: 4.96,
    reviewsCount: 312,
    city: "Mumbai",
    location: "Bandstand, Bandra West",
    lat: 19.0435,
    lng: 72.8193,
    host: "Taj Wellness Group",
    hostAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&fit=crop&q=80",
    price: 3200,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&fit=crop&q=80"
    ],
    description: "Experience absolute luxury with a daypass to Taj Lands End's wellness facilities. Swim in the spectacular ocean-facing infinity pool overlooking the majestic Bandra-Worli Sea Link, relax in thermal sauna and steam rooms, and make full use of the premium cardiovascular gymnasium. Complimented by spa therapy discounts and poolside service.",
    amenities: [
      { name: "Sea-View Infinity Pool", icon: "waves" },
      { name: "Ultra-Luxury Spa Access", icon: "leaf" },
      { name: "World-Class Fitness Center", icon: "dumbbell" },
      { name: "Thermal Steam & Sauna", icon: "flame" },
      { name: "Poolside Deck & Private Cabanas", icon: "sun" },
      { name: "Valet Parking & Lockers", icon: "car" },
      { name: "Gourmet Dining Credits", icon: "utensils" }
    ],
    transitTags: ["Sea Link Views", "Infinity Pool Daypass", "Thermal Spa Included"],
    targetAudience: "Locals & Elite Travellers",
    ratingBreakdown: { cleanliness: 5.0, service: 4.9, value: 4.8 }
  },
  {
    id: "luxury-2",
    title: "The Leela Palace Royal Spa & Heated Pool",
    category: "luxury",
    rating: 4.94,
    reviewsCount: 215,
    city: "Bengaluru",
    location: "Old Airport Road, HAL",
    lat: 12.9606,
    lng: 77.6484,
    host: "The Leela Palace Group",
    hostAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&fit=crop&q=80",
    price: 2800,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80"
    ],
    description: "Spend a magical day inside the lush, palace-themed gardens of The Leela Bengaluru. Dip into our beautifully temperature-controlled outdoor swimming pool, melt away stress in our Ayurvedic spa lounges, and complete your fitness goals in our luxury gymnasium equipped with personal trainer support. Perfect for a premium city retreat.",
    amenities: [
      { name: "Heated Swimming Pool", icon: "thermometer" },
      { name: "Ayurvedic Treatment Rooms", icon: "sparkles" },
      { name: "High-End Cardio & Weights Gym", icon: "dumbbell" },
      { name: "Luxury Dressing Rooms & Showers", icon: "bath" },
      { name: "Lush Palace Gardens Seating", icon: "trees" },
      { name: "Complimentary Healthy Smoothies", icon: "glass-water" }
    ],
    transitTags: ["Heated Palace Pool", "Ayurvedic Spa Lounges", "Personal Trainer Support"],
    targetAudience: "Luxury Seekers & Locals",
    ratingBreakdown: { cleanliness: 4.9, service: 5.0, value: 4.7 }
  },
  {
    id: "luxury-3",
    title: "Grand Hyatt Oceanfront Pool & Cabanas",
    category: "luxury",
    rating: 4.88,
    reviewsCount: 176,
    city: "Goa",
    location: "Bambolim, North Goa",
    lat: 15.4578,
    lng: 73.8564,
    host: "Grand Hyatt Goa Resort",
    hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&q=80",
    price: 3500,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&fit=crop&q=80"
    ],
    description: "The ultimate day retreat in Goa. Lay in our gorgeous, ocean-facing pool cabanas with a breathtaking backdrop of Bambolim Bay. This daypass covers full access to our massive outdoor freeform pool, our indoor 25-meter lap pool, spa steam room, locker vault, and a dining voucher of INR 1000 redeemable at the poolside restaurant.",
    amenities: [
      { name: "Ocean-Facing Freeform Pool", icon: "waves" },
      { name: "25-Meter Indoor Lap Pool", icon: "activity" },
      { name: "INR 1000 Dining Voucher Included", icon: "ticket" },
      { name: "Private Poolside Cabana", icon: "home" },
      { name: "Luxury Steam Room & Lockers", icon: "flame" },
      { name: "Private Beach Walk Access", icon: "sunset" }
    ],
    transitTags: ["Oceanfront Pool", "INR 1000 Food Credit", "Freeform Outdoor Pool"],
    targetAudience: "Travelers in Transit & Locals",
    ratingBreakdown: { cleanliness: 4.9, service: 4.8, value: 4.9 }
  },
  {
    id: "luxury-4",
    title: "ITC Kohenur Luxury Pool & Spa",
    category: "luxury",
    rating: 4.93,
    reviewsCount: 182,
    city: "Hyderabad",
    location: "Gachibowli Financial District",
    lat: 17.4243,
    lng: 78.3489,
    host: "ITC Kohenur Wellness Club",
    hostAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80",
    price: 2900,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&fit=crop&q=80"
    ],
    description: "Immerse yourself in high-end rejuvenation at Hyderabad's premier luxury tech hotel. A pass to ITC Kohenur grants you premium day-access to a gorgeous temperature-controlled lap pool, luxury Hydrotherapy wellness spa facilities, state-of-the-art weights fitness hub, and quiet business lounges. Highly appropriate for IT professionals and travelers during transit gaps.",
    amenities: [
      { name: "Hydrotherapy Spa Jets", icon: "droplets" },
      { name: "Temperature Controlled Pool", icon: "thermometer" },
      { name: "Elite Weights Gym", icon: "dumbbell" },
      { name: "Quiet Business Lounges", icon: "sofa" },
      { name: "Complimentary Healthy Smoothies", icon: "glass-water" },
      { name: "Secure Luggage Storage", icon: "lock" }
    ],
    transitTags: ["Hydrotherapy Spas", "Heated Pool Access", "Financial District Hub"],
    targetAudience: "Business Execs & Tech Professionals",
    ratingBreakdown: { cleanliness: 4.9, service: 4.9, value: 4.9 }
  },
  {
    id: "luxury-5",
    title: "The Lodhi Wellness Spa & Plunge Pool",
    category: "luxury",
    rating: 4.97,
    reviewsCount: 194,
    city: "Delhi NCR",
    location: "Lodhi Road, Central Delhi",
    lat: 28.5925,
    lng: 77.2341,
    host: "The Lodhi Management Group",
    hostAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&fit=crop&q=80",
    price: 3600,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&fit=crop&q=80"
    ],
    description: "Enjoy a day in central New Delhi inside the breathtaking wellness gardens of The Lodhi. This exclusive pass grants complete access to a majestic outdoor lap pool, heated deep plunge pools, a state-of-the-art fitness gymnasium, Turkish hammams, and private tranquil spa lounges. Pure world class luxury.",
    amenities: [
      { name: "Heated Plunge Pools", icon: "thermometer" },
      { name: "Turkish Hamman Steam", icon: "flame" },
      { name: "Advanced Cardio Gym", icon: "dumbbell" },
      { name: "Private Tranquil Spa Lounges", icon: "leaf" },
      { name: "Complimentary Healthy Smoothies", icon: "glass-water" }
    ],
    transitTags: ["Lodhi Road Luxury", "Heated Plunge Pools", "Turkish Hammams"],
    targetAudience: "Luxury Seekers & Locals",
    ratingBreakdown: { cleanliness: 5.0, service: 5.0, value: 4.8 }
  },
  {
    id: "luxury-6",
    title: "The Roseate Aheli Spa & Heated Pool",
    category: "luxury",
    rating: 4.98,
    reviewsCount: 284,
    city: "Delhi NCR",
    location: "Samalka, Aerocity NH8",
    lat: 28.5300,
    lng: 77.1150,
    host: "Roseate Resorts Group",
    hostAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&fit=crop&q=80",
    price: 4200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80"
    ],
    description: "Famous for its stunning architectural water bodies and lush green gardens, The Roseate is Delhi's premium transit oasis. This exclusive daypass covers full access to the open-air heated lap pool, the highly acclaimed Aheli Wellness Spa steam suite, dynamic fitness hub, and lakeside cabanas. Breathtakingly premium layover lounge.",
    amenities: [
      { name: "Lakeside Heated Pool", icon: "waves" },
      { name: "Aheli Luxury Spa", icon: "leaf" },
      { name: "High-End Cardio Gym", icon: "dumbbell" },
      { name: "Tranquility Garden Decks", icon: "trees" },
      { name: "Premium Changing Rooms", icon: "bath" }
    ],
    transitTags: ["Aerocity Green Oasis", "Aheli Wellness Spa", "Breathtaking Resort Lakes"],
    targetAudience: "Elite Layover Travelers & Locals",
    ratingBreakdown: { cleanliness: 5.0, service: 5.0, value: 4.9 }
  },
  {
    id: "society-1",
    title: "Prestige Lakeside Habitat Clubhouse",
    category: "society",
    rating: 4.78,
    reviewsCount: 114,
    city: "Bengaluru",
    location: "Varthur, Near Outer Ring Road",
    lat: 12.9426,
    lng: 77.7458,
    host: "Prestige Society Committee",
    hostAvatar: "https://images.unsplash.com/photo-1579038773867-044c48829161?w=150&fit=crop&q=80",
    price: 350,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&fit=crop&q=80"
    ],
    description: "Enjoy exclusive, affordable access to one of Bengaluru's largest premium residential clubhouses. This pass unlocks access to the high-tech community gym, full-size swimming pools, elite clay tennis courts, badminton arena, and a quiet, air-conditioned community library with high-speed Wi-Fi, perfect for remote workers seeking a change of scenery.",
    amenities: [
      { name: "Olympic Swimming Pool", icon: "waves" },
      { name: "Premium Cardio & Heavy Gym", icon: "dumbbell" },
      { name: "Clay Tennis Courts", icon: "sparkles" },
      { name: "Indoor Badminton Arena", icon: "activity" },
      { name: "Quiet Library & Coworking", icon: "laptop" },
      { name: "Kids' Gaming Hub", icon: "gamepad-2" },
      { name: "Secure Parking", icon: "car" }
    ],
    transitTags: ["Olympic Swimming Pool", "Clay Tennis Courts", "Lush Coworking Library"],
    targetAudience: "Locals, Freelancers & Sports Enthusiasts",
    ratingBreakdown: { cleanliness: 4.8, service: 4.6, value: 4.9 }
  },
  {
    id: "society-2",
    title: "Hiranandani Gardens Club Meadows",
    category: "society",
    rating: 4.74,
    reviewsCount: 89,
    city: "Mumbai",
    location: "Powai, Hiranandani",
    lat: 19.1176,
    lng: 72.9061,
    host: "Hiranandani Association",
    hostAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&fit=crop&q=80",
    price: 450,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&fit=crop&q=80"
    ],
    description: "Step into Powai's European-themed luxury lifestyle. The Hiranandani Club Meadows pass grants you premium local access to a semi-covered lap pool, top-of-the-line gym machinery, professional wooden squash courts, and a charming reading cafe. Surrounded by serene, European-style neoclassical structures, this is an excellent choice for a productive yet relaxed day.",
    amenities: [
      { name: "Semi-Covered Pool", icon: "waves" },
      { name: "Top-Tier Fitness Gym", icon: "dumbbell" },
      { name: "Wooden Squash Courts", icon: "activity" },
      { name: "Library Lounge & Cafe", icon: "coffee" },
      { name: "Steam Room & Lockers", icon: "flame" }
    ],
    transitTags: ["European Powai Vibe", "Squash Courts", "Charming Library Lounge"],
    targetAudience: "Locals & Powai Professionals",
    ratingBreakdown: { cleanliness: 4.8, service: 4.6, value: 4.8 }
  },
  {
    id: "society-3",
    title: "DLF The Camellias Sports Clubhouse",
    category: "society",
    rating: 4.92,
    reviewsCount: 76,
    city: "Delhi NCR",
    location: "Golf Course Road, Gurugram",
    lat: 28.4682,
    lng: 77.0945,
    host: "DLF Golf Estates Committee",
    hostAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&fit=crop&q=80",
    price: 900,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&fit=crop&q=80"
    ],
    description: "Get a highly rare guest-pass into Gurugram's most prestigious luxury residential community. Indulge in an incredible wellness experience including a massive, resort-style infinity pool, a professional gym with elite cardio and strength gear, turf-court tennis, a luxurious virtual golf simulator lounge, and dynamic steam/jacuzzi spas.",
    amenities: [
      { name: "Resort-Style Infinity Pool", icon: "waves" },
      { name: "Elite Fitness Gym", icon: "dumbbell" },
      { name: "Turf Tennis Courts", icon: "sparkles" },
      { name: "Virtual Golf Simulator", icon: "target" },
      { name: "Premium Steam & Jacuzzi", icon: "shower-head" },
      { name: "Secure Under-Ground Parking", icon: "car" }
    ],
    transitTags: ["Elite Camellias Access", "Virtual Golf", "Jacuzzi & Spas"],
    targetAudience: "Premium Locals & Golf Lovers",
    ratingBreakdown: { cleanliness: 5.0, service: 4.9, value: 4.7 }
  },
  {
    id: "society-4",
    title: "Amanora Sweet Water Villas Club",
    category: "society",
    rating: 4.91,
    reviewsCount: 104,
    city: "Pune",
    location: "Amanora Park Town, Hadapsar",
    lat: 18.5200,
    lng: 73.9350,
    host: "Amanora Society Partners",
    hostAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&fit=crop&q=80",
    price: 650,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80"
    ],
    description: "Experience absolute residential elite privilege with entry to Pune's exclusive Sweet Water Villas Club. Features a stunning landscaped lagoon pool, clay tennis courts, wooden squash courts, private guest libraries, and high-speed executive coworking chambers. A majestic oasis surrounded by gorgeous resort flora.",
    amenities: [
      { name: "Lagoon Swimming Pool", icon: "waves" },
      { name: "Wooden Squash Courts", icon: "activity" },
      { name: "Clay Tennis Courts", icon: "sparkles" },
      { name: "Executive Coworking Suite", icon: "laptop" },
      { name: "Deluxe Jacuzzi & Steam", icon: "shower-head" }
    ],
    transitTags: ["Sweet Water Lagoon", "Private Squash Courts", "Executive Coworking library"],
    targetAudience: "Locals & Remote Tech Professionals",
    ratingBreakdown: { cleanliness: 4.9, service: 4.9, value: 4.8 }
  },
  {
    id: "society-5",
    title: "Sobha Elanza Recreational Club",
    category: "society",
    rating: 4.68,
    reviewsCount: 74,
    city: "Pune",
    location: "Kothrud, West Pune",
    lat: 18.5074,
    lng: 73.8077,
    host: "Sobha Elanza Committee",
    hostAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&fit=crop&q=80",
    price: 280,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80"
    ],
    description: "Enjoy high-end local access to Sobha Elanza's exclusive sports and recreation club. Located in Kothrud, this premium pass covers access to a pristine swimming pool, cardiovascular gym, badminton court, table tennis vault, and a sleek outdoor terrace lounge for relaxing after your workouts.",
    amenities: [
      { name: "Pristine Swimming Pool", icon: "waves" },
      { name: "Smart Fitness Gym", icon: "dumbbell" },
      { name: "Terrace Relax Lounge", icon: "sofa" },
      { name: "Table Tennis Court", icon: "dribbble" },
      { name: "Secure Parking", icon: "car" }
    ],
    transitTags: ["Pristine Kothrud Club", "Badminton Arena", "Terrace Lounge Access"],
    targetAudience: "Locals & Sports Enthusiasts",
    ratingBreakdown: { cleanliness: 4.7, service: 4.6, value: 4.7 }
  },
  {
    id: "society-6",
    title: "Godrej Infinity Clubhouse & Coworking",
    category: "society",
    rating: 4.51,
    reviewsCount: 65,
    city: "Pune",
    location: "Keshav Nagar, Mundhwa",
    lat: 18.5362,
    lng: 73.9482,
    host: "Godrej Committee Partners",
    hostAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&fit=crop&q=80",
    price: 299,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&fit=crop&q=80"
    ],
    description: "Discover a perfect spot for remote work and quick physical refreshment. This society guest pass provides access to a peaceful coworking space inside the main community center, an outdoor swimming pool, top-class table tennis tables, and a beautiful outdoor zen yoga deck. Ideal for digital nomads looking for a low-cost, distraction-free environment in East Pune.",
    amenities: [
      { name: "Lounge Pool", icon: "waves" },
      { name: "Table Tennis & Carrom", icon: "dribbble" },
      { name: "AC Coworking & Library", icon: "laptop" },
      { name: "Outdoor Zen Yoga Deck", icon: "leaf" },
      { name: "High-Speed Wi-Fi", icon: "wifi" }
    ],
    transitTags: ["Budget Coworking Desk", "Zen Yoga Deck", "Pool Access"],
    targetAudience: "Freelancers, Locals & Remote Workers",
    ratingBreakdown: { cleanliness: 4.5, service: 4.4, value: 4.7 }
  }
];

// Export to window object for frontend access
window.initialListings = initialListings;
