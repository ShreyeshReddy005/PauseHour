/**
 * Pause Hour Component Renderer
 * Provides modular render engines for listing cards, detail pages, bookings list, and the custom interactive SVG map.
 */

const UIComponents = {
  // Vector icons storage - Instant crisp SVGs
  icons: {
    wifi: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M8.5 16.5c3.5-3.5 3.5-9 0-12.5"/><path d="M5 13c5-5 9-5 14 0"/><path d="M1.5 9.5c6.5-6.5 14.5-6.5 21 0"/></svg>',
    "shower-head": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v2H4z"/><path d="M12 6v6"/><path d="M12 12c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z"/><path d="M8 20v2"/><path d="M12 20v2"/><path d="M16 20v2"/></svg>',
    dumbbell: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
    briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    laptop: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/><line x1="5" x2="19" y1="16" y2="16"/></svg>',
    sofa: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"/><path d="M2 9v11"/><path d="M22 9v11"/><path d="M4 11h16"/></svg>',
    waves: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>',
    coffee: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>',
    leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Zm0 0v-5"/></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    "gamepad-2": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="3"/></svg>',
    plane: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>',
    bath: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.6 3 3 4.6 3 5.5a1.5 1.5 0 0 0 .5 1L6 9"/><path d="M2 11h20v2H2z"/><path d="M21 13c0 4.4-3.6 8-8 8h-2c-4.4 0-8-3.6-8-8"/><path d="M5 21v1"/><path d="M19 21v1"/></svg>',
    sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
    flame: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    car: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6"/></svg>',
    utensils: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v4"/><path d="M21 15V2v0a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3Zm0 0v6M3 21h18"/></svg>',
    thermometer: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>',
    trees: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10v.01"/><path d="M9.5 14h.01"/><path d="M5.6 10.4c-.4-.4-.6-.9-.6-1.4a2.5 2.5 0 0 1 5-1c0-.4.2-.8.6-1.1A2.5 2.5 0 0 1 15 8c0 .5-.2 1-.6 1.4"/><path d="M7 16h6v4H7z"/><path d="M13 14h.01"/><path d="M16 16v.01"/><path d="M17.4 13.6c-.4-.4-.6-.9-.6-1.4a2.5 2.5 0 0 1 5-1c0-.4.2-.8.6-1.1A2.5 2.5 0 0 1 23 11c0 .5-.2 1-.6 1.4"/><path d="M15 17h6v3h-6z"/></svg>',
    "glass-water": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>',
    activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    ticket: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    sunset: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10a4 4 0 0 0-4-4h8a4 4 0 0 0-4 4Z"/><path d="M2 10h20"/><path d="m19 2-2 2"/><path d="M22 22H2"/><path d="m16 16-1.5 1.5"/><path d="m8 16 1.5 1.5"/><path d="M12 2v2"/><path d="m5 2 2 2"/></svg>',
    droplets: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.09 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M17 18.5c1.37 0 2.5-1.14 2.5-2.5 0-.72-.35-1.4-.95-1.97S17.2 12.6 17 11.7c-.2 1-.76 2-1.54 2.6-.78.58-1.06 1.25-1.06 1.7 0 1.36 1.13 2.5 2.5 2.5z"/></svg>',
    target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',
    chevron: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>'
  },

  getIcon(name) {
    return this.icons[name] || this.icons['sparkles'];
  },

  // Renders a gorgeous listing card (Airbnb Style)
  renderListingCard(listing, isFavorite) {
    const categoryNames = {
      lobby: "Transit Lounge",
      luxury: "Hotel Resort Daypass",
      society: "Clubhouse Access"
    };

    const tags = listing.transitTags || ["Verified Space"];
    const tagsHtml = tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');
    const categoryName = categoryNames[listing.category] || "Transit Space";
    const title = listing.title || "Unnamed Space";
    const rating = typeof listing.rating === "number" ? listing.rating.toFixed(2) : "5.00";
    const location = listing.location || "India";
    const targetAudience = listing.targetAudience || "Transit Travellers";
    const price = listing.price || 499;
    const image = listing.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop";

    return `
      <div class="listing-card animate-card" data-id="${listing.id}">
        <div class="card-image-wrapper">
          <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${listing.id}" title="${isFavorite ? 'Remove from saved' : 'Save to favorites'}">
            ${this.getIcon('heart')}
          </button>
          <div class="category-badge">${categoryName}</div>
          <img src="${image}" alt="${title}" loading="lazy" />
        </div>
        <div class="card-details">
          <div class="card-header-row">
            <h3 class="card-title">${title}</h3>
            <span class="card-rating">
              ${this.getIcon('star')} ${rating}
            </span>
          </div>
          <div class="card-location">${location}</div>
          <div class="card-tags">
            ${tagsHtml}
          </div>
          <div class="card-audience">${targetAudience}</div>
          <div class="card-price-row">
            <strong>₹${price}</strong> / 6-hour slot
          </div>
        </div>
      </div>
    `;
  },

  // Generates complete listing gallery + description details inside detail modal
  renderListingDetail(listing, isFavorite) {
    const amenities = listing.amenities || [];
    const amenitiesHtml = amenities.map(amenity => `
      <div class="amenities-item">
        ${this.getIcon(amenity.icon)}
        <span>${amenity.name}</span>
      </div>
    `).join('');

    const categoryNames = {
      lobby: "Hotel Transit Lounge",
      luxury: "Luxury Hotel Wellness Daypass",
      society: "Premium Residential Clubhouse Access"
    };

    const gallery = listing.gallery && listing.gallery.length > 0 ? listing.gallery : [listing.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop"];
    const mainImg = gallery[0];
    const subImg1 = gallery[1] || mainImg;
    const subImg2 = gallery[2] || mainImg;
    const title = listing.title || "Unnamed Space";
    const rating = typeof listing.rating === "number" ? listing.rating.toFixed(2) : "5.00";
    const reviewsCount = listing.reviewsCount || 0;
    const city = listing.city || "India";
    const location = listing.location || "India";
    const host = listing.host || "Pause Hour Host";
    const hostAvatar = listing.hostAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop";
    const categoryName = categoryNames[listing.category] || "Transit Space Daypass";
    const description = listing.description || "A gorgeous curated space for your transit hours.";
    const price = listing.price || 499;

    return `
      <div class="gallery-layout">
        <img class="gallery-main-img" src="${mainImg}" alt="${title}" />
        <div class="gallery-side-column">
          <img class="gallery-sub-img" src="${subImg1}" alt="${title}" />
          <img class="gallery-sub-img" src="${subImg2}" alt="${title}" />
        </div>
      </div>

      <div class="detail-grid">
        <!-- Left Side: Core Info -->
        <div class="info-column">
          <div class="info-section-header">
            <div>
              <h1 class="info-title">${title}</h1>
              <div class="info-meta-row">
                <span class="info-meta-item">
                  ${this.getIcon('star')} <strong>${rating}</strong> (${reviewsCount} reviews)
                </span>
                <span class="info-meta-item">
                  ${this.getIcon('map')} <strong>${city}</strong> — ${location}
                </span>
              </div>
            </div>
            
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${listing.id}" style="position: static; color: var(--text-primary); background-color: var(--bg-tertiary); border: 1px solid var(--border-light); width: 44px; height: 44px;">
              ${this.getIcon('heart')}
            </button>
          </div>

          <div class="info-section-header">
            <div class="info-host-card">
              <img class="host-avatar" src="${hostAvatar}" alt="${host}" />
              <div class="host-text">
                <strong>Hosted by ${host}</strong>
                <span>Managed Partner for ${categoryName}</span>
              </div>
            </div>
          </div>

          <div class="info-description-box">
            <h3 class="info-subtitle">About this Space</h3>
            <p class="info-description-text">${description}</p>
          </div>

          <div class="info-amenities-box">
            <h3 class="info-subtitle">What this Space Offers</h3>
            <div class="amenities-list-grid">
              ${amenitiesHtml}
            </div>
          </div>
        </div>

        <!-- Right Side: Booking Panel -->
        <div class="booking-column">
          <div class="booking-widget" id="booking-widget-panel" data-id="${listing.id}">
            <div class="booking-header">
              <div class="booking-price">
                <strong>₹${price}</strong> / 6-hour slot
              </div>
              <span class="card-rating" style="font-size: 14px;">
                ${this.getIcon('star')} ${rating}
              </span>
            </div>

            <!-- Booking fields form card -->
            <div class="booking-fields-card">
              <div class="booking-field-row">
                <div class="booking-field-cell" style="flex: 1.2;">
                  <label>CHECK-IN DATE</label>
                  <input type="date" id="booking-date" value="${new Date().toISOString().split('T')[0]}" min="${new Date().toISOString().split('T')[0]}">
                </div>
              </div>
              <div class="booking-field-row">
                <div class="booking-field-cell">
                  <label>SELECT TIME SLOT</label>
                  <select id="booking-slot">
                    <option value="morning" data-mult="1">Morning Slot (06:00 - 12:00)</option>
                    <option value="afternoon" data-mult="1" selected>Afternoon Slot (12:00 - 18:00)</option>
                    <option value="evening" data-mult="1">Evening Slot (18:00 - 00:00)</option>
                    <option value="fullday" data-mult="1.8">Full Day Pass (06:00 - 22:00)</option>
                  </select>
                </div>
                <div class="booking-field-cell" style="max-width: 100px;">
                  <label>GUESTS</label>
                  <select id="booking-guests">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Add-ons selector -->
            <div class="addons-box">
              <h4 style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Select Optional Add-ons</h4>
              
              <div class="addon-row">
                <label class="addon-label-checkbox">
                  <input type="checkbox" class="addon-check" data-price="150" value="Fast Luggage Drop Vault">
                  <span>Fast Luggage Drop Vault</span>
                </label>
                <span class="addon-price">₹150</span>
              </div>

              <div class="addon-row">
                <label class="addon-label-checkbox">
                  <input type="checkbox" class="addon-check" data-price="200" value="Ultra High-Speed Wi-Fi Pod">
                  <span>Ultra High-Speed Wi-Fi Pod</span>
                </label>
                <span class="addon-price">₹200</span>
              </div>

              <div class="addon-row">
                <label class="addon-label-checkbox">
                  <input type="checkbox" class="addon-check" data-price="350" value="F&B Lounges Refreshments">
                  <span>F&B Lounge Refreshments</span>
                </label>
                <span class="addon-price">₹350</span>
              </div>
            </div>

            <!-- Pricing Breakdown -->
            <div class="booking-pricing-breakdown">
              <div class="price-breakdown-row">
                <span id="price-slot-desc">₹${price} x 1 slot</span>
                <span id="price-slot-total">₹${price}</span>
              </div>
              <div class="price-breakdown-row" id="price-addons-row" style="display: none;">
                <span>Add-ons fee</span>
                <span id="price-addons-total">₹0</span>
              </div>
              <div class="price-breakdown-row">
                <span>Platform Convenience charge</span>
                <span>₹49</span>
              </div>
              <div class="price-breakdown-row total">
                <span>Total (INR)</span>
                <span id="booking-grand-total">₹${price + 49}</span>
              </div>
            </div>

            <button class="cta-button" id="initiate-checkout-btn">
              Instantly Book Pass
            </button>
            <p style="font-size: 11px; text-align: center; color: var(--text-secondary); margin-top: 10px;">
              You won't be charged yet. Scan UPI to proceed.
            </p>
          </div>
        </div>
      </div>
    `;
  },

  // Generates a booking card inside the "My Bookings" user profile view
  renderBookingCard(booking, listing) {
    const slotNames = {
      morning: "Morning (06 AM - 12 PM)",
      afternoon: "Afternoon (12 PM - 06 PM)",
      evening: "Evening (06 PM - 12 AM)",
      fullday: "Full Day Pass (06 AM - 10 PM)"
    };

    const statusBadge = booking.isUpcoming 
      ? `<span class="badge active">Upcoming Active</span>`
      : `<span class="badge completed">Checked In / Completed</span>`;

    return `
      <div class="dashboard-booking-card">
        <img class="booking-card-img" src="${listing.image}" alt="${listing.title}" />
        <div class="booking-card-info">
          <div style="margin-bottom: 2px;">${statusBadge}</div>
          <h4 class="booking-card-title">${listing.title}</h4>
          <span class="booking-card-time">Slot: ${slotNames[booking.slot]}</span>
          <div class="booking-card-details">
            Date: ${booking.date} | Guests: ${booking.guests} | Ref ID: #${booking.id.substring(0, 8)}
          </div>
        </div>
        <button class="booking-card-qr-btn view-qr-pass-btn" data-booking-id="${booking.id}">
          ${this.getIcon('ticket')} View Entry Pass
        </button>
      </div>
    `;
  },

  // Custom QR Code Generator using inline scalable vectors - 100% reliable, zero API dependencies
  generateMockQRCode(text) {
    // Elegant geometric vector representations that mimic high-fidelity QR layouts
    return `
      <svg viewBox="0 0 100 100" class="qr-svg-graphic" style="fill: #1E293B; shape-rendering: crispEdges;">
        <!-- QR Markers / Positioning Squares -->
        <rect x="0" y="0" width="30" height="30" style="fill:none; stroke:#1E293B; stroke-width:6;" />
        <rect x="8" y="8" width="14" height="14" />
        
        <rect x="70" y="0" width="30" height="30" style="fill:none; stroke:#1E293B; stroke-width:6;" />
        <rect x="78" y="8" width="14" height="14" />
        
        <rect x="0" y="70" width="30" height="30" style="fill:none; stroke:#1E293B; stroke-width:6;" />
        <rect x="8" y="78" width="14" height="14" />
        
        <!-- Small inner alignment square -->
        <rect x="70" y="70" width="10" height="10" />
        
        <!-- Randomized yet deterministic high fidelity data blocks -->
        <rect x="40" y="5" width="6" height="6" />
        <rect x="52" y="12" width="6" height="12" />
        <rect x="44" y="24" width="12" height="6" />
        
        <rect x="85" y="40" width="10" height="6" />
        <rect x="75" y="52" width="6" height="12" />
        
        <rect x="5" y="42" width="12" height="6" />
        <rect x="18" y="54" width="6" height="10" />
        
        <rect x="36" y="36" width="28" height="28" style="fill:none; stroke:#1E293B; stroke-width:4;" />
        <rect x="44" y="44" width="12" height="12" />
        
        <rect x="36" y="72" width="12" height="6" />
        <rect x="52" y="84" width="14" height="6" />
        <rect x="40" y="90" width="6" height="8" />
        
        <rect x="85" y="80" width="8" height="8" />
      </svg>
    `;
  },

  // Dynamic vector SVG interactive Map rendering optimized for premium look and feel
  renderInteractiveMap(listings, selectedCity = "All") {
    // Cities coordinates mapping in the customized visual map canvas
    const cityCoordinates = {
      "Mumbai": { x: 280, y: 380 },
      "Bengaluru": { x: 340, y: 520 },
      "Delhi NCR": { x: 360, y: 160 },
      "Goa": { x: 260, y: 460 },
      "Hyderabad": { x: 420, y: 420 },
      "Pune": { x: 310, y: 400 }
    };

    // Construct SVG map hotspots
    let hotspotsHtml = '';
    
    // Filter coordinates based on current active city selection
    Object.keys(cityCoordinates).forEach(cityName => {
      if (selectedCity !== "All" && cityName !== selectedCity) return;
      
      const coords = cityCoordinates[cityName];
      const count = listings.filter(l => l.city === cityName).length;
      
      if (count === 0 && selectedCity === "All") return; // Don't render empty pings in full map

      hotspotsHtml += `
        <g class="map-hotspot-group" data-city="${cityName}" style="cursor: pointer;">
          <!-- Multi-ring pulsing radar ping -->
          <circle cx="${coords.x}" cy="${coords.y}" r="22" class="map-ping-ring" style="fill: rgba(16, 185, 129, 0.15);" />
          <circle cx="${coords.x}" cy="${coords.y}" r="12" class="map-ping-ring" style="fill: rgba(16, 185, 129, 0.25); animation-delay: 0.7s;" />
          
          <!-- Focal Center Point -->
          <circle cx="${coords.x}" cy="${coords.y}" r="7" class="map-pin-hotspot" />
          
          <!-- Labeled pill overlay -->
          <rect x="${coords.x - 45}" y="${coords.y - 32}" width="90" height="20" rx="10" 
                style="fill: var(--bg-secondary); stroke: var(--border-light); stroke-width: 1;" />
          <text x="${coords.x}" y="${coords.y - 18}" text-anchor="middle" class="map-pin-label">
            ${cityName} (${count})
          </text>
        </g>
      `;
    });

    // Highly styled vector background simulating an abstract premium digital contour radar map of India
    return `
      <svg class="svg-map-canvas" id="svg-interactive-map-root" viewBox="0 0 700 700">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" class="map-grid-pattern" />
          </pattern>
        </defs>
        
        <!-- Grid overlay -->
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <!-- India Border Contour Abstract Shape (Premium dotted SVG path layout) -->
        <path d="M 330,80 
                 C 340,60 360,60 370,80 
                 C 380,100 410,130 400,160 
                 C 390,190 460,200 480,240 
                 C 500,280 520,310 500,340 
                 C 480,370 430,360 410,380 
                 C 390,400 410,480 390,520 
                 C 370,560 350,620 340,650
                 C 330,620 310,560 290,520 
                 C 270,480 230,440 220,410 
                 C 210,380 230,340 240,310 
                 C 250,280 240,240 260,200 
                 C 280,160 320,100 330,80 Z" 
              class="map-outline" />
              
        <!-- Hotspots layer -->
        ${hotspotsHtml}
      </svg>
    `;
  }
};

// Export to window
window.UIComponents = UIComponents;
