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
          content="Follow this 2025 cybersecurity checklist to protect your business from online threats. Learn essential best practices for data protection, password security, phishing awareness, and more."
        />
        <meta
          name="keywords"
          content="Cybersecurity, Cybersecurity Checklist 2025, Data Protection, Online Security, Phishing Prevention, Network Security, Password Management, Business Cyber Safety"
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
            2025 <span className="highlight">Cybersecurity Checklist</span>
          </h1>
          <p className="hero-subtitle">
            Proven best practices to secure your business in the digital era
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">

        <h2>Introduction</h2>
        <p>
          In 2025, cyber threats are becoming more advanced and frequent than ever before. From data breaches to ransomware and phishing scams, businesses of all sizes face real risks. A strong cybersecurity strategy is no longer optional — it’s a necessity. This checklist outlines key practices to strengthen your organization’s defenses, safeguard sensitive data, and ensure business continuity in today’s digital-first world.
        </p>

        {/* Network Security Section */}
        <div className="content-row">
          <img src={networkImg} alt="Network Security" className="blog-img-left" />
          <div className="content-text">
            <h2>1. Strengthen Network Security</h2>
            <p>
              Your network is the backbone of your digital operations. A secure network protects sensitive information and prevents unauthorized access.
            </p>
            <ul>
              <li>Install and update firewalls to block suspicious activities.</li>
              <li>Use intrusion detection and prevention systems (IDS/IPS).</li>
              <li>Regularly patch and update routers, servers, and endpoints.</li>
              <li>Encrypt all data in transit and at rest.</li>
              <li>Segment networks to limit the spread of potential attacks.</li>
            </ul>
          </div>
        </div>

        {/* Data Protection Section */}
        <div className="content-row">
          <img src={dataImg} alt="Data Protection" className="blog-img-left" />
          <div className="content-text">
            <h2>2. Prioritize Data Protection</h2>
            <p>
              Protecting business and customer data is essential for maintaining trust and compliance with regulations like GDPR and ISO 27001.
            </p>
            <ul>
              <li>Backup critical data regularly and test recovery systems.</li>
              <li>Implement data encryption across all devices and cloud services.</li>
              <li>Restrict access to sensitive files based on roles and responsibilities.</li>
              <li>Adopt a zero-trust security framework for all operations.</li>
            </ul>
          </div>
        </div>

        {/* Phishing Awareness Section */}
        <div className="content-row">
          <img src={phishingImg} alt="Phishing Awareness" className="blog-img-left" />
          <div className="content-text">
            <h2>3. Educate Employees on Phishing Attacks</h2>
            <p>
              Human error is one of the biggest causes of cyber incidents. Regular employee training can help prevent phishing and social engineering attacks.
            </p>
            <ul>
              <li>Conduct phishing simulation exercises regularly.</li>
              <li>Train staff to identify suspicious emails and links.</li>
              <li>Use multi-factor authentication (MFA) for all logins.</li>
              <li>Report suspicious messages immediately to IT security teams.</li>
            </ul>
          </div>
        </div>

        {/* Password Management Section */}
        <div className="content-row">
          <img src={passwordImg} alt="Password Security" className="blog-img-left" />
          <div className="content-text">
            <h2>4. Improve Password and Access Management</h2>
            <p>
              Weak passwords and poor access control are easy entry points for hackers. Secure credentials are the first line of defense.
            </p>
            <ul>
              <li>Use strong, unique passwords for each account.</li>
              <li>Implement password managers to avoid reuse or weak combinations.</li>
              <li>Enable MFA for all accounts and sensitive systems.</li>
              <li>Review and revoke inactive user accounts regularly.</li>
            </ul>
          </div>
        </div>

        <h2>5. Actionable Cybersecurity Tips for 2025</h2>
        <ul>
          <li>Adopt AI-driven threat detection and monitoring tools.</li>
          <li>Ensure all devices are protected by updated antivirus software.</li>
          <li>Establish an incident response plan for potential data breaches.</li>
          <li>Secure IoT devices with firmware updates and network segmentation.</li>
          <li>Conduct regular vulnerability assessments and penetration testing.</li>
        </ul>

        <h2>Benefits of Following This Cybersecurity Checklist</h2>
        <ul>
          <li>Prevent costly data breaches and downtime.</li>
          <li>Protect your brand reputation and customer trust.</li>
          <li>Comply with data privacy laws and avoid legal risks.</li>
          <li>Boost business resilience against evolving cyber threats.</li>
          <li>Maintain a safe and secure digital environment for growth.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Cybersecurity in 2025 demands proactive defense and continuous vigilance. By implementing these best practices, your business can minimize vulnerabilities, protect valuable data, and build a secure foundation for long-term success. Don’t wait for an attack — take action now to secure your digital future.
        </p>

        <Link to="/contact">
          <button className="cta-button">Secure Your Business Today</button>
        </Link>
      </section>
    </div>
  );
};

export default CyberSecurity;
