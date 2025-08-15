import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits-section">
      {/* Header Section - Frame 2147229076 */}
      <div className="benefits-header">
        <p className="benefits-label">Benefits</p>
        <h2 className="benefits-title">Big Value. No Fluff.</h2>
      </div>

      {/* Benefits Grid - Frame 2147229084 */}
      <div className="benefits-grid">
        {/* Top Row */}
        <div className="benefits-row">
          {/* Fast = Functional */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="/Images/fast.svg"
                className="benefit-icon-img lightning"
                alt="Lightning icon"
              />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Fast = Functional</h3>
              <p className="benefit-description">
                Speed is nothing without results. Our design, dev, and copy synergy
                aims to drive conversions and revenue, not just look pretty.
              </p>
            </div>
          </div>

          {/* Flexible Engagements */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="/Images/flexible.svg"
                className="benefit-icon-img"
                alt="Calendar icon"
              />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Flexible Engagements</h3>
              <p className="benefit-description">
                Scale up or down on demand. Need a quick funnel rewrite or entire
                brand overhaul? We'll handle it— on your terms.
              </p>
            </div>
          </div>

          {/* Real-Time Collaboration */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="/Images/realtime.svg"
                className="benefit-icon-img"
                alt="Chat icon"
              />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Real-Time Collaboration</h3>
              <p className="benefit-description">
                We work inside your Slack or Notion as your very own designer, for
                quick updates and zero delays.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="benefits-row">
          {/* Full-Stack Creative */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="/Images/fullstack.svg"
                className="benefit-icon-img"
                alt="Star icon"
              />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Full-Stack Creative</h3>
              <p className="benefit-description">
                We are all about design, from your UIUX needs to Product Designs and
                Marketing materials all taken care of in a single process.
              </p>
            </div>
          </div>

          {/* Transparent Pricing */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="/Images/transparent.svg"
                className="benefit-icon-img"
                alt="Coin icon"
              />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Transparent Pricing</h3>
              <p className="benefit-description">
                Easy subscriptions or one time payments with complete transparency so
                you know what you'll get.
              </p>
            </div>
          </div>

          {/* Real People, Real Calls */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="/Images/realpeople.svg"
                className="benefit-icon-img"
                alt="People icon"
              />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">Real People, Real Calls</h3>
              <p className="benefit-description">
                We believe in being authentic, with design and with 1:1 communications
                with google meet and zoom calls at your time zone availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;