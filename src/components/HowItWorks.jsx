import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="howitworks" id="how-it-works">
      <div className="hiw-container">
        <p className="hiw-eyebrow">How it works</p>
        <h2 className="hiw-title">No contracts, Just pay & play</h2>

        <div className="hiw-cards">
          <article className="hiw-card">
            <div className="hiw-card-header">
              <h3 className="hiw-card-title">Request Your Task</h3>
              <p className="hiw-card-desc">
                Whether it’s a one-time design project or ongoing support, just let us know — we’ve got you covered.
              </p>
            </div>
            <div className="hiw-card-media">
              <img className="hiw-img-tall" src="/Images/how/Frame 2147229198.png" alt="request" />
            </div>
          </article>

          <article className="hiw-card">
            <div className="hiw-card-header">
              <h3 className="hiw-card-title">Fast Turnaround</h3>
              <p className="hiw-card-desc">
                We move fast. Most tasks are delivered within 24 to 48 hours without compromising quality.
              </p>
            </div>
            <div className="hiw-card-media">
              <img className="hiw-img-wide" src="/Images/how/Frame 2147229197.png" alt="turnaround" />
            </div>
          </article>

          <article className="hiw-card">
            <div className="hiw-card-header">
              <h3 className="hiw-card-title">Review & Queue More</h3>
              <p className="hiw-card-desc">
                Approve, tweak, or request something new — we’re always ready for what’s next.
              </p>
            </div>
            <div className="hiw-card-media">
              <img className="hiw-img-card" src="/Images/how/Frame 2147229199.png" alt="review" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;


