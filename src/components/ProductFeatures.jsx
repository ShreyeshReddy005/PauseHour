import React from 'react';
import transitImg from '../assets/feature_transit_traveller.png';
import localImg from '../assets/feature_local_escape.png';
import corporateImg from '../assets/feature_corporate_relief.png';

const ProductFeatures = () => {
  const features = [
    {
      kicker: "01 / Transit Travellers",
      title: "freshen up and recharge between connections.",
      desc: "Skip the crowded airport lounge. If you have a long layover, book a spa pass to take a hot shower, rest in quiet relaxation rooms, or catch up on work before your next flight, without paying for an overnight hotel room.",
      image: transitImg,
      reverse: false
    },
    {
      kicker: "02 / Locals & Staycationers",
      title: "enjoy a resort afternoon in your own city.",
      desc: "You don't need a full weekend trip to escape the city noise. Spend a quiet afternoon swimming laps in outdoor pools, dining with friends in lush hotel gardens, or reading by the poolside, and head back home by dinner.",
      image: localImg,
      reverse: true
    },
    {
      kicker: "03 / Corporate Employees",
      title: "a premium relief for the workday grind.",
      desc: "Ditch the noisy coffee shop and office cubicle. Swap your screen view for open gardens, work from poolside tables with high-speed internet, or take a quick steam sauna reset between stressful meetings to clear your head.",
      image: corporateImg,
      reverse: false
    }
  ];

  return (
    <section id="features" className="features-sec" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="features-header">
          <span className="feature-kicker">Daylight Rituals</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: '6px', letterSpacing: '-0.015em', textTransform: 'lowercase', color: 'var(--color-charcoal)' }}>
            escapes built for your day.
          </h2>
          <p style={{ color: 'var(--color-charcoal)', opacity: 0.7, fontSize: '15px', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.6' }}>
            take a few hours to unwind during your busy week. use a quiet space to focus on work, take a quick swim, or spend a slow afternoon outdoors.
          </p>
        </div>

        {/* Block 1 */}
        <div className="feature-block">
          <div className="feature-img-column">
            <div className="img-reveal-container feature-img-wrap">
              <img src={features[0].image} alt="Transit Travellers" className="img-reveal in-view" />
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
              <img src={features[1].image} alt="Locals & Staycationers" className="img-reveal in-view" />
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
              <img src={features[2].image} alt="Corporate Employees" className="img-reveal in-view" />
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
