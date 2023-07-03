import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Navbar Background when scrolling down
  const [navBg, setNavBg] = useState("");
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavBg("nav-bg");
    } else {
      setNavBg("");
    }
  };
  window.addEventListener("scroll", handleScroll);

  const [mobileNav, setMobileNav] = useState(false);
  const openMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <nav>
        {/* desktop */}
        <div className={`nav ${navBg}`}>
          <div className="nav_img">
            <Link to="/">
              <img src="images/Logo.png" alt="logo" />
            </Link>
          </div>

          <ul className="nav_links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="schedule-link" to="/schedule">
                Schedule
              </Link>
            </li>
            <li>
              <Link className="classes-link" to="/classes">
                Classes
              </Link>
            </li>
            <li>
              <Link className="classes-pricing" to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav_buttons">
            {/* Hamburger icon */}
            <div className="hamburger-menu" onClick={openMobileNav}>
              <i class="fa-solid fa-bars"></i>
            </div>

            <Link to="/">
              <i class="fa-regular fa-user"></i>
            </Link>
            <Link to="/classes">
              <button>
                <i
                  class="fa-solid fa-square-plus"
                  style={{ color: "#FF0436" }}
                ></i>{" "}
                JOIN CLASS NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className={`mobile-nav ${mobileNav ? "open-mobile-nav" : ""}`}>
          <div className="mobile-nav-close" onClick={openMobileNav}>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-nav_links">
            <li>
              <Link to="/" onClick={openMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={openMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="/schedule" onClick={openMobileNav}>
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/classes" onClick={openMobileNav}>
                Classes
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={openMobileNav}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={openMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
