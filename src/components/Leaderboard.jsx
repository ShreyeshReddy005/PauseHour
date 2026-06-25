import React, { useState, useEffect } from 'react';
import { getLeaderboardStandings, getWaitlistData, subscribeWaitlist, simulateReferral } from '../utils/waitlistStore';

const Leaderboard = ({ onClose }) => {
  const [standings, setStandings] = useState(getLeaderboardStandings());
  const [userData, setUserData] = useState(getWaitlistData());
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('standing');

  useEffect(() => {
    // Subscribe to waitlist store updates to refresh the list automatically
    const unsubscribe = subscribeWaitlist((data) => {
      setUserData(data);
      setStandings(getLeaderboardStandings());
    });
    return unsubscribe;
  }, []);

  // Obscure email for privacy
  const formatEmail = (email) => {
    if (email === userData?.email) {
      return "you (registered)";
    }
    const [name, domain] = email.split('@');
    if (name.length <= 3) {
      return `${name[0]}***@${domain}`;
    }
    return `${name.substring(0, 3)}***${name[name.length - 1]}@${domain}`;
  };

  // Determine progress percentage to Top 100 (assuming 2500 is start, 100 is target)
  const getProgressPercentage = () => {
    if (!userData) return 0;
    if (userData.queuePosition <= 100) return 100;
    const totalDistance = 2400; // 2500 - 100
    const distanceCovered = 2500 - userData.queuePosition;
    return Math.max(5, Math.min(95, (distanceCovered / totalDistance) * 100));
  };

  return (
    <section id="leaderboard" className="leaderboard-sec" style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid rgba(13, 21, 39, 0.05)', position: 'relative' }}>
      
      {/* Dynamic Leaderboard Close Trigger */}
      {onClose && (
        <button 
          onClick={onClose}
          className="leaderboard-close-btn"
          title="Close Standings Panel"
        >
          ✕ Close Standings
        </button>
      )}

      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header Block */}
        <div className="leaderboard-header">
          <span className="feature-kicker">Registry Standings</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: 'clamp(32px, 4vw, 56px)', marginTop: '6px', letterSpacing: '-0.015em', textTransform: 'lowercase', color: 'var(--color-charcoal)' }}>
            climb to the top 100.
          </h2>
          <p style={{ color: 'var(--color-charcoal)', opacity: 0.7, fontSize: '15px', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.6' }}>
            refer friends to boost your standing. the top 100 waitlist candidates secure immediate early daylight access and our ₹1,000 launch credit.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div className="leaderboard-tabs-wrapper">
            <button 
              onClick={() => setActiveTab('standing')}
              className={`leaderboard-tab-btn ${activeTab === 'standing' ? 'active' : ''}`}
            >
              Your Standing
            </button>
            <button 
              onClick={() => setActiveTab('rankings')}
              className={`leaderboard-tab-btn ${activeTab === 'rankings' ? 'active' : ''}`}
            >
              Top Standings
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div style={{ maxWidth: '640px', margin: '0 auto', width: '100%' }}>
          {activeTab === 'standing' ? (
            userData ? (
              <div className="user-progress-card" style={{ animation: 'fadeIn 0.5s ease' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <span className="waitlist-modal-kicker" style={{ color: 'var(--color-accent)' }}>your position</span>
                      <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: '#FFFFFF', marginTop: '6px', letterSpacing: '-0.02em' }}>
                        {userData.queuePosition <= 100 ? 'priority access tier' : `rank #${userData.queuePosition}`}
                      </h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="waitlist-modal-kicker" style={{ color: 'var(--color-accent)' }}>invites verified</span>
                      <h3 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: '#FFFFFF', marginTop: '6px', letterSpacing: '-0.02em' }}>
                        {userData.referralsCount}
                      </h3>
                    </div>
                  </div>

                  {/* Progress bar to priority tier */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-sand)' }}>
                      <span>Standard Registry</span>
                      <span style={{ color: 'var(--color-accent)', fontWeight: '700' }}>Top 100 Priority Tier</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '99px', overflow: 'hidden', position: 'relative' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          width: `${getProgressPercentage()}%`, 
                          background: 'linear-gradient(90deg, var(--color-accent), #FFFFFF)', 
                          borderRadius: '99px',
                          transition: 'width 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                        }} 
                      />
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-sand)', opacity: 0.85, marginTop: '4px', textAlign: 'left' }}>
                      {userData.queuePosition <= 100 ? (
                        <span style={{ color: '#22c55e', fontWeight: '700' }}>✓ Congratulations! You are in the Top 100 Priority Tier. Early access secured.</span>
                      ) : (
                        <span>You need to refer approximately {Math.ceil((userData.queuePosition - 100) / 200)} more friends to break into the Top 100!</span>
                      )}
                    </div>
                  </div>

                  {/* Gamified Invite Milestones list */}
                  <div className="rewards-list" style={{ marginBottom: '24px' }}>
                    <div className={`reward-item ${userData.referralsCount >= 1 ? 'achieved' : ''}`}>
                      <span className="reward-checkbox">✓</span>
                      <span><strong>1 Referral</strong>: Priority pool access upgrade</span>
                    </div>
                    <div className={`reward-item ${userData.referralsCount >= 5 ? 'achieved' : ''}`}>
                      <span className="reward-checkbox">✓</span>
                      <span><strong>5 Referrals</strong>: Break into the Top 100 Priority Access tier</span>
                    </div>
                    <div className={`reward-item ${userData.referralsCount >= 10 ? 'achieved' : ''}`}>
                      <span className="reward-checkbox">✓</span>
                      <span><strong>10 Referrals</strong>: Founding Member black card status (fee waiver)</span>
                    </div>
                  </div>

                  {/* Dotted Divider */}
                  <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.12)', margin: '24px 0' }}></div>

                  {/* Referral sharing panel */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
                    <div>
                      <span className="waitlist-modal-kicker" style={{ color: 'var(--color-accent)', fontSize: '9px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>your exclusive invite link</span>
                      <p style={{ color: 'var(--color-sand)', fontSize: '12px', margin: '4px 0 12px 0', opacity: 0.75 }}>
                        share this link to refer friends and climb the rankings.
                      </p>
                    </div>

                    <div style={{ 
                      display: 'flex', 
                      background: 'rgba(255, 255, 255, 0.02)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)', 
                      borderRadius: '16px', 
                      padding: '8px 8px 8px 16px', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      gap: '12px' 
                    }}>
                      <span style={{ 
                        fontSize: '12px', 
                        fontFamily: 'Courier New, monospace', 
                        color: 'var(--color-sand)', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap', 
                        maxWidth: '68%',
                        opacity: 0.95
                      }}>
                        {`${window.location.origin}/?ref=${userData.referralCode}`}
                      </span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(`${window.location.origin}/?ref=${userData.referralCode}`);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        style={{ 
                          background: copied ? '#22c55e' : 'rgba(255,255,255,0.08)', 
                          border: 'none', 
                          color: copied ? '#121C33' : '#FFFFFF', 
                          fontSize: '10px', 
                          fontWeight: '700', 
                          cursor: 'pointer', 
                          padding: '10px 20px', 
                          whiteSpace: 'nowrap',
                          borderRadius: '999px',
                          transition: 'all 0.3s ease',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {copied ? '✓ Copied!' : 'Copy Link'}
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
                      <a 
                        href={`https://wa.me/?text=I%20just%20secured%20my%20spot%20on%20Pause%20Hour%20to%20book%20hotel%20pools%20and%20spas%20by%20the%20hour.%20Skip%20the%20queue%20using%20my%20invite%20link:%20${window.location.origin}/?ref=${userData.referralCode}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-pill" 
                        style={{ 
                          padding: '10px 20px', 
                          fontSize: '9px', 
                          background: 'rgba(255,255,255,0.04)', 
                          color: '#FFFFFF', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          borderRadius: '999px', 
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          fontWeight: '700',
                          textDecoration: 'none'
                        }}
                      >
                        WhatsApp
                      </a>

                      <a 
                        href={`https://twitter.com/intent/tweet?text=I%20just%20secured%20my%20spot%20on%20Pause%20Hour%20to%20book%20hotel%20pools%20and%20spas%20by%20the%20hour.%20Skip%20the%20queue%20using%20my%20invite%20link:%20${window.location.origin}/?ref=${userData.referralCode}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-pill" 
                        style={{ 
                          padding: '10px 20px', 
                          fontSize: '9px', 
                          background: 'rgba(255,255,255,0.04)', 
                          color: '#FFFFFF', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          borderRadius: '999px', 
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          fontWeight: '700',
                          textDecoration: 'none'
                        }}
                      >
                        Twitter / X
                      </a>
                      
                      <button 
                        onClick={simulateReferral}
                        className="btn-pill" 
                        style={{ 
                          padding: '10px 20px', 
                          fontSize: '9px', 
                          background: 'var(--color-accent)', 
                          color: '#121C33', 
                          border: 'none', 
                          borderRadius: '999px', 
                          marginLeft: 'auto', 
                          letterSpacing: '0.05em', 
                          cursor: 'pointer', 
                          fontWeight: '700',
                          textTransform: 'uppercase'
                        }}
                      >
                        Simulate Boost
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div style={{ background: 'var(--color-charcoal)', color: 'var(--color-bg)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '36px 30px', textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
                <span className="waitlist-modal-kicker" style={{ color: 'var(--color-accent)' }}>join the loop</span>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', marginTop: '6px', marginBottom: '12px' }}>
                  not on the waitlist yet?
                </h3>
                <p style={{ color: 'var(--color-sand)', fontSize: '13px', maxWidth: '420px', margin: '0 auto 20px', lineHeight: '1.6' }}>
                  register your email address at the top or bottom of the page to claim your ₹1,000 launch credit and get your referral code.
                </p>
                <a 
                  href="#hero" 
                  className="btn-pill btn-accent-outline" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ display: 'inline-flex', padding: '12px 28px', fontSize: '10px' }}
                >
                  Join Waitlist Now
                </a>
              </div>
            )
          ) : (
            <div className="leaderboard-table-card" style={{ animation: 'fadeIn 0.5s ease' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-charcoal)', marginBottom: '24px', textTransform: 'lowercase', letterSpacing: '-0.01em' }}>
                top registry standings
              </h3>
              
              {/* Table */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {standings.map((standing) => {
                  const isUser = standing.email === userData?.email;
                  return (
                    <div 
                      key={standing.email} 
                      className={`leaderboard-row ${isUser ? 'user-active' : ''}`}
                    >
                      {/* Rank Badge */}
                      <span className="leaderboard-rank">
                        #{standing.rank}
                      </span>

                      {/* Member Email */}
                      <span className="leaderboard-email">
                        {formatEmail(standing.email)}
                      </span>

                      {/* Invites Count */}
                      <div className="leaderboard-stats">
                        <span className="leaderboard-invites">
                          {standing.referrals} {standing.referrals === 1 ? 'invite' : 'invites'}
                        </span>
                        {standing.position <= 100 ? (
                          <span className="leaderboard-badge leaderboard-badge-priority">
                            Priority
                          </span>
                        ) : (
                          <span className="leaderboard-badge leaderboard-badge-standard">
                            #{standing.position}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
