import React from 'react';
import poolImg from '../assets/hero_luxury_pool.png';
import cabanaImg from '../assets/poolside_fb.png'; // poolside dining/leisure
import spaImg from '../assets/spa_sanctuary.png'; // wellness spa

const ProductFeatures = () => {
  const features = [
    {
      kicker: "01 / WFH & Deep Focus",
      title: "swap your desk for a poolside canopy.",
      desc: "Upgrade your remote work environment. Gain access to quiet poolside loungers, five-star Wi-Fi, and executive club lounges. Experience deep focus surrounded by gardens and cooling waters.",
      image: poolImg,
      reverse: false
    },
    {
      kicker: "02 / The Mid-Day Reset",
      title: "decompress between your appointments.",
      desc: "Recharge your focus in the middle of a busy workday. Take a quick refreshing swim, access steam chambers, or unwind in quiet relaxation zones between meetings.",
      image: spaImg,
      reverse: true
    },
    {
      kicker: "03 / Micro-Vacations",
      title: "five-star resort living, for an afternoon.",
      desc: "Indulge in resort-style luxury without the commitment of an overnight stay. Enjoy garden dining, fresh juices, and massage therapies on your own terms.",
      image: cabanaImg,
      reverse: false
    }
  ];

  return (
    <section id="features" className="features-sec" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(80px, 8vw, 120px)' }}>
          <span className="feature-kicker">Daylight Rituals</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: '6px', letterSpacing: '-0.015em', textTransform: 'lowercase', color: 'var(--color-charcoal)' }}>
            escapes built for your day.
          </h2>
          <p style={{ color: 'var(--color-charcoal)', opacity: 0.7, fontSize: '15px', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.6' }}>
            integrate five-star relaxation into your daily schedule. whether you need a quiet space to focus, a mid-day reset, or a weekend micro-vacation.
          </p>
        </div>

        {/* Block 1 */}
        <div className="feature-block">
          <div className="feature-img-column">
            <div className="img-reveal-container feature-img-wrap">
              <img src={features[0].image} alt="WFH & Deep Focus" className="img-reveal in-view" />
            </div>
          </div>
          <div className="feature-info-column">
            <span className="feature-kicker">{features[0].kicker}</span>
            <h3 className="feature-title" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', textTransform: 'lowercase', letterSpacing: '-0.015em', marginTop: '6px' }}>{features[0].title}</h3>
            <p className="feature-desc" style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '15px', lineHeight: '1.6', marginTop: '20px' }}>{features[0].desc}</p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="feature-block reverse">
          <div className="feature-img-column">
            <div className="img-reveal-container feature-img-wrap">
              <img src={features[1].image} alt="The Mid-Day Reset" className="img-reveal in-view" />
            </div>
          </div>
          <div className="feature-info-column">
            <span className="feature-kicker">{features[1].kicker}</span>
            <h3 className="feature-title" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', textTransform: 'lowercase', letterSpacing: '-0.015em', marginTop: '6px' }}>{features[1].title}</h3>
            <p className="feature-desc" style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '15px', lineHeight: '1.6', marginTop: '20px' }}>{features[1].desc}</p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="feature-block">
          <div className="feature-img-column">
            <div className="img-reveal-container feature-img-wrap">
              <img src={features[2].image} alt="Weekend Micro-Vacations" className="img-reveal in-view" />
            </div>
          </div>
          <div className="feature-info-column">
            <span className="feature-kicker">{features[2].kicker}</span>
            <h3 className="feature-title" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', textTransform: 'lowercase', letterSpacing: '-0.015em', marginTop: '6px' }}>{features[2].title}</h3>
            <p className="feature-desc" style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '15px', lineHeight: '1.6', marginTop: '20px' }}>{features[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
