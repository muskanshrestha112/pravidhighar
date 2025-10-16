import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./DigitalMarketingPage.css";

// Illustrations
import heroIllustration from "../../assets/undraw_ideas-flow_lwpa.svg"; // new illustration

// Images
import contentImg from "../../assets/content-creation.jpg";
import socialImg from "../../assets/social-media.jpg";
import seoImg from "../../assets/seo.jpg";
import blogImg from "../../assets/blogging.jpg";
import designImg from "../../assets/graphic-design.jpg";
import photoImg from "../../assets/photography.jpg";
import videoImg from "../../assets/videography.jpg";
import adsImg from "../../assets/ads.jpg";

// Icons
import {
  FaPenNib,
  FaCamera,
  FaChartLine,
  FaFacebook,
  FaBullhorn,
  FaAd,
  FaPalette,
} from "react-icons/fa";

const services = [
  {
    title: "Content Creation",
    points: [
      "Short videos and TVC production",
      "Engaging visuals and copy",
      "Creative storytelling",
    ],
    image: contentImg,
  },
  {
    title: "Social Media Handling",
    points: [
      "Facebook, Instagram, TikTok & YouTube",
      "Consistent branding",
      "Community engagement",
    ],
    image: socialImg,
  },
  {
    title: "SEO (Basic)",
    points: [
      "Keyword optimization",
      "On-page and off-page SEO",
      "Improved ranking visibility",
    ],
    image: seoImg,
  },
  {
    title: "Blogging",
    points: [
      "Informative & SEO-friendly blogs",
      "Regular content updates",
      "Audience engagement",
    ],
    image: blogImg,
  },
  {
    title: "Graphic Design",
    points: [
      "Brand identity & logo design",
      "Posters, flyers, and social creatives",
      "Professional visual design",
    ],
    image: designImg,
  },
  {
    title: "Photography",
    points: [
      "Product & event shoots",
      "Professional visual storytelling",
      "Photo Editing",
    ],
    image: photoImg,
  },
{
  title: "Videography",
  points: [
    "Creative video editing",
    "Event & promotional videos",
    "Cinematic storytelling for brands", // new point added
  ],
  image: videoImg,
},
  {
    title: "Paid Ads Handling",
    points: [
      "Facebook & Google Ads",
      "Ad optimization and targeting",
      "Performance analytics",
    ],
    image: adsImg,
  },
];

const whyChooseUs = [
  {
    icon: <FaBullhorn size={40} />,
    title: "Creative Strategy",
    desc: "We craft campaigns that connect emotionally and convert effectively.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Result Driven",
    desc: "Data-backed strategies that maximize ROI and engagement.",
  },
  {
    icon: <FaFacebook size={40} />,
    title: "Social Expertise",
    desc: "Deep understanding of multi-platform trends and audience behavior.",
  },
  {
    icon: <FaPenNib size={40} />,
    title: "Quality Content",
    desc: "Every visual, video, and post reflects professionalism and creativity.",
  },
  {
    icon: <FaPalette size={40} />,
    title: "Modern Design",
    desc: "Clean, trendy, and brand-consistent visuals.",
  },
  {
    icon: <FaAd size={40} />,
    title: "Ad Performance",
    desc: "Continuous optimization for better conversions and growth.",
  },
];

const DigitalMarketingPage = () => {
  const cardRefs = useRef([]);
  const whyRefs = useRef([]);
  const ctaRef = useRef(null); // ✅ Added
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleWhy, setVisibleWhy] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // ✅ Added

  useEffect(() => {
    // Services animation
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

    // Why Choose Us animation
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

    // CTA section animation
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
      cardRefs.current.forEach((card) => card && observer.unobserve(card));
      whyRefs.current.forEach((card) => card && whyObserver.unobserve(card));
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <div className="digital-marketing-page">
      <Helmet>
        <title>Digital Marketing | Content, SEO & Social Media | Pravidhi Ghar</title>
      </Helmet>

      {/* Hero Section */}
   <section className="hero-event">
  <div className="hero-event-content">
    <h1>Professional Event Management</h1>
    <p>From concept to execution...</p>
  </div>
  <div className="hero-event-illustration">
    <img src={heroIllustration} alt="Event Management Illustration" />
  </div>
</section>


      {/* Services Section */}
      <section className="services-section">
        <h2>Our Digital Marketing Services</h2>
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
                <span className="text-gold">Boost Your Brand</span>
                <br />
                <span className="text-white">With Smarter Digital Marketing</span>
              </h2>
              <p className="cta-subheading">
                Let’s build creative campaigns that engage audiences and grow your online presence effectively.
              </p>
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

export default DigitalMarketingPage;
