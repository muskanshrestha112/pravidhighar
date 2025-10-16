import React from "react";
import { Helmet } from "react-helmet";
import "./WebDevelopment.css";
import heroImg from "../../assets/webdev-hero.jpg";
import { Link } from "react-router-dom";

// Topic Images
import designImg from "../../assets/web-design.jpg";
import frontendImg from "../../assets/web-frontend.jpg";
import backendImg from "../../assets/web-backend.jpg";
import maintenanceImg from "../../assets/web-maintenance.jpg";

const WebDevelopment = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Professional Web Development Services | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Build modern, responsive websites with professional web development services. Learn about design, frontend, backend, and website maintenance strategies."
        />
        <meta
          name="keywords"
          content="Web Development, Web Design, Frontend Development, Backend Development, Website Maintenance, Responsive Websites"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pravidhighar.com/blog/professional-web-development"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="blog-hero-overlay">
          <h1 className="hero-title">
            Build Powerful Websites with <span className="highlight">Web Development</span>
          </h1>
          <p className="hero-subtitle">
            Professional strategies to design, develop, and maintain modern websites
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" role="main">
        <h2>Introduction</h2>
        <p>
          Web development is the backbone of any online presence. From visually appealing designs to robust backend functionality, professional web development ensures websites are responsive, user-friendly, and optimized for performance. Implementing modern technologies and best practices helps businesses engage users, generate leads, and achieve measurable growth online.
        </p>

        {/* Web Design Section */}
        <div className="content-row">
          <img src={designImg} alt="Web Design" className="blog-img-left" />
          <div className="content-text">
            <h2>Web Design</h2>
            <p>
              Web design focuses on creating visually engaging and intuitive user interfaces, ensuring a seamless experience across devices.
            </p>
            <ul>
              <li>Responsive and mobile-friendly layouts.</li>
              <li>Professional UI/UX design for better engagement.</li>
              <li>Brand-consistent visuals and typography.</li>
              <li>Fast-loading pages to enhance user experience.</li>
              <li>Clear navigation and accessibility for all users.</li>
            </ul>
          </div>
        </div>

        {/* Frontend Development Section */}
        <div className="content-row">
          <img src={frontendImg} alt="Frontend Development" className="blog-img-left" />
          <div className="content-text">
            <h2>Frontend Development</h2>
            <p>
              Frontend development transforms designs into interactive websites using HTML, CSS, and JavaScript, ensuring fast and responsive user interactions.
            </p>
            <ul>
              <li>Dynamic and responsive interfaces.</li>
              <li>Optimized performance and loading speed.</li>
              <li>Cross-browser and device compatibility.</li>
            </ul>
          </div>
        </div>

        {/* Backend Development Section */}
        <div className="content-row">
          <img src={backendImg} alt="Backend Development" className="blog-img-left" />
          <div className="content-text">
            <h2>Backend Development</h2>
            <p>
              Backend development manages server-side operations, databases, and application logic to ensure smooth functionality and reliable data management.
            </p>
            <ul>
              <li>Secure and scalable server-side solutions.</li>
              <li>Efficient database design and management.</li>
              <li>Integration with APIs and third-party services.</li>
              <li>Optimized server performance for faster load times.</li>
              <li>Robust error handling and system monitoring.</li>
            </ul>
          </div>
        </div>

        {/* Website Maintenance Section */}
        <div className="content-row">
          <img src={maintenanceImg} alt="Website Maintenance" className="blog-img-left" />
          <div className="content-text">
            <h2>Website Maintenance</h2>
            <p>
              Ongoing website maintenance keeps sites updated, secure, and performing optimally. Regular checks prevent downtime and improve user experience.
            </p>
            <ul>
              <li>Software updates and security patches.</li>
              <li>Performance monitoring and optimization.</li>
              <li>Content updates and feature enhancements.</li>
            </ul>
          </div>
        </div>

        <h2>Actionable Tips for Web Development</h2>
        <ul>
          <li>Plan website structure and user journey before development.</li>
          <li>Focus on responsive design for all devices.</li>
          <li>Optimize website speed and performance.</li>
          <li>Implement security best practices.</li>
          <li>Continuously test and update your website for better user experience.</li>
        </ul>

        <h2>Benefits of Professional Web Development</h2>
        <ul>
          <li>Create visually appealing and user-friendly websites.</li>
          <li>Improve website performance, speed, and reliability.</li>
          <li>Enhance SEO and online visibility.</li>
          <li>Secure and manage data efficiently.</li>
          <li>Support business growth and customer engagement.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Professional web development ensures businesses have a strong online presence with responsive, secure, and high-performing websites. By combining effective design, frontend and backend development, and ongoing maintenance, companies can attract more users, retain customers, and achieve measurable results online.
        </p>

        <Link to="/contact">
          <button className="cta-button" aria-label="Start Your Web Project">
            Start Your Web Project
          </button>
        </Link>
      </section>
    </div>
  );
};

export default WebDevelopment;
