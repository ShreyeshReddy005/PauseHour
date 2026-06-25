import React, { useState, useEffect } from 'react';
import { registerWaitlist } from '../utils/waitlistStore';

const CloseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CITIES_AND_HOTELS = {
  'Hyderabad': [
    'ITC Kohenur',
    'Park Hyatt',
    'Taj Krishna',
    'Taj Deccan',
    'Taj Falaknuma Palace',
    'Sheraton Hyderabad',
    'The Westin Mindspace',
    'Novotel Hyderabad Airport',
    'Other Hotel / Boutique Stay'
  ],
  'Bengaluru': [
    'The Leela Palace',
    'ITC Gardenia',
    'Taj West End',
    'Four Seasons Hotel',
    'Other Hotel / Boutique Stay'
  ],
  'Mumbai': [
    'The Taj Mahal Palace',
    'The St. Regis Mumbai',
    'JW Marriott Juhu',
    'The Oberoi Mumbai',
    'Other Hotel / Boutique Stay'
  ],
  'Delhi NCR': [
    'The Leela Palace Chanakyapuri',
    'The Lodhi',
    'Taj Palace',
    'The Oberoi Gurgaon',
    'Other Hotel / Boutique Stay'
  ]
};

const getCityForHotel = (hotelName) => {
  for (const [cityName, hotels] of Object.entries(CITIES_AND_HOTELS)) {
    if (hotels.includes(hotelName)) {
      return cityName;
    }
  }
  return '';
};

const WaitlistModal = ({ isOpen, onClose, initialType = 'Pool', prefilledEmail = '' }) => {
  const [city, setCity] = useState('');
  const [hotel, setHotel] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [queueNum, setQueueNum] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form states
      setIsSubmitted(false);
      setEmail(prefilledEmail);
      setCity('');
      setHotel('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, prefilledEmail]);

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    
    // Reset hotel if it doesn't belong to the newly selected city
    if (selectedCity && hotel) {
      const matchedCity = getCityForHotel(hotel);
      if (matchedCity !== selectedCity) {
        setHotel('');
      }
    }
  };

  const handleHotelChange = (e) => {
    const selectedHotel = e.target.value;
    setHotel(selectedHotel);
    
    // Auto-select city if a specific hotel is selected
    if (selectedHotel) {
      const matchedCity = getCityForHotel(selectedHotel);
      if (matchedCity) {
        setCity(matchedCity);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const params = new URLSearchParams(window.location.search);
    const refCode = params.get('ref');

    const regData = registerWaitlist(email, refCode);
    setQueueNum(regData.queuePosition);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  // Generate destination text for ticket receipt
  const getDestinationText = () => {
    const displayHotel = hotel ? hotel.toUpperCase() : 'ANY HOTEL';
    const displayCity = city ? city.toUpperCase() : 'ANY CITY';
    return `${displayHotel}, ${displayCity}`;
  };

  return (
    <div className="waitlist-modal-overlay" onClick={onClose}>
      <div className="waitlist-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="waitlist-modal-close" onClick={onClose}>
          <CloseIcon size={20} />
        </button>

        {!isSubmitted ? (
          <div className="waitlist-modal-form-wrap">
            <span className="waitlist-modal-kicker">Priority Registry</span>
            <h2 className="waitlist-modal-title">request access</h2>
            <p className="waitlist-modal-desc">
              Submit your email to join the Pause Hour private registry. Select your preferred city and hotel destination (optional) to customize your daytime access.
            </p>

            <form onSubmit={handleSubmit} className="waitlist-modal-form">
              
              {/* Email Address */}
              <div className="waitlist-field-group">
                <label className="waitlist-label">Your Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email to waitlist..."
                  className="waitlist-input"
                  required
                />
              </div>

              {/* City Selection */}
              <div className="waitlist-field-group">
                <label className="waitlist-label">Preferred City (Optional)</label>
                <div className="waitlist-select-wrapper">
                  <select 
                    value={city} 
                    onChange={handleCityChange}
                    className="waitlist-select"
                  >
                    <option value="">Optional (Any City)</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                  </select>
                </div>
              </div>

              {/* Hotel Selection */}
              <div className="waitlist-field-group">
                <label className="waitlist-label">Preferred Hotel Destination (Optional)</label>
                <div className="waitlist-select-wrapper">
                  <select 
                    value={hotel} 
                    onChange={handleHotelChange}
                    className="waitlist-select"
                  >
                    <option value="">Optional (Any Hotel)</option>
                    {city ? (
                      // Show only hotels in selected city
                      CITIES_AND_HOTELS[city].map((hName) => (
                        <option key={hName} value={hName}>{hName}</option>
                      ))
                    ) : (
                      // Group all hotels by city using optgroups
                      Object.entries(CITIES_AND_HOTELS).map(([cityName, hotels]) => (
                        <optgroup key={cityName} label={cityName}>
                          {hotels.map((hName) => (
                            <option key={hName} value={hName}>{hName}</option>
                          ))}
                        </optgroup>
                      ))
                    )}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="waitlist-submit-btn">
                Request Priority Access
              </button>

            </form>
          </div>
        ) : (
          <div className="waitlist-success-wrap" style={{ textAlign: 'center' }}>
            <div style={{ color: '#16a34a', fontWeight: '700', fontSize: '15px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span className="success-check">✓</span> waitlist request registered
            </div>

            {/* Retro Ticket Receipt */}
            <div className="boarding-ticket" style={{ fontFamily: 'Courier New, monospace', margin: '0 auto', maxWidth: '380px', '--ticket-cutout-bg': 'var(--color-bg)' }}>
              <div className="ticket-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="ticket-title" style={{ fontSize: '10px', color: 'var(--color-accent)' }}>PRIORITY WAITLIST</div>
                <div className="ticket-logo" style={{ fontSize: '10px', opacity: 0.5 }}>PH // REGISTRY</div>
              </div>
              
              <div className="ticket-divider-line" style={{ margin: '12px 0' }}></div>
              
              <div className="ticket-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '11px', textAlign: 'left' }}>
                <div className="ticket-col">
                  <span className="ticket-label" style={{ fontSize: '8px' }}>PASSENGER</span>
                  <span className="ticket-value" style={{ fontSize: '12px', wordBreak: 'break-all' }}>{email.split('@')[0].toUpperCase()}</span>
                </div>
                <div className="ticket-col">
                  <span className="ticket-label" style={{ fontSize: '8px' }}>ACCESS TYPE</span>
                  <span className="ticket-value" style={{ fontSize: '12px' }}>{initialType.toUpperCase()}</span>
                </div>
                <div className="ticket-col" style={{ gridColumn: 'span 2' }}>
                  <span className="ticket-label" style={{ fontSize: '8px' }}>DESTINATION SECTOR</span>
                  <span className="ticket-value" style={{ fontSize: '12px' }}>{getDestinationText()}</span>
                </div>
              </div>

              <div className="ticket-divider-line dashed" style={{ margin: '12px 0' }}></div>

              <div className="ticket-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4px' }}>
                <div className="ticket-queue-wrap" style={{ textAlign: 'left' }}>
                  <span className="ticket-label" style={{ fontSize: '8px' }}>QUEUE POSITION</span>
                  <span className="ticket-queue-num" style={{ fontSize: '20px', fontWeight: '800', color: 'var(--color-accent)' }}>#{queueNum}</span>
                </div>
                <div className="ticket-barcode" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <div className="barcode-stripes">
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '3px' }}></span>
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '2px' }}></span>
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '4px' }}></span>
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '2px' }}></span>
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '3px' }}></span>
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '1px' }}></span>
                    <span style={{ width: '2px' }}></span>
                  </div>
                  <div className="barcode-number" style={{ fontSize: '9px', opacity: 0.5 }}>PH-WAIT-{queueNum}</div>
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '13px', marginTop: '24px', lineHeight: '1.5' }}>
              We have secured your priority registry slot. Our concierge team will reach out to you at <strong>{email}</strong> as soon as access slots open.
            </p>

            <button className="waitlist-close-success-btn" onClick={onClose} style={{ marginTop: '24px' }}>
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default WaitlistModal;
