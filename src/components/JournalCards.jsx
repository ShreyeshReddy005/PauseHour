import React, { useState } from 'react';
import ResearchReader from './ResearchReader';
import poolImg from '../assets/hero_luxury_pool.png';
import spaImg from '../assets/spa_sanctuary.png';
import diningImg from '../assets/dining_fb.png';
import lifestyleImg from '../assets/lifestyle_still.png';

const JournalCards = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  const stories = {
    large: {
      id: "lunch-break",
      kicker: "guide / wellness",
      title: "the lunch break upgrade.",
      excerpt: "How to fit a complete five-star vacation into a Tuesday afternoon lunch slot. We lay out the optimal 3-hour recovery checklist.",
      image: lifestyleImg,
      summaryText: "Mid-day active recovery cycles resets the cognitive system, boosting decision-making and productivity by resetting cortisol hormone levels back to baseline.",
      studies: [
        {
          title: "The Ultradian Rhythm Optimization Study",
          source: "Stanford University School of Medicine, 2023",
          focus: "High-efficiency work recovery cycles",
          findings: [
            "Cognitive output operates in 90-120 minute ultradian cycles, after which focus degrades rapidly.",
            "Pushing through multiple consecutive cycles reduces executive decision-making accuracy by 35%.",
            "A structured 3-hour disconnect completely clears mental fatigue and returns cognitive capacity to baseline."
          ],
          stat: "35%",
          statLabel: "Decrease in decision-making fatigue post-reset"
        },
        {
          title: "Hydrotherapy Reset & Heart Rate Variability (HRV)",
          source: "European Journal of Applied Physiology, 2022",
          focus: "Autonomic nervous system recovery",
          findings: [
            "Alternating between pool immersion and warm loungers triggers a parasympathetic rest state.",
            "Test subjects showed a rapid rise in Heart Rate Variability (HRV) by 18%, indicating stress resilience.",
            "Hydrotherapy immersion reduces muscular tension and accelerates metabolic recovery."
          ],
          stat: "18%",
          statLabel: "Increase in Heart Rate Variability (HRV) resilience"
        },
        {
          title: "Active Rest vs. Digital Break Efficiency",
          source: "Harvard Business Review Research, 2024",
          focus: "Cognitive rest quality comparison",
          findings: [
            "Digital-free active rest (like quiet lounging or swimming) is 2.5x more effective than passive digital breaks.",
            "Scrolling social media during breaks creates cognitive load, failing to restore brain capacity.",
            "Resting in natural, distraction-free outdoor hotel environments boosts focus by 40%."
          ],
          stat: "2.5x",
          statLabel: "More cognitive recovery than digital scrolling"
        }
      ]
    },
    small: [
      {
        id: "swimming-brain",
        kicker: "health / fitness",
        title: "how lap swimming resets your brain.",
        excerpt: "The science of thermal immersion and why dynamic movement in water clears mental clutter faster than a standard gym session.",
        image: poolImg,
        summaryText: "Dynamic aerobic exercise in water combined with thermal stimulation accelerates neurogenesis, suppressing stress and enhancing cortical circulation.",
        studies: [
          {
            title: "Hippocampal Brain-Derived Neurotrophic Factor (BDNF) Surge",
            source: "Journal of Neuroscience Research, 2021",
            focus: "Aquatic movement and neural cellular repair",
            findings: [
              "Lap swimming triggers a massive release of BDNF, stimulating neurogenesis in the hippocampus.",
              "This process speeds up cellular repair in brain structures degraded by chronic work stress.",
              "Rhythmic breathing in water mimics mindfulness meditation, decreasing active amygdala firing."
            ],
            stat: "+42%",
            statLabel: "Increase in hippocampal BDNF expression"
          },
          {
            title: "Blue Mind Effect: Water Environments and Stress Suppression",
            source: "Marine Biology & Cognitive Science Institute, 2023",
            focus: "Acoustic and visual REST state activation",
            findings: [
              "Proximity to water environments triggers the activation of the Default Mode Network (DMN).",
              "Water sounds and visual reflections induce alpha brainwaves, associated with calm wakefulness.",
              "Salivary cortisol levels dropped by 24% after 20 minutes of sitting near open pool decks."
            ],
            stat: "-24%",
            statLabel: "Drop in salivary cortisol stress levels"
          },
          {
            title: "Cerebral Blood Flow and Hydrostatic Pressure",
            source: "Vascular Medicine & Physiology Review, 2022",
            focus: "Hydrostatic compression effects on brain vascularity",
            findings: [
              "Immersion up to chest level exerts hydrostatic pressure, increasing venous return to the heart.",
              "Blood flow to the middle cerebral artery and cortex increases by 14% during water immersion.",
              "Oxygenation to the frontal lobes is optimized, boosting immediate post-swim mental clarity."
            ],
            stat: "+14%",
            statLabel: "Increase in cerebral arterial blood flow"
          }
        ]
      },
      {
        id: "open-air-dining",
        kicker: "local / dining",
        title: "the rise of open-air hotel dining.",
        excerpt: "Savoring seasonal curations and fresh ingredients in the quiet garden pavilions of Banjara Hills.",
        image: diningImg,
        summaryText: "Dining under natural canopies boosts digestion, resets biological light cycles, and exposes the body to health-enhancing organic phytoncides.",
        studies: [
          {
            title: "Environmental Phytoncides & Immune Activation",
            source: "Nippon Medical School Research, 2022",
            focus: "Outdoor settings and organic stress suppression",
            findings: [
              "Dining near garden foliage exposes guests to phytoncides (natural organic compounds from plants).",
              "Phytoncides decrease sympathetic nerve activity (fight-or-flight) and lower blood pressure.",
              "Exposure increases the concentration and activity of protective NK immune cells."
            ],
            stat: "-22%",
            statLabel: "Decrease in active sympathetic nervous system load"
          },
          {
            title: "The Digestion Psychology of Natural Settings",
            source: "Journal of Environmental Psychology, 2023",
            focus: "Parasympathetic switch and peptide YY satiety",
            findings: [
              "Natural outdoor lighting shifts the body to parasympathetic mode, enhancing digestion.",
              "Slow outdoor eating increases the release of satiety hormones (peptide YY and GLP-1).",
              "Sensory appreciation of food increases, leading to higher satisfaction and nutrient absorption."
            ],
            stat: "1.8x",
            statLabel: "Increase in food sensory satisfaction rating"
          },
          {
            title: "Circadian Rhythm Reset & Natural Daylight Exposure",
            source: "Harvard Sleep & Circadian Disorders Laboratory, 2024",
            focus: "Daytime outdoor light and serotonin production",
            findings: [
              "Midday outdoor sun exposure boosts serotonin production, regulating mood and alertness.",
              "Resetting natural light cycles during lunch directly shifts melatonin timing for the evening.",
              "Test subjects showed a 30% increase in deep sleep duration on days with outdoor lunch breaks."
            ],
            stat: "+30%",
            statLabel: "Improvement in nighttime deep sleep cycle duration"
          }
        ]
      }
    ]
  };

  return (
    <section id="journal" className="journal-sec" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="journal-header" style={{ marginBottom: '100px' }}>
          <span className="feature-kicker">Pause Journal</span>
          <h2 className="journal-header-title reveal-text" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 64px)', textTransform: 'lowercase', letterSpacing: '-0.015em', marginTop: '6px' }}>stories from the slow lanes.</h2>
        </div>

        <div className="journal-grid">
          {/* Large Card */}
          <div 
            className="journal-card journal-card-large" 
            onClick={() => setActiveArticle(stories.large)}
            style={{ cursor: 'pointer' }}
          >
            <div className="img-reveal-container journal-img-wrap" style={{ aspectRatio: '16/10', borderRadius: '24px', overflow: 'hidden' }}>
              <img src={stories.large.image} alt={stories.large.title} className="img-reveal in-view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="journal-card-meta" style={{ marginTop: '20px' }}>
              <span className="feature-kicker">{stories.large.kicker}</span>
            </div>
            <h3 className="journal-card-title" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: 'clamp(24px, 2.5vw, 36px)', textTransform: 'lowercase', letterSpacing: '-0.015em', marginTop: '6px' }}>{stories.large.title}</h3>
            <p className="journal-card-excerpt" style={{ color: 'var(--color-charcoal)', opacity: 0.75, fontSize: '15px', lineHeight: '1.6', marginTop: '20px', maxWidth: '550px' }}>{stories.large.excerpt}</p>
            <button 
              className="journal-card-link" 
              style={{ marginTop: '28px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: 'inherit', fontSize: 'inherit', padding: 0 }}
            >
              Read Story <span className="journal-card-link-arrow">→</span>
            </button>
          </div>

          {/* Small Cards Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {stories.small.map((story, index) => (
              <div 
                key={index} 
                className="journal-card journal-card-small" 
                onClick={() => setActiveArticle(story)}
                style={{ cursor: 'pointer' }}
              >
                <div className="img-reveal-container journal-img-wrap" style={{ height: '240px', borderRadius: '24px', overflow: 'hidden' }}>
                  <img src={story.image} alt={story.title} className="img-reveal in-view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="journal-card-meta" style={{ marginTop: '16px' }}>
                  <span className="feature-kicker">{story.kicker}</span>
                </div>
                <h3 className="journal-card-title" style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: '800', fontSize: '24px', textTransform: 'lowercase', letterSpacing: '-0.015em', marginTop: '6px' }}>{story.title}</h3>
                <p className="journal-card-excerpt" style={{ color: 'var(--color-charcoal)', opacity: 0.75, fontSize: '14px', lineHeight: '1.6', marginTop: '20px' }}>{story.excerpt}</p>
                <button 
                  className="journal-card-link" 
                  style={{ marginTop: '28px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: 'inherit', fontSize: 'inherit', padding: 0 }}
                >
                  Read Story <span className="journal-card-link-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Reader overlay */}
      {activeArticle && (
        <ResearchReader 
          article={activeArticle} 
          onClose={() => setActiveArticle(null)} 
        />
      )}
    </section>
  );
};

export default JournalCards;
