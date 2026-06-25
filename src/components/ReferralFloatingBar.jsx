import React, { useState, useEffect } from 'react';
import { getWaitlistData, registerWaitlist, simulateReferral, subscribeWaitlist } from '../utils/waitlistStore';

const CopyIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ArrowUpIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const CloseIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const StarIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ReferralFloatingBar = ({ onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(getWaitlistData());
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeWaitlist((data) => {
      setUserData(data);
    });
    return unsubscribe;
  }, []);

  // Scroll spy to only show the floating bar when scrolled past the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (userData) {
        setIsVisible(true);
        return;
      }
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onOpenWaitlist) {
      onOpenWaitlist(email);
    }
  };

  const handleCopy = () => {
    if (!userData) return;
    const referralLink = `${window.location.origin}${window.location.pathname}?ref=${userData.referralCode}`;
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSimulate = () => {
    simulateReferral();
  };

  const getProgressPercentage = () => {
    if (!userData) return 0;
    if (userData.queuePosition <= 100) return 100;
    const totalDistance = 2400; 
    const distanceCovered = 2500 - userData.queuePosition;
    return Math.max(5, Math.min(95, (distanceCovered / totalDistance) * 100));
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="referral-floating-bar-wrapper"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9990,
          width: 'calc(100% - 32px)',
          maxWidth: userData ? '400px' : '520px',
          pointerEvents: 'auto',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {!userData ? (
          /* Scroll-triggered clean, minimal floating signup */
          <form 
            onSubmit={handleSubmit}
            className="floating-signup-form"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(13, 21, 39, 0.35)', 
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '999px',
              padding: '6px 6px 6px 20px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 255, 255, 0.02)',
              width: '100%',
              gap: '12px'
            }}
          >
            <input
              type="email"
              placeholder="enter email to waitlist..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flexGrow: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.04em',
                width: '60%'
              }}
            />
            <button 
              type="submit"
              style={{
                background: 'var(--color-accent)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                padding: '10px 24px',
                fontSize: '10px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(156, 129, 86, 0.2)',
                whiteSpace: 'nowrap'
              }}
            >
              join waitlist
            </button>
          </form>
        ) : (
          /* Tiny, ultra-elegant floating pill showing standings - Centered */
          <div
            className="floating-referral-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(13, 21, 39, 0.35)', 
              backdropFilter: 'blur(30px) saturate(200%)',
              WebkitBackdropFilter: 'blur(30px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '999px',
              padding: '6px 6px 6px 18px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              width: 'max-content',
              maxWidth: '100%',
              margin: '0 auto',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                spot #{userData.queuePosition}
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)', fontSize: '12px' }}>|</span>
              <span 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  fontSize: '11px', 
                  fontWeight: '700',
                  fontFamily: 'Courier New, monospace', 
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}
              >
                {userData.referralCode}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <button
                onClick={handleCopy}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '999px',
                  padding: '8px 14px',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                <CopyIcon size={10} />
                <span>{copied ? 'copied' : 'copy'}</span>
              </button>

              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  background: '#2563EB', 
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
                }}
              >
                <ArrowUpIcon size={12} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Standings details modal popup */}
      {showDetails && userData && (
        <div 
          className="referral-details-overlay"
          onClick={() => setShowDetails(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(13, 21, 39, 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="referral-details-modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--color-bg)',
              color: 'var(--color-charcoal)',
              border: '1px solid rgba(13, 21, 39, 0.08)',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '480px',
              padding: '44px 36px',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(13, 21, 39, 0.15)',
              animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowDetails(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(13, 21, 39, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                color: 'rgba(13, 21, 39, 0.6)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(13, 21, 39, 0.1)';
                e.currentTarget.style.color = 'var(--color-charcoal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(13, 21, 39, 0.05)';
                e.currentTarget.style.color = 'rgba(13, 21, 39, 0.6)';
              }}
            >
              <CloseIcon size={12} />
            </button>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: 'var(--color-accent)', display: 'block', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>
                Registry Standing
              </span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: '32px', color: 'var(--color-charcoal)', margin: 0, textTransform: 'lowercase', letterSpacing: '-0.015em' }}>
                your waitlist status.
              </h3>
            </div>

            {/* Stats Block */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', background: 'rgba(13, 21, 39, 0.03)', border: '1px solid rgba(13, 21, 39, 0.06)', borderRadius: '16px', padding: '24px', marginBottom: '28px' }}>
              <div style={{ borderRight: '1px solid rgba(13, 21, 39, 0.08)' }}>
                <span style={{ fontSize: '9px', color: 'rgba(13, 21, 39, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>Your Position</span>
                <h4 style={{ fontSize: '30px', fontWeight: '800', color: 'var(--color-accent)', marginTop: '4px', margin: 0, letterSpacing: '-0.02em' }}>
                  #{userData.queuePosition}
                </h4>
              </div>
              <div style={{ paddingLeft: '16px' }}>
                <span style={{ fontSize: '9px', color: 'rgba(13, 21, 39, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>Referred Clients</span>
                <h4 style={{ fontSize: '30px', fontWeight: '800', color: 'var(--color-charcoal)', marginTop: '4px', margin: 0, letterSpacing: '-0.02em' }}>
                  {userData.referralsCount}
                </h4>
              </div>
            </div>

            {/* Progress to Priority Tier */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(13, 21, 39, 0.7)', marginBottom: '8px', fontWeight: '600' }}>
                <span>Registry Progress</span>
                <strong style={{ color: 'var(--color-accent)' }}>{userData.queuePosition <= 100 ? 'Priority Tier Reached' : 'Standard Registry'}</strong>
              </div>
              <div style={{ height: '6px', background: 'rgba(13, 21, 39, 0.08)', borderRadius: '99px', overflow: 'hidden', position: 'relative' }}>
                <div 
                  style={{
                    height: '100%',
                    width: `${getProgressPercentage()}%`,
                    background: 'linear-gradient(90deg, var(--color-accent), #c5a880)',
                    borderRadius: '99px',
                    transition: 'width 0.8s ease-out'
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'rgba(13, 21, 39, 0.4)', marginTop: '6px', fontWeight: '600' }}>
                <span>Standard (#2500)</span>
                <span>Priority Tier (#100)</span>
              </div>
            </div>

            {/* Actions list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '14px 20px', background: 'rgba(156, 129, 86, 0.06)', border: '1px solid rgba(156, 129, 86, 0.15)', borderRadius: '12px', fontSize: '12px', color: 'rgba(13, 21, 39, 0.8)', textAlign: 'center', lineHeight: '1.5' }}>
                Invite friends using your link. Every friend who registers boosts your standing by <strong style={{ color: 'var(--color-accent)' }}>150 slots</strong>.
              </div>

              {/* Simulation button */}
              <button
                onClick={handleSimulate}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  borderRadius: '999px',
                  border: '1px solid var(--color-accent)',
                  padding: '12px',
                  background: 'transparent',
                  color: 'var(--color-accent)',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
              >
                <StarIcon size={10} />
                <span>Simulate Referral Boost</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ReferralFloatingBar;
