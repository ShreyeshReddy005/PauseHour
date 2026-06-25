import React, { useState, useEffect } from 'react';

const Navbar = ({ lightNav = false, onShowRankings, onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy to highlight the active section link
  useEffect(() => {
    const handleScrollSpy = () => {
      const introSec = document.querySelector('#intro');
      const directorySec = document.querySelector('#directory');
      const featuresSec = document.querySelector('#features');
      const leaderboardSec = document.querySelector('#leaderboard');
      const storySec = document.querySelector('#story');
      const journalSec = document.querySelector('#journal');
      const scrollPos = window.scrollY + 120; // detection offset

      if (journalSec && journalSec.offsetTop <= scrollPos) {
        setActiveSection('journal');
      } else if (storySec && storySec.offsetTop <= scrollPos) {
        setActiveSection('story');
      } else if (leaderboardSec && leaderboardSec.offsetTop <= scrollPos) {
        setActiveSection('leaderboard');
      } else if (featuresSec && featuresSec.offsetTop <= scrollPos) {
        setActiveSection('features');
      } else if (directorySec && directorySec.offsetTop <= scrollPos) {
        setActiveSection('directory');
      } else if (introSec && introSec.offsetTop <= scrollPos) {
        setActiveSection('intro');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial run
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleMobileLinkClick = (selector) => {
    toggleMobileMenu();
    if (selector === '#leaderboard' && onShowRankings) {
      onShowRankings();
      return;
    }
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleClaimSpot = (e) => {
    e.preventDefault();
    if (onOpenWaitlist) {
      onOpenWaitlist('');
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ padding: '0 8px' }}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Pause Hour
          </a>

          <div className="navbar-links">
            <a 
              href="#intro" 
              className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`} 
              onClick={(e) => { e.preventDefault(); document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Philosophy
            </a>
            <a 
              href="#directory" 
              className={`nav-link ${activeSection === 'directory' ? 'active' : ''}`} 
              onClick={(e) => { e.preventDefault(); document.querySelector('#directory').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Hotels
            </a>
            <a 
              href="#features" 
              className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} 
              onClick={(e) => { e.preventDefault(); document.querySelector('#features').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Amenities
            </a>
            <a 
              href="#leaderboard" 
              className={`nav-link ${activeSection === 'leaderboard' ? 'active' : ''}`} 
              onClick={(e) => { e.preventDefault(); if (onShowRankings) onShowRankings(); }}
            >
              Rankings
            </a>
            <a 
              href="#story" 
              className={`nav-link ${activeSection === 'story' ? 'active' : ''}`} 
              onClick={(e) => { e.preventDefault(); document.querySelector('#story').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Story
            </a>
            <a 
              href="#journal" 
              className={`nav-link ${activeSection === 'journal' ? 'active' : ''}`} 
              onClick={(e) => { e.preventDefault(); document.querySelector('#journal').scrollIntoView({ behavior: 'smooth' }); }}
            >
              Journal
            </a>
            <button className="btn-pill btn-accent-outline" onClick={handleClaimSpot} style={{ padding: '8px 20px', fontSize: '11px', borderRadius: '9999px' }}>
              Claim Spot
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <div className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-links">
            <a href="#intro" className="mobile-menu-link" onClick={() => handleMobileLinkClick('#intro')}>
              Philosophy
            </a>
            <a href="#directory" className="mobile-menu-link" onClick={() => handleMobileLinkClick('#directory')}>
              Hotels
            </a>
            <a href="#features" className="mobile-menu-link" onClick={() => handleMobileLinkClick('#features')}>
              Amenities
            </a>
            <a href="#leaderboard" className="mobile-menu-link" onClick={() => handleMobileLinkClick('#leaderboard')}>
              Rankings
            </a>
            <a href="#story" className="mobile-menu-link" onClick={() => handleMobileLinkClick('#story')}>
              Story
            </a>
            <a href="#journal" className="mobile-menu-link" onClick={() => handleMobileLinkClick('#journal')}>
              Journal
            </a>
            <a href="#waitlist" className="mobile-menu-link" onClick={(e) => { toggleMobileMenu(); handleClaimSpot(e); }} style={{ color: 'var(--color-accent)' }}>
              Claim Spot
            </a>
          </div>
          <div className="mobile-menu-footer">
            <span className="navbar-logo" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.4)' }}>Pause Hour</span>
            <p style={{ color: 'var(--color-sand)', fontSize: '12px', marginTop: '8px', opacity: 0.6 }}>
              Hyderabad, India
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
