import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <section className="roadmap">
      {/* Header Section */}
      <div className="roadmap-header">
        <h2 className="roadmap-title">Roadmap</h2>
        <h1 className="roadmap-subtitle">
          Here's your future roadmap with Daperz
        </h1>
      </div>

      {/* Sprint Cards Container */}
      <div className="sprint-cards-container">
        {/* Sprint 1 Card */}
        <div className="sprint-card">
          <div className="sprint-badge">1</div>
          <div className="sprint-content">
            <h3 className="sprint-title">Sprint   1</h3>
            <p className="sprint-subtitle">Design & Research</p>
            <div className="features-list">
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">User Flows</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Wireframes</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Design Systems</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">UX Design</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Prototype</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 2 Card */}
        <div className="sprint-card">
          <div className="sprint-badge">2</div>
          <div className="sprint-content">
            <h3 className="sprint-title">Sprint   2</h3>
            <p className="sprint-subtitle">Development & Integration</p>
            <div className="features-list">
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">No code - Web Development</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Print Material Designs</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Digital Ad Creativess</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Plan Execution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint 3 Card */}
        <div className="sprint-card">
          <div className="sprint-badge">3</div>
          <div className="sprint-content">
            <h3 className="sprint-title">Sprint   3</h3>
            <p className="sprint-subtitle">Evaluation & Revisiting</p>
            <div className="features-list">
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Monitoring results</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Making adjustments according to KPI's</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">On going optimization</span>
              </div>
              <div className="feature-item">
                <img 
                  src="/Images/checkbox.svg" 
                  alt="Check" 
                  className="check-icon"
                />
                <span className="feature-text">Full Design Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;