import React, { useState, useEffect, useRef } from 'react';
import poolLapImg from '../assets/pool_lap.png';
import spaMassageImg from '../assets/spa_massage.png';
import diningImg from '../assets/dining_fb.png';
import lifestyleLoungerImg from '../assets/lifestyle_lounger.png';
import poolsideFbImg from '../assets/poolside_fb.png';
import spaSanctuaryImg from '../assets/spa_sanctuary.png';
import lifestyleStillImg from '../assets/lifestyle_still.png';

// High-Fidelity SVG Vector Icons (Lucide-style minimalist vectors)
const PoolIcon = ({ className, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 6c.6.5 1.2 1 2.5 1C5.8 7 7 6 7 6s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1s1.2 1 2.5 1c1.3 0 2.5-1 2.5-1s1.2-1 2.5-1c1.3 0 2.5 1 2.5 1" />
  </svg>
);

const SpaIcon = ({ className, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
    <path d="M9 22a5 5 0 0 1-5-5c0-4.5 2.5-6 4.5-8" />
  </svg>
);

const DiningIcon = ({ className, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 22H2" />
    <path d="M21 2H3v2.5L12 14l9-9.5z" />
    <path d="M12 14v8" />
  </svg>
);

const LocationIcon = ({ className, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SearchIcon = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const StarIcon = ({ className, size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className={className} style={{ color: '#EAB308' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronDownIcon = ({ className, size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronLeftIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const CalendarIcon = ({ size = 12, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const getDefaultFallbackImage = (hotel, idx) => {
  const poolPool = [poolLapImg, poolsideFbImg, lifestyleStillImg];
  const spaPool = [spaMassageImg, spaSanctuaryImg];
  const diningPool = [diningImg, lifestyleLoungerImg];
  
  let options = [];
  if (hotel.pool) options.push(...poolPool);
  if (hotel.spa) options.push(...spaPool);
  if (hotel.fb) options.push(...diningPool);
  if (options.length === 0) options = [poolLapImg];
  
  return options[(idx + 7) % options.length];
};

// Individual Hotel Card (Pure getcasa layout with zero pricing details)
const HotelCard = ({ hotel, index, isCentered }) => {
  const [imgSrc, setImgSrc] = useState(hotel.image || `/images/hotels/${hotel.id}/image.jpg`);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    setImgSrc(hotel.image || `/images/hotels/${hotel.id}/image.jpg`);
  }, [hotel.image, hotel.id]);

  // Collapse description if card moves out of center focus
  useEffect(() => {
    if (!isCentered) {
      setShowDesc(false);
    }
  }, [isCentered]);

  const handleImgError = () => {
    // Try image.png if image.jpg fails, then try image.jpeg, then fall back to defaults
    if (imgSrc === hotel.image) {
      setImgSrc(`/images/hotels/${hotel.id}/image.jpg`);
    } else if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/images/hotels/${hotel.id}/image.png`);
    } else if (imgSrc.endsWith('.png')) {
      setImgSrc(`/images/hotels/${hotel.id}/image.jpeg`);
    } else {
      setImgSrc(getDefaultFallbackImage(hotel, index));
    }
  };

  // Determine card specific accent dot color for the bottom pill
  const getDotColor = () => {
    if (hotel.featured) return '#d97706'; // Warm luxury amber
    if (hotel.pool && hotel.spa) return '#2563eb'; // Royal blue
    return '#16a34a'; // Emerald green
  };

  // Dynamic icon for floating card panel header
  const CardIcon = () => {
    if (hotel.pool) return <PoolIcon size={14} style={{ color: 'rgba(13, 21, 39, 0.7)' }} />;
    if (hotel.spa) return <SpaIcon size={14} style={{ color: 'rgba(13, 21, 39, 0.7)' }} />;
    return <DiningIcon size={14} style={{ color: 'rgba(13, 21, 39, 0.7)' }} />;
  };

  return (
    <div className={`casa-hotel-card ${isCentered ? 'centered' : ''}`}>
      <img 
        src={imgSrc} 
        alt={hotel.name} 
        className="casa-card-bg-img"
        loading="lazy"
        onError={handleImgError}
      />
      <div className="casa-card-overlay-mask"></div>
      
      {/* Floating glassmorphic details panel */}
      <div className="casa-card-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CardIcon />
            <h4 className="casa-panel-title">{hotel.name}</h4>
          </div>
          <button 
            onClick={() => setShowDesc(!showDesc)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-accent)',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer',
              padding: '2px 6px',
              textTransform: 'lowercase',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.3s ease'
            }}
          >
            <span>{showDesc ? 'less' : 'more'}</span>
            <span>{showDesc ? '↑' : '↓'}</span>
          </button>
        </div>
        
        {showDesc && (
          <p className="casa-panel-desc" style={{ margin: '8px 0 0 0', animation: 'fadeIn 0.3s ease-out' }}>
            {hotel.desc}
          </p>
        )}
        
        <div className="casa-panel-meta">
          <span className="casa-panel-meta-item">
            <CalendarIcon size={11} style={{ opacity: 0.8 }} />
            <span>Daypass Access</span>
          </span>
          <span className="casa-panel-meta-divider"></span>
          <span className="casa-panel-meta-item">
            <span>{hotel.passesLeft} spots left</span>
          </span>
          <span className="casa-panel-meta-divider"></span>
          <span className="casa-panel-meta-item">
            <span style={{ color: '#EAB308' }}>★</span>
            <span>{hotel.rating}</span>
          </span>
        </div>
      </div>

      {/* Bottom centered Room/Location Pill badge exactly matching reference image */}
      <div className="casa-card-bottom-pill">
        <span 
          className="casa-card-bottom-pill-dot" 
          style={{ backgroundColor: getDotColor() }}
        ></span>
        <span>{hotel.highlight} • {hotel.tag}</span>
      </div>
    </div>
  );
};

const HotelDirectory = () => {
  const [filterRegion, setFilterRegion] = useState('All');
  const [filterOffering, setFilterOffering] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDot, setActiveDot] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const carouselRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Clean up scroll timers on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, []);

  // 25 hotels in Hyderabad with precise coordinates, ratings, and amenity indicators
  const allHotels = [
    {
      id: "itc-kohenur",
      num: "01",
      tag: "Gachibowli",
      name: "ITC Kohenur",
      highlight: "Infinity Lap Pool",
      image: poolLapImg,
      pool: true, spa: true, fb: true,
      desc: "An elevated rooftop lap pool overlooking the lake. Enjoy clean waters, premium sunloungers, and poolside juices by the hour.",
      rating: "4.9", reviews: 242, priceHr: "₹850", priceDay: "₹2,800", passesLeft: 3,
      lat: "17.4367° N", lng: "78.3741° E", elev: "542m", featured: true
    },
    {
      id: "park-hyatt",
      num: "02",
      tag: "Jubilee Hills",
      name: "Park Hyatt",
      highlight: "Thermal Steam & Massage",
      image: spaMassageImg,
      pool: true, spa: true, fb: true,
      desc: "Escape for deep physical recovery. Reset in private plunge pools, thermal saunas, or book a premium massage session.",
      rating: "4.8", reviews: 184, priceHr: "₹950", priceDay: "₹3,200", passesLeft: 2,
      lat: "17.4248° N", lng: "78.4162° E", elev: "565m", featured: true
    },
    {
      id: "taj-krishna",
      num: "03",
      tag: "Banjara Hills",
      name: "Taj Krishna",
      highlight: "Garden Dining & Pools",
      image: diningImg,
      pool: true, spa: true, fb: true,
      desc: "Relax under historical tree shade. Enjoy outdoor dining at garden pavilions and order seasonal fresh food poolside.",
      rating: "4.9", reviews: 310, priceHr: "₹750", priceDay: "₹2,500", passesLeft: 5,
      lat: "17.4164° N", lng: "78.4485° E", elev: "550m", featured: true
    },
    {
      id: "novotel-airport",
      num: "04",
      tag: "Shamshabad",
      name: "Novotel Airport",
      highlight: "Tranquil Pool & Transit Rest",
      image: lifestyleLoungerImg,
      pool: true, spa: true, fb: true,
      desc: "A quiet getaway near the airport. The perfect pool and lounge space to wash away transit fatigue before or after a flight.",
      rating: "4.7", reviews: 92, priceHr: "₹650", priceDay: "₹2,000", passesLeft: 6,
      lat: "17.2403° N", lng: "78.4294° E", elev: "610m", featured: true
    },
    {
      id: "taj-falaknuma",
      num: "05",
      tag: "Falaknuma",
      name: "Taj Falaknuma Palace",
      highlight: "Royal Heritage Pool",
      image: spaSanctuaryImg,
      pool: true, spa: true, fb: true,
      desc: "Immerse in royalty. Swim in the marble pool and pamper yourself at the Jiva Spa inside the palace walls.",
      rating: "4.9", reviews: 154, priceHr: "₹1,200", priceDay: "₹4,000", passesLeft: 2,
      lat: "17.3302° N", lng: "78.4682° E", elev: "598m", featured: false
    },
    {
      id: "the-westin",
      num: "06",
      tag: "Hitec City",
      name: "The Westin",
      highlight: "Poolside Grill & Cabanas",
      image: poolsideFbImg,
      pool: true, spa: true, fb: true,
      desc: "Vibrant social pool in the heart of Hitec City. Unwind with premium drinks and custom body massages.",
      rating: "4.8", reviews: 146, priceHr: "₹800", priceDay: "₹2,600", passesLeft: 4,
      lat: "17.4421° N", lng: "78.3792° E", elev: "535m", featured: false
    },
    {
      id: "trident-hyderabad",
      num: "07",
      tag: "Hitec City",
      name: "Trident Hotel",
      highlight: "Infinity View Spa",
      image: lifestyleStillImg,
      pool: true, spa: true, fb: true,
      desc: "Overlook the Hitec City skyline from a magnificent infinity deck. Exceptional spa treatments and poolside lunch bars.",
      rating: "4.7", reviews: 112, priceHr: "₹750", priceDay: "₹2,400", passesLeft: 5,
      lat: "17.4445° N", lng: "78.3780° E", elev: "538m", featured: false
    },
    { id: "sheraton-hyderabad", num: "08", tag: "Gachibowli", name: "Sheraton Hyderabad", highlight: "Wellness Plunge Pool", pool: true, spa: true, fb: true, rating: "4.6", reviews: 88, priceHr: "₹700", priceDay: "₹2,200", passesLeft: 7, lat: "17.4190° N", lng: "78.3425° E", elev: "555m", featured: false },
    { id: "taj-deccan", num: "09", tag: "Banjara Hills", name: "Taj Deccan", highlight: "Quiet Oasis Lounge", pool: true, spa: true, fb: true, rating: "4.7", reviews: 120, priceHr: "₹750", priceDay: "₹2,300", passesLeft: 3, lat: "17.4180° N", lng: "78.4490° E", elev: "548m", featured: false },
    { id: "hyderabad-marriott", num: "10", tag: "Tank Bund", name: "Marriott Hotel", highlight: "Lakefront Rest & Dine", pool: true, spa: true, fb: true, rating: "4.6", reviews: 76, priceHr: "₹700", priceDay: "₹2,200", passesLeft: 5, lat: "17.4240° N", lng: "78.4862° E", elev: "512m", featured: false },
    { id: "the-park-hyderabad", num: "11", tag: "Somajiguda", name: "The Park Hotel", highlight: "Modernist Skyline Pool", pool: true, spa: true, fb: true, rating: "4.5", reviews: 68, priceHr: "₹800", priceDay: "₹2,500", passesLeft: 4, lat: "17.4215° N", lng: "78.4610° E", elev: "522m", featured: false },
    { id: "itc-kakatiya", num: "12", tag: "Begumpet", name: "ITC Kakatiya", highlight: "Historical Garden Spa", pool: true, spa: true, fb: true, rating: "4.6", reviews: 84, priceHr: "₹650", priceDay: "₹2,000", passesLeft: 6, lat: "17.4332° N", lng: "78.4590° E", elev: "530m", featured: false },
    { id: "le-meridien", num: "13", tag: "Gachibowli", name: "Le Meridien", highlight: "Modern Sky Pool", pool: true, spa: true, fb: true, rating: "4.7", reviews: 95, priceHr: "₹800", priceDay: "₹2,600", passesLeft: 3, lat: "17.4392° N", lng: "78.3601° E", elev: "540m", featured: false },
    { id: "radisson-blu", num: "14", tag: "Banjara Hills", name: "Radisson Blu Plaza", highlight: "Tranquil Atrium Dining", pool: true, spa: true, fb: true, rating: "4.6", reviews: 104, priceHr: "₹750", priceDay: "₹2,400", passesLeft: 5, lat: "17.4192° N", lng: "78.4385° E", elev: "551m", featured: false },
    { id: "avasa-hotel", num: "15", tag: "Hitec City", name: "Avasa Hotel", highlight: "Vanguard Sky Deck", pool: true, spa: true, fb: true, rating: "4.5", reviews: 62, priceHr: "₹700", priceDay: "₹2,200", passesLeft: 4, lat: "17.4468° N", lng: "78.3812° E", elev: "545m", featured: false },
    { id: "novotel-convention", num: "16", tag: "Kondapur", name: "Novotel Convention Centre", highlight: "Suburban Resort Escapes", pool: true, spa: true, fb: true, rating: "4.7", reviews: 110, priceHr: "₹800", priceDay: "₹2,500", passesLeft: 5, lat: "17.4682° N", lng: "78.3690° E", elev: "532m", featured: false },
    { id: "hyatt-regency", num: "17", tag: "Gachibowli", name: "Hyatt Regency", highlight: "Verdant Green Pool", pool: true, spa: true, fb: true, rating: "4.6", reviews: 78, priceHr: "₹750", priceDay: "₹2,300", passesLeft: 6, lat: "17.4124° N", lng: "78.3392° E", elev: "560m", featured: false },
    { id: "taj-banjara", num: "18", tag: "Banjara Hills", name: "Taj Banjara", highlight: "Lakeside Sunbeds", pool: true, spa: false, fb: true, rating: "4.5", reviews: 89, priceHr: "₹600", priceDay: "₹1,800", passesLeft: 8, lat: "17.4145° N", lng: "78.4410° E", elev: "546m", featured: false },
    { id: "marriott-executive", num: "19", tag: "Gachibowli", name: "Marriott Apartments", highlight: "Longstay Lounge Pools", pool: true, spa: false, fb: true, rating: "4.5", reviews: 48, priceHr: "₹800", priceDay: "₹2,500", passesLeft: 5, lat: "17.4385° N", lng: "78.3610° E", elev: "541m", featured: false },
    { id: "courtyard-marriott", num: "20", tag: "Tank Bund", name: "Courtyard Marriott", highlight: "Cozy Plunge Pool", pool: true, spa: false, fb: true, rating: "4.4", reviews: 52, priceHr: "₹600", priceDay: "₹1,800", passesLeft: 9, lat: "17.4245° N", lng: "78.4870° E", elev: "513m", featured: false },
    { id: "oakwood-residence", num: "21", tag: "Gachibowli", name: "Oakwood Residence", highlight: "Quiet Rooftop Garden", pool: true, spa: false, fb: true, rating: "4.5", reviews: 40, priceHr: "₹750", priceDay: "₹2,400", passesLeft: 6, lat: "17.4295° N", lng: "78.3510° E", elev: "548m", featured: false },
    { id: "golkonda-hotel", num: "22", tag: "Masab Tank", name: "The Golkonda Hotel", highlight: "Cityside Escape Deck", pool: true, spa: false, fb: true, rating: "4.3", reviews: 58, priceHr: "₹600", priceDay: "₹1,800", passesLeft: 7, lat: "17.4042° N", lng: "78.4510° E", elev: "542m", featured: false },
    { id: "mercure-hyderabad", num: "23", tag: "Somajiguda", name: "Mercure Hotel KCP", highlight: "Cozy Skyline Massage", pool: true, spa: false, fb: true, rating: "4.4", reviews: 47, priceHr: "₹650", priceDay: "₹2,000", passesLeft: 5, lat: "17.4210° N", lng: "78.4550° E", elev: "525m", featured: false },
    { id: "green-park", num: "24", tag: "Begumpet", name: "Green Park", highlight: "Warm Steam Lounge", pool: true, spa: false, fb: true, rating: "4.3", reviews: 64, priceHr: "₹550", priceDay: "₹1,700", passesLeft: 8, lat: "17.4348° N", lng: "78.4512° E", elev: "529m", featured: false },
    { id: "lemon-tree", num: "25", tag: "Hitec City", name: "Lemon Tree Premier", highlight: "Sunset Solarium", pool: true, spa: false, fb: true, rating: "4.4", reviews: 82, priceHr: "₹650", priceDay: "₹2,000", passesLeft: 6, lat: "17.4410° N", lng: "78.3752° E", elev: "537m", featured: false }
  ];

  const regions = [
    'All', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills', 'Hitec City', 'Shamshabad', 
    'Falaknuma', 'Tank Bund', 'Somajiguda', 'Begumpet', 'Kondapur', 'Masab Tank'
  ];

  // (Using global fallback image helper now)

  const getSlots = (type) => {
    if (type === 'Pool') return ['08:00 AM', '11:30 AM', '03:30 PM'];
    if (type === 'Spa') return ['10:00 AM', '02:00 PM', '05:30 PM'];
    return ['12:30 PM', '03:00 PM', '07:30 PM'];
  };

  // Filtered List
  const filteredHotels = allHotels.filter(hotel => {
    if (filterOffering === 'Pool' && !hotel.pool) return false;
    if (filterOffering === 'Spa' && !hotel.spa) return false;
    if (filterOffering === 'F&B' && !hotel.fb) return false;
    
    if (filterRegion !== 'All') {
      const regionLower = filterRegion.toLowerCase();
      const nLower = (hotel.tag || '').toLowerCase();
      if (nLower !== regionLower) return false;
    }
    
    if (searchQuery && !hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  // Reset dot highlight if filtered list changes
  useEffect(() => {
    setActiveDot(0);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [filterRegion, filterOffering, searchQuery]);

  // Click outside custom region selector dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.casa-dropdown-wrap')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle Scroll linked active dot calculation
  const handleScroll = () => {
    if (scrollTimeout.current) {
      cancelAnimationFrame(scrollTimeout.current);
    }
    scrollTimeout.current = requestAnimationFrame(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, clientWidth } = carouselRef.current;
      const cardWidthWithGap = 338;
      
      // Calculate viewport center scroll offset
      const viewportCenter = scrollLeft + clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;
      
      for (let i = 0; i < filteredHotels.length; i++) {
        const cardCenter = i * cardWidthWithGap + 155; // 310px card width / 2 = 155px
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      
      setActiveDot((prev) => {
        if (prev !== closestIndex) return closestIndex;
        return prev;
      });
    });
  };

  const scrollToIndex = (idx) => {
    if (!carouselRef.current) return;
    const cardWidthWithGap = 338;
    carouselRef.current.scrollTo({
      left: idx * cardWidthWithGap,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    if (activeDot > 0) {
      scrollToIndex(activeDot - 1);
    }
  };

  const scrollRight = () => {
    if (activeDot < filteredHotels.length - 1) {
      scrollToIndex(activeDot + 1);
    }
  };

  return (
    <section id="directory" className="casa-directory-sec">
      <div className="container">
        
        {/* Header Block (Adapted from getcasa.com) */}
        <div className="casa-header-wrap">
          <span className="feature-kicker">Concierge Network</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(42px, 5.5vw, 68px)', lineHeight: '1.1', marginTop: '6px', letterSpacing: '-0.03em', textTransform: 'lowercase', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
            never think about overnight stays again.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: '1.6', color: 'rgba(13, 21, 39, 0.7)', maxWidth: '640px', margin: '0 auto' }}>
            One-tap access to premium daypasses made specifically for your schedule. Pause Hour handles check-ins, reservations, and amenities — so you enjoy five-star retreats on your terms.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="casa-filter-bar">
          
          {/* Search Box */}
          <div className="casa-search-wrap">
            <SearchIcon className="casa-search-icon" />
            <input
              type="text"
              placeholder="Search network properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Offerings Selector Pills */}
          <div className="casa-pills-group">
            <button 
              onClick={() => setFilterOffering('All')} 
              className={`casa-pill-btn ${filterOffering === 'All' ? 'active' : ''}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilterOffering(filterOffering === 'Pool' ? 'All' : 'Pool')} 
              className={`casa-pill-btn ${filterOffering === 'Pool' ? 'active' : ''}`}
            >
              <PoolIcon size={12} />
              <span>Pools</span>
            </button>
            <button 
              onClick={() => setFilterOffering(filterOffering === 'Spa' ? 'All' : 'Spa')} 
              className={`casa-pill-btn ${filterOffering === 'Spa' ? 'active' : ''}`}
            >
              <SpaIcon size={12} />
              <span>Spas</span>
            </button>
            <button 
              onClick={() => setFilterOffering(filterOffering === 'F&B' ? 'All' : 'F&B')} 
              className={`casa-pill-btn ${filterOffering === 'F&B' ? 'active' : ''}`}
            >
              <DiningIcon size={12} />
              <span>Dining</span>
            </button>
          </div>

          {/* Neighborhood Selector Dropdown */}
          <div className="casa-dropdown-wrap">
            <button 
              type="button"
              className="casa-dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{filterRegion === 'All' ? 'All Neighborhoods' : filterRegion}</span>
              <ChevronDownIcon className={`dropdown-chevron ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="casa-dropdown-menu" data-lenis-prevent>
                {regions.map(r => (
                  <div
                    key={r}
                    className={`custom-dropdown-item casa-dropdown-item ${filterRegion === r ? 'active' : ''}`}
                    onClick={() => {
                      setFilterRegion(r);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {r === 'All' ? 'All Neighborhoods' : r}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Carousel Container */}
        <div className="casa-carousel-outer">
          
          {/* Navigation Chevrons */}
          <button 
            className="casa-nav-btn left" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon />
          </button>
          
          <button 
            className="casa-nav-btn right" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRightIcon />
          </button>

          {/* Scrolling Track */}
          <div 
            className="casa-carousel-track" 
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {filteredHotels.length === 0 ? (
              <div style={{ width: '100%', padding: '80px 24px', textAlign: 'center', color: 'rgba(13, 21, 39, 0.5)', fontSize: '15px' }}>
                No active properties match filters.
              </div>
            ) : (
              filteredHotels.map((hotel, idx) => {
                const isCentered = idx === activeDot;
                return (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    index={idx}
                    isCentered={isCentered}
                  />
                );
              })
            )}
          </div>

          {/* Dynamic Scroll Dot Indicators */}
          {filteredHotels.length > 0 && (
            <div className="casa-carousel-dots">
              {filteredHotels.map((_, idx) => (
                <div
                  key={idx}
                  className={`casa-dot ${activeDot === idx ? 'active' : ''}`}
                  onClick={() => scrollToIndex(idx)}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default HotelDirectory;
