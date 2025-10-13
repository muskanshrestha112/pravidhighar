import React from "react";
import { Helmet } from "react-helmet";
import "./HeroSection.css";
import heroImage from "../assets/hero-bg.jpg"; // adjust path

const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* SEO Metadata */}
      <Helmet>
        <title>Pravidhi Ghar | Creative Events, IT & Digital Marketing Nepal</title>
        <meta
          name="description"
          content="Pravidhi Ghar delivers exceptional event management, stunning websites, and digital marketing services in Nepal. We create experiences that inspire and bring your ideas to life."
        />
        <meta
          name="keywords"
          content="Pravidhi Ghar, Event Management Nepal, Website Design Nepal, Digital Marketing Nepal, Creative Agency, Corporate Events"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Background Image */}
      <div className="hero-bg">
        <img
          src={heroImage}
          alt="Creative events, website development, and digital marketing by Pravidhi Ghar"
          loading="lazy"
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 id="hero-heading">
          Bringing Events, Technology, and Marketing Together to Build Experiences That Inspire.
        </h1>
        <p>
          We help you host unforgettable events, design stunning websites, and grow your brand online with impactful strategies.
        </p>

        {/* Button Group */}
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary" aria-label="View Our Services">
            Our Services
          </a>
          <a href="/contact" className="btn btn-secondary" aria-label="Contact Us">
            Contact Us
          </a>
        </div>
      </div>

      {/* Structured Data for Hero Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Pravidhi Ghar Hero Section",
          "description": "Showcasing Pravidhi Ghar's creative events, web development, and digital marketing services.",
          "image": "https://www.pravidhighar.com/assets/hero-bg.jpg" // replace with actual URL
        })}
      </script>
    </section>
  );
};

export default HeroSection;
