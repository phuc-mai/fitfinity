import React from "react";

const PricePlan = () => {
  return (
    <section className="pricing">
      <div className="pricing-overall">
        <h3>PRICING CHART</h3>
        <h1>Exclusive Pricing Plan</h1>
        <p>
          Fitfinity an unknown printer took a galley of type and scrambled make
          a type specimen book.
        </p>
      </div>
      <div className="pricing-plan">
        <div className="pricing-box basic">
          <div className="pricing-title">BASIC</div>
          <div className="pricing-price">
            <b>$24.99</b>
            <span>per month</span>
          </div>
          <div className="pricing-benefits">
            <div>Free Hand</div>
            <div>Gym Fitness</div>
            <div>Weight Loss</div>
          </div>
          <div className="pricing-btn">
            <button>BUY NOW</button>
          </div>
        </div>

        <div className="pricing-box regular">
          <div className="pricing-title">REGULAR</div>
          <div className="pricing-price">
            <b>$44.99</b>
            <span>per month</span>
          </div>
          <div className="pricing-benefits">
            <div>Crossfit</div>
            <div>Yoga</div>
            <div>Cycling</div>
          </div>
          <div className="pricing-btn">
            <button>BUY NOW</button>
          </div>
        </div>

        <div className="pricing-box advanced">
          <div className="pricing-title">ADVANCED</div>
          <div className="pricing-price">
            <b>$59.99</b>
            <span>per month</span>
          </div>
          <div className="pricing-benefits">
            <div>Karate</div>
            <div>Material Arts</div>
            <div>Personal Trainer</div>
          </div>
          <div className="pricing-btn">
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
