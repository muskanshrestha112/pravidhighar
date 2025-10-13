import React, { useEffect, useRef, useState } from "react";
import ServicesSection from "../components/ServicesSection";
import "./AboutUs.css";

// Images
import storyImg from "../assets/story.jpg";
import heroImg from "../assets/hero.jpg";
import geetaImg from "../assets/geeta.jpg";
import prabinImg from "../assets/prabin.jpg";
import rabinImg from "../assets/rabin.jpg";
import dipeshImg from "../assets/dipesh.jpg";
import sangamImg from "../assets/sangam.jpg";
import muskanImg from "../assets/muskan.jpg";

// Icons
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaHandsHelping,
  FaChartLine,
  FaBullseye,
} from "react-icons/fa";

const TeamCard = ({ img, name, role }) => {
  return (
    <div className="team-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};


const AboutUs = () => {
  const storyRef = useRef(null);
  const visionMissionRef = useRef(null);
  const ctaRef = useRef(null);
  const [storyVisible, setStoryVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Story Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStoryVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (storyRef.current) observer.observe(storyRef.current);
    return () => observer.disconnect();
  }, []);

  // Vision & Mission Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visionMissionRef.current
              .querySelectorAll(".vision-card, .mission-card, .vertical-divider-line")
              .forEach((el) => el.classList.add("show"));
          }
        });
      },
      { threshold: 0.3 }
    );
    if (visionMissionRef.current) observer.observe(visionMissionRef.current);
    return () => observer.disconnect();
  }, []);

  // CTA Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  // Team members array
  const teamMembers = [
    { name: "Geeta", role: "CEO", img: geetaImg },
    { name: "Prabin", role: "Developer", img: prabinImg },
    { name: "Rabin", role: "Marketing Staff", img: rabinImg },
    { name: "Dipesh", role: "Marketing Staff", img: dipeshImg },
    { name: "Sangam", role: "Marketing", img: sangamImg },
    { name: "Muskan", role: "Marketing Lead", img: muskanImg },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="text-primary">Pravidhi</span>{" "}
            <span className="text-accent">Ghar</span>
          </h1>
          <p>Empowering ideas through technology, creativity, and strategy.</p>
          <a href="#service" className="cta-btn">Learn More</a>
        </div>
      </section>

      {/* Story Section */}
      <section className={`story-section ${storyVisible ? "animate" : ""}`} ref={storyRef}>
        <div className="story-text">
          <div className="story-heading"><h2>Our Story</h2></div>
          <div className="story-paragraph">
            <p>
              Founded with a passion for innovation, <strong>Pravidhi Ghar</strong> combines cutting-edge technology,
              creative strategies, and professional expertise to help businesses thrive in the digital era. 
              We deliver comprehensive solutions across <strong>IT services, website and software development,
              event management, and digital marketing</strong>, ensuring every project drives measurable results and enhances brand visibility.
              Our team specializes in crafting engaging corporate events, designing secure and high-performing websites,
              and implementing data-driven marketing campaigns that connect with your target audience.
            </p>
          </div>
        </div>
        <div className="story-image">
          <img src={storyImg} alt="Our Story" />
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Vision & Mission Section */}
      <section className="vision-mission-section" ref={visionMissionRef}>
        <div className="vision-card">
          <FaChartLine className="card-icon" />
          <h3>Our Vision</h3>
          <p>
            To become Nepal’s leading hub for innovation by seamlessly integrating 
            <strong> IT solutions, event management, and digital marketing</strong> — 
            empowering individuals and businesses with <strong>easy access</strong> to 
            high-quality, <strong>affordable, and customer-centric services</strong> 
            that drive growth and digital transformation.
          </p>
        </div>
        <span className="vertical-divider-line"></span>
        <div className="mission-card">
          <FaBullseye className="card-icon" />
          <h3>Our Mission</h3>
          <p>
            To deliver <strong>innovative, scalable, and result-driven solutions</strong> 
            across technology, events, and marketing — making digital success accessible to everyone in Nepal. 
            We strive to build long-term relationships through trust, creativity, and <strong>unparalleled customer satisfaction</strong>.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-header"><h2>Why Choose Us</h2></div>
        <div className="why-choose-grid">
          <div className="why-card"><FaLightbulb className="why-icon" /><h3>Innovative Solutions</h3><p>We blend creativity and technology to deliver unique, cutting-edge solutions.</p></div>
          <div className="why-card"><FaUsers className="why-icon" /><h3>Expert Team</h3><p>Our professionals are skilled, passionate, and committed to your success.</p></div>
          <div className="why-card"><FaRocket className="why-icon" /><h3>Proven Results</h3><p>We focus on measurable outcomes — boosting visibility, engagement, and growth.</p></div>
          <div className="why-card"><FaShieldAlt className="why-icon" /><h3>Trusted & Reliable</h3><p>Transparency and trust form the foundation of every partnership we build.</p></div>
          <div className="why-card"><FaCogs className="why-icon" /><h3>End-to-End Support</h3><p>From planning to post-launch, we ensure smooth execution at every step.</p></div>
          <div className="why-card"><FaHandsHelping className="why-icon" /><h3>Customer-Centric Approach</h3><p>Your goals are our priority — we craft solutions that truly fit your needs.</p></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`cta-section ${isVisible ? "animate" : ""}`} ref={ctaRef} aria-labelledby="cta-heading" role="region">
        <div className="cta-left">
          <div className="cta-heading-wrapper">
            <span className="gold-bar"></span>
            <div>
              <h2 id="cta-heading">
                <span className="text-gold">Elevate Your Business</span><br/>
                <span className="text-white">With Innovative Digital Solutions</span>
              </h2>
              <p className="cta-subheading">
                Partner with us to amplify your brand, engage your audience, and achieve measurable results online.
              </p>
            </div>
          </div>
        </div>
        <div className="cta-right">
          <a href="/contact" className="btn-cta" aria-label="Reach Out">Let's Start Conversation</a>
        </div>
      </section>

{/* Team Section */}
<section className="team-section">
  <h2>Meet the Team</h2>
  <div className="team-cards-wrapper">
    <div className="team-cards">
      {/* First set of cards */}
      <TeamCard img={geetaImg} name="Geeta" role="CEO" />
      <TeamCard img={prabinImg} name="Prabin" role="Developer" />
      <TeamCard img={rabinImg} name="Rabin" role="Marketing Staff" />
      <TeamCard img={dipeshImg} name="Dipesh" role="Marketing Staff" />
      <TeamCard img={sangamImg} name="Sangam" role="Marketing Staff" />
      <TeamCard img={muskanImg} name="Muskan" role="Marketing Lead" />

      {/* Duplicate set for infinite scrolling */}
      <TeamCard img={geetaImg} name="Geeta" role="CEO" />
      <TeamCard img={prabinImg} name="Prabin" role="Developer" />
      <TeamCard img={rabinImg} name="Rabin" role="Marketing Staff" />
      <TeamCard img={dipeshImg} name="Dipesh" role="Marketing Staff" />
      <TeamCard img={sangamImg} name="Sangam" role="Marketing Staff" />
      <TeamCard img={muskanImg} name="Muskan" role="Marketing Lead" />
    </div>
  </div>
</section>



    </main>
  );
};

export default AboutUs;
