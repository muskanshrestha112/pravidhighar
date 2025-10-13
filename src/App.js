import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import EventManagementPage from "./pages/services/EventManagementPage";
import ITServicesPage from "./pages/services/ITServicesPage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import DigitalMarketing from "./pages/blog/DigitalMarketing";
import EventManagement from "./pages/blog/EventManagement";
import WebDevelopment from "./pages/blog/WebDevelopment";
import SocialMedia from "./pages/blog/SocialMedia";
import CorporateEvents from "./pages/blog/CorporateEvents";
import AiWebApplication from "./pages/blog/AiWebApplication";
import ContentMarketing from "./pages/blog/ContentMarketing";
import ITTrends from "./pages/blog/ITTrends";
import CyberSecurity from "./pages/blog/CyberSecurity";






function App() {
  return (
    <>
      <Helmet>
        <title>Pravidhi Ghar | Event Management, Website Development & Digital Marketing in Nepal</title>
        <meta
          name="description"
          content="Pravidhi Ghar is a creative agency in Nepal specializing in Event Management, Website Development, and Digital Marketing."
        />
        <meta name="author" content="Pravidhi Ghar" />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/event-management" element={<EventManagementPage />} />
        <Route path="/services/it-services" element={<ITServicesPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

      
  {/* Blogs */}
        <Route path="/blog/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/blog/event-management" element={<EventManagement />} />
        <Route path="/blog/web-development" element={<WebDevelopment />} />
        <Route path="/blog/social-media" element={<SocialMedia />} />
        <Route path="/blog/corporate-events" element={<CorporateEvents />} />
        <Route path="/blog/ai-web" element={<AiWebApplication />} />
        <Route path="/blog/content-marketing" element={<ContentMarketing />} />
        <Route path="/blog/it-trends-2025" element={<ITTrends />} />
        <Route path="/blog/cybersecurity" element={<CyberSecurity />} />

       




      </Routes>

      <Footer />
    </>
  );
}

export default App;
