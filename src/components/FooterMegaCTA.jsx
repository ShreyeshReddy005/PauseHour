import React, { useState, useEffect } from 'react';
import poolLapImg from '../assets/pool_lap.png';
import spaMassageImg from '../assets/spa_massage.png';
import poolsideFbImg from '../assets/poolside_fb.png';
import lifestyleLoungerImg from '../assets/lifestyle_lounger.png';
import { getWaitlistData, registerWaitlist, simulateReferral, subscribeWaitlist } from '../utils/waitlistStore';

const FooterMegaCTA = ({ onShowRankings, onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(getWaitlistData());

  useEffect(() => {
    const unsubscribe = subscribeWaitlist((data) => {
      setUserData(data);
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    if (onOpenWaitlist) {
      onOpenWaitlist(email);
    }
  };

  const lifestyleItems = [
    { image: poolLapImg, caption: "pool side" },
    { image: spaMassageImg, caption: "steam cave" },
    { image: poolsideFbImg, caption: "garden dining" },
    { image: lifestyleLoungerImg, caption: "fresh juice" }
  ];

  return (
    <footer className="footer-sec">
      <div className="container">
        {/* Mega Headline & CTA */}
        <h2 className="footer-mega-headline reveal-text" style={{ textTransform: 'lowercase' }}>
          ready to pause?
        </h2>
        <div className="footer-cta-wrap reveal-text" style={{ display: 'flex', justifyContent: 'center' }}>
          {!userData ? (
            <form 
              onSubmit={handleSubmit} 
              className="hero-underline-form"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: '440px',
                margin: '0 auto',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                paddingBottom: '8px',
                transition: 'border-color 0.3s ease'
              }}
              onFocusCapture={(e) => e.currentTarget.style.borderBottomColor = 'var(--color-accent)'}
              onBlurCapture={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)'}
            >
              <input
                type="email"
                placeholder="enter your email address to waitlist..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flexGrow: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  padding: '8px 0',
                  textAlign: 'center',
                  letterSpacing: '0.04em'
                }}
              />
              <button 
                type="submit" 
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-accent)',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  padding: '8px 0 8px 16px',
                  transition: 'color 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                claim spot →
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease', padding: '24px 0' }}>
              <div style={{ color: '#22c55e', fontWeight: '700', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="success-check" style={{ width: '20px', height: '20px', fontSize: '10px' }}>✓</span> priority registry spot secured
              </div>
              <p style={{ color: 'var(--color-sand)', fontSize: '14px', margin: '0 0 24px 0', opacity: 0.9, lineHeight: '1.5', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>
                ₹1,000 launch credit reserved for <strong>{userData.email}</strong>. Your current standing is <strong>#{userData.queuePosition}</strong>.
              </p>
              <a 
                href="#leaderboard" 
                className="btn-pill btn-accent-outline"
                onClick={(e) => {
                  e.preventDefault();
                  if (onShowRankings) onShowRankings();
                }}
                style={{ padding: '12px 28px', fontSize: '10px', borderRadius: '999px', display: 'inline-flex', textDecoration: 'none' }}
              >
                view standings & boost rank →
              </a>
            </div>
          )}
        </div>

        {/* Lifestyle Photos Strip */}
        <div className="lifestyle-strip">
          {lifestyleItems.map((item, idx) => (
            <div key={idx} className="lifestyle-item">
              <div className="img-reveal-container lifestyle-img-wrap">
                <img src={item.image} alt={item.caption} className="img-reveal in-view" />
              </div>
              <span className="lifestyle-caption" style={{ textTransform: 'lowercase' }}>{item.caption}</span>
            </div>
          ))}
        </div>

        {/* Contact Block Grid */}
        <div className="footer-contact-grid">
          <div className="contact-block">
            <span className="contact-title">Locations</span>
            <p className="contact-address">
              Pause Hour HQ<br />
              Taj Deccan Lobby, Road No. 1<br />
              Banjara Hills, Hyderabad, TS 500034
            </p>
          </div>

          <div className="contact-block">
            <span className="contact-title">Say Hello</span>
            <a href="mailto:hello@pausehour.com" className="contact-link">
              hello@pausehour.com
            </a>
            <p className="contact-promise">
              * We respond to waitlist requests within 2 hours.
            </p>
          </div>

          <div className="contact-block">
            <span className="contact-title">Support</span>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="contact-link">
              WhatsApp Support ↗
            </a>
            <p className="contact-address">
              Direct live support for members.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Pause Hour. All rights reserved.
          </div>
          <div className="footer-socials">
            <a href="#instagram" className="social-link" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#twitter" className="social-link" onClick={(e) => e.preventDefault()}>Twitter</a>
            <a href="#linkedin" className="social-link" onClick={(e) => e.preventDefault()}>LinkedIn</a>
          </div>
          <div>
            Site by Antigravity Studio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMegaCTA;
