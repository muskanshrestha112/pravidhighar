import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Footer section with company information, quick links, services, newsletter, and social media"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="footer-container">
        {/* Company Info */}
        <div
          className="footer-column"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <h3 itemProp="name">Pravidhi Ghar</h3>
          <p itemProp="description">
            Founded in 2026, Pravidhi Ghar is Nepal’s trusted creative agency,
            specializing in event management, IT solutions, and digital marketing.
            We combine creativity and strategy to deliver exceptional results.
          </p>
          <link itemProp="url" href="https://yourwebsite.com" />
        </div>

        {/* Quick Links */}
        <nav
          className="footer-column"
          aria-label="Quick Navigation Links"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/" title="Return to Home page">Home</a></li>
            <li><a href="/about" title="Learn more about Pravidhi Ghar">About Us</a></li>
            <li><a href="/services" title="Explore our offered services">Services</a></li>
            <li><a href="/contact" title="Get in touch with us">Contact</a></li>
          </ul>
        </nav>

        {/* Services Links */}
        <nav
          className="footer-column"
          aria-label="Our Services"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <h4>Our Services</h4>
          <ul>
            <li><a href="/event-management" title="Explore our Event Management services">Event Management</a></li>
            <li><a href="/website-development" title="Learn about our Website Development">Website Development</a></li>
            <li><a href="/digital-marketing" title="View our Digital Marketing expertise">Digital Marketing</a></li>
          </ul>
        </nav>

        {/* Newsletter Signup */}
        <div
          className="footer-column"
          itemScope
          itemType="https://schema.org/SubscribeAction"
        >
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates, insights, and special offers.</p>
          <form
            className="newsletter-form"
            aria-label="Newsletter Signup Form"
            method="post"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter subscription"
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          {/* Social Media Icons */}
          <div className="social-icons" aria-label="Follow us on social media">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          <FaRegCopyright style={{ marginRight: "6px" }} />
          {currentYear} Pravidhi Ghar. All rights reserved.
        </p>
      </div>

      {/* Structured Data JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pravidhi Ghar",
          url: "https://yourwebsite.com",
          logo: "https://yourwebsite.com/logo.png",
          sameAs: [
            "https://facebook.com",
            "https://instagram.com",
            "https://linkedin.com",
            "https://youtube.com",
          ],
          description:
            "Pravidhi Ghar is a professional creative agency based in Nepal offering event management, IT solutions, and digital marketing services.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+977-9800000000",
            contactType: "Customer Support",
            areaServed: "NP",
            availableLanguage: "English",
          },
        })}
      </script>
    </footer>
  );
};

export default Footer;
