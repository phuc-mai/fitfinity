import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <h1>Need a Fitness Trainer?</h1>
      <h2>
        <span>Call:</span>(800)-123-4567
      </h2>
      <div className="banner-btn">
        <button>
          CONTACT NOW <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Banner;
