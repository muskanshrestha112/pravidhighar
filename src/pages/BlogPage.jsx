import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import heroImg from "../assets/blog-hero.jpg"; // make sure the image exists in assets
import "./BlogPage.css";

// Import images from assets
import blog1 from "../assets/blog-digital-marketing.jpg";
import blog2 from "../assets/blog-event-management.jpg";
import blog3 from "../assets/blog-web-development.jpg";
import blog4 from "../assets/blog-social-media.jpg";
import blog5 from "../assets/blog-corporate-events.jpg";
import blog6 from "../assets/blog-ai-web.jpg";
import blog7 from "../assets/blog-content-marketing.jpg";
import blog8 from "../assets/blog-it-trends.jpg";
import blog9 from "../assets/blog-cybersecurity.jpg";

// Blog posts data
const blogPosts = [
  { id: 1, title: "How to Boost Your Business with Digital Marketing", img: blog1, link: "/blog/digital-marketing" },
  { id: 2, title: "Top 10 Event Planning Tips for Corporates", img: blog2, link: "/blog/event-management" },
  { id: 3, title: "Web Development Trends in 2025", img: blog3, link: "/blog/web-development" },
  { id: 4, title: "Social Media Strategies for Small Businesses", img: blog4, link: "/blog/social-media" },
  { id: 5, title: "How to Make Your Corporate Events Memorable", img: blog5, link: "/blog/corporate-events" },
  { id: 6, title: "AI in Modern Web Applications in 2025", img: blog6, link: "/blog/ai-web" },
  { id: 7, title: "Content Marketing that Actually Works", img: blog7, link: "/blog/content-marketing" },
  { id: 8, title: "Top IT Trends to Watch in 2025", img: blog8, link: "/blog/it-trends-2025" },
  { id: 9, title: "2025 Cybersecurity Checklist", img: blog9, link: "/blog/cybersecurity" },
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Explore the latest insights on IT, Event Management, and Digital Marketing from Pravidhi Ghar."
        />
        <meta
          name="keywords"
          content="IT, Web Development, Event Management, Digital Marketing, SEO, Blog, Pravidhi Ghar"
        />
      </Helmet>

     {/* Hero Section */}
       <section 
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        >
        <div className="blog-hero-overlay">
            <h1>
            <span className="text-primary">Our</span>{" "}
            <span className="text-accent">Blog</span>
            </h1>
            <p>Insights & tips on IT, Events, and Digital Marketing to grow your business</p>
        </div>
        </section>



      {/* Blog Cards */}
      <section className="blog-cards-section">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="card-img-wrapper">
              <img src={post.img} alt={post.title} />
            </div>
            <h3>{post.title}</h3>
            <a href={post.link} className="read-more">
              Read More <span>→</span>
            </a>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default BlogPage;
