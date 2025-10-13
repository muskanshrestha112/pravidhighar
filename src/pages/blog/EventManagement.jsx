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
          content="Event Management, Event Planning, Corporate Events, Marketing, Execution, Event Strategy"
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
            Create Memorable Experiences with <span className="highlight">Event Management</span>
          </h1>
          <p className="hero-subtitle">
            Professional strategies to plan, execute, and promote successful events
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">

        <h2>Introduction</h2>
        <p>
          Event management is a comprehensive process that combines creativity, planning, and execution to deliver memorable experiences. From corporate conferences to large-scale celebrations, professional event management ensures every detail is coordinated, budgets are optimized, and audiences are engaged. Strategic planning and effective marketing help maximize attendance, improve brand visibility, and create lasting impressions.
        </p>

        {/* Event Planning Section */}
        <div className="content-row">
          <img src={planningImg} alt="Event Planning" className="blog-img-left" />
          <div className="content-text">
            <h2>Event Planning</h2>
            <p>
              Effective event planning lays the foundation for successful events. It involves goal setting, budget management, venue selection, and detailed scheduling to ensure seamless execution.
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
              Marketing ensures your event reaches the right audience and generates excitement. It combines social media, email campaigns, and traditional marketing methods.
            </p>
            <ul>
              <li>Promote events through social media and email campaigns.</li>
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
              Flawless execution ensures the event runs smoothly and participants have a positive experience. Coordination of staff, vendors, and logistics is key.
            </p>
            <ul>
              <li>Manage event setup, logistics, and on-site coordination.</li>
              <li>Ensure schedules and programs are followed accurately.</li>
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
              Post-event evaluation helps measure success, learn from feedback, and improve future events. Tracking KPIs ensures continuous improvement.
            </p>
            <ul>
              <li>Collect attendee feedback and analyze satisfaction.</li>
              <li>Measure key performance indicators like attendance and engagement.</li>
              <li>Refine future strategies based on insights and learnings.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Successful Events</h2>
        <ul>
          <li>Set clear objectives and goals for every event.</li>
          <li>Understand your audience and tailor experiences to their preferences.</li>
          <li>Leverage digital marketing to boost attendance and engagement.</li>
          <li>Coordinate logistics and vendors meticulously for smooth execution.</li>
          <li>Analyze post-event results to improve future events.</li>
        </ul>

        <h2>Benefits of Professional Event Management</h2>
        <ul>
          <li>Create memorable experiences that leave a lasting impression.</li>
          <li>Enhance brand visibility and audience engagement.</li>
          <li>Streamline planning and reduce operational stress.</li>
          <li>Maximize ROI through strategic budgeting and marketing.</li>
          <li>Measure success and continuously improve event strategies.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Professional event management transforms ideas into seamless, memorable experiences. By combining careful planning, effective marketing, precise execution, and detailed evaluation, businesses can create impactful events that engage audiences and enhance their brand.
        </p>

        <Link to="/contact">
          <button className="cta-button">Plan Your Event with Us</button>
        </Link>
      </section>
    </div>
  );
};

export default EventManagement;
