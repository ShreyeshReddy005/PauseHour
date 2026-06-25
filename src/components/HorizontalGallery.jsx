import React, { useState } from 'react';
import poolLapImg from '../assets/pool_lap.png';
import spaSanctuaryImg from '../assets/spa_sanctuary.png';
import diningImg from '../assets/dining_fb.png';
import lifestyleStillImg from '../assets/lifestyle_still.png';

const HorizontalGallery = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  const galleryItems = [
    { id: 1, image: poolLapImg, rotation: '-6deg', delay: '0s' },
    { id: 2, image: spaSanctuaryImg, rotation: '4deg', delay: '0.1s' },
    { id: 3, image: diningImg, rotation: '-3deg', delay: '0.2s' },
    { id: 4, image: lifestyleStillImg, rotation: '8deg', delay: '0.3s' }
  ];

  return (
    <section id="gallery" style={{ padding: '20px 0 100px', backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Scattered Cards Container */}
        <div className="photo-scatter-deck">
          {galleryItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`scatter-card card-${item.id}`}
              style={{ 
                animationDelay: item.delay
              }}
            >
              <div className="img-reveal-container scatter-img-wrap">
                <img 
                  src={item.image} 
                  alt="Curated Experience" 
                  className="img-reveal in-view"
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Get a Pause Pass Voucher Card */}
        <div className="pause-pass-container">
          <div className="pause-pass-card">
            
            {/* Voucher Left: Info */}
            <div className="pass-info">
              <div className="pass-badge">Exclusive Offer</div>
              <h3 className="pass-title" style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', letterSpacing: '-0.02em', fontSize: 'clamp(28px, 3.2vw, 42px)', color: 'var(--color-charcoal)' }}>get a pause pass.</h3>
              <p className="pass-desc" style={{ marginTop: '12px' }}>
                A premium bundled credit daypass for <strong>Pool</strong>, <strong>Spa</strong>, and <strong>F&B</strong> sessions. 
                Experience a complete midday escape at any of our 25 partner luxury hotels.
              </p>
            </div>

            {/* Voucher Right: Price & Reservation */}
            <div className="pass-checkout">
              <div className="pass-pricing" style={{ marginBottom: '20px' }}>
                <span className="price-old">₹5,500</span>
                <span className="price-new">₹2,999</span>
                <span className="price-label">all-inclusive rate</span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="pass-form">
                  <div 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      borderBottom: '1px solid rgba(13, 21, 39, 0.2)',
                      paddingBottom: '6px',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocusCapture={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-accent)'}
                    onBlurCapture={(e) => e.currentTarget.style.borderBottomColor = 'rgba(13, 21, 39, 0.2)'}
                  >
                    <input
                      type="email"
                      placeholder="enter email to reserve pass..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        flexGrow: 1,
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: 'var(--color-charcoal)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        padding: '6px 0',
                        letterSpacing: '0.04em',
                        width: '60%'
                      }}
                    />
                    <button 
                      type="submit" 
                      style={{ 
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-accent)',
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        cursor: 'pointer',
                        padding: '6px 0 6px 12px',
                        transition: 'color 0.3s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      reserve pass →
                    </button>
                  </div>
                </form>
              ) : (
                <div className="pass-success-message fade-in" style={{ border: '1px solid rgba(22, 163, 74, 0.15)', background: 'rgba(22, 163, 74, 0.03)' }}>
                  <span className="success-check">✓</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--color-charcoal)' }}>Pass Slot Locked</strong>
                    <span style={{ fontSize: '11px', color: 'rgba(13, 21, 39, 0.6)' }}>Details sent to {email}</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HorizontalGallery;
