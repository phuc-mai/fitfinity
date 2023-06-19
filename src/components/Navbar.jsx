import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* desktop */}
        <div className="nav">
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
              <Link className="galary-link" to="/galary">
                Galary
              </Link>
            </li>
            <li>
              <Link className="schedule-link" to="/schedule">
                Schedule
              </Link>
            </li>
            <li>
              <Link className="blog-link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="pricing-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="classes-link" to="/classes">
                Classes
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav_buttons">
            <Link to="/signin">
              <i class="fa-regular fa-user"></i>
            </Link>
            <button href="/contact">
              <i class="fa-solid fa-square-plus" style={{ color: '#FF0436' }}></i>{" "}
              JOIN CLASS NOW
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
