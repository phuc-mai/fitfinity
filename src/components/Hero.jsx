import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_content">
        <div className="hero_text">
          <h4>FIND YOUR ENERGY</h4>
          <h1>MAKE YOUR BODY</h1>
          <h2>FIT & PERFECT</h2>
          <Link to="/classes">
            <div className="hero_btn">
              <button>
                OUR CLASSES <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </Link>
        </div>

        <div className="hero_social">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-pinterest"></i>
          <h2>SHARE</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
