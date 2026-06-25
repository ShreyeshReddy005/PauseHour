import React, { useState } from 'react';

const ReferralFloatingBar = ({ onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onOpenWaitlist) {
      onOpenWaitlist(email);
    }
  };

  return (
    <div 
      className="referral-floating-bar-wrapper"
      style={{
        position: 'fixed',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9990,
        width: 'calc(100% - 32px)',
        maxWidth: '540px',
        pointerEvents: 'auto',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Translucent glassmorphic floating signup bar with blue button */}
      <form 
        onSubmit={handleSubmit}
        className="floating-signup-form"
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(13, 21, 39, 0.45)', /* Translucent glass navy */
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)', /* Clean glass border */
          borderRadius: '999px',
          padding: '8px 8px 8px 24px', /* Taller, spacious proportions */
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25), 0 0 1px rgba(255, 255, 255, 0.05)',
          width: '100%',
          gap: '16px'
        }}
      >
        <input
          type="email"
          placeholder="enter email to request pass..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flexGrow: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#FFFFFF',
            fontSize: '13px', /* Slightly larger font for readability */
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.04em',
            padding: '8px 0',
            width: '60%'
          }}
        />
        <button 
          type="submit"
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          style={{
            background: isBtnHovered ? '#1d4ed8' : '#2563EB', /* Solid blue button with deeper blue hover */
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '999px',
            padding: '12px 28px', /* Generous, premium button sizing */
            fontSize: '11px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: isBtnHovered 
              ? '0 4px 16px rgba(37, 99, 235, 0.4)' 
              : '0 4px 12px rgba(37, 99, 235, 0.2)',
            whiteSpace: 'nowrap'
          }}
        >
          request pass
        </button>
      </form>
    </div>
  );
};

export default ReferralFloatingBar;
