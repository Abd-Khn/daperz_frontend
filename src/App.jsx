import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import CaseStudies from "./components/CaseStudies";
import Industries from "./components/Industries";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import CallBooking from "./components/CallBooking";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <Services />
      <div id="case-studies">
        <CaseStudies />
      </div>
      <Portfolio />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <Roadmap />
      <div id="faq">
        <FAQ />
      </div>
      <CallBooking />
      <Footer />
    </div>
  );
}

export default App;
