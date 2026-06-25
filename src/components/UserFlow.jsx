import React from 'react';

// Premium Monochromatic Lucide-Style Vector Icons
const DiscoverIcon = ({ className, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="4" />
    <path d="M12 18h.01" />
    <circle cx="12" cy="10" r="3" />
    <path d="m14 12 3 3" />
  </svg>
);

const ArriveIcon = ({ className, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M10 10h4v4h-4z" />
  </svg>
);

const WristbandIcon = ({ className, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2h4v3h-4zM10 19h4v3h-4z" />
    <rect x="6" y="5" width="12" height="14" rx="3" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 10.5v3" />
  </svg>
);

const AmenitiesIcon = ({ className, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 14c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M12 3a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
  </svg>
);

const DiningIcon = ({ className, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 22H2" />
    <path d="M21 3H3l9 10z" />
    <path d="M12 13v9" />
    <path d="M12 7.5h6" />
  </svg>
);

const DepartIcon = ({ className, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 18H3v-3c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v3h-3" />
    <path d="M6 11V7c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v4" />
    <path d="M9 16v-3" />
    <polyline points="16 17 20 13 16 9" />
    <line x1="20" y1="13" x2="11" y2="13" />
  </svg>
);

const UserFlow = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const steps = [
    {
      num: "01",
      title: "discover & book",
      desc: "discover in the app and book it instantly with your membership rate.",
      icon: DiscoverIcon,
      iconClass: "userflow-icon-phone"
    },
    {
      num: "02",
      title: "arrive & scan",
      desc: "visit the partner hotel, leave your bags securely at the desk, and scan the QR code to check in.",
      icon: ArriveIcon,
      iconClass: "userflow-icon-scan"
    },
    {
      num: "03",
      title: "wear the band",
      desc: "receive and wear a smart wrist band to unlock access to all partner facilities.",
      icon: WristbandIcon,
      iconClass: "userflow-icon-wristband"
    },
    {
      num: "04",
      title: "enjoy amenities",
      desc: "unwind and enjoy premium amenities like the rooftop infinity pool and luxury thermal spas.",
      icon: AmenitiesIcon,
      iconClass: "userflow-icon-amenities"
    },
    {
      num: "05",
      title: "redeem credits",
      desc: "use your inclusive F&B credits and enjoy premium fine dining by the pool or in the lounge.",
      icon: DiningIcon,
      iconClass: "userflow-icon-dining"
    },
    {
      num: "06",
      title: "relax & depart",
      desc: "relax in the quiet club lounge for as long as you like, then return the band and head out.",
      icon: DepartIcon,
      iconClass: "userflow-icon-depart"
    }
  ];

  return (
    <section id="user-flow" className="userflow-sec">
      <div className="container">
        
        {/* Header Block */}
        <div className="userflow-header">
          <span className="feature-kicker" style={{ color: 'var(--color-sand)' }}>
            User Flow
          </span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: 'clamp(32px, 4vw, 56px)', color: 'var(--color-white)', marginTop: '12px', marginBottom: '16px', textTransform: 'lowercase', letterSpacing: '-0.015em' }}>
            a seamless escape. from click to lounge.
          </h2>
        </div>

        {/* Steps Grid (3 columns, 2 rows) */}
        <div className="userflow-grid">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.num} className="userflow-card" onMouseMove={handleMouseMove}>
                {/* Large Backdrop Step Number */}
                <span className="userflow-step-bg">{step.num}</span>
                
                <div className="userflow-card-header">
                  <span className="userflow-step-num">{step.num}</span>
                  <div className="userflow-icon-wrap">
                    <IconComponent size={30} className={step.iconClass} />
                  </div>
                </div>
                <div className="userflow-card-body">
                  <h3 className="userflow-step-title">{step.title}</h3>
                  <p className="userflow-step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default UserFlow;
