import React, { useEffect } from 'react';

// Minimalist vector icons for reading screen
const BackIcon = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ExternalLinkIcon = ({ className, size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);

const ResearchReader = ({ article, onClose }) => {
  // Disable body scroll when component mounts, restore when unmounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!article) return null;

  return (
    <div className="research-reader-overlay fade-in" data-lenis-prevent>
      
      {/* Reader Top Navigation Bar */}
      <header className="reader-header">
        <button onClick={onClose} className="reader-back-btn">
          <BackIcon size={14} />
          <span>Back to Slow Lanes</span>
        </button>
        <span className="reader-brand-label">pause journal // research hub</span>
      </header>

      {/* Reader Main Content Container */}
      <div className="reader-content-wrap">
        <div className="reader-grid">
          
          {/* Left Column: Hero Article Info */}
          <div className="reader-left-col">
            <div className="reader-img-frame">
              <img src={article.image} alt={article.title} className="reader-cover-img" />
            </div>
            
            <div className="reader-meta-block">
              <span className="feature-kicker">{article.kicker}</span>
              <h1 className="reader-title">{article.title}</h1>
              <p className="reader-excerpt">{article.excerpt}</p>
            </div>
            
            <div className="reader-divider"></div>
            
            {/* Quick Summary Card */}
            <div className="reader-quick-card">
              <h4>Key Takeaway</h4>
              <p>{article.summaryText}</p>
            </div>
          </div>

          {/* Right Column: Research Studies and Summaries */}
          <div className="reader-right-col">
            <h2 className="reader-section-title">Supporting Scientific Research</h2>
            
            <div className="reader-studies-stack">
              {article.studies.map((study, idx) => (
                <div key={idx} className="reader-study-card">
                  <div className="study-card-header">
                    <span className="study-tag">Study {idx + 1}</span>
                    <span className="study-source">
                      {study.source}
                      <span className="study-link-icon">
                        <ExternalLinkIcon size={11} />
                      </span>
                    </span>
                  </div>
                  
                  <h3 className="study-title">{study.title}</h3>
                  <div className="study-focus-pill">{study.focus}</div>
                  
                  <div className="study-divider"></div>
                  
                  <div className="study-findings">
                    <h5>Key Findings:</h5>
                    <ul>
                      {study.findings.map((finding, fIdx) => (
                        <li key={fIdx}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="study-stat-box">
                    <span className="study-stat-num">{study.stat}</span>
                    <span className="study-stat-lbl">{study.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ResearchReader;
