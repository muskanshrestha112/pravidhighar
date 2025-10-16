import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./ITServicesPage.css";

// Illustrations
import heroIllustration from "../../assets/undraw_artificial-intelligence_43qa.svg";

// Images
import webDevImg from "../../assets/web-development.jpg";
import softwareImg from "../../assets/software-development.jpg";
import itSupportImg from "../../assets/it-support.jpg";

// React Icons
import { FaUsers, FaCog, FaHeadset, FaDollarSign, FaRocket, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    points: [
      "Portfolio sites",
      "Business/Commercial sites",
      "Responsive & modern designs",
    ],
    image: webDevImg,
  },
  {
    title: "Software Development",
    points: [
      "Services-based software",
      "ERP/CRM",
      "SaaS platforms",
      "CMS (Blogs, Events, etc.)",
    ],
    image: softwareImg,
  },
  {
    title: "IT Support Services",
    points: [
      "Reliable hosting",
      "Deployment",
      "Maintenance & monitoring",
    ],
    image: itSupportImg,
  },
];

const whyChooseUs = [
  { icon: <FaUsers size={40} />, title: "Expert Team", desc: "Professional IT experts with years of experience." },
  { icon: <FaCog size={40} />, title: "Custom Solutions", desc: "Tailored solutions for unique business requirements." },
  { icon: <FaHeadset size={40} />, title: "24/7 Support", desc: "Always available to solve your IT challenges." },
  { icon: <FaDollarSign size={40} />, title: "Affordable Pricing", desc: "High-quality services without breaking your budget." },
  { icon: <FaRocket size={40} />, title: "Latest Technology", desc: "We use cutting-edge tools and frameworks." },
  { icon: <FaCheckCircle size={40} />, title: "Proven Results", desc: "Satisfied clients and successful project deliveries." },
];

const ITServicesPage = () => {
  // --- Refs and States ---
  const cardRefs = useRef([]);
  const whyRefs = useRef([]);
  const ctaRef = useRef(null); // 👈 added
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleWhy, setVisibleWhy] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // 👈 added

  // --- Observer for service cards and "why choose us" cards ---
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
    cardRefs.current.forEach((card) => card && observer.observe(card));

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

    return () => {
      cardRefs.current.forEach((card) => card && observer.unobserve(card));
      whyRefs.current.forEach((card) => card && whyObserver.unobserve(card));
    };
  }, []);

  // --- Observer for CTA section (Fix for isVisible & ctaRef errors) ---
  useEffect(() => {
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
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <div className="it-services-page">
      <Helmet>
        <title>IT Services | Website, Software & Support | Pravidhi Ghar</title>
      </Helmet>

      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Professional <span className="highlight">IT Services</span>
          </h1>
          <p>
            Website development, software solutions, and IT support services designed to grow your business efficiently.
          </p>
        </div>
        <div className="hero-illustration">
          <img src={heroIllustration} alt="IT Services Illustration" />
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="services-section">
        <h2>Our IT Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${visibleCards.includes(index) ? "visible" : ""}`}
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

      {/* --- CTA Section (Fixed) --- */}
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
                <span className="text-gold">Empower Your Business</span>
                <br />
                <span className="text-white">With Smarter IT Solutions</span>
              </h2>
              <p className="cta-subheading">
                From custom software and secure hosting to reliable IT support
              </p>

            </div>
          </div>
        </div>
        <div className="cta-right">
          <a href="/contact" className="btn-cta" aria-label="Reach Out">
            Let's Start Conversation
          </a>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`why-card ${visibleWhy.includes(index) ? "visible" : ""}`}
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

export default ITServicesPage;
