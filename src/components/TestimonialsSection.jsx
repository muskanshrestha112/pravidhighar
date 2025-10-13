import React, { useState } from "react";
import "./TestimonialsSection.css";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Aarav Thapa",
    designation: "CEO, TechNepal",
    feedback:
      "Pravidhi Ghar made our corporate event a huge success and built our website in record time!",
    image: client1,
    rating: 5
  },
  {
    id: 2,
    name: "Sita Sharma",
    designation: "Founder, EventBuzz",
    feedback:
      "Their team handled our wedding event flawlessly, from planning to execution. Highly recommended!",
    image: client2,
    rating: 5
  },
  {
    id: 3,
    name: "Rajesh Koirala",
    designation: "Marketing Head, DigitalWave",
    feedback:
      "Pravidhi Ghar’s digital marketing strategies significantly increased our online engagement.",
    image: client3,
    rating: 5
  },
  {
    id: 4,
    name: "Maya Gurung",
    designation: "Entrepreneur, Creatify",
    feedback:
      "Professional, creative, and timely. They transformed our ideas into reality beautifully.",
    image: client4,
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
      role="contentinfo"
    >
      <h2 id="testimonials-heading">What Our Clients Say</h2>

      <div className="testimonial-slider">
        <button
          className="arrow left-arrow"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          &#10094;
        </button>

        <article
          className="testimonial-card"
          aria-label={`Testimonial from ${testimonials[current].name}, ${testimonials[current].designation}`}
        >
          <div className="testimonial-image">
            <img
              src={testimonials[current].image}
              alt={`Photo of ${testimonials[current].name}, ${testimonials[current].designation}`}
            />
          </div>
          <div className="testimonial-content">
            <p className="feedback">"{testimonials[current].feedback}"</p>
            <p className="client-name">{testimonials[current].name}</p>
            <p className="client-designation">{testimonials[current].designation}</p>
          </div>
        </article>

        <button
          className="arrow right-arrow"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          &#10095;
        </button>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pravidhi Ghar",
          "url": "https://yourwebsite.com",
          "sameAs": ["https://www.facebook.com/yourpage", "https://www.linkedin.com/company/yourpage"],
          "review": testimonials.map((t) => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": t.name
            },
            "reviewBody": t.feedback,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": t.rating.toString(),
              "bestRating": "5"
            }
          }))
        })}
      </script>
    </section>
  );
};

export default TestimonialsSection;
