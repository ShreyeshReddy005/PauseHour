import React from 'react';
import curatorImg from '../assets/curator_portrait.png';

const TrustStory = () => {
  return (
    <section id="story" className="trust-sec" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="trust-grid">
          {/* Narratives Column */}
          <div className="trust-narratives">
            <span className="feature-kicker">Our Philosophy</span>
            
            <div className="trust-narrative-block" style={{ marginTop: '12px' }}>
              <h3 className="reveal-text" style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'lowercase', letterSpacing: '-0.02em' }}>luxury, minus the overnight price tag.</h3>
              <p className="reveal-text" style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '15px', lineHeight: '1.6', marginTop: '20px' }}>
                We started Pause Hour because we love hotel amenities—but we don't always need a room. The finest pools, saunas, and garden verandas at premium properties like Taj Krishna and ITC Kohenur sit quiet during the day. We partner with these top-tier hotels in Hyderabad to open up their facilities by the hour.
              </p>
            </div>

            <div className="trust-narrative-block" style={{ marginTop: '48px' }}>
              <h3 className="reveal-text" style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'lowercase', letterSpacing: '-0.02em' }}>how it works.</h3>
              <p className="reveal-text" style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '15px', lineHeight: '1.6', marginTop: '20px' }}>
                Just select your preferred hotel area—whether in Gachibowli, Banjara Hills, Jubilee Hills, Hitec City, or Falaknuma. Choose your experience, select a time slot, and check in digitally. Walk past the lobby directly to your destination. No long check-in queues, no membership fees.
              </p>
            </div>
          </div>

          {/* Imagery Column */}
          <div className="trust-img-column">
            <div className="img-reveal-container" style={{ aspectRatio: '3/4', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
              <img src={curatorImg} alt="Pause Hour Curator" className="img-reveal in-view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStory;
