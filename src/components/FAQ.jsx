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
      answer: "Pause Hour is a platform that lets you book swimming pools, steam saunas, and outdoor dining tables at local hotels by the hour. You don't have to book a room or check in overnight."
    },
    {
      question: "how does booking work?",
      answer: "Once you are invited to join, you can browse partner hotels on our app, select your time, and check in on your phone. You'll get a digital pass and a wristband at the hotel lobby to access the facilities."
    },
    {
      question: "what is included in the daytime pass?",
      answer: "Your pass unlocks the hotel pool and sauna facilities for your chosen hours, along with dining credits you can spend on food and drinks at their outdoor cafes and bars."
    },
    {
      question: "which hotels are in the network?",
      answer: "We partner with hotels in Hyderabad, including ITC Kohenur, Park Hyatt, Taj Krishna, and Trident, across areas like Gachibowli, Banjara Hills, Jubilee Hills, and Hitec City."
    },
    {
      question: "how can I get priority access?",
      answer: "You can share your referral code with friends. Each signup moves you up the waitlist. The top 100 people on the list get invited first and receive a ₹1,000 credit to spend on their first booking."
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
