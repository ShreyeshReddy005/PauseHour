import React, { useState, useEffect } from 'react';
import rooftopPoolImg from '../assets/rooftop_pool_dusk.png';
import thermalSpaImg from '../assets/wellness_thermal_spa.png';
import newSpaMistImg from '../assets/new_hero_spa_mist.png';
import newDuskPoolImg from '../assets/new_hero_dusk_pool.png';
import { getWaitlistData, registerWaitlist, subscribeWaitlist } from '../utils/waitlistStore';

const Hero = ({ onShowRankings, onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(getWaitlistData());
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
    { src: thermalSpaImg, alt: "Indoor thermal bath pool with stone columns and rising steam" },
    { src: newSpaMistImg, alt: "Minimalist luxury thermal bath pool with sunlight streaming through tall windows" },
    { src: rooftopPoolImg, alt: "Boutique hotel rooftop infinity pool looking out over the city skyline at dusk" },
    { src: newDuskPoolImg, alt: "Luxury boutique hotel swimming pool at night with warm yellow underwater lights" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section id="hero" className="hero-sec" style={{ display: 'flex', alignItems: 'stretch' }}>
      <div className="hero-bg-media">
        {slideImages.map((slide, idx) => (
          <img 
            key={idx} 
            src={slide.src} 
            alt={slide.alt} 
            className={idx === currentSlide ? 'active' : ''} 
          />
        ))}
      </div>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Subtitle */}
          <div className="hero-subtitle reveal-text" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            fontSize: '11px', 
            letterSpacing: '0.28em', 
            color: '#FFFFFF', 
            textTransform: 'uppercase', 
            marginBottom: '24px',
            fontWeight: '700'
          }}>
            <span style={{ width: '20px', height: '1px', background: '#FFFFFF' }}></span>
            Pause Hour • Hyderabad
            <span style={{ width: '20px', height: '1px', background: '#FFFFFF' }}></span>
          </div>
 
          {/* Main Title */}
          <h1 className="hero-title reveal-text" style={{ textTransform: 'lowercase', marginBottom: '16px' }}>
            take a pause.
          </h1>
 
          {/* Subheading */}
          <h3 className="reveal-text" style={{ 
            fontSize: 'clamp(18px, 2.8vw, 26px)', 
            color: '#FFFFFF', 
            fontWeight: '600', 
            marginBottom: '28px', 
            textTransform: 'lowercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.25
          }}>
            swim in ITC Kohenur's rooftop pool or rest in Taj's gardens for an afternoon, without booking a room.
          </h3>
 
          {/* Description */}
          <p className="hero-desc reveal-text" style={{ margin: '0 auto', maxWidth: '620px', fontSize: 'clamp(15px, 1.3vw, 18px)', lineHeight: '1.65', color: '#FFFFFF', opacity: 0.95, textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)' }}>
            book swimming lanes, steam saunas, and outdoor dining tables by the hour. no room booking required.
          </p>

          {/* Waitlist Form - Centered at the bottom of hero with very good padding */}
          {!userData && (
            <div className="hero-waitlist-container reveal-text" style={{ marginTop: '56px', width: '100%', maxWidth: '440px', padding: '12px', zIndex: 10 }}>
              <form 
                onSubmit={handleSubmit} 
                className="hero-underline-form"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
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
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    padding: '8px 0 8px 16px',
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  join waitlist →
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Hero;
