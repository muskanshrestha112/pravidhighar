import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Footer Section with company info, links, newsletter, and social media"
    >
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-column" itemScope itemType="https://schema.org/Organization">
          <h3 itemProp="name">Pravidhi Ghar</h3>
          <p itemProp="description">
            Established in 2026, Pravidhi Ghar is a leading creative agency in Nepal
            providing professional event management, IT solutions, and digital marketing services.
          </p>
          <link itemProp="url" href="https://yourwebsite.com" />
        </div>

        {/* Quick Links */}
        <nav className="footer-column" aria-label="Quick Links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" title="Go to Home section">Home</a></li>
            <li><a href="#about" title="Learn more About Us">About Us</a></li>
            <li><a href="#services" title="View our Services">Services</a></li>
            <li><a href="#contact" title="Contact Pravidhi Ghar">Contact</a></li>
          </ul>
        </nav>

        {/* Services Links */}
        <nav className="footer-column" aria-label="Services Links">
          <h4>Services</h4>
          <ul>
            <li><a href="#event-management" title="Event Management Services">Event Management</a></li>
            <li><a href="#website-development" title="Website Development Services">Website Development</a></li>
            <li><a href="#digital-marketing" title="Digital Marketing Services">Digital Marketing</a></li>
          </ul>
        </nav>

        {/* Newsletter Signup */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Subscribe to get latest updates and offers.</p>
          <form
            className="newsletter-form"
            aria-label="Newsletter Signup Form"
            itemScope
            itemType="https://schema.org/SubscribeAction"
          >
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email Address"
              required
              name="email"
            />
            <button type="submit">Subscribe</button>
          </form>

          {/* Social Media Icons */}
          <div className="social-icons" aria-label="Social Media Links">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

      </div>

          {/* Copyright */}
      <div className="footer-bottom">
        <p>
          <FaRegCopyright style={{ marginRight: "6px" }} />
          {new Date().getFullYear()} Pravidhi Ghar. All rights reserved.
        </p>
      </div>


      {/* Structured Data JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pravidhi Ghar",
          "url": "https://yourwebsite.com",
          "logo": "https://yourwebsite.com/logo.png",
          "sameAs": [
            "https://facebook.com",
            "https://instagram.com",
            "https://linkedin.com",
            "https://youtube.com"
          ],
          "description": "Professional event management, IT solutions, and digital marketing agency based in Nepal."
        })}
      </script>
    </footer>
  );
};

export default Footer;
