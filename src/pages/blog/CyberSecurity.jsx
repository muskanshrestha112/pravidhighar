import React from "react";
import { Helmet } from "react-helmet";
import "./CyberSecurity.css";
import heroImg from "../../assets/blog-cybersecurity-hero.jpg";
import { Link } from "react-router-dom";

// Topic Images
import networkImg from "../../assets/blog-network-security.jpg";
import dataImg from "../../assets/blog-data-protection.jpg";
import phishingImg from "../../assets/blog-phishing-awareness.jpg";
import passwordImg from "../../assets/blog-password-security.jpg";

const CyberSecurity = () => {
  return (
    <div className="blog-page">
      <Helmet>
        <title>2025 Cybersecurity Checklist | Best Practices to Protect Your Business</title>
        <meta
          name="description"
          content="Follow this 2025 cybersecurity checklist to protect your business from online threats. Learn essential best practices for data protection, password security, phishing awareness, and network protection."
        />
        <meta
          name="keywords"
          content="Cybersecurity 2025, Cybersecurity Checklist, Data Protection, Network Security, Phishing Awareness, Password Security, Business Cyber Safety, IT Security"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.pravidhighar.com/blog/2025-cybersecurity-checklist"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="blog-hero-overlay">
          <h1 className="hero-title">
            2025 <span className="highlight">Cybersecurity Checklist</span>
          </h1>
          <p className="hero-subtitle">
            Proven best practices to secure your business in the digital era
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content" role="main">
        <h2>Introduction</h2>
        <p>
          Cyber threats in 2025 are more sophisticated and frequent than ever, ranging from
          ransomware to phishing attacks. Every business, regardless of size, must prioritize
          cybersecurity. This checklist provides actionable steps to protect sensitive data,
          strengthen defenses, and ensure business continuity in a digital-first world.
        </p>

        {/* Network Security Section */}
        <div className="content-row">
          <img src={networkImg} alt="Network Security Measures" className="blog-img-left" />
          <div className="content-text">
            <h2>1. Strengthen Network Security</h2>
            <p>
              A secure network forms the backbone of your digital operations. Protect your
              infrastructure against unauthorized access and potential attacks.
            </p>
            <ul>
              <li>Install and maintain firewalls to block malicious traffic.</li>
              <li>Use intrusion detection and prevention systems (IDS/IPS).</li>
              <li>Regularly update routers, servers, and endpoints.</li>
              <li>Encrypt data in transit and at rest.</li>
              <li>Segment networks to limit attack spread.</li>
            </ul>
          </div>
        </div>

        {/* Data Protection Section */}
        <div className="content-row">
          <img src={dataImg} alt="Data Protection Strategies" className="blog-img-left" />
          <div className="content-text">
            <h2>2. Prioritize Data Protection</h2>
            <p>
              Protecting sensitive business and customer information is crucial for compliance
              and trust.
            </p>
            <ul>
              <li>Regularly back up critical data and test recovery procedures.</li>
              <li>Encrypt all devices and cloud storage solutions.</li>
              <li>Limit access based on roles and responsibilities.</li>
              <li>Implement a zero-trust security framework.</li>
            </ul>
          </div>
        </div>

        {/* Phishing Awareness Section */}
        <div className="content-row">
          <img src={phishingImg} alt="Phishing Awareness Training" className="blog-img-left" />
          <div className="content-text">
            <h2>3. Educate Employees on Phishing Attacks</h2>
            <p>
              Employee awareness is key to preventing social engineering attacks. Continuous
              training reduces the risk of costly security breaches.
            </p>
            <ul>
              <li>Run phishing simulation exercises regularly.</li>
              <li>Train staff to identify suspicious links and emails.</li>
              <li>Use multi-factor authentication (MFA) for all logins.</li>
              <li>Report suspicious messages immediately to IT teams.</li>
            </ul>
          </div>
        </div>

        {/* Password Management Section */}
        <div className="content-row">
          <img src={passwordImg} alt="Secure Password Management" className="blog-img-left" />
          <div className="content-text">
            <h2>4. Improve Password and Access Management</h2>
            <p>
              Strong access control and password management are essential defenses against
              cyber attacks.
            </p>
            <ul>
              <li>Use unique, strong passwords for every account.</li>
              <li>Utilize password managers to reduce reuse.</li>
              <li>Enable MFA for sensitive systems.</li>
              <li>Regularly review and revoke inactive accounts.</li>
            </ul>
          </div>
        </div>

        <h2>5. Actionable Cybersecurity Tips for 2025</h2>
        <ul>
          <li>Leverage AI-driven monitoring for threat detection.</li>
          <li>Keep all devices updated with the latest antivirus software.</li>
          <li>Maintain an incident response plan for breaches.</li>
          <li>Secure IoT devices and implement network segmentation.</li>
          <li>Perform regular vulnerability assessments and penetration testing.</li>
        </ul>

        <h2>Benefits of Following This Checklist</h2>
        <ul>
          <li>Minimize risks of data breaches and operational downtime.</li>
          <li>Protect customer trust and brand reputation.</li>
          <li>Ensure compliance with privacy regulations.</li>
          <li>Enhance business resilience against evolving threats.</li>
          <li>Create a safe digital environment for growth and innovation.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Proactive cybersecurity is no longer optional. By following this 2025 checklist,
          businesses can safeguard their data, prevent breaches, and maintain a competitive
          edge. Take action now to secure your digital infrastructure for the future.
        </p>

        <Link to="/contact">
          <button className="cta-button" aria-label="Secure Your Business with Pravidhi Ghar">
            Secure Your Business Today
          </button>
        </Link>
      </section>
    </div>
  );
};

export default CyberSecurity;
