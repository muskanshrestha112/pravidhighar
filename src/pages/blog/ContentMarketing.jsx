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
    <div className="blog-page">
      <Helmet>
        <title>Content Marketing That Actually Works | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Learn powerful content marketing strategies that drive engagement, build trust, and grow your business. Discover storytelling, SEO, and analytics best practices."
        />
        <meta
          name="keywords"
          content="Content Marketing, Storytelling, SEO Content, Brand Strategy, Digital Marketing, Content Analytics"
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
            Content Marketing That <span className="highlight">Actually Works</span>
          </h1>
          <p className="hero-subtitle">
            Turn your content into a powerful tool for growth and engagement
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">

        <h2>Introduction</h2>
        <p>
          Content marketing goes beyond posting blogs — it’s about creating valuable, consistent, and engaging content that attracts and retains your target audience. The right approach not only boosts visibility but also builds credibility, strengthens brand relationships, and drives long-term growth. In 2025, strategic content marketing remains one of the most effective digital tools for brand success.
        </p>

        {/* Content Strategy Section */}
        <div className="content-row">
          <img src={strategyImg} alt="Content Strategy" className="blog-img-left" />
          <div className="content-text">
            <h2>Developing a Strong Content Strategy</h2>
            <p>
              A solid strategy ensures that your content aligns with your business goals and speaks directly to your target audience. It’s the foundation of all successful marketing campaigns.
            </p>
            <ul>
              <li>Define your goals and audience personas clearly.</li>
              <li>Plan content topics that solve audience pain points.</li>
              <li>Choose the right platforms and posting frequency.</li>
              <li>Maintain brand consistency across all formats.</li>
              <li>Review and adjust strategy based on audience feedback.</li>
            </ul>
          </div>
        </div>

        {/* Storytelling Section */}
        <div className="content-row">
          <img src={storytellingImg} alt="Storytelling in Marketing" className="blog-img-left" />
          <div className="content-text">
            <h2>The Power of Storytelling</h2>
            <p>
              Storytelling transforms your content from simple information into emotional connections. Great stories help your audience remember your brand and engage with your message more deeply.
            </p>
            <ul>
              <li>Create relatable narratives that reflect your brand’s values.</li>
              <li>Use visuals, videos, and testimonials to enhance impact.</li>
              <li>Inspire emotion to strengthen trust and recall.</li>
              <li>Keep your tone authentic and consistent across platforms.</li>
            </ul>
          </div>
        </div>

        {/* SEO and Optimization Section */}
        <div className="content-row">
          <img src={seoImg} alt="SEO Optimization" className="blog-img-left" />
          <div className="content-text">
            <h2>Optimizing Content for SEO</h2>
            <p>
              SEO ensures your content gets discovered by the right audience. Optimization techniques help increase visibility, organic traffic, and lead conversions over time.
            </p>
            <ul>
              <li>Use relevant keywords naturally within content.</li>
              <li>Optimize titles, meta descriptions, and headings.</li>
              <li>Include internal and external links strategically.</li>
              <li>Ensure fast loading speed and mobile-friendly design.</li>
            </ul>
          </div>
        </div>

        {/* Analytics and Improvement Section */}
        <div className="content-row">
          <img src={analyticsImg} alt="Content Analytics" className="blog-img-left" />
          <div className="content-text">
            <h2>Measuring and Improving Performance</h2>
            <p>
              Tracking results allows you to identify what works and refine your content strategy. Data-driven insights turn good campaigns into great ones.
            </p>
            <ul>
              <li>Monitor engagement metrics like CTR, shares, and time on page.</li>
              <li>Use tools like Google Analytics and SEMrush for insights.</li>
              <li>Adjust your approach based on user behavior and performance.</li>
              <li>Experiment with new formats like reels, podcasts, or infographics.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Effective Content Marketing</h2>
        <ul>
          <li>Focus on quality over quantity — valuable content wins.</li>
          <li>Repurpose successful posts into new formats (videos, infographics).</li>
          <li>Stay consistent with publishing schedules.</li>
          <li>Incorporate AI tools for idea generation and content optimization.</li>
          <li>Engage with your audience through comments and feedback.</li>
        </ul>

        <h2>Benefits of Content Marketing</h2>
        <ul>
          <li>Build trust and long-term customer relationships.</li>
          <li>Increase organic traffic and SEO performance.</li>
          <li>Strengthen brand authority and credibility.</li>
          <li>Boost engagement and customer loyalty.</li>
          <li>Generate qualified leads that drive revenue growth.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Effective content marketing blends creativity with strategy. By focusing on storytelling, SEO, and analytics, businesses can attract loyal audiences and turn content into consistent growth. The key is to stay authentic, adaptable, and audience-driven — that’s what truly makes content marketing work.
        </p>

        <Link to="/contact">
          <button className="cta-button">Start Your Content Strategy</button>
        </Link>
      </section>
    </div>
  );
};

export default ContentMarketing;
