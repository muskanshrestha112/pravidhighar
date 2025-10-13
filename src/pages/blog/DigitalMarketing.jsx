import React from "react";
import { Helmet } from "react-helmet";
import "./DigitalMarkeing.css";
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
          content="Professional strategies to boost your business using digital marketing. Learn SEO, social media, content marketing, and more for growth."
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, Social Media, Content Marketing, Email Marketing, Online Business Growth"
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
            Boost Your Business with <span className="highlight"> Digital Marketing</span>
          </h1>
          <p className="hero-subtitle">
            Professional strategies to grow your business online
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">

        <h2>Introduction</h2>
       <p>Digital marketing is a critical strategy for modern businesses aiming to grow online. By leveraging SEO, social media marketing, content marketing, and targeted email campaigns, companies can reach their ideal audience, boost website traffic, and generate high-quality leads. Effective digital marketing drives measurable results, increases brand visibility, enhances customer engagement, and maximizes ROI. Staying ahead with the latest digital trends ensures businesses maintain a competitive edge in today’s fast-paced online marketplace.</p>


        {/* SEO Section */}
        <div className="content-row">
          <img src={seoImg} alt="SEO" className="blog-img-left" />
          <div className="content-text">
            <h2>Search Engine Optimization (SEO)</h2>
            <p>SEO is the cornerstone of every effective digital marketing strategy. Key benefits include:</p>
              <ul>
                <li>Boost search engine rankings with targeted keywords and optimized content.</li>
                <li>Drive consistent organic traffic to your website.</li>
                <li>Establish authority and credibility in your niche.</li>
                <li>Generate qualified leads and increase conversions.</li>
                <li>Ensure long-term business growth in a competitive online landscape.</li>
              </ul>


          </div>
        </div>

        {/* Social Media Section */}
        <div className="content-row">
          <img src={socialImg} alt="Social Media Marketing" className="blog-img-left" />
          <div className="content-text">
            <h2>Social Media Marketing</h2>
          <p>
            Social media helps businesses connect with their audience, boost brand visibility, generate leads, and gain insights to stay competitive.
          </p>
         <ul>
            <li><strong>Build Engagement & Visibility:</strong> Connect with your audience, foster loyal communities, and run targeted campaigns to increase brand awareness and drive high-quality leads.</li>
            <li><strong>Gain Insights & Stay Competitive:</strong> Analyze audience behavior, refine marketing strategies, and maintain a strong edge in the digital marketplace.</li>
          </ul>
          </div>
        </div>

        {/* Email Marketing Section */}
        <div className="content-row">
          <img src={emailImg} alt="Email Marketing" className="blog-img-left" />
          <div className="content-text">
            <h2>Email Marketing</h2>
           <p>
            Email campaigns are an effective way for businesses to retain customers, nurture leads, and drive conversions. They deliver personalized content that strengthens relationships and promotes products or services.
          </p>
          <ul>
            <li>Boost engagement and customer loyalty through targeted messaging.</li>
            <li>Generate measurable results to optimize marketing strategies.</li>
            <li>Increase conversions and maximize return on investment (ROI).</li>
          </ul>
          </div>
        </div>

        {/* Content Marketing Section */}
        <div className="content-row">
          <img src={contentImg} alt="Content Marketing" className="blog-img-left" />
          <div className="content-text">
            <h2>Content Marketing</h2>
           <p>
              Content marketing through blogs, videos, and infographics allows businesses to educate their audience, establish authority, and build long-term trust. Consistently sharing valuable and relevant content not only keeps your audience engaged but also encourages them to take action, fostering stronger relationships and brand loyalty.
            </p>
            <ul>
              <li>Improve SEO rankings and increase organic traffic.</li>
              <li>Engage and retain your audience with valuable content.</li>
              <li>Generate leads and support business growth through targeted content strategies.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Your Business</h2>
        <ul>
          <li>Define clear marketing goals before launching campaigns.</li>
          <li>Understand your target audience to create resonating content.</li>
          <li>Track, analyze, and optimize campaigns continuously.</li>
          <li>Leverage automation for email and social media marketing.</li>
          <li>Stay updated with trends like AI-driven marketing and video content.</li>
        </ul>

        <h2>Benefits of Digital Marketing</h2>
        <ul>
          <li>Increase website traffic and lead generation</li>
          <li>Enhance brand visibility and credibility</li>
          <li>Build long-term customer relationships</li>
          <li>Measure and optimize marketing ROI effectively</li>
          <li>Reach global audiences and compete with larger companies</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Digital marketing is a must for any business seeking growth. By applying the right strategies, tools, and analytics, companies can attract more customers, build trust, and achieve measurable results online.
        </p>

        <Link to="/contact">
          <button className="cta-button">Start Your Marketing Journey</button>
        </Link>
      </section>
    </div>
  );
};

export default DigitalMarketing;