import React from "react";
import { Helmet } from "react-helmet";
import "./AboutSection.css";
import aboutImage from "../assets/about.jpg"; // adjust path
import { FaBullseye, FaLaptopCode, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";

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
          <div className="about-media animate-slide-left">
            <img
              src={aboutImage}
              alt="Team working on event management and digital marketing at Pravidhi Ghar"
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div className="about-text animate-slide-right">
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
            <a href="/about" className="aboutbtn-cta">
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats-section" aria-label="Company Achievements">
        <div className="stats-container">
          <div className="stat animate-fade-up" role="region" aria-label="Successful Events">
            <FaBullseye size={40} color="#ffffff" />
            <p>
              <CountUp start={0} end={200} duration={2} enableScrollSpy />+ <span>Successful Events</span>
            </p>
          </div>

          <div className="stat animate-fade-up delay-1" role="region" aria-label="Websites Developed">
            <FaLaptopCode size={40} color="#ffffff" />
            <p>
              <CountUp start={0} end={50} duration={2} enableScrollSpy />+ <span>Websites Developed</span>
            </p>
          </div>

          <div className="stat animate-fade-up delay-2" role="region" aria-label="Happy Clients">
            <FaUsers size={40} color="#ffffff" />
            <p>
              <CountUp start={0} end={100} duration={2} enableScrollSpy />+ <span>Happy Clients</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
