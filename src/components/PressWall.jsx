import React, { useState } from 'react';
import poolLapImg from '../assets/pool_lap.png';
import spaMassageImg from '../assets/spa_massage.png';
import poolsideFbImg from '../assets/poolside_fb.png';
import lifestyleStillImg from '../assets/lifestyle_still.png';

const PressWall = () => {
  const [activePress, setActivePress] = useState(0);

  const pressClips = [
    {
      source: "condé nast traveller",
      logoText: "CN TRAVELLER",
      quote: "“Pause Hour is making luxury hotel amenities accessible to everyone, by the hour.”",
      image: poolLapImg,
      link: "https://www.cntraveller.in"
    },
    {
      source: "architectural digest",
      logoText: "ARCHITECTURAL DIGEST",
      quote: "“An absolute game-changer for remote workers seeking a premium change of scenery.”",
      image: spaMassageImg,
      link: "https://www.architecturaldigest.in"
    },
    {
      source: "the lister",
      logoText: "THE LISTER",
      quote: "“The ultimate mid-week recharge button. Five-star pools and spas are now a tap away.”",
      image: poolsideFbImg,
      link: "https://www.lister.com"
    },
    {
      source: "elite hospitality",
      logoText: "ELITE HOSPITALITY",
      quote: "“Say goodbye to overnight rates. Access premium swimming facilities for just a few quiet hours.”",
      image: lifestyleStillImg,
      link: "https://www.elitehospitality.com"
    }
  ];

  return (
    <section className="press-sec" style={{ padding: '80px 0', backgroundColor: 'var(--color-charcoal)', color: 'var(--color-bg)' }}>
      <div className="container">
        <h4 className="press-title" style={{ textAlign: 'center', marginBottom: '64px' }}>What they say</h4>
        
        {/* Logos Row */}
        <div className="press-logos-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
          {pressClips.map((clip, idx) => (
            <button
              key={idx}
              className={`press-logo-btn ${activePress === idx ? 'active' : ''}`}
              onClick={() => setActivePress(idx)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(14px, 1.8vw, 22px)',
                letterSpacing: '0.12em',
                fontWeight: '700',
                color: activePress === idx ? 'var(--color-white)' : 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'opacity var(--transition-fast), color var(--transition-fast)'
              }}
            >
              {clip.logoText}
            </button>
          ))}
        </div>

        {/* Expandable Quote/Clip Box */}
        <div className="press-quote-box" style={{ maxWidth: '700px', margin: '40px auto 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '32px' }}>
          <p className="press-quote" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '600', fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--color-white)', lineHeight: '1.4', marginBottom: '16px', letterSpacing: '-0.015em' }}>{pressClips[activePress].quote}</p>
          <a 
            href={pressClips[activePress].link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="press-source text-swap"
            style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em' }}
          >
            <span className="text-swap-label">— {pressClips[activePress].source}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PressWall;
