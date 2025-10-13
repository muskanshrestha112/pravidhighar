import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Primary Navigation">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/" aria-label="Pravidhi Ghar Home">
          <img src="/logo.png" alt="Pravidhi Ghar Logo" />
          <span>Pravidhi Ghar</span>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="nav-right">
        <ul className="nav-list">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="dropdown-toggle" aria-haspopup="true" aria-expanded={isServicesOpen}>
              Services ▾
            </span>
            {isServicesOpen && (
              <ul className="dropdown-menu" role="menu">
                <li role="none">
                  <NavLink role="menuitem" to="/services/event-management">
                    Event Management
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink role="menuitem" to="/services/it-services">
                    IT Service
                  </NavLink>
                </li>
                <li role="none">
                  <NavLink role="menuitem" to="/services/digital-marketing">
                    Digital Marketing
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Highlighted CTA Button */}
        <NavLink to="/about" className="btn-highlight">
          Explore More
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
