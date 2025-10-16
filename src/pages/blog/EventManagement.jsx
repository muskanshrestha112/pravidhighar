import React from "react";
import { Helmet } from "react-helmet";
import "./EventManagement.css";
import heroImg from "../../assets/event-hero.jpg";
import { Link } from "react-router-dom";

// Topic Images
import planningImg from "../../assets/event-planning.jpg";
import marketingImg from "../../assets/event-marketing.jpg";
import executionImg from "../../assets/event-execution.jpg";
import evaluationImg from "../../assets/event-evaluation.jpg";

const EventManagement = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Professional Event Management Services | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Learn how professional event management can help your business create memorable experiences. Discover planning, marketing, execution, and evaluation strategies."
        />
        <meta
          name="keywords"
          content="Event Management, Event Planning, Corporate Events, Event Marketing, Event Execution, Event Evaluation, Professional Event Services"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pravidhighar.com/blog/professional-event-management"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="blog-hero-overlay">
          <h1 className="hero-title">
            Create Memorable Experiences with <span className="highlight">Event Management</span>
          </h1>
          <p className="hero-subtitle">
            Professional strategies to plan, execute, and promote successful events
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" role="main">
        <h2>Introduction</h2>
        <p>
          Event management combines creativity, planning, and execution to deliver impactful experiences. 
          From corporate conferences to large-scale celebrations, professional event management ensures seamless coordination, optimized budgets, and engaged audiences. Strategic planning and marketing help maximize attendance and create lasting impressions.
        </p>

        {/* Event Planning Section */}
        <div className="content-row">
          <img src={planningImg} alt="Event Planning" className="blog-img-left" />
          <div className="content-text">
            <h2>Event Planning</h2>
            <p>
              Laying a strong foundation with clear objectives, budget management, venue selection, and detailed scheduling ensures smooth execution.
            </p>
            <ul>
              <li>Define clear objectives and target audience.</li>
              <li>Create detailed timelines and budgets for efficiency.</li>
              <li>Select appropriate venues, vendors, and resources.</li>
            </ul>
          </div>
        </div>

        {/* Event Marketing Section */}
        <div className="content-row">
          <img src={marketingImg} alt="Event Marketing" className="blog-img-left" />
          <div className="content-text">
            <h2>Event Marketing</h2>
            <p>
              Effective marketing ensures your event reaches the right audience and generates excitement through social media, email campaigns, and creative content.
            </p>
            <ul>
              <li>Promote events via social media and email campaigns.</li>
              <li>Create engaging content and visuals to attract attendees.</li>
              <li>Measure marketing impact and optimize strategies.</li>
            </ul>
          </div>
        </div>

        {/* Event Execution Section */}
        <div className="content-row">
          <img src={executionImg} alt="Event Execution" className="blog-img-left" />
          <div className="content-text">
            <h2>Event Execution</h2>
            <p>
              Flawless execution ensures a positive attendee experience. Coordinating staff, vendors, and logistics is key to a successful event.
            </p>
            <ul>
              <li>Manage event setup, logistics, and on-site coordination.</li>
              <li>Follow schedules and program plans accurately.</li>
              <li>Provide excellent attendee support and engagement.</li>
            </ul>
          </div>
        </div>

        {/* Event Evaluation Section */}
        <div className="content-row">
          <img src={evaluationImg} alt="Event Evaluation" className="blog-img-left" />
          <div className="content-text">
            <h2>Event Evaluation</h2>
            <p>
              Post-event evaluation measures success and identifies improvements for future events.
            </p>
            <ul>
              <li>Collect attendee feedback and analyze satisfaction.</li>
              <li>Measure KPIs such as attendance and engagement.</li>
              <li>Refine future strategies based on insights and learnings.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Successful Events</h2>
        <ul>
          <li>Set clear objectives and goals for every event.</li>
          <li>Understand your audience and tailor experiences to their preferences.</li>
          <li>Leverage digital marketing to boost attendance and engagement.</li>
          <li>Coordinate logistics and vendors meticulously.</li>
          <li>Analyze post-event results to improve future events.</li>
        </ul>

        <h2>Benefits of Professional Event Management</h2>
        <ul>
          <li>Create memorable experiences that leave a lasting impression.</li>
          <li>Enhance brand visibility and audience engagement.</li>
          <li>Streamline planning and reduce operational stress.</li>
          <li>Maximize ROI through strategic budgeting and marketing.</li>
          <li>Continuously improve event strategies with evaluation insights.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Professional event management turns ideas into seamless, memorable experiences. With careful planning, effective marketing, precise execution, and evaluation, businesses can host impactful events that engage audiences and strengthen their brand.
        </p>

        <Link to="/contact">
          <button className="cta-button" aria-label="Plan Your Event with Pravidhi Ghar">
            Plan Your Event with Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default EventManagement;
