import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <h1>Need a Fitness Trainer?</h1>
      <h2>
        <span>Call:</span>(800)-123-4567
      </h2>
      <Link to="/contact">
        <div className="banner-btn">
          <button>
            CONTACT NOW <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Banner;
