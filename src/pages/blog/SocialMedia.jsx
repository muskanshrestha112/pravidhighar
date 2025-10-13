import React from "react";
import { Helmet } from "react-helmet";
import "./SocialMedia.css";
import heroImg from "../../assets/social-hero.jpg"; 
import { Link } from "react-router-dom";

// Topic Images
import strategyImg from "../../assets/social-strategy.jpg";
import contentImg from "../../assets/social-content.jpg";
import adsImg from "../../assets/social-ads.jpg";
import analyticsImg from "../../assets/social-analytics.jpg";

const SocialMedia = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Social Media Strategies for Small Businesses | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Discover powerful social media strategies for small businesses. Learn how to build engagement, run ads, create content, and track performance for success."
        />
        <meta
          name="keywords"
          content="Social Media Marketing, Small Business Marketing, Social Media Strategy, Online Branding, Facebook Ads, Instagram Marketing"
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
            Smart <span className="highlight">Social Media Strategies</span> for Small Businesses
          </h1>
          <p className="hero-subtitle">
            Build your brand, grow engagement, and boost sales through powerful social media marketing.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">

        <h2>Introduction</h2>
        <p>
          Social media marketing is one of the most effective tools for small businesses to increase visibility, connect with customers, and drive sales. With the right strategy, even small brands can compete with larger companies by creating authentic connections and delivering valuable content. Platforms like Facebook, Instagram, LinkedIn, and TikTok help businesses reach the right audience and grow organically or through paid campaigns.
        </p>

        {/* Strategy Planning Section */}
        <div className="content-row">
          <img src={strategyImg} alt="Social Media Strategy" className="blog-img-left" />
          <div className="content-text">
            <h2>Developing a Social Media Strategy</h2>
            <p>
              A strong social media strategy gives direction to your marketing efforts. It helps you define goals, understand your audience, and plan content effectively.
            </p>
            <ul>
              <li>Set clear marketing goals aligned with your business objectives.</li>
              <li>Identify your target audience and preferred platforms.</li>
              <li>Maintain a consistent brand tone and visual identity.</li>
              <li>Plan content calendars for regular and engaging posts.</li>
              <li>Track results and adjust your approach for improvement.</li>
            </ul>
          </div>
        </div>

        {/* Content Creation Section */}
        <div className="content-row">
          <img src={contentImg} alt="Social Media Content" className="blog-img-left" />
          <div className="content-text">
            <h2>Content Creation & Engagement</h2>
            <p>
              Engaging content is the key to social media success. Sharing authentic, valuable, and visually appealing posts builds trust and strengthens your brand presence.
            </p>
            <ul>
              <li>Create high-quality visuals, videos, and stories.</li>
              <li>Use relevant hashtags to increase discoverability.</li>
              <li>Encourage interaction through polls, reels, and comments.</li>
              <li>Share customer testimonials and behind-the-scenes updates.</li>
              <li>Post consistently to stay relevant and memorable.</li>
            </ul>
          </div>
        </div>

        {/* Paid Advertising Section */}
        <div className="content-row">
          <img src={adsImg} alt="Social Media Advertising" className="blog-img-left" />
          <div className="content-text">
            <h2>Social Media Advertising</h2>
            <p>
              Paid social media ads are a cost-effective way for small businesses to reach larger audiences. They allow for precise targeting based on demographics, interests, and behavior.
            </p>
            <ul>
              <li>Run targeted ads on platforms like Facebook, Instagram, and LinkedIn.</li>
              <li>Use A/B testing to find the most effective campaigns.</li>
              <li>Promote top-performing posts for better engagement.</li>
              <li>Set clear budgets and track conversions in real time.</li>
              <li>Combine organic and paid strategies for balanced growth.</li>
            </ul>
          </div>
        </div>

        {/* Analytics and Optimization Section */}
        <div className="content-row">
          <img src={analyticsImg} alt="Social Media Analytics" className="blog-img-left" />
          <div className="content-text">
            <h2>Analytics & Optimization</h2>
            <p>
              Regular analysis helps small businesses understand what’s working and where to improve. Tracking engagement and reach leads to smarter decisions.
            </p>
            <ul>
              <li>Monitor post engagement, reach, and follower growth.</li>
              <li>Use insights to refine content and posting times.</li>
              <li>Identify trends and adapt strategies accordingly.</li>
              <li>Leverage analytics tools for better performance tracking.</li>
              <li>Focus on metrics that align with business goals.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Small Businesses</h2>
        <ul>
          <li>Start with 2–3 platforms where your audience is most active.</li>
          <li>Be authentic—show your brand’s human side.</li>
          <li>Use storytelling to connect emotionally with customers.</li>
          <li>Respond promptly to messages and comments.</li>
          <li>Collaborate with micro-influencers for local reach.</li>
        </ul>

        <h2>Benefits of Social Media Marketing</h2>
        <ul>
          <li>Boost brand awareness and audience engagement.</li>
          <li>Generate quality leads and drive website traffic.</li>
          <li>Build trust and long-term customer loyalty.</li>
          <li>Get measurable insights to improve performance.</li>
          <li>Compete effectively with larger brands at lower costs.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Social media is a powerful and affordable marketing channel for small businesses. With a clear strategy, consistent engagement, and data-driven decisions, your brand can attract loyal followers, drive conversions, and grow sustainably in today’s digital landscape.
        </p>

        <Link to="/contact">
          <button className="cta-button">Grow Your Brand with Us</button>
        </Link>
      </section>
    </div>
  );
};

export default SocialMedia;
