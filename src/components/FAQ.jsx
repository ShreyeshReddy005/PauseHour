import React, { useState } from 'react';

const ChevronIcon = ({ className, isOpen }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={{
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <button 
        className="faq-question-trigger" 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-question">{question}</span>
        <span className="faq-icon">
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>
      <div 
        className="faq-answer-wrap"
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden'
        }}
      >
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "what is pause hour?",
      answer: "Pause Hour is a private registry that partners with luxury five-star hotels to offer daytime access to their premium amenities (swimming pools, thermal spas, and poolside dining) on an hourly basis. No overnight stay is required."
    },
    {
      question: "how does booking work?",
      answer: "Once your waitlist spot is secured and you are invited to join, you can explore partner hotels on our app, select a time slot, and check in digitally. You'll receive a digital pass and a smart band at the hotel lobby."
    },
    {
      question: "what is included in the daytime pass?",
      answer: "Each pass includes access to the selected hotel's pool and spa facilities during your booked slot, plus food and beverage credits that can be redeemed at their poolside restaurants or bars."
    },
    {
      question: "which hotels are in the network?",
      answer: "We partner with Hyderabad's leading five-star properties, including ITC Kohenur, Park Hyatt, Taj Krishna, Trident, and more, across key areas like Gachibowli, Banjara Hills, Jubilee Hills, and Hitec City."
    },
    {
      question: "how can I get priority access?",
      answer: "You can refer friends using your unique referral code. Every verified referral boosts your standing in the registry. The top 100 waitlist candidates secure immediate priority access and a ₹1,000 launch credit."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-sec">
      <div className="container">
        
        {/* Header Block */}
        <div className="faq-header">
          <span className="feature-kicker">Frequently Asked</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--color-charcoal)', marginTop: '6px', letterSpacing: '-0.02em', textTransform: 'lowercase' }}>
            frequently asked questions.
          </h2>
        </div>

        {/* FAQ Container */}
        <div className="faq-container">
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
