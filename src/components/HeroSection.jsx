import "./HeroSection.css";

function HeroSection() {
  const scrollToCallBooking = () => {
    const callBookingSection = document.getElementById('call-booking');
    if (callBookingSection) {
      callBookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="heroSection-section">
      <div className="heroSection-content">
        <div className="heroSection-left">
          {/* Rating */}
          <div className="heroSection-rating">
            <div className="heroSection-stars">
              <img src="/Images/Hero/star.svg" alt="star" />
            </div>
            <span className="heroSection-ratingText">Built for Startups</span>
          </div>

          {/* Main Headline */}
          <h1 className="heroSection-headline">
            Smart Design for SaaS Teams That Scale
          </h1>

          {/* Features */}
          <div className="heroSection-features">
            <div className="heroSection-feature">
              <img src="/Images/Hero/profile.svg" alt="profile" />
              <span>Top notch Design Talent</span>
            </div>
            <div className="heroSection-feature">
              <img src="/Images/Hero/fast.svg" alt="buzz" />
              <span>On Demand Design, Fast Loops & Real Progress</span>
            </div>
            <div className="heroSection-feature">
              <img src="/Images/Hero/buzz.svg" alt="boost" />
              <span>No code Web developments - Webflow & Framer</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="heroSection-ctaButtons">
            <button className="heroSection-primaryCta" onClick={scrollToCallBooking}>
              <img src="/Images/Hero/boost.svg" alt="play" />
              Start Designing with Daperz
            </button>
            <button className="heroSection-secondaryCta" onClick={scrollToCaseStudies}>Recent Work</button>
          </div>
        </div>

        {/* Website Mockups */}
        <div className="heroSection-right">
          <img src="/Images/Hero/1stimg.png" alt="" />
          <img src="/Images/Hero/2ndimg.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
