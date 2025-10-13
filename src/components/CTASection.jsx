import React, { useEffect, useRef, useState } from "react";
import "./CTASection.css";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section
      className={`cta-section ${isVisible ? "animate" : ""}`}
      ref={ctaRef}
      aria-labelledby="cta-heading"
      role="region"
    >
      <div className="cta-left">
        <div className="cta-heading-wrapper">
          <span className="gold-bar"></span>
          <div>
            <h2 id="cta-heading">
              <span className="text-gold">Transform Your Ideas</span>{" "}
              <span className="text-white">Into Impactful Digital Experiences</span>
            </h2>
            <p className="cta-subheading">
              Partner with us to elevate your brand, drive engagement, and achieve measurable success online.
            </p>
          </div>

        </div>
      </div>
      <div className="cta-right">
        <a href="/contact" className="btn-cta" aria-label="Book a Free Consultation">
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CTASection;
