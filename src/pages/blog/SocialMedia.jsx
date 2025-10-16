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
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pravidhighar.com/blog/social-media-strategies-small-business"
        />
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
            Build your brand, grow engagement, and boost sales through effective social media marketing.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" role="main">
        <h2>Introduction</h2>
        <p>
          Social media marketing is one of the most effective tools for small businesses to increase visibility, engage with customers, and drive sales. Platforms like Facebook, Instagram, LinkedIn, and TikTok enable even small brands to compete with larger companies through authentic connections and valuable content.
        </p>

        {/* Strategy Planning */}
        <div className="content-row">
          <img src={strategyImg} alt="Social Media Strategy" className="blog-img-left" />
          <div className="content-text">
            <h2>Developing a Social Media Strategy</h2>
            <p>
              A clear strategy gives direction to your social media marketing efforts. It defines goals, audience, and content approach.
            </p>
            <ul>
              <li>Set clear marketing objectives aligned with business goals.</li>
              <li>Identify target audience and preferred platforms.</li>
              <li>Maintain consistent brand tone and visual identity.</li>
              <li>Create content calendars for regular engagement.</li>
              <li>Track results and refine strategy for continuous improvement.</li>
            </ul>
          </div>
        </div>

        {/* Content Creation */}
        <div className="content-row">
          <img src={contentImg} alt="Social Media Content" className="blog-img-left" />
          <div className="content-text">
            <h2>Content Creation & Engagement</h2>
            <p>
              Engaging content is essential for social media success. Authentic and valuable posts build trust and strengthen brand presence.
            </p>
            <ul>
              <li>Create high-quality visuals, videos, and stories.</li>
              <li>Use relevant hashtags to increase discoverability.</li>
              <li>Encourage interaction through polls, reels, and comments.</li>
              <li>Share testimonials and behind-the-scenes content.</li>
              <li>Post consistently to stay memorable.</li>
            </ul>
          </div>
        </div>

        {/* Paid Advertising */}
        <div className="content-row">
          <img src={adsImg} alt="Social Media Advertising" className="blog-img-left" />
          <div className="content-text">
            <h2>Social Media Advertising</h2>
            <p>
              Paid campaigns help small businesses reach wider audiences with precision targeting based on demographics, interests, and behavior.
            </p>
            <ul>
              <li>Run targeted ads on platforms like Facebook, Instagram, and LinkedIn.</li>
              <li>Use A/B testing to optimize campaigns.</li>
              <li>Promote top-performing content for better engagement.</li>
              <li>Set budgets and monitor conversions in real time.</li>
              <li>Combine organic and paid strategies for balanced growth.</li>
            </ul>
          </div>
        </div>

        {/* Analytics */}
        <div className="content-row">
          <img src={analyticsImg} alt="Social Media Analytics" className="blog-img-left" />
          <div className="content-text">
            <h2>Analytics & Optimization</h2>
            <p>
              Monitoring performance helps identify what works and what needs improvement. Analytics drives smarter decisions.
            </p>
            <ul>
              <li>Track engagement, reach, and follower growth.</li>
              <li>Refine content and posting times based on insights.</li>
              <li>Identify trends and adapt strategies accordingly.</li>
              <li>Use analytics tools for accurate performance tracking.</li>
              <li>Focus on metrics aligned with business objectives.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Small Businesses</h2>
        <ul>
          <li>Start with 2–3 platforms where your audience is most active.</li>
          <li>Be authentic and showcase your brand’s human side.</li>
          <li>Use storytelling to connect emotionally with your audience.</li>
          <li>Respond promptly to messages and comments.</li>
          <li>Collaborate with micro-influencers to expand local reach.</li>
        </ul>

        <h2>Benefits of Social Media Marketing</h2>
        <ul>
          <li>Increase brand awareness and audience engagement.</li>
          <li>Generate leads and drive website traffic.</li>
          <li>Build customer trust and loyalty.</li>
          <li>Gain actionable insights to improve performance.</li>
          <li>Compete effectively with larger brands at lower costs.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Social media offers small businesses an affordable and powerful way to grow. With clear strategies, consistent engagement, and data-driven decisions, your brand can attract loyal followers, increase conversions, and achieve sustainable growth.
        </p>

        <Link to="/contact">
          <button className="cta-button" aria-label="Grow Your Brand with Us">
            Grow Your Brand with Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default SocialMedia;
