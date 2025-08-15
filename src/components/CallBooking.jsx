import React, { useEffect } from 'react';
import './CallBooking.css';
import { CALENDLY_CONFIG } from '../config/calendly';

const CalendlyWidget = ({ calendlyUrl }) => {
  let finalUrl = calendlyUrl;
  try {
    const url = new URL(calendlyUrl);
    const hostname = (typeof window !== 'undefined' && window.location && window.location.hostname)
      ? window.location.hostname
      : 'localhost';
    const params = url.searchParams;
    params.set('embed_domain', hostname);
    params.set('embed_type', 'Inline');
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideEventTypeDetails) params.set('hide_event_type_details', '1');
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideLandingPageDetails) params.set('hide_landing_page_details', '1');
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideGdprBanner) params.set('hide_gdpr_banner', '1');
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.primaryColor) params.set('primary_color', CALENDLY_CONFIG.WIDGET_OPTIONS.primaryColor);
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.backgroundColor) params.set('background_color', CALENDLY_CONFIG.WIDGET_OPTIONS.backgroundColor);
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.textColor) params.set('text_color', CALENDLY_CONFIG.WIDGET_OPTIONS.textColor);
    if (CALENDLY_CONFIG.WIDGET_OPTIONS.linkColor) params.set('link_color', CALENDLY_CONFIG.WIDGET_OPTIONS.linkColor);
    finalUrl = url.toString();
  } catch {
    // ignore URL parse errors
  }
  return (
    <div
      className="calendly-inline-widget"
      data-url={finalUrl}
      style={{ minWidth: '320px', background: 'transparent' }}
    />
  );
};

const CallBooking = () => {
  useEffect(() => {
    // Ensure Calendly assets are loaded once
    if (!document.querySelector('link[data-calendly-style="true"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.setAttribute('data-calendly-style', 'true');
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[data-calendly-script="inline-widget"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.defer = true;
      script.setAttribute('data-calendly-script', 'inline-widget');
      document.body.appendChild(script);
    }
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
       

        {/* Right Side - Calendar Section */}
        <div className="calendar-section">
          <h3 className="calendar-title">Select date & time</h3>
          
          {/* Calendly Widget - ensure full height and no internal scroll */}
          <CalendlyWidget calendlyUrl={CALENDLY_CONFIG.MEETING_SCHEDULER_URL} />
        </div>
      </div>
    </section>
  );
};

export default CallBooking;