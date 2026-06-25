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
                We started Pause Hour because we wanted to use hotel pools and garden terraces without having to book a room. During the day, pools and steam rooms at hotels like Taj Krishna and ITC Kohenur are mostly empty. We partner with these hotels in Hyderabad to let you use their spaces by the hour.
              </p>
            </div>

            <div className="trust-narrative-block" style={{ marginTop: '48px' }}>
              <h3 className="reveal-text" style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(24px, 3vw, 40px)', textTransform: 'lowercase', letterSpacing: '-0.02em' }}>how it works.</h3>
              <p className="reveal-text" style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '15px', lineHeight: '1.6', marginTop: '20px' }}>
                Select the hotel near you—whether in Gachibowli, Banjara Hills, Jubilee Hills, Hitec City, or Falaknuma. Pick your time, check in on your phone, and head straight to the pool or deck. You skip the front desk queues and pay no sign-up fees.
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
