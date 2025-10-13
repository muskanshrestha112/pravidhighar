import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./DigitalMarketingPage.css";

// Hero image
import heroImg from "../../assets/digital-marketing-hero.jpg";

const services = [
  { title: "Content Creation", description: "Short videos, TVC, and more." },
  { title: "Social Media Handling", description: "Platforms: Facebook, Instagram, TikTok, YouTube." },
  { title: "SEO Basic", description: "Optimize your website for search engines." },
  { title: "Blogging", description: "Engaging articles to boost brand authority." },
  { title: "Graphic Design", description: "Creative visuals for your campaigns." },
  { title: "Photography/Videography", description: "Professional media to showcase your brand." },
  { title: "Paid Ads Handling", description: "Google, social media, and display ads." },
];

const DigitalMarketingPage = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="digital-marketing-page">
      <Helmet>
        <title>Digital Marketing Services | Boost Your Brand Online</title>
        <meta
          name="description"
          content="Professional digital marketing services including content creation, social media management, SEO, blogging, graphic design, photography/videography, and paid ads handling."
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, Content Creation, Social Media Management, Blogging, Graphic Design, Photography, Paid Ads"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Digital Marketing Services</h1>
            <p>Boost your brand online with professional content, social media, SEO, and advertising strategies.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${visibleCards.includes(index) ? "visible" : ""}`}
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to grow your business?</h2>
        <a href="/contact" className="cta-btn">
          Get Started
        </a>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
