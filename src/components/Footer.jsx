import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Section */}
      <div className="footer-main">
        {/* Company Info Section */}
        <div className="footer-company">
          <img
            src="/Images/daperzlogofooter.svg"
            alt="Daperz Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Daperz is your on-demand design team built for startups that move fast and
            expect results. From branding and UI/UX to decks and dev, we deliver
            high-impact work without the agency fluff.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3 className="footer-section-title">Quick Links</h3>
          <nav className="footer-nav">
            <a href="#home" className="footer-link">Home</a>
            <a href="#case-studies" className="footer-link">Work / Case Studies</a>
            <a href="#pricing" className="footer-link">Pricing</a>
            <a href="#faq" className="footer-link">FAQs</a>
          </nav>
        </div>

        {/* Social Media & Contact Section */}
        <div className="footer-social">
          <h3 className="footer-section-title">Social Media Platform</h3>
          <div className="footer-social-icons">
            <img
              src="/Images/insta.svg"
              alt="Instagram"
              className="footer-social-icon"
            />
            <img
              src="/Images/linkedin.svg"
              alt="LinkedIn"
              className="footer-social-icon"
            />
            <img
              src="/Images/twitter.svg"
              alt="Twitter"
              className="footer-social-icon"
            />
            <img
              src="/Images/globe.svg"
              alt="Globe"
              className="footer-social-icon"
            />
          </div>
          <div className="footer-contact">
            <p className="footer-contact-item">hello@daperz.com</p>
            <p className="footer-contact-item">Remote/Global</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="footer-divider"></div>
        <p className="footer-copyright-text">© 2025 Daperz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;