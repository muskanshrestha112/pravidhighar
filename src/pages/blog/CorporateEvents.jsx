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
          content="Discover how to plan and host memorable corporate events with engaging activities, strong branding, and seamless organization. Elevate your brand through unforgettable experiences."
        />
        <meta
          name="keywords"
          content="Corporate Events, Event Planning, Brand Engagement, Event Management, Business Networking, Corporate Branding, Event Strategy, Pravidhi Ghar"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pravidhighar.com/blog/how-to-make-corporate-events-memorable"
        />
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
            Transform ordinary corporate gatherings into unforgettable brand experiences.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" role="main">
        <h2>Introduction</h2>
        <p>
          A well-planned corporate event is more than a gathering — it’s a strategic opportunity
          to reinforce your brand identity, inspire teams, and leave a lasting impression on
          clients and partners. Through creativity, engagement, and storytelling, you can turn
          each event into a powerful business tool that connects people and strengthens relationships.
        </p>

        {/* Event Planning Section */}
        <div className="content-row">
          <img src={planningImg} alt="Strategic Event Planning" className="blog-img-left" />
          <div className="content-text">
            <h2>Strategic Event Planning</h2>
            <p>
              Every impactful event begins with a solid foundation. Effective planning ensures
              that every detail aligns with your goals, audience expectations, and brand message.
            </p>
            <ul>
              <li>Define clear event objectives and desired outcomes.</li>
              <li>Choose a venue and theme that align with your company’s vision.</li>
              <li>Coordinate logistics, schedules, and communication seamlessly.</li>
              <li>Incorporate sustainability and accessibility in your planning.</li>
            </ul>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="content-row">
          <img src={engagementImg} alt="Corporate Event Audience Engagement" className="blog-img-left" />
          <div className="content-text">
            <h2>Interactive Audience Engagement</h2>
            <p>
              Engagement is key to making your event memorable. Turning attendees into active
              participants enhances connection, excitement, and long-term recall.
            </p>
            <ul>
              <li>Use live polls, Q&A sessions, and interactive games.</li>
              <li>Encourage networking with collaborative activities.</li>
              <li>Incorporate storytelling, visuals, and audience participation.</li>
            </ul>
          </div>
        </div>

        {/* Branding Section */}
        <div className="content-row">
          <img src={brandingImg} alt="Event Branding and Visual Identity" className="blog-img-left" />
          <div className="content-text">
            <h2>Strong Branding and Visual Identity</h2>
            <p>
              Great branding makes your event instantly recognizable and emotionally engaging.
              A cohesive look and message across all touchpoints strengthens brand recall.
            </p>
            <ul>
              <li>Maintain consistent branding in decor, visuals, and communication.</li>
              <li>Share your brand story through keynote sessions and multimedia.</li>
              <li>Provide branded keepsakes or digital highlights for attendees.</li>
            </ul>
          </div>
        </div>

        {/* Technology Integration */}
        <div className="content-row">
          <img src={techImg} alt="Event Technology Integration" className="blog-img-left" />
          <div className="content-text">
            <h2>Leveraging Event Technology</h2>
            <p>
              Integrating smart technology simplifies management and enhances the guest experience.
              From virtual tools to real-time analytics, technology helps events run smoother.
            </p>
            <ul>
              <li>Use digital check-ins and event management software.</li>
              <li>Incorporate AR/VR elements or live streaming for hybrid participation.</li>
              <li>Track engagement through analytics dashboards.</li>
            </ul>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="content-row">
          <img src={feedbackImg} alt="Post Event Feedback and Analysis" className="blog-img-left" />
          <div className="content-text">
            <h2>Post-Event Feedback and Follow-Up</h2>
            <p>
              A great event doesn’t end when the lights go out. Gathering feedback and sharing
              post-event insights helps sustain engagement and improve future experiences.
            </p>
            <ul>
              <li>Send surveys or feedback forms shortly after the event.</li>
              <li>Share event highlights, photos, and appreciation messages.</li>
              <li>Analyze insights to refine upcoming events.</li>
            </ul>
          </div>
        </div>

        <h2>Conclusion</h2>
        <p>
          Making corporate events memorable requires the right mix of creativity, planning, and
          authenticity. By focusing on strategic design, engagement, technology, and branding,
          your organization can create impactful experiences that foster meaningful relationships
          and lasting impressions.
        </p>

        <Link to="/contact">
          <button className="cta-button" aria-label="Plan Your Next Event with Pravidhi Ghar">
            Plan Your Next Event
          </button>
        </Link>
      </section>
    </div>
  );
};

export default EventMemorable;
