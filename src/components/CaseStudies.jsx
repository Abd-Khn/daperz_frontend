import React from "react";
import "./CaseStudies.css";

function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="case-container">
        <p className="case-eyebrow">Case Study</p>
        <h2 className="case-title">Our Success stories</h2>

        <div className="case-list">
          <article className="case-card">
            <div className="case-content">
              <p className="case-subtitle">Pro Business Plan</p>
              <h3 className="case-heading">Investor-Ready
                <br />
                Design
              </h3>
              <p className="case-description">
                A user-friendly dashboard built to simplify planning, boost productivity, and
                enhance decision-making.
              </p>
              <ul className="case-points">
                <li>
                  <img src="/Images/Case/case.svg" alt="case" />
                  70% increase in LC</li>
                <li>
                  <img src="/Images/Case/case.svg" alt="case" />
                  50% faster delivery</li>
              </ul>
              <button className="case-cta">Go to case study</button>
            </div>
            <div className="case-media">
              <img src="/Images/Case/1st.png" alt="Case study 1" />
            </div>
          </article>

          <article className="case-card">
            <div className="case-content">
              <p className="case-subtitle">Your Health Ecosystem</p>
              <h3 className="case-heading">Designing Wellness
                <br />
                That Scales
              </h3>
              <p className="case-description">
                We redesigned their product dashboard and patient experience to be clean,
                user‑friendly, and trust‑focused across all devices.
              </p>
              <ul className="case-points">
                <li>
                  <img src="/Images/Case/case.svg" alt="case" />
                   45% increase in UR</li>
                <li> 
                  <img src="/Images/Case/case.svg" alt="case" />
                  60% onboarding</li>
              </ul>
              <button className="case-cta">Go to case study</button>
            </div>
            <div className="case-media">
              <img src="/Images/Case/2nd.png" alt="Case study 2" />
            </div>
          </article>
          <article className="case-card">
            <div className="case-content">
              <p className="case-subtitle">Pro Business Plan</p>
              <h3 className="case-heading">Investor-Ready
                <br />
                Design
              </h3>
              <p className="case-description">
                A user-friendly dashboard built to simplify planning, boost productivity, and
                enhance decision-making.
              </p>
              <ul className="case-points">
                <li>
                  <img src="/Images/Case/case.svg" alt="case" />
                  70% increase in LC</li>
                <li>
                  <img src="/Images/Case/case.svg" alt="case" />
                  50% faster delivery</li>
              </ul>
              <button className="case-cta">Go to case study</button>
            </div>
            <div className="case-media">
              <img src="/Images/Case/1st.png" alt="Case study 1" />
            </div>
          </article>

          <article className="case-card">
            <div className="case-content">
              <p className="case-subtitle">Your Health Ecosystem</p>
              <h3 className="case-heading">Designing Wellness
                <br />
                That Scales
              </h3>
              <p className="case-description">
                We redesigned their product dashboard and patient experience to be clean,
                user‑friendly, and trust‑focused across all devices.
              </p>
              <ul className="case-points">
                <li>
                  <img src="/Images/Case/case.svg" alt="case" />
                   45% increase in UR</li>
                <li> 
                  <img src="/Images/Case/case.svg" alt="case" />
                  60% onboarding</li>
              </ul>
              <button className="case-cta">Go to case study</button>
            </div>
            <div className="case-media">
              <img src="/Images/Case/2nd.png" alt="Case study 2" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;


