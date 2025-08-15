import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "What kind of design tasks can I request?",
      answer: "You can request anything from UI/UX and branding to social media graphics, pitch decks, landing pages, and more."
    },
    {
      id: 2,
      question: "How fast will I receive my designs?",
      answer: "Most tasks are completed within 24–48 hours, depending on complexity and your feedback cycle."
    },
    {
      id: 3,
      question: "Is there a limit to how many tasks I can request?",
      answer: "Nope! You can queue unlimited tasks if you are on a monthly subscription with us. We work through them one by one, keeping the quality consistent."
    },
    {
      id: 4,
      question: "Can I request revisions?",
      answer: "Absolutely. We'll revise until you're happy — no extra charges, no hassle."
    },
    {
      id: 5,
      question: "What if I don't have a task right now?",
      answer: "That's okay! Your subscription keeps your spot reserved. You can pause, queue, or resume whenever needed."
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Column - Black Background Section */}
        <div className="faq-left">
          {/* <p className="faq-label">FAQ's</p> */}
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            We know speed matters, but so does clarity. That's why we've answered the most common questions right here from timelines and revisions to how we work and what you'll get. No fluff, just real answers to help you move fast with confidence.
          </p>
        </div>

        {/* Right Column - FAQ Cards */}
        <div className="faq-right">
          {faqData.map((item) => (
            <div key={item.id} className={`faq-card ${expandedItems[item.id] ? 'expanded' : ''}`}>
              <div className="faq-question-row" onClick={() => toggleExpanded(item.id)}>
                <h3 className="faq-question">{item.question}</h3>
                <img 
                  src="/Images/faqdrop.svg" 
                  alt="Toggle" 
                  className={`faq-arrow ${expandedItems[item.id] ? 'rotated' : ''}`}
                />
              </div>
              {expandedItems[item.id] && (
                <div className="faq-answer-container">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;