import React, { useEffect } from 'react';
import './CallBooking.css';

const CallBooking = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="call-booking" id="call-booking">
      {/* Header Section */}
      <div className="call-booking-header">
        <p className="call-booking-title">Call Booking</p>
        <div className="call-booking-subtitle-wrapper">
          <h2 className="call-booking-main-heading">
            Let's talk about your design needs
          </h2>
        </div>
      </div>

      {/* Availability Subtitle */}
      <p className="availability-text">
        We have availability from next month
      </p>

      {/* Two Column Layout */}
      <div className="call-booking-content">
        {/* Left Side - Profile Section */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="daperz-logo">
              <span className="logo-text">Daperz</span>
            </div>
            
            <div className="profile-info">
              <div className="profile-image">
                <img
                  src="/Images/ceo.svg"
                  alt="Alex Suprun"
                  className="profile-avatar"
                />
              </div>
              <div className="profile-details">
                <p className="profile-role">Founder & Head of IT</p>
                <p className="profile-name">Alex Suprun</p>
              </div>
              
            </div>

            <div className="booking-step">
              <div className="step-indicator">
                <div className="step-dot"></div>
                <p className="step-title">Schritt 1</p>
              </div>
              <p className="step-description">
                Es ist kein Wunder, dass es nicht mehr geht.
              </p>
            </div>
            <img
                src="/Images/detail.svg"
                alt="Detail"
                className="profile-detail-image"
              />


          </div>
        </div>

        {/* Right Side - Calendar Section */}
        <div className="calendar-section">
          <h3 className="calendar-title">Select date & time</h3>
          
          {/* Calendly inline widget */}
          <div className="calendly-container">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/team-daperz/30min" 
              style={{minWidth:'320px', height:'700px', width: '100%'}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallBooking;