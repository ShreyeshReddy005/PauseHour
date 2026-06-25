/**
 * Pause Hour Application Core Controller
 * Orchestrates views routing, searches, booking flows, dashboards, and responsive maps.
 */

const startPauseHourApp = () => {
  
  // ====================================================
  // 1. STATE CONFIGURATION
  // ====================================================
  let appState = {
    listings: [],
    favorites: [],
    bookings: [],
    activeCategory: "all",
    searchCity: "All",
    searchDate: new Date().toISOString().split('T')[0],
    searchSlot: "afternoon",
    searchGuests: "1",
    isSplitMap: false,
    currentDetailListing: null
  };

  const DOM = {
    // Top bar elements
    themeToggle: document.getElementById("theme-toggle-btn"),
    userMenuTrigger: document.getElementById("user-menu-trigger"),
    accountDropdown: document.getElementById("account-dropdown-menu"),
    myBookingsTrigger: document.getElementById("my-bookings-trigger"),
    openFavoritesTrigger: document.getElementById("open-favorites-trigger"),
    openHostSimulator: document.getElementById("open-host-simulator-trigger"),
    hostPortalTrigger: document.getElementById("host-portal-trigger-btn"),
    brandLogoBtn: document.getElementById("brand-logo-btn"),

    // Floating Search bar components
    searchBarTrigger: document.getElementById("search-bar-trigger"),
    searchLocationSec: document.getElementById("search-location-sec"),
    searchLocationInput: document.getElementById("search-location-input"),
    cityDropdown: document.getElementById("city-dropdown-menu"),
    searchDateInput: document.getElementById("search-date-input"),
    searchSlotSec: document.getElementById("search-slot-sec"),
    searchSlotInput: document.getElementById("search-slot-input"),
    slotDropdown: document.getElementById("slot-dropdown-menu"),
    executeSearchBtn: document.getElementById("execute-search-btn"),

    // Content layouts
    mainContentLayout: document.getElementById("main-content-layout"),
    listingsGridRoot: document.getElementById("listings-grid-root"),
    mapContainerRoot: document.getElementById("map-container-root"),
    mapFloatingCard: document.getElementById("map-floating-card-element"),
    splitMapToggle: document.getElementById("split-map-toggle-btn"),
    mapToggleText: document.getElementById("map-toggle-text"),
    categoriesFilterBar: document.getElementById("categories-filter-bar"),

    // Detail Modal elements
    detailViewModal: document.getElementById("detail-view-modal"),
    detailModalContentRoot: document.getElementById("detail-modal-content-root"),
    closeDetailModalBtn: document.getElementById("close-detail-modal-btn"),

    // Host portal elements
    hostPortalModal: document.getElementById("host-portal-modal"),
    closeHostModalBtn: document.getElementById("close-host-modal-btn"),
    hostSpaceForm: document.getElementById("host-space-form"),

    // Checkout modal elements
    checkoutViewModal: document.getElementById("checkout-view-modal"),
    checkoutStepPay: document.getElementById("checkout-step-pay"),
    checkoutStepSuccess: document.getElementById("checkout-step-success"),
    checkoutUpiQrPlaceholder: document.getElementById("checkout-upi-qr-placeholder"),
    upiPriceDisplay: document.getElementById("upi-price-display"),
    cancelCheckoutBtn: document.getElementById("cancel-checkout-btn"),
    confirmMockPaymentBtn: document.getElementById("confirm-mock-payment-btn"),
    closeSuccessCheckoutBtn: document.getElementById("close-success-checkout-btn"),

    // Ticket text parameters
    ticketRefId: document.getElementById("ticket-ref-id"),
    ticketSpaceTitle: document.getElementById("ticket-space-title"),
    ticketDate: document.getElementById("ticket-date"),
    ticketSlot: document.getElementById("ticket-slot"),
    ticketGuests: document.getElementById("ticket-guests"),
    ticketBaggage: document.getElementById("ticket-baggage"),
    ticketQrCodePlaceholder: document.getElementById("ticket-qr-code-placeholder"),

    // User Booking dashboard
    dashboardWrapper: document.getElementById("dashboard-wrapper-root"),
    dashboardBookingsList: document.getElementById("dashboard-bookings-list-root"),
    closeDashboardBtn: document.getElementById("close-dashboard-btn")
  };

  // Preset Unsplash images matching each category for Host listing simulator
  const categoryPresetImages = {
    lobby: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&fit=crop"
    ],
    luxury: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&fit=crop",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&fit=crop"
    ],
    society: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&fit=crop"
    ]
  };

  // ====================================================
  // 2. INITIALIZATION ENGINE
  // ====================================================
  function initApp() {
    appState.listings = StorageController.getListings();
    appState.favorites = StorageController.getFavorites();
    appState.bookings = StorageController.getBookings();

    // Default inputs setup
    DOM.searchDateInput.value = appState.searchDate;
    DOM.searchDateInput.min = appState.searchDate;
    updateSearchInputsUI();

    // Main render
    renderListings();
    renderMap();
    setupEventListeners();
  }

  // Run the initialization sequence to load data, render UI, and attach event listeners
  initApp();

  // Helper to visually update current selections in search widget
  function updateSearchInputsUI() {
    DOM.searchLocationInput.value = appState.searchCity === "All" ? "" : appState.searchCity;
    
    const slotsMap = {
      morning: "Morning (6AM-12PM)",
      afternoon: "Afternoon (12PM-6PM)",
      evening: "Evening (6PM-12AM)",
      fullday: "Full Day Pass"
    };
    DOM.searchSlotInput.value = slotsMap[appState.searchSlot];
  }

  // ====================================================
  // 3. CORE RENDERING ENGINE
  // ====================================================
  function renderListings(customFilter = null) {
    let filtered = appState.listings;

    // Apply custom category filters
    if (appState.activeCategory !== "all") {
      filtered = filtered.filter(l => l.category === appState.activeCategory);
    }

    // Apply location filtering
    if (appState.searchCity !== "All") {
      filtered = filtered.filter(l => l.city === appState.searchCity);
    }

    // Apply custom listings filter override (e.g. for favorites display)
    if (customFilter) {
      filtered = customFilter(filtered);
    }

    if (filtered.length === 0) {
      DOM.listingsGridRoot.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:12px; color: var(--text-tertiary);"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
          <h3 style="font-family: var(--font-family-title); font-size: 18px; margin-bottom: 6px;">No Spaces Available</h3>
          <p style="font-size: 14px;">Try shifting your filters, slot, or explore another city.</p>
        </div>
      `;
      return;
    }

    let cardsHtml = '';
    filtered.forEach(listing => {
      const isFav = appState.favorites.includes(listing.id);
      cardsHtml += UIComponents.renderListingCard(listing, isFav);
    });

    DOM.listingsGridRoot.innerHTML = cardsHtml;
    attachCardClickListeners();
  }

  // Renders stateful interactive SVG map view
  function renderMap() {
    let filteredListings = appState.listings;
    if (appState.activeCategory !== "all") {
      filteredListings = filteredListings.filter(l => l.category === appState.activeCategory);
    }

    DOM.mapContainerRoot.innerHTML = UIComponents.renderInteractiveMap(filteredListings, appState.searchCity);
    attachMapInteractions();
  }

  // Attach event handlers on map city nodes
  function attachMapInteractions() {
    const mapHotspots = document.querySelectorAll(".map-hotspot-group");
    mapHotspots.forEach(hotspot => {
      hotspot.addEventListener("click", () => {
        const city = hotspot.getAttribute("data-city");
        appState.searchCity = city;
        updateSearchInputsUI();
        
        // Filter listings grid instantly
        renderListings();
        
        // Show floating feedback card on map
        const cityListings = appState.listings.filter(l => l.city === city);
        if (cityListings.length > 0) {
          const featured = cityListings[0];
          DOM.mapFloatingCard.innerHTML = `
            <img class="map-card-img" src="${featured.image}" alt="${featured.title}">
            <div class="map-card-info">
              <div>
                <h4 class="map-card-title">${featured.title}</h4>
                <div style="font-size:10px; color: var(--text-secondary);">${featured.location}</div>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="map-card-price">₹${featured.price}/slot</span>
                <button class="booking-card-qr-btn open-listing-from-map" data-id="${featured.id}" style="padding: 4px 8px; font-size: 10px;">View Space</button>
              </div>
            </div>
          `;
          DOM.mapFloatingCard.classList.add("active");
          
          // Click on map floating pass opens detail view
          document.querySelector(".open-listing-from-map").addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            openDetailView(id);
          });
        }
      });
    });

    // Dismiss floating card on clicking SVG empty background
    const svgMapRoot = document.getElementById("svg-interactive-map-root");
    if (svgMapRoot) {
      svgMapRoot.addEventListener("click", (e) => {
        if (e.target.tagName === "svg" || e.target.tagName === "rect" || e.target.tagName === "path") {
          DOM.mapFloatingCard.classList.remove("active");
        }
      });
    }
  }

  // Attach listing card actions (Detail view modal, Favorite heart toggle)
  function attachCardClickListeners() {
    const cards = document.querySelectorAll(".listing-card");
    cards.forEach(card => {
      card.addEventListener("click", (e) => {
        const listingId = card.getAttribute("data-id");
        
        // If clicking heart button, prevent opening modal and toggle favorite status
        const favBtn = e.target.closest(".favorite-btn");
        if (favBtn) {
          e.stopPropagation();
          toggleFavoriteAction(listingId, favBtn);
          return;
        }

        openDetailView(listingId);
      });
    });
  }

  // Toggle favorite list state
  function toggleFavoriteAction(listingId, element) {
    const newFavs = StorageController.toggleFavorite(listingId);
    appState.favorites = newFavs;
    
    // Toggle CSS styling class
    element.classList.toggle("active");
    
    // Smoothly re-render favorites grid if currently displaying favorites only
    const headerTitle = document.querySelector(".dashboard-content-box h2");
    if (headerTitle && headerTitle.innerText.includes("Saved Spaces")) {
      showFavoritesDashboard();
    }
  }

  // ====================================================
  // 4. INTERACTIVE PRICING MECHANISM (MODAL WIDGET)
  // ====================================================
  function openDetailView(id) {
    const listing = appState.listings.find(l => l.id === id);
    if (!listing) return;

    appState.currentDetailListing = listing;
    const isFav = appState.favorites.includes(listing.id);

    // Inject compiled components structure
    DOM.detailModalContentRoot.innerHTML = UIComponents.renderListingDetail(listing, isFav);
    DOM.detailViewModal.classList.add("active");

    // Close any search menu dropdowns
    closeSearchDropdowns();

    // Bind local pricing calculator inside widget
    setupBookingWidgetCalculator();
  }

  function setupBookingWidgetCalculator() {
    const widget = document.getElementById("booking-widget-panel");
    if (!widget) return;

    const basePrice = appState.currentDetailListing.price;
    const slotSelect = document.getElementById("booking-slot");
    const checkoutBtn = document.getElementById("initiate-checkout-btn");
    const addonsChecks = document.querySelectorAll(".addon-check");

    function calculateTotal() {
      // Slot Multiplier adjustment (e.g. Full day slot is 1.8x base pricing)
      const selectedOpt = slotSelect.options[slotSelect.selectedIndex];
      const mult = parseFloat(selectedOpt.getAttribute("data-mult")) || 1.0;
      
      const slotPrice = Math.round(basePrice * mult);
      
      // Compute add-ons
      let addonsSum = 0;
      let selectedAddons = [];
      addonsChecks.forEach(check => {
        if (check.checked) {
          addonsSum += parseInt(check.getAttribute("data-price"));
          selectedAddons.push(check.value);
        }
      });

      const convenienceCharge = 49;
      const grandTotal = slotPrice + addonsSum + convenienceCharge;

      // Update DOM nodes
      document.getElementById("price-slot-desc").innerText = `₹${basePrice} x slot duration (${selectedOpt.text.split(" ")[0]})`;
      document.getElementById("price-slot-total").innerText = `₹${slotPrice}`;
      
      const addonsRow = document.getElementById("price-addons-row");
      if (addonsSum > 0) {
        addonsRow.style.display = "flex";
        document.getElementById("price-addons-total").innerText = `₹${addonsSum}`;
      } else {
        addonsRow.style.display = "none";
      }

      document.getElementById("booking-grand-total").innerText = `₹${grandTotal}`;
      widget.setAttribute("data-grand-total", grandTotal);
      widget.setAttribute("data-addons", JSON.stringify(selectedAddons));
    }

    // Attach local triggers
    slotSelect.addEventListener("change", calculateTotal);
    addonsChecks.forEach(c => c.addEventListener("change", calculateTotal));

    // Handle heart toggle inside detailed modal
    const detailFavBtn = DOM.detailModalContentRoot.querySelector(".favorite-btn");
    if (detailFavBtn) {
      detailFavBtn.addEventListener("click", () => {
        toggleFavoriteAction(appState.currentDetailListing.id, detailFavBtn);
        // Refresh explorer main grid background to match
        renderListings();
      });
    }

    // Click on Book Passes opens Checkout system
    checkoutBtn.addEventListener("click", () => {
      const dateVal = document.getElementById("booking-date").value;
      const slotVal = slotSelect.value;
      const guestsVal = document.getElementById("booking-guests").value;
      const grandTotal = parseInt(widget.getAttribute("data-grand-total"));
      const addons = JSON.parse(widget.getAttribute("data-addons") || "[]");

      openCheckoutFlow({
        listingId: appState.currentDetailListing.id,
        date: dateVal,
        slot: slotVal,
        guests: guestsVal,
        addons: addons,
        price: grandTotal
      });
    });
  }

  // ====================================================
  // 5. UPI SECURE CHECKOUT FLOW & PASS TICKET
  // ====================================================
  let activeCheckoutData = null;

  function openCheckoutFlow(bookingData) {
    activeCheckoutData = bookingData;
    
    // Load grand total into payment view
    DOM.upiPriceDisplay.innerText = `₹${bookingData.price}`;
    
    // Generate functional inline SVG QR Code representing payment deep-link
    DOM.checkoutUpiQrPlaceholder.innerHTML = UIComponents.generateMockQRCode(`upi://pay?pa=pay@pausehour&am=${bookingData.price}`);
    
    // Direct modal visibility states
    DOM.detailViewModal.classList.remove("active");
    DOM.checkoutStepPay.classList.add("active");
    DOM.checkoutStepSuccess.classList.remove("active");
    DOM.checkoutViewModal.classList.add("active");
  }

  function handleCheckoutApproval() {
    if (!activeCheckoutData) return;

    // Simulate animated secure UPI transaction delay
    DOM.confirmMockPaymentBtn.innerText = "Verifying UPI Transaction...";
    DOM.confirmMockPaymentBtn.disabled = true;

    setTimeout(() => {
      const listing = appState.listings.find(l => l.id === activeCheckoutData.listingId);
      const uniqueRef = "PH-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      
      const newBooking = {
        id: uniqueRef,
        listingId: activeCheckoutData.listingId,
        date: activeCheckoutData.date,
        slot: activeCheckoutData.slot,
        guests: activeCheckoutData.guests,
        addons: activeCheckoutData.addons,
        price: activeCheckoutData.price,
        isUpcoming: true
      };

      // Commit to LocalStorage
      StorageController.addBooking(newBooking);
      appState.bookings.unshift(newBooking);

      // Populate Digital entry pass ticket details
      DOM.ticketRefId.innerText = `REF: #${uniqueRef}`;
      DOM.ticketSpaceTitle.innerText = listing.title;
      DOM.ticketDate.innerText = formatDate(activeCheckoutData.date);
      
      const slotsMap = {
        morning: "Morning (06AM - 12PM)",
        afternoon: "Afternoon (12PM - 06PM)",
        evening: "Evening (06PM - 12AM)",
        fullday: "Full Day Pass (06AM - 10PM)"
      };
      DOM.ticketSlot.innerText = slotsMap[activeCheckoutData.slot];
      DOM.ticketGuests.innerText = `${activeCheckoutData.guests} Guest(s)`;
      DOM.ticketBaggage.innerText = activeCheckoutData.addons.length > 0 ? activeCheckoutData.addons.join(", ") : "None";

      // Render crisp Entry QR Code
      DOM.ticketQrCodePlaceholder.innerHTML = UIComponents.generateMockQRCode(JSON.stringify(newBooking));

      // Reset payment button state
      DOM.confirmMockPaymentBtn.innerText = "Simulate UPI Approve";
      DOM.confirmMockPaymentBtn.disabled = false;

      // Animate success screen transition
      DOM.checkoutStepPay.classList.remove("active");
      DOM.checkoutStepSuccess.classList.add("active");

    }, 1200); // Realistic 1.2s API wait time simulation
  }

  // Formatting date strings neatly
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // ====================================================
  // 6. DASHBOARDS ROUTER
  // ====================================================
  
  // Renders the User Bookings list
  function showBookingsDashboard() {
    DOM.accountDropdown.classList.remove("active");
    DOM.listingsGridRoot.closest(".container").style.display = "none";
    DOM.categoriesFilterBar.closest(".categories-wrapper").style.display = "none";
    DOM.dashboardWrapper.classList.add("active");

    const bookingsList = StorageController.getBookings();
    
    if (bookingsList.length === 0) {
      DOM.dashboardBookingsList.innerHTML = `
        <div class="dashboard-empty-state">
          ${UIComponents.getIcon('calendar')}
          <h3 style="font-family: var(--font-family-title); font-size: 18px; margin-bottom: 6px;">No Active Entry Passes</h3>
          <p style="font-size: 14px; margin-bottom: 16px;">Securely book dead hour lobbies or premium pools to start.</p>
          <button class="cta-button" id="explore-from-empty-dash-btn" style="width:auto; padding: 10px 24px;">Explore Spaces Now</button>
        </div>
      `;
      document.getElementById("explore-from-empty-dash-btn").addEventListener("click", hideDashboards);
      return;
    }

    let bookingsHtml = '';
    bookingsList.forEach(booking => {
      const listing = appState.listings.find(l => l.id === booking.listingId);
      if (listing) {
        bookingsHtml += UIComponents.renderBookingCard(booking, listing);
      }
    });

    DOM.dashboardBookingsList.innerHTML = bookingsHtml;

    // Attach Check-in QR pass click listeners
    const viewQrBtns = DOM.dashboardBookingsList.querySelectorAll(".view-qr-pass-btn");
    viewQrBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const bId = btn.getAttribute("data-booking-id");
        const bTarget = bookingsList.find(b => b.id === bId);
        const lTarget = appState.listings.find(l => l.id === bTarget.listingId);

        // Display check-in pass instantly inside success checkout layout modal
        DOM.ticketRefId.innerText = `REF: #${bTarget.id}`;
        DOM.ticketSpaceTitle.innerText = lTarget.title;
        DOM.ticketDate.innerText = formatDate(bTarget.date);
        
        const slotsMap = {
          morning: "Morning (06AM - 12PM)",
          afternoon: "Afternoon (12PM - 06PM)",
          evening: "Evening (06PM - 12AM)",
          fullday: "Full Day Pass (06AM - 10PM)"
        };
        DOM.ticketSlot.innerText = slotsMap[bTarget.slot];
        DOM.ticketGuests.innerText = `${bTarget.guests} Guest(s)`;
        DOM.ticketBaggage.innerText = bTarget.addons && bTarget.addons.length > 0 ? bTarget.addons.join(", ") : "None";
        DOM.ticketQrCodePlaceholder.innerHTML = UIComponents.generateMockQRCode(JSON.stringify(bTarget));

        DOM.checkoutStepPay.classList.remove("active");
        DOM.checkoutStepSuccess.classList.add("active");
        DOM.checkoutViewModal.classList.add("active");
      });
    });
  }

  // Display Favorites Dashboard inside the general dashboard layout wrapper
  function showFavoritesDashboard() {
    DOM.accountDropdown.classList.remove("active");
    hideDashboards();
    
    // Set Explore grid to filter favorites
    renderListings((allListings) => {
      return allListings.filter(l => appState.favorites.includes(l.id));
    });

    // Visually denote favorites category
    const headerTitle = document.createElement("div");
    headerTitle.id = "favorites-header-title";
    headerTitle.style.cssText = "margin-bottom:24px; padding-bottom:12px; border-bottom:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center; width:100%;";
    headerTitle.innerHTML = `
      <h2 style="font-family: var(--font-family-title); font-size: 24px; font-weight:800; color:var(--text-primary);">
        Your Saved Spaces (${appState.favorites.length})
      </h2>
      <button class="booking-card-qr-btn" id="exit-favorites-btn">Clear Filter</button>
    `;

    // Avoid double injecting header title
    const existing = document.getElementById("favorites-header-title");
    if (existing) existing.remove();

    DOM.listingsGridRoot.parentNode.insertBefore(headerTitle, DOM.listingsGridRoot);

    document.getElementById("exit-favorites-btn").addEventListener("click", () => {
      document.getElementById("favorites-header-title").remove();
      renderListings();
    });
  }

  function hideDashboards() {
    DOM.dashboardWrapper.classList.remove("active");
    DOM.listingsGridRoot.closest(".container").style.display = "block";
    DOM.categoriesFilterBar.closest(".categories-wrapper").style.display = "block";
    
    const existingFavHeader = document.getElementById("favorites-header-title");
    if (existingFavHeader) existingFavHeader.remove();
  }

  // ====================================================
  // 7. PARTNER PORTAL: LIST NEW DEAD HOUR AMENITY
  // ====================================================
  function handleHostListingSubmit() {
    const category = document.getElementById("host-category").value;
    const title = document.getElementById("host-title").value;
    const city = document.getElementById("host-city").value;
    const location = document.getElementById("host-location").value;
    const price = parseInt(document.getElementById("host-price").value);
    const hostName = document.getElementById("host-name").value;
    const desc = document.getElementById("host-description").value;

    // Collate amenities checks
    const checkedBoxes = document.querySelectorAll(".host-amenity-check");
    let selectedAmenities = [];
    checkedBoxes.forEach(box => {
      if (box.checked) {
        selectedAmenities.push({
          name: box.getAttribute("data-name"),
          icon: box.value
        });
      }
    });

    // Map Category to Preset high quality Unsplash photos
    const presetImages = categoryPresetImages[category] || categoryPresetImages.lobby;

    const newListingSpace = {
      id: `${category}-${Date.now()}`,
      title: title,
      category: category,
      rating: 5.0, // Pristine default rating
      reviewsCount: 0,
      city: city,
      location: location,
      lat: 20.0 + Math.random() * 8, // Randomized regional mock coordinate placing
      lng: 73.0 + Math.random() * 8,
      host: hostName,
      hostAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
      price: price,
      image: presetImages[0],
      gallery: presetImages,
      description: desc,
      amenities: selectedAmenities,
      transitTags: ["Host Verified", "Premium Amenity", "24/7 Desk"],
      targetAudience: "Transit Commuters & Premium Locals",
      ratingBreakdown: { cleanliness: 5.0, service: 5.0, value: 5.0 }
    };

    // Save to LocalStorage
    StorageController.saveListing(newListingSpace);

    // Refresh state listings database
    appState.listings = StorageController.getListings();

    // Close host simulator modal & reset form values
    DOM.hostPortalModal.classList.remove("active");
    DOM.hostSpaceForm.reset();

    // Re-render Explorer explore lists
    renderListings();
    renderMap();

    // Beautiful micro-interaction animation alert
    alert(`Congratulations! '${title}' has been listed. You can now book this space on the main explore grid.`);
  }

  // ====================================================
  // 8. EVENTS ROUTER BINDINGS
  // ====================================================
  function setupEventListeners() {
    
    // Light/Dark Theme Switcher
    DOM.themeToggle.addEventListener("click", () => {
      const htmlNode = document.documentElement;
      const currentTheme = htmlNode.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      htmlNode.setAttribute("data-theme", nextTheme);
    });

    // Account menu profile toggle dropdown
    DOM.userMenuTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      DOM.accountDropdown.classList.toggle("active");
    });

    // Close menus when clicking outside
    document.addEventListener("click", (e) => {
      if (!DOM.userMenuTrigger.contains(e.target)) {
        DOM.accountDropdown.classList.remove("active");
      }
    });

    // Categories filter pills triggers
    const pills = DOM.categoriesFilterBar.querySelectorAll(".category-pill");
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        
        appState.activeCategory = pill.getAttribute("data-category");
        hideDashboards();
        renderListings();
        renderMap();
      });
    });

    // Map split view toggle
    DOM.splitMapToggle.addEventListener("click", () => {
      appState.isSplitMap = !appState.isSplitMap;
      DOM.mainContentLayout.classList.toggle("split-view", appState.isSplitMap);
      DOM.mapToggleText.innerText = appState.isSplitMap ? "Hide Split Map" : "Show Split Map";
      
      // Redraw SVG dimensions inside layout shift
      if (appState.isSplitMap) {
        renderMap();
      }
    });

    // Brand logo returns back to main Explore grid
    DOM.brandLogoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      hideDashboards();
      appState.searchCity = "All";
      appState.activeCategory = "all";
      
      pills.forEach(p => p.classList.remove("active"));
      pills[0].classList.add("active");

      updateSearchInputsUI();
      renderListings();
      renderMap();
    });

    // Detail view modal close
    DOM.closeDetailModalBtn.addEventListener("click", () => {
      DOM.detailViewModal.classList.remove("active");
    });

    // Host modal simulation triggers
    DOM.hostPortalTrigger.addEventListener("click", () => {
      DOM.hostPortalModal.classList.add("active");
    });
    DOM.openHostSimulator.addEventListener("click", () => {
      DOM.hostPortalModal.classList.add("active");
    });
    DOM.closeHostModalBtn.addEventListener("click", () => {
      DOM.hostPortalModal.classList.remove("active");
    });

    // Handle host form submit
    DOM.hostSpaceForm.addEventListener("submit", handleHostListingSubmit);

    // Bookings Dashboard profile routes
    DOM.myBookingsTrigger.addEventListener("click", showBookingsDashboard);
    DOM.closeDashboardBtn.addEventListener("click", hideDashboards);

    // Favorites Saved spaces dashboard trigger
    DOM.openFavoritesTrigger.addEventListener("click", showFavoritesDashboard);

    // Checkout modal event handlers
    DOM.confirmMockPaymentBtn.addEventListener("click", handleCheckoutApproval);
    DOM.cancelCheckoutBtn.addEventListener("click", () => {
      DOM.checkoutViewModal.classList.remove("active");
    });
    DOM.closeSuccessCheckoutBtn.addEventListener("click", () => {
      DOM.checkoutViewModal.classList.remove("active");
      showBookingsDashboard();
    });

    // Search bar dropdown handlers (City selection & Slot choosing)
    DOM.searchLocationSec.addEventListener("click", (e) => {
      e.stopPropagation();
      DOM.cityDropdown.classList.toggle("active");
      DOM.slotDropdown.classList.remove("active");
    });

    DOM.searchSlotSec.addEventListener("click", (e) => {
      e.stopPropagation();
      DOM.slotDropdown.classList.toggle("active");
      DOM.cityDropdown.classList.remove("active");
    });

    // Listeners for city select
    const cityOptions = DOM.cityDropdown.querySelectorAll(".city-option");
    cityOptions.forEach(opt => {
      opt.addEventListener("click", (e) => {
        e.stopPropagation();
        const c = opt.getAttribute("data-value");
        appState.searchCity = c;
        updateSearchInputsUI();
        DOM.cityDropdown.classList.remove("active");
      });
    });

    // Listeners for time slots choice
    const slotOptions = DOM.slotDropdown.querySelectorAll(".slot-option");
    slotOptions.forEach(opt => {
      opt.addEventListener("click", (e) => {
        e.stopPropagation();
        slotOptions.forEach(s => s.classList.remove("active"));
        opt.classList.add("active");
        
        const sVal = opt.getAttribute("data-value");
        appState.searchSlot = sVal;
        updateSearchInputsUI();
        DOM.slotDropdown.classList.remove("active");
      });
    });

    // Search execution trigger
    DOM.executeSearchBtn.addEventListener("click", () => {
      appState.searchDate = DOM.searchDateInput.value;
      closeSearchDropdowns();
      hideDashboards();
      renderListings();
      renderMap();
    });

    // Global document clicks dismiss open search dropdown lists
    document.addEventListener("click", () => {
      closeSearchDropdowns();
    });
  }

  function closeSearchDropdowns() {
    DOM.cityDropdown.classList.remove("active");
    DOM.slotDropdown.classList.remove("active");
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startPauseHourApp);
} else {
  startPauseHourApp();
}
