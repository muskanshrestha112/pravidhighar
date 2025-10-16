import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./EventManagementPage.css";

// Illustrations
import heroIllustration from "../../assets/undraw_saving-notes_wp71.svg"; // event illustration

// Images
import planningImg from "../../assets/events-planning.jpg";
import venueImg from "../../assets/venue-management.jpg";
import cateringImg from "../../assets/catering.jpg";
import decorationImg from "../../assets/decoration.jpg";
import entertainmentImg from "../../assets/entertainment.jpg";
import HospitalityImg from "../../assets/hospitality.jpg";

// Icons
import {
  FaCalendarCheck,
  FaBuilding,
  FaUtensils,
  FaPaintBrush,
  FaMusic,
  FaTruck,
} from "react-icons/fa";

const services = [
  {
    title: "Event Planning",
    points: [
      "Concept & theme development",
      "Scheduling & timelines",
      "Budget management",
    ],
    image: planningImg,
  },
  {
    title: "Venue Management",
    points: [
      "Venue selection & booking",
      "Layout planning",
      "Coordination with vendors",
    ],
    image: venueImg,
  },
  {
    title: "Catering Services",
    points: [
      "Custom menus",
      "On-site food & beverage service",
      "Dietary requirement management",
    ],
    image: cateringImg,
  },
  {
    title: "Decoration & Styling",
    points: [
      "Floral & thematic decoration",
      "Lighting design",
      "Stage & backdrop setup",
    ],
    image: decorationImg,
  },
  {
    title: "Entertainment",
    points: [
      "Live music & DJs",
      "Performances & shows",
      "Interactive activities",
    ],
    image: entertainmentImg,
  },
  {
    title: "Guest & Hospitality Management",
    points: [
      "VIP & attendee management",
      "Hospitality and welcome services",
      "Seamless guest experience",
    ],
    image: HospitalityImg,
  },
];

const whyChooseUs = [
  {
    icon: <FaCalendarCheck size={40} />,
    title: "Expert Planning",
    desc: "We ensure your event is well-organized from start to finish.",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Top Venues",
    desc: "Access to the best venues and facilities for your event.",
  },
  {
    icon: <FaUtensils size={40} />,
    title: "Delicious Catering",
    desc: "High-quality food & beverage to delight your guests.",
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: "Creative Decoration",
    desc: "Beautiful setups that match your event theme perfectly.",
  },
  {
    icon: <FaMusic size={40} />,
    title: "Entertainment Experts",
    desc: "Live performances and activities for an unforgettable experience.",
  },
  {
  icon: <FaBuilding size={40} />,
  title: "Hospitality",
  desc: "Exceptional care and attention to ensure every guest feels valued and comfortable.",
},

];

const EventManagementPage = () => {
  const cardRefs = useRef([]);
  const whyRefs = useRef([]);
  const ctaRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleWhy, setVisibleWhy] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Services animation observer
    const cardObserver = new IntersectionObserver(
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
    cardRefs.current.forEach((card) => card && cardObserver.observe(card));

    // Why Choose Us animation observer
    const whyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleWhy((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );
    whyRefs.current.forEach((card) => card && whyObserver.observe(card));

    // CTA Section observer
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      cardRefs.current.forEach((card) => card && cardObserver.unobserve(card));
      whyRefs.current.forEach((card) => card && whyObserver.unobserve(card));
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <div className="event-management-page">
      <Helmet>
        <title>Event Management Services | Pravidhi Ghar</title>
      </Helmet>

      {/* Hero Section */}
      <section className="hero-event">
        <div className="hero-event-content">
          <h1>Professional Event Management</h1>
          <p>
            From concept to execution, we manage every detail of your events,
            ensuring memorable experiences for your guests.
          </p>
        </div>
        <div className="hero-event-illustration">
          <img src={heroIllustration} alt="Event Management Illustration" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Event Management Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <ul>
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`cta-section ${isVisible ? "animate" : ""}`}
        ref={ctaRef}
        aria-labelledby="cta-heading"
        role="region"
      >
        <div className="cta-left">
          <div className="cta-heading-wrapper">
            <span className="gold-bar"></span>
            <div>
              <h2 id="cta-heading">
                <span className="text-gold">Plan Your Perfect Event</span>
                <br />
                <span className="text-white">With Our Expert Management</span>
              </h2>
              <p className="cta-subheading">
              Let us handle everything from planning and logistics to decoration and entertainment for a seamless and unforgettable event.              </p>
            </div>
          </div>
        </div>
        <div className="cta-right">
          <a href="/contact" className="btn-cta" aria-label="Reach Out">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`why-card ${
                visibleWhy.includes(index) ? "visible" : ""
              }`}
              ref={(el) => (whyRefs.current[index] = el)}
              data-index={index}
            >
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventManagementPage;
