import React from "react";
import { Link } from "react-router-dom";

import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <HeroPages name="About Us" />

      <section className="about_page">
        <div className="about_whoweare">
          <div className="about_whoweare_text">
            <h3>Who We Are</h3>
            <h1>We Will Give You Strength and Health</h1>
            <p>
              At Fitfinity, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="about_outstanding">
              <div>
                <img src="images/who-we-are/weightlifter.png" />
                <h4>PROFESSIONAL TRAINERS</h4>
              </div>

              <div>
                <img src="images/who-we-are/equipment.png" />
                <h4>MODERN EQUIPMENTS</h4>
              </div>

              <div>
                <img src="images/who-we-are/gym.png" />
                <h4>FANCY GYM MACHINES</h4>
              </div>
            </div>

            <Link to="/schedule">
              <div className="whoweare_btn">
                <button>
                  TAKE A TOUR <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Link>
          </div>

          <img src="images/who-we-are/run_girl.png" />
        </div>

        <div className="about_page_history">
          <div className="about_page_text">
            <img src="images/AboutPage/mountain.png" />
            <h1>How we do it?</h1>
            <p>
              Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit
              lectus felis, malesuada ultricies. Curabitur et ligula. Ut
              molestie a, ultricies porta urna.
            </p>
          </div>
          <img
            className="about_page_history_img"
            src="images/AboutPage/3.jpg"
          />
          <img
            className="about_page_history_img"
            src="images/AboutPage/4.jpg"
          />
          <div className="about_page_text">
            <img src="images/AboutPage/target.png" />
            <h1>Why we do it?</h1>
            <p>
              Sed non neque elit. Sed ut imperdiet nisi. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            </p>
          </div>
        </div>
      </section>

      <Banner />
      <Footer />
    </>
  );
};

export default About;
