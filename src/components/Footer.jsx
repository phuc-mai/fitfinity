import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-1">
        <img src="images/Logo2.png" />
        <p>
        Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
        </p>
        <ul>
          <li>
            <a href="tel:123456789">
              <i class="fa-solid fa-phone"></i>&nbsp; &nbsp;(800)-123-4567
            </a>
          </li>
          <li>
            <a href="mailto:info@motorbikerental.com">
              <i class="fa-solid fa-envelope"></i>&nbsp;
              &nbsp;info@fitfinity.com
            </a>
          </li>
          <li>
            <i class="fa-regular fa-copyright">&nbsp; &nbsp;</i>Fitfinity
            2023
          </li>
        </ul>
      </div>

      <div className="footer-2">
        <h2>COMPANY</h2>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/classes">Classes</a>
          </li>
          <li>
            <a href="/schedule">Schedule</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-3">
        <h2>BUSINESS HOURS</h2>
        <p>Mon - Fri: 6:00 AM - 11:00 PM</p>
        <p>Sat: 7:00 AM - 9:00 PM</p>
        <p>Sun: 8:00 AM - 8:00 PM</p>
        <p>
          <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp; 13 Burlington Street, North York, ON M1W 2B5 Canada
        </p>
      </div>

      <div className="footer-4">
        <h2>SUBSCRIPTION</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input type="email " placeholder="Enter Your Email" />
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Footer;
