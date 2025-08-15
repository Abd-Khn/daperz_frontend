import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* Section Header */}
        <div className="pricing-header">
          <div className="pricing-label">Pricing</div>
          <h2 className="pricing-title">
            Let's get <br /> your designs Ready
          </h2>
        </div>
        {/* Pricing Cards */}
        <div className="pricing-cards-wrapper">
          <div className="pricing-cards">
            {/* One-Off Task Card */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-card-badge">
                  <span className="pricing-badge-text">One-Time</span>
                </div>
                <div className="pricing-lightning-icon app-icon">
                  <img src="/Images/price/buzz.svg" alt="lightning" />
                </div>
              </div>
              <h3 className="pricing-card-title">One-Off Task</h3>
              <div className="pricing-card-price">£2499</div>
              <p className="pricing-card-subtitle">Monthly Subscription</p>

              <div className="pricing-features-list">
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">Unlimited Revisions</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">
                    Unlimited design works for whole month
                  </span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">One time payment</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">No hidden charges</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">Weekly meetings</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">Design files access</span>
                </div>
              </div>

              <button className="pricing-cta-button">Start Task</button>
            </div>

            {/* Custom Quote Card */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-card-badge">
                  <span className="pricing-badge-text">One-Time</span>
                </div>
                <div className="pricing-lightning-icon app-icon">
                  <img src="/Images/price/buzz.svg" alt="" />
                </div>
              </div>
              <h3 className="pricing-card-title pricing-custom-quote-title">Custom Quote</h3>
              <div className="pricing-card-price pricing-custom-quote-price">Custom Quote</div>
              <p className="pricing-card-subtitle">On Demand pricing</p>

              <div className="pricing-features-list">
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">Free custom quote</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">2 rounds of revisions</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">2 weekly meetings</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">Design files access</span>
                </div>
                <div className="pricing-feature-item">
                  <div className="pricing-checkmark app-icon">
                    <img src="/Images/circlecheck.svg" alt="check" />
                  </div>
                  <span className="pricing-feature-text">
                    Can include Webflow or Framer <br />
                    Developments
                  </span>
                </div>
              </div>

              <button className="pricing-cta-button">Start Task</button>
            </div>
          </div>
        </div>
        {/* Section Footnote */}
        <p className="pricing-footnote">
          Webflow or Framer Dev - (Additional £700)
        </p>
      </div>
    </section>
  );
};

export default Pricing;
