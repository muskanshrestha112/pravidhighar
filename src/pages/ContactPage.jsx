import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import contactHeroImg from "../assets/contact-hero.jpg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Your Company Name</title>
        <meta
          name="description"
          content="Get in touch with us for event management, website development, or marketing services. Contact Your Company today!"
        />
        <meta
          name="keywords"
          content="Contact, Event Management, Website Development, Digital Marketing, Nepal"
        />
      </Helmet>

      {/* Contact Hero Section */}
      <section 
        className="contact-hero"
        style={{ backgroundImage: `url(${contactHeroImg})` }} // import your hero image
      >
        <div className="contact-hero-overlay">
          <h1>
            <span className="text-primary">Contact</span>{" "}
            <span className="text-accent">Us</span>
          </h1>
          <p>Get in touch for IT, Events & Marketing solutions</p>
        </div>
      </section>


      <section className="contact-section">
        <div className="contact-container">
          {/* Left Section — Contact Info */}
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
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <span>+977 980-0000000</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>info@yourcompany.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Section — Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form">
              <h3>Send a Message</h3>

              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea
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

      {/* Full-width map below contact section */}
      <motion.div
        className="contact-map-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d85.323!3d27.717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900abcdef%3A0xabcdef123456!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1696954000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </>
  );
};

export default ContactPage;
