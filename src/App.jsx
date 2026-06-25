import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import HorizontalGallery from './components/HorizontalGallery';
import HotelDirectory from './components/HotelDirectory';
import ProductFeatures from './components/ProductFeatures';
import UserFlow from './components/UserFlow';
import TrustStory from './components/TrustStory';
import JournalCards from './components/JournalCards';
import FAQ from './components/FAQ';
import PressWall from './components/PressWall';
import FooterMegaCTA from './components/FooterMegaCTA';
import WaitlistModal from './components/WaitlistModal';
import Leaderboard from './components/Leaderboard';
import ReferralFloatingBar from './components/ReferralFloatingBar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistType, setWaitlistType] = useState('Pool');
  const [prefilledEmail, setPrefilledEmail] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const openWaitlistModal = (type, email = '') => {
    setWaitlistType(type);
    setPrefilledEmail(email);
    setIsWaitlistOpen(true);
  };

  const toggleLeaderboard = (show) => {
    setShowLeaderboard(show);
    if (show) {
      setTimeout(() => {
        const element = document.querySelector('#leaderboard');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };

  // Refresh ScrollTrigger when leaderboard visibility changes
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [showLeaderboard]);

  // Capture and store referral codes on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get('ref');
    if (refCode) {
      sessionStorage.setItem('ph_referred_by', refCode);
    }
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    // 1. Text reveals
    const textElements = document.querySelectorAll('.reveal-text');
    textElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 2. Image reveals (scaling down)
    const imageElements = document.querySelectorAll('.img-reveal');
    imageElements.forEach((img) => {
      gsap.fromTo(img,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // 3. Subtle parallax on image scrolls
    const parallaxContainers = document.querySelectorAll('.img-reveal-container');
    parallaxContainers.forEach((container) => {
      const img = container.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }
    });

    // Refresh ScrollTrigger on layout shifts
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <Navbar 
        lightNav={false} 
        onShowRankings={() => toggleLeaderboard(true)} 
        onOpenWaitlist={(email) => openWaitlistModal('Priority', email)}
      />

      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <Hero 
          onShowRankings={() => toggleLeaderboard(true)} 
          onOpenWaitlist={(email) => openWaitlistModal('Priority', email)}
        />
        <EditorialIntro />
        <HorizontalGallery />
        <HotelDirectory />
        <ProductFeatures />
        {showLeaderboard && (
          <Leaderboard onClose={() => {
            document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => setShowLeaderboard(false), 800);
          }} />
        )}
        <UserFlow />
        <TrustStory />
        <JournalCards />
        <FAQ />
        <PressWall />
        <FooterMegaCTA 
          onShowRankings={() => toggleLeaderboard(true)} 
          onOpenWaitlist={(email) => openWaitlistModal('Priority', email)}
        />
      </main>
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
        initialType={waitlistType} 
        prefilledEmail={prefilledEmail}
      />
      <ReferralFloatingBar 
        onOpenWaitlist={(email) => openWaitlistModal('Priority', email)}
      />
    </>
  );
}

export default App;
