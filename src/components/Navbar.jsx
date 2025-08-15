import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('call-booking');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/Images/logo.svg" alt="logo" />
        </div>
        <div className="nav-actions">
          <button className="collaborate-btn" onClick={scrollToCalendly}>Let's Collaborate →</button>
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/Images/navbar/menu.svg" alt="menu" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu" role="menu" aria-label="Main menu">
          <a className="mobile-menu-link" href="#services" role="menuitem" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="mobile-menu-link" href="#portfolio" role="menuitem" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a className="mobile-menu-link" href="#pricing" role="menuitem" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a className="mobile-menu-link" href="#testimonials" role="menuitem" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a className="mobile-menu-link" href="#faq" role="menuitem" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <a className="mobile-menu-cta" href="#call-booking" role="menuitem" onClick={() => { setIsMenuOpen(false); scrollToCalendly(); }}>Let's Collaborate →</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
