import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import eventImg from "../assets/event.jpg";
import webImg from "../assets/web.jpg";
import marketingImg from "../assets/marketing.jpg";
import "./ServicesSection.css";

const services = [
  {
    title: "Event Management",
    description:
      "From corporate conferences to weddings — we handle planning, décor, and execution flawlessly.",
    includes: [
      "Event Planning",
      "Décor & Theme Design",
      "Sound & Lighting",
      "Venue Management",
    ],
    image: eventImg,
    link: "/services/event-management",
  },
  {
    title: "Website Development",
    description:
      "Build your brand online with a fast, secure, and stunning website.",
    includes: [
      "Business Websites",
      "E-commerce Platforms",
      "UI/UX Design",
      "Maintenance & Hosting",
    ],
    image: webImg,
    link: "/services/it-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach your audience and grow your brand with result-driven marketing.",
    includes: [
      "SEO & Google Ads",
      "Social Media Marketing",
      "Branding & Content Creation",
      "Email Campaigns",
    ],
    image: marketingImg,
    link: "/services/digital-marketing",
  },
];

const ServicesSection = () => {
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
      { threshold: 0.3 }
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
    <section className="services-section">
      <div className="services-title">
        <h2>Services We Provide</h2>
      </div>
      <div className="container">
        {services.map((service, index) => (
          <div
            className={`service-card ${
              visibleCards.includes(index) ? "visible" : ""
            } ${index % 2 === 0 ? "slide-left" : "slide-right"}`}
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* ✅ Each button links to its unique route */}
              <Link to={service.link} className="cta-btn">
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
