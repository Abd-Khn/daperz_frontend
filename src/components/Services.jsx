import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <p className="services-eyebrow">
          Services - All your Design needs Handled
        </p>
        <h2 className="services-title">Design Fast. Delivered Faster</h2>

        <div className="services-grid">
          <div className="service-card">
            <img src="/Images/services/word.png" alt="Web Design" className="service-icon" />
            <p className="service-label">Web Design</p>
          </div>

          <div className="service-card">
            <img src="/Images/services/mobile.png" alt="Mobile Apps" className="service-icon" />
            <p className="service-label">Mobile Apps</p>
          </div>

          <div className="service-card">
            <img src="/Images/services/brand.png" alt="Branding" className="service-icon" />
            <p className="service-label">Branding</p>
          </div>

          <div className="service-card">
            <img src="/Images/services/pitch.png" alt="Pitch Decks" className="service-icon" />
            <p className="service-label">Pitch Decks</p>
          </div>

          <div className="service-card">
            <img src="/Images/services/social.png" alt="Social Media" className="service-icon" />
            <p className="service-label">Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
