import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import contactHeroIllustration from "../assets/undraw_delivery-location_um5t.svg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Pravidhi Ghar</title>
        <meta
          name="description"
          content="Get in touch with Pravidhi Ghar for IT, event management, or marketing services. Contact us today for personalized solutions in Kathmandu, Nepal."
        />
        <meta
          name="keywords"
          content="Contact, IT Services, Event Management, Website Development, Digital Marketing, Nepal"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundColor: "#f7f0f3" }}>
        <div className="contact-hero-content">
          <h1>
            <span className="text-primary">Contact</span>{" "}
            <span className="text-accent">Us</span>
          </h1>
          <p className="hero-subtitle">
            Reach out for IT, Events, and Marketing solutions.
          </p>
        </div>
        <div className="contact-hero-illustration">
          <img src={contactHeroIllustration} alt="Contact Illustration" />
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Get in Touch</h2>
            <p>
              Have a question or a project idea? We’d love to hear from you!
              Reach out to our team using the form or contact details below.
            </p>
            <div className="info-items">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Putalisadak, Kathmandu, Nepal</span>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <span>+977 980-0000000</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>info@pravidhighar.com</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form">
              <h3>Send a Message</h3>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Your Email" required />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <motion.div
        className="contact-map-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Geeta Aviation Kathmandu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.895338273265!2d85.31200560386118!3d27.702652818701985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a858a614e9%3A0x1be4a8e0d2b89448!2sGeeta%20Aviation!5e0!3m2!1sen!2snp!4v1760517973397!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          style={{ border: 0, width: "100%", height: "450px" }}
        ></iframe>
      </motion.div>
    </>
  );
};

export default ContactPage;
