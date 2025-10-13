import React from "react";
import { Helmet } from "react-helmet";
import "./AboutSection.css";
import aboutImage from "../assets/about.jpg"; // adjust path
import { FaBullseye, FaLaptopCode, FaUsers } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      {/* ===== SEO Metadata ===== */}
      <Helmet>
        <title>About Pravidhi Ghar | Creative Agency Nepal</title>
        <meta
          name="description"
          content="Pravidhi Ghar, established in 2026, is a leading creative agency in Nepal offering event management, IT solutions, and digital marketing services. We deliver innovative, high-quality solutions for businesses and individuals."
        />
        <meta
          name="keywords"
          content="Pravidhi Ghar, Event Management Nepal, IT Solutions Nepal, Digital Marketing Nepal, Creative Agency, Web Design, Corporate Events"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ===== About Section ===== */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-container">
          {/* Left: Image / Video */}
          <div className="about-media">
            <img 
              src={aboutImage} 
              alt="Team working on event management and digital marketing at Pravidhi Ghar" 
              loading="lazy" 
            />
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <h2 id="about-heading">About Us</h2>
            <p>
              Pravidhi Ghar, established in 2026, is a leading creative agency in Nepal,
              providing event management, IT solutions, and digital marketing services under one roof.
              Our mission is to help businesses and individuals bring their ideas to life with innovative,
              high-quality, and result-driven solutions. Our dedicated team collaborates closely with clients
              to plan, design, and execute projects — from corporate events to stunning websites and
              impactful digital campaigns. Combining creativity, technology, and strategy, Pravidhi Ghar
              delivers memorable experiences and measurable results that make a difference.
            </p>
            <a href="/about" className="btn-cta" aria-label="Explore Pravidhi Ghar Services">
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats Section (Outside About) ===== */}
    
        <section className="stats-section" aria-label="Company Achievements">
        <div className="stats-container">
            <div className="stat" role="region" aria-label="Successful Events">
            <FaBullseye size={40} color="#f9cf47ff" /> {/* Gold accent */}
            <p>200+ Successful Events</p>
            </div>
            <div className="stat" role="region" aria-label="Websites Developed">
            <FaLaptopCode size={40} color="#f9cf47ff" />
            <p>50+ Websites Developed</p>
            </div>
            <div className="stat" role="region" aria-label="Happy Clients">
            <FaUsers size={40} color="#f9cf47ff" />
            <p>100+ Happy Clients</p>
            </div>
        </div>
        </section>

      {/* ===== Structured Data for SEO ===== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pravidhi Ghar",
          "url": "https://www.pravidhighar.com", // replace with actual URL
          "logo": "https://www.pravidhighar.com/logo.png", // replace with actual logo URL
          "sameAs": [
            "https://www.facebook.com/pravidhighar",
            "https://www.linkedin.com/company/pravidhighar"
          ],
          "foundingDate": "2026",
          "description": "Pravidhi Ghar is a creative agency in Nepal providing event management, IT solutions, and digital marketing services."
        })}
      </script>
    </>
  );
};

export default AboutSection;
