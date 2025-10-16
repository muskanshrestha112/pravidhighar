import React from "react";
import { Helmet } from "react-helmet";
import "./ContentMarketing.css";
import heroImg from "../../assets/content-hero.jpg";
import { Link } from "react-router-dom";

// Topic Images
import strategyImg from "../../assets/content-strategy.jpg";
import storytellingImg from "../../assets/content-storytelling.jpg";
import seoImg from "../../assets/content-seo.jpg";
import analyticsImg from "../../assets/content-analytics.jpg";

const ContentMarketing = () => {
  return (
    <main className="blog-page" role="main">
      <Helmet>
        <title>Content Marketing That Actually Works | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Master content marketing strategies that drive engagement, build trust, and accelerate business growth. Learn about storytelling, SEO, and analytics best practices from Pravidhi Ghar."
        />
        <meta
          name="keywords"
          content="Content Marketing 2025, Storytelling in Marketing, SEO Content, Brand Strategy, Digital Marketing Nepal, Content Analytics, Marketing Insights"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Content Marketing That Actually Works | Pravidhi Ghar" />
        <meta
          property="og:description"
          content="Discover how to create powerful, strategic, and engaging content that builds trust and drives conversions in 2025."
        />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Content Marketing Hero Section"
      >
        <div className="blog-hero-overlay">
          <h1 className="hero-title">
            Content Marketing That <span className="highlight">Actually Works</span>
          </h1>
          <p className="hero-subtitle">
            Turn your content into a powerful tool for engagement, trust, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <article
        className="blog-content"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <h2>Introduction</h2>
        <p>
          Content marketing is no longer just about writing articles — it’s about creating valuable,
          consistent, and authentic experiences that resonate with your audience. In 2025, effective
          content marketing blends creativity, storytelling, and data-driven strategy to build lasting
          relationships and accelerate brand growth.
        </p>

        {/* Content Strategy Section */}
        <div className="content-row">
          <img
            src={strategyImg}
            alt="Content Strategy Planning"
            className="blog-img-left"
            loading="lazy"
          />
          <div className="content-text">
            <h2>Developing a Strong Content Strategy</h2>
            <p>
              A clear content strategy aligns your messaging with business goals and audience needs.
              It defines what to create, when to publish, and how to measure success.
            </p>
            <ul>
              <li>Define audience personas and business objectives.</li>
              <li>Plan topics that address audience challenges.</li>
              <li>Establish a consistent posting schedule.</li>
              <li>Ensure brand tone and message consistency.</li>
              <li>Refine strategy using feedback and performance data.</li>
            </ul>
          </div>
        </div>

        {/* Storytelling Section */}
        <div className="content-row">
          <img
            src={storytellingImg}
            alt="Storytelling in Content Marketing"
            className="blog-img-left"
            loading="lazy"
          />
          <div className="content-text">
            <h2>The Power of Storytelling</h2>
            <p>
              Storytelling turns information into emotion — and emotion drives engagement. People remember
              stories, not statistics. Crafting authentic stories makes your brand more relatable and human.
            </p>
            <ul>
              <li>Share real stories that reflect your brand identity.</li>
              <li>Use visuals, videos, and testimonials for impact.</li>
              <li>Evoke emotion to strengthen brand recall.</li>
              <li>Keep a consistent and authentic voice across platforms.</li>
            </ul>
          </div>
        </div>

        {/* SEO Section */}
        <div className="content-row">
          <img
            src={seoImg}
            alt="SEO Optimization for Content Marketing"
            className="blog-img-left"
            loading="lazy"
          />
          <div className="content-text">
            <h2>Optimizing Content for SEO</h2>
            <p>
              SEO ensures your content reaches the right audience. Optimized articles attract organic traffic,
              build credibility, and deliver measurable business growth.
            </p>
            <ul>
              <li>Integrate relevant keywords naturally within text.</li>
              <li>Write compelling meta titles and descriptions.</li>
              <li>Include internal and external links strategically.</li>
              <li>Prioritize mobile responsiveness and page speed.</li>
            </ul>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="content-row">
          <img
            src={analyticsImg}
            alt="Analyzing Content Performance"
            className="blog-img-left"
            loading="lazy"
          />
          <div className="content-text">
            <h2>Measuring and Improving Performance</h2>
            <p>
              Performance analysis helps identify what resonates with your audience and where improvements are needed.
              Use analytics tools to continuously refine and scale your content success.
            </p>
            <ul>
              <li>Track engagement metrics like CTR, shares, and bounce rate.</li>
              <li>Use Google Analytics, SEMrush, or Ahrefs for insights.</li>
              <li>Adapt strategy based on real-time performance data.</li>
              <li>Experiment with formats like short videos and podcasts.</li>
            </ul>
          </div>
        </div>

        {/* Tips */}
        <h2>Actionable Tips for Effective Content Marketing</h2>
        <ul>
          <li>Prioritize value over volume — high-quality content wins.</li>
          <li>Repurpose top-performing posts into diverse formats.</li>
          <li>Stay consistent with your content calendar.</li>
          <li>Leverage AI tools for research and optimization.</li>
          <li>Engage directly with your audience through comments and polls.</li>
        </ul>

        {/* Benefits */}
        <h2>Benefits of Content Marketing</h2>
        <ul>
          <li>Build long-term audience trust and loyalty.</li>
          <li>Boost organic search visibility and traffic.</li>
          <li>Enhance brand authority and thought leadership.</li>
          <li>Increase engagement and conversion rates.</li>
          <li>Generate sustainable, high-quality leads.</li>
        </ul>

        {/* Conclusion */}
        <h2>Conclusion</h2>
        <p>
          Content marketing is an ongoing process of storytelling, strategy, and optimization. By balancing creativity
          with analytics and authenticity, your brand can capture attention, inspire trust, and achieve measurable
          growth. Start building content that connects, converts, and endures.
        </p>

        {/* CTA Button */}
        <Link to="/contact" aria-label="Contact Pravidhi Ghar for Content Marketing Services">
          <button className="cta-button">Start Your Content Strategy</button>
        </Link>
      </article>
    </main>
  );
};

export default ContentMarketing;
