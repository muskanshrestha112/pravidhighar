import React from "react";
import { Helmet } from "react-helmet";
import "./HeroSection.css";
import home from "../assets/undraw_quiet-street_v45k.svg"; 
import creativeTeam from "../assets/undraw_mcp-server_7kvc.svg"; 

const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Helmet>
        <title>Pravidhi Ghar | Events, Technology & Marketing</title>
        <meta
          name="description"
          content="Pravidhi Ghar unites events, technology, and digital marketing to craft inspiring experiences for brands and businesses in Nepal."
        />
        <meta
          name="keywords"
          content="Event Management Nepal, Web Design Nepal, Digital Marketing, Creative Agency, Pravidhi Ghar"
        />
        <meta name="author" content="Pravidhi Ghar" />
      </Helmet>

      <div className="hero-left">
        <h1 id="hero-heading">
          Bringing Events, Tech & Marketing Together to Inspire Experiences.
        </h1>
        <p>
          We host unforgettable events, craft beautiful websites, and grow your brand with innovative digital marketing strategies.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">
            Our Services
          </a>
          <a href="/contact" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-right">
        {/* Floating background optional */}
        <div className="floating-bg"></div>

        {/* Top creative illustration */}
        <img
          src={creativeTeam}
          alt="Creative team collaborating"
          className="hero-illustration top-illustration"
          loading="lazy"
        />

        {/* Bottom home illustration */}
        <img
          src={home}
          alt="Team working with technology and creativity"
          className="hero-illustration bottom-illustration"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
