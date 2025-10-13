import React from "react";
import { Helmet } from "react-helmet";
import "./EventMemorable.css";
import heroImg from "../../assets/corporate-event-hero.jpg"; 
import { Link } from "react-router-dom";

// Topic Images
import planningImg from "../../assets/event-planning.jpg";
import engagementImg from "../../assets/event-engagement.jpg";
import brandingImg from "../../assets/event-branding.jpg";
import techImg from "../../assets/event-technology.jpg";
import feedbackImg from "../../assets/event-feedback.jpg";

const EventMemorable = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>How to Make Corporate Events Memorable | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Learn how to plan and host unforgettable corporate events with creative engagement, strong branding, and seamless coordination."
        />
        <meta
          name="keywords"
          content="Corporate Events, Event Planning, Employee Engagement, Branding, Event Management, Pravidhi Ghar"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="blog-hero-overlay">
          <h1 className="hero-title">
            How to Make <span className="highlight">Corporate Events</span> Memorable
          </h1>
          <p className="hero-subtitle">
            Transform ordinary gatherings into unforgettable experiences through creativity and strategy.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <h2>Introduction</h2>
        <p>
          A memorable corporate event strengthens brand identity, inspires employees, and leaves a lasting impression on attendees. By combining thoughtful planning, creative engagement, and effective storytelling, businesses can turn corporate events into powerful networking and brand-building opportunities.
        </p>

        {/* Event Planning Section */}
        <div className="content-row">
          <img src={planningImg} alt="Event Planning" className="blog-img-left" />
          <div className="content-text">
            <h2>Strategic Event Planning</h2>
            <p>
              Every successful event starts with clear goals and a well-structured plan. Understanding your audience and defining measurable objectives set the foundation for a seamless experience.
            </p>
            <ul>
              <li>Set clear objectives and target outcomes.</li>
              <li>Choose the right venue and theme to match your brand.</li>
              <li>Coordinate logistics, schedules, and vendor communication efficiently.</li>
              <li>Incorporate sustainability and inclusivity in event design.</li>
            </ul>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="content-row">
          <img src={engagementImg} alt="Audience Engagement" className="blog-img-left" />
          <div className="content-text">
            <h2>Interactive Audience Engagement</h2>
            <p>
              Engaging your audience transforms attendees into active participants. Incorporate creative activities and interactive experiences that spark connections and lasting memories.
            </p>
            <ul>
              <li>Include games, live polls, or interactive Q&A sessions.</li>
              <li>Encourage networking and collaborative experiences.</li>
              <li>Use storytelling and visuals to build emotional connection.</li>
            </ul>
          </div>
        </div>

        {/* Branding Section */}
        <div className="content-row">
          <img src={brandingImg} alt="Event Branding" className="blog-img-left" />
          <div className="content-text">
            <h2>Strong Branding and Visual Impact</h2>
            <p>
              Memorable events reflect the company’s identity and message. Strategic branding helps reinforce trust, recognition, and emotional connection among guests.
            </p>
            <ul>
              <li>Design cohesive branding across decor, visuals, and materials.</li>
              <li>Highlight brand story through displays, videos, and keynote moments.</li>
              <li>Offer branded giveaways or digital souvenirs.</li>
            </ul>
          </div>
        </div>

    
        {/* Feedback Section */}
        <div className="content-row">
          <img src={feedbackImg} alt="Event Feedback" className="blog-img-left" />
          <div className="content-text">
            <h2>Post-Event Feedback and Follow-Up</h2>
            <p>
              Gathering feedback ensures continuous improvement and maintains relationships beyond the event.
            </p>
            <ul>
              <li>Send post-event surveys to measure satisfaction.</li>
              <li>Share event highlights and thank participants personally.</li>
              <li>Use feedback to plan better future events.</li>
            </ul>
          </div>
        </div>

        <h2>Conclusion</h2>
        <p>
          Memorable corporate events blend creativity, planning, and brand authenticity. By focusing on audience engagement, visual impact, and follow-up, your organization can host events that not only impress but also build lasting professional relationships.
        </p>

        <Link to="/contact">
          <button className="cta-button">Plan Your Next Event</button>
        </Link>
      </section>
    </div>
  );
};

export default EventMemorable;
