import React, { useEffect, useRef, useState } from 'react';
import './CallBooking.css';
import { CALENDLY_CONFIG } from '../config/calendly';

const CalendlyWidget = ({ calendlyUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load Calendly widget script (only once) and initialize on load
    const existingScript = document.querySelector('script[data-calendly-script="inline-widget"]');
    let script;

    const initializeWidget = () => {
      try {
        if (typeof window.Calendly !== 'undefined' && widgetRef.current) {
          // Build URL with customization parameters (via URL API for safety)
          const finalUrlObj = new URL(calendlyUrl);
          const urlParams = finalUrlObj.searchParams;
          
          // Calendly requires explicit embed context on some hosts (prevents split(null) errors)
          try {
            const hostname = (typeof window !== 'undefined' && window.location && window.location.hostname) ? window.location.hostname : 'localhost';
            urlParams.set('embed_domain', hostname);
            urlParams.set('embed_type', 'Inline');
          } catch {
            urlParams.set('embed_domain', 'localhost');
            urlParams.set('embed_type', 'Inline');
          }
          
          // Add customization options as URL parameters
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideEventTypeDetails) {
            urlParams.set('hide_event_type_details', '1');
          }
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideLandingPageDetails) {
            urlParams.set('hide_landing_page_details', '1');
          }
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideGdprBanner) {
            urlParams.set('hide_gdpr_banner', '1');
          }
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.hideCookieBanner) {
            urlParams.set('hide_gdpr_banner', '1'); // Same parameter for cookie banner
          }
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.primaryColor) {
            urlParams.set('primary_color', CALENDLY_CONFIG.WIDGET_OPTIONS.primaryColor);
          }
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.backgroundColor) {
            urlParams.set('background_color', CALENDLY_CONFIG.WIDGET_OPTIONS.backgroundColor);
          }
          if (CALENDLY_CONFIG.WIDGET_OPTIONS.textColor) {
            urlParams.set('text_color', CALENDLY_CONFIG.WIDGET_OPTIONS.textColor);
          }
          
          // Construct the final URL with parameters
          const finalUrl = finalUrlObj.toString();
          
          window.Calendly.initInlineWidget({
            url: finalUrl,
            parentElement: widgetRef.current,
            prefill: {},
            utm: {},
            onEventScheduled: () => {
              console.log('Meeting scheduled successfully');
            },
            onEventTypeViewed: () => {
              console.log('Event type viewed');
            },
            onProfilePageViewed: () => {
              console.log('Profile page viewed');
            },
            onDateAndTimeSelected: () => {
              console.log('Date and time selected');
            },
            onEventScheduledFailed: () => {
              console.log('Failed to schedule event');
            }
          });
          
          // Hide loading state after a delay to ensure widget is rendered
          setTimeout(() => setIsLoading(false), 2000);
        }
      } catch (error) {
        console.error('Failed to initialize Calendly widget:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    if (typeof window.Calendly !== 'undefined') {
      initializeWidget();
    } else if (existingScript) {
      existingScript.addEventListener('load', initializeWidget, { once: true });
    } else {
      script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.defer = true;
      script.setAttribute('data-calendly-script', 'inline-widget');
      script.addEventListener('load', initializeWidget, { once: true });
      document.body.appendChild(script);
    }

    return () => {
      // Remove onload handler if we attached one
      const cleanupScript = document.querySelector('script[data-calendly-script="inline-widget"]');
      if (cleanupScript) {
        cleanupScript.removeEventListener('load', initializeWidget);
      }
    };
  }, [calendlyUrl]);

  if (hasError) {
    return (
      <div className="calendly-error-container">
        <div className="calendly-error-icon">📅</div>
        <h3 className="calendly-error-title">Scheduler Unavailable</h3>
        <p className="calendly-error-text">
          We're experiencing technical difficulties with our meeting scheduler.
          Please contact us directly to schedule a meeting.
        </p>
        <button className="calendly-error-button">
          Contact Us Directly
        </button>
      </div>
    );
  }

  return (
    <div className="calendly-widget-wrapper">
      {/* Calendly Widget Container */}
      <div className="calendly-widget-container">
        <div
          ref={widgetRef}
          className="calendly-inline-widget"
          style={{
            minWidth: '320px',
            background: 'transparent'
          }}
        />
        
        {/* Loading State */}
        {isLoading && (
          <div className="calendly-loading-overlay">
            <div className="calendly-loading-content">
              <div className="calendly-loading-spinner">📅</div>
              <div className="calendly-loading-title">Loading Meeting Scheduler...</div>
              <div className="calendly-loading-subtitle">Preparing your meeting options</div>
              
              {/* Feature highlights while loading */}
              <div className="calendly-loading-features">
                <div className="calendly-loading-feature">
                  <span className="calendly-loading-feature-icon">🕒</span>
                  <span className="calendly-loading-feature-text">Flexible scheduling</span>
                </div>
                <div className="calendly-loading-feature">
                  <span className="calendly-loading-feature-icon">📹</span>
                  <span className="calendly-loading-feature-text">Google Meet integration</span>
                </div>
                <div className="calendly-loading-feature">
                  <span className="calendly-loading-feature-icon">📅</span>
                  <span className="calendly-loading-feature-text">Auto calendar invites</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CallBooking = () => {

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