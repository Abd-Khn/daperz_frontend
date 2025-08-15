import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <p className="testimonials-label">Testimonials</p>
          <h2 className="testimonials-title">Here's what they say about us</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {/* Left Testimonial - Elena Brooks */}
          <div className="testimonial-card testimonial-left">
            <div className="testimonial-content">
              <p className="testimonial-text">
                From our very first conversation, the Daperz team felt like an extension of ours — not just a service provider, but a creative partner. They took the time to deeply understand our vision, target audience, and even the internal challenges we were facing as a growing brand. The questions they asked, the clarity in communication, and the insights they shared made a huge difference. The branding they delivered wasn't just visually impressive — it captured the soul of our business and communicated our values effortlessly.
              </p>
              <p className="testimonial-closing">
                Thank you!! Would definitely recommend.
              </p>
            </div>
            <div className="testimonial-rating">
              <div className="stars">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="testimonial-author">
              <img 
                src="/Images/elena.svg" 
                alt="Elena Brooks" 
                className="testimonial-avatar"
              />
              <div className="author-info">
                <p className="author-name">Elena Brooks</p>
                <p className="author-title">Founder, Nova Wellness</p>
              </div>
            </div>
          </div>

          {/* Center Column - Two Testimonials */}
          <div className="testimonial-column">
            {/* Chrys Bader Testimonial */}
            <div className="testimonial-card testimonial-center-top">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  We approached Daperz to redesign our outdated landing page, and the result blew us away. They simplified the layout, refined our messaging, and created a design that feels modern and aligned with our brand. The new site has already improved our engagement metrics, and we've had great feedback from our users. Their team made the entire process seamless and enjoyable.
                </p>
              </div>
              <div className="testimonial-rating">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
              </div>
              <div className="testimonial-author">
                <img 
                  src="/Images/chrys.svg" 
                  alt="Chrys Bader" 
                  className="testimonial-avatar"
                />
                <div className="author-info">
                  <p className="author-name">Chrys Bader</p>
                  <p className="author-title">CEO, HaleTech Solutions</p>
                </div>
              </div>
            </div>

            {/* Jason Hale Testimonial */}
            <div className="testimonial-card testimonial-center-bottom">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  What impressed us the most about Daperz was their ability to combine speed with thoughtfulness. We had a fast-approaching launch and needed strong visual support — and they delivered on time without cutting corners. Every design element felt considered, and they welcomed our input at every step. We're thrilled with the outcome and look forward to more projects together.
                </p>
              </div>
              <div className="testimonial-rating">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
              </div>
              <div className="testimonial-author">
                <img 
                  src="/Images/jason.svg" 
                  alt="Jason Hale" 
                  className="testimonial-avatar"
                />
                <div className="author-info">
                  <p className="author-name">Jason Hale</p>
                  <p className="author-title">CMO, ElevateCRM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Testimonial - Sofia Reyes */}
          <div className="testimonial-card testimonial-right">
            <div className="testimonial-content">
              <p className="testimonial-text">
                As a young startup with limited resources and a fast-moving vision, we knew the importance of first impressions — but didn't quite know how to pull it off. That's where Daperz came in. From the very beginning, they brought structure, clarity, and creativity to every part of our brand journey. Whether it was our logo, brand visuals, social assets, or our pitch deck — they made us look like a well-funded, established company when in reality we were just starting out. Their designs helped us build immediate trust with investors and early customers. More than just execution, they asked the right questions, challenged our thinking, and provided insights that shaped our brand direction.
              </p>
            </div>
            <div className="testimonial-rating">
              <div className="stars">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="testimonial-author">
              <img 
                src="/Images/sofia.svg" 
                alt="Sofia Reyes" 
                className="testimonial-avatar"
              />
              <div className="author-info">
                <p className="author-name">Sofia Reyes</p>
                <p className="author-title">Co-founder & CEO at Rosebud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;