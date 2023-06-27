import React from "react";
import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <HeroPages name="Contact" />

      <section className="contact">
        <div className="contact-overall">
          <h1>We are here for help you! To Shape Your Body</h1>
          <p>
            At Fitfinity, we are dedicated to helping you achieve the body of
            your dreams. Our expert trainers and nutritionists will work with
            you to create a personalized fitness and nutrition plan that helps
            you reach your specific goals.
          </p>
          <ul>
            <li>
              <a href="tel:123456789">
                <i class="fa-solid fa-phone"></i>&nbsp; (800)-123-4567
              </a>
            </li>
            <li>
              <a href="mailto:info@motorbikerental.com">
                <i class="fa-solid fa-envelope"></i>&nbsp;
                info@fitfinity.com
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp; 13
                Burlington Street, North York, ON M1W 2B5 Canada
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h1>Leave Us Your Info</h1>
          <hr />
          <form>
            <input type="text" placeholder="Full Name *" />
            <input type="email" placeholder="Email Address *" />
            <select id="classes">
              <option value="Select a class">Select a class</option>
              <option value="Body Building">Body Building</option>
              <option value="Boxing">Boxing</option>
              <option value="Meditation">Meditation</option>
              <option value="Running">Running</option>
              <option value="Fitness">Fitness</option>
              <option value="Yoga">Yoga</option>
              <option value="Karate">Karate</option>
              <option value="Cycling">Cycling</option>
            </select>
            <textarea placeholder="Comment"></textarea>
            <button type="submit">
              <i class="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
            </button>
          </form>
        </div>
      </section>

      <Banner />
      <Footer />
    </>
  );
};

export default Contact;
