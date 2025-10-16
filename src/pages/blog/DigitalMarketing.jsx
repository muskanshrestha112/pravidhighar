import React from "react";
import { Helmet } from "react-helmet";
import "./DigitalMarketing.css";
import heroImg from "../../assets/blog1-hero.jpg";
import { Link } from "react-router-dom";

// Topic Images
import seoImg from "../../assets/blog-seo.jpg";
import socialImg from "../../assets/blog-social-media.jpg";
import emailImg from "../../assets/blog-email-marketing.jpg";
import contentImg from "../../assets/blog-content-marketing.jpg";

const DigitalMarketing = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Boost Your Business with Digital Marketing | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Professional digital marketing strategies to grow your business online. Learn SEO, social media, content marketing, and email campaigns for measurable results."
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, Social Media, Content Marketing, Email Marketing, Online Business Growth, Marketing Strategy"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pravidhighar.com/blog/digital-marketing-strategies"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="blog-hero-overlay">
          <h1 className="hero-title">
            Boost Your Business with <span className="highlight">Digital Marketing</span>
          </h1>
          <p className="hero-subtitle">
            Proven strategies to grow your business online and reach the right audience
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" role="main">

        <h2>Introduction</h2>
        <p>
          Digital marketing is essential for modern businesses seeking growth online. 
          Leveraging SEO, social media, content creation, and targeted email campaigns 
          allows companies to reach their ideal audience, boost traffic, and generate high-quality leads. 
          Staying updated with trends ensures a competitive edge in today's fast-paced online environment.
        </p>

        {/* SEO Section */}
        <div className="content-row">
          <img src={seoImg} alt="Search Engine Optimization" className="blog-img-left" />
          <div className="content-text">
            <h2>Search Engine Optimization (SEO)</h2>
            <p>SEO improves visibility and drives organic traffic. Key benefits include:</p>
            <ul>
              <li>Optimize content with targeted keywords to boost rankings.</li>
              <li>Drive consistent, qualified traffic to your website.</li>
              <li>Establish authority and credibility in your niche.</li>
              <li>Increase lead generation and conversions.</li>
              <li>Support long-term business growth and online presence.</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="content-row">
          <img src={socialImg} alt="Social Media Marketing" className="blog-img-left" />
          <div className="content-text">
            <h2>Social Media Marketing</h2>
            <p>
              Social media platforms help businesses engage with their audience, build brand awareness, and gain insights.
            </p>
            <ul>
              <li><strong>Build Engagement:</strong> Foster community, share content, and run targeted campaigns.</li>
              <li><strong>Gain Insights:</strong> Analyze behavior to refine strategies and stay competitive.</li>
            </ul>
          </div>
        </div>

        {/* Email Marketing Section */}
        <div className="content-row">
          <img src={emailImg} alt="Email Marketing Campaigns" className="blog-img-left" />
          <div className="content-text">
            <h2>Email Marketing</h2>
            <p>
              Email campaigns nurture leads, retain customers, and deliver personalized messages to drive conversions.
            </p>
            <ul>
              <li>Increase engagement and loyalty with targeted emails.</li>
              <li>Measure campaign performance and optimize strategies.</li>
              <li>Maximize ROI with automated and personalized workflows.</li>
            </ul>
          </div>
        </div>

        {/* Content Marketing Section */}
        <div className="content-row">
          <img src={contentImg} alt="Content Marketing Strategies" className="blog-img-left" />
          <div className="content-text">
            <h2>Content Marketing</h2>
            <p>
              Creating blogs, videos, and infographics educates your audience, builds authority, and nurtures trust. Consistent high-value content encourages engagement and conversions.
            </p>
            <ul>
              <li>Enhance SEO and organic traffic.</li>
              <li>Engage and retain your audience with valuable content.</li>
              <li>Generate leads and support business growth with strategic content.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Your Business</h2>
        <ul>
          <li>Define clear marketing goals before launching campaigns.</li>
          <li>Understand your target audience to create resonating content.</li>
          <li>Continuously track, analyze, and optimize campaigns.</li>
          <li>Leverage automation for social media and email marketing.</li>
          <li>Stay updated with AI-driven marketing, video content, and emerging trends.</li>
        </ul>

        <h2>Benefits of Digital Marketing</h2>
        <ul>
          <li>Increase website traffic and generate high-quality leads.</li>
          <li>Enhance brand visibility and credibility.</li>
          <li>Build long-term customer relationships.</li>
          <li>Measure and optimize marketing ROI effectively.</li>
          <li>Reach global audiences and compete with larger companies.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Implementing digital marketing strategies helps businesses attract customers, build trust, and achieve measurable online growth. Consistency, data-driven optimization, and leveraging modern tools ensure lasting success in the digital space.
        </p>

        <Link to="/contact">
          <button className="cta-button" aria-label="Start Your Digital Marketing Journey with Pravidhi Ghar">
            Start Your Marketing Journey
          </button>
        </Link>
      </section>
    </div>
  );
};

export default DigitalMarketing;
