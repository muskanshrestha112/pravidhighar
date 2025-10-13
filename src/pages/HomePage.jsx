import React from "react";
import { Helmet } from "react-helmet";
import "./HomePage.css";


// ===== Import All Section Components =====
//import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
//import Footer from "../components/Footer";

function App() {
  return (
    <>
      {/* ===== SEO / Meta Tags ===== */}
      <Helmet>
        <title>Pravidhi Ghar | Event Management, Website Development & Digital Marketing in Nepal</title>
        <meta
          name="description"
          content="Pravidhi Ghar is a creative agency in Nepal specializing in Event Management, Website Development, and Digital Marketing. We bring your ideas to life — both online and offline."
        />
        <meta
          name="keywords"
          content="Pravidhi Ghar, Event Management Nepal, Website Development Nepal, Digital Marketing Nepal, Event Organizer Nepal, Web Design, SEO Agency"
        />
        <meta name="author" content="Pravidhi Ghar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.pravidhighar.com/" />
      </Helmet>

      {/* ===== Main Website Wrapper ===== */}
      <div className="App">

        {/* ===== 1. Header / Navbar ===== 
        <header id="header">
          <Navbar />
        </header>*/}

        {/* ===== 2. Hero Section =====*/}
        <section id="hero">
          <HeroSection />
        </section> 

        {/* ===== 3. About Section ===== */}
        <section id="about">
          <AboutSection />
        </section>

        {/* ===== 4. Services Section ===== */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* ===== 5. Portfolio Section ===== 
        <section id="portfolio">
          <PortfolioSection />
        </section>*/}

         {/* ===== 7. Call To Action Section ===== */}
        <section id="cta">
          <CTASection />
        </section>

        {/* ===== 6. Testimonials Section ===== */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

    

        {/* ===== 8. Footer Section ===== 
        <footer id="footer">
          <Footer />
        </footer>*/}
      </div>
    </>
  );
}

export default App; 