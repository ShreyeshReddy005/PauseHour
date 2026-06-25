/**
 * Pause Hour State & Storage Controller
 * Handles local storage for listings, bookings, favorites, and user profiles.
 * Optimized with robust try-catch fallbacks to support private windows and sandboxed environments.
 */
const STORAGE_KEYS = {
  LISTINGS: "pause_hour_listings",
  BOOKINGS: "pause_hour_bookings",
  FAVORITES: "pause_hour_favorites",
  USER: "pause_hour_user"
};

const StorageController = {
  // Safe memory storage fallback for browsers disabling localStorage
  _fallbackStorage: {},

  _safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn("localStorage read blocked, using memory fallback:", e);
      return this._fallbackStorage[key] || null;
    }
  },

  _safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("localStorage write blocked, using memory fallback:", e);
      this._fallbackStorage[key] = value;
    }
  },

  // Safe parsing that never throws exceptions
  _safeParse(jsonStr, fallback) {
    try {
      if (!jsonStr || jsonStr === "undefined") return fallback;
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error("Failed to parse JSON, using fallback data:", e);
      return fallback;
    }
  },

  // Initialize storage values on first load
  init() {
    const listings = this._safeGet(STORAGE_KEYS.LISTINGS);
    const parsed = this._safeParse(listings, []);
    // Force reset if listings is unset, empty array, invalid, or length is less than initial listings (meaning updated database)
    if (!listings || listings === "[]" || listings === "undefined" || (Array.isArray(parsed) && parsed.length < (window.initialListings || []).length)) {
      this._safeSet(STORAGE_KEYS.LISTINGS, JSON.stringify(window.initialListings || []));
    }
    
    if (!this._safeGet(STORAGE_KEYS.BOOKINGS)) {
      this._safeSet(STORAGE_KEYS.BOOKINGS, JSON.stringify([]));
    }
    if (!this._safeGet(STORAGE_KEYS.FAVORITES)) {
      this._safeSet(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
    }
    if (!this._safeGet(STORAGE_KEYS.USER)) {
      const defaultUser = {
        name: "Shreyesh Reddy",
        email: "shreyesh@pausehour.com",
        phone: "+91 98765 43210",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
      };
      this._safeSet(STORAGE_KEYS.USER, JSON.stringify(defaultUser));
    }
  },

  // Get all listings (combines default ones with any added by the host portal)
  getListings() {
    this.init();
    return this._safeParse(this._safeGet(STORAGE_KEYS.LISTINGS), window.initialListings || []);
  },

  // Save new listing (from Host Portal)
  saveListing(newListing) {
    const listings = this.getListings();
    listings.unshift(newListing); // Add new listings to the top
    this._safeSet(STORAGE_KEYS.LISTINGS, JSON.stringify(listings));
    return listings;
  },

  // Get all bookings
  getBookings() {
    this.init();
    return this._safeParse(this._safeGet(STORAGE_KEYS.BOOKINGS), []);
  },

  // Add new booking
  addBooking(booking) {
    const bookings = this.getBookings();
    bookings.unshift(booking); // Add to beginning
    this._safeSet(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    return bookings;
  },

  // Get all favorites (IDs of liked listings)
  getFavorites() {
    this.init();
    return this._safeParse(this._safeGet(STORAGE_KEYS.FAVORITES), []);
  },

  // Toggle favorite status
  toggleFavorite(listingId) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(listingId);
    if (index === -1) {
      favorites.push(listingId);
    } else {
      favorites.splice(index, 1);
    }
    this._safeSet(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return favorites;
  },

  // Get user profile
  getUser() {
    this.init();
    return this._safeParse(this._safeGet(STORAGE_KEYS.USER), null);
  },

  // Update user profile
  updateUser(user) {
    this._safeSet(STORAGE_KEYS.USER, JSON.stringify(user));
    return user;
  }
};

// Export to window
window.StorageController = StorageController;
// Initialize immediately
StorageController.init();
