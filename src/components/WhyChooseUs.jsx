import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="choose-us">
      <img src="images/choose-us/choose-us.png" />

      <div className="choose-us-text">
        <h3>WHY CHOOSE US</h3>
        <h1>We Can Give A Shape Of Your Body Here!</h1>
        <p>
          At Fitfinity, we are dedicated to helping you achieve the body of your
          dreams. Our expert trainers and nutritionists will work with you to
          create a personalized fitness and nutrition plan that helps you reach
          your specific goals.
        </p>
        <div className="choose-us-benefits">
          <div>
            <img src="images/choose-us/training.png" alt="why-choose-us" />
            <h5>
              Free Fitness <br /> Training
            </h5>
          </div>
          <div>
            <img src="images/choose-us/bench-press.png" alt="why-choose-us" />
            <h5>
              Modern Gym <br /> Equipments
            </h5>
          </div>
          <div>
            <img
              src="images/choose-us/bottle-of-water.png"
              alt="why-choose-us"
            />
            <h5>
              Fresh Bottle <br /> Watter
            </h5>
          </div>
          <div>
            <img src="images/choose-us/gym-bag.png" alt="why-choose-us" />
            <h5>
              Gym Bag <br /> Equipments
            </h5>
          </div>
        </div>
        <Link to="/schedule">
          <div className="choose-us-btn">
            <button>
              OUR CLASSES <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
