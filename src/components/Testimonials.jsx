import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__overal">
        <h3>Reviewed by People</h3>
        <h1>Client's Testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>

      <div className="testimonials__details">
        <div className="testimonials__details__box">
          <p>&quot; I've been a member of Fitfinity for the past 6 months and it has been an amazing experience. &quot;</p>
          <div className="testimonials__details__box__profile">
            <img src='images/testimonials/Sunehildeep.png' alt='profile'/>
            <div className="testimonials__details__box__profile__text">
              <h3>Sunehildeep</h3>
              <p>Software Engineer</p>
            </div>
            {/* <img src='images/quote-icon.png' alt='quote-icon'/> */}
          </div>
        </div>
        <div className="testimonials__details__box">
          <p>&quot; The trainers are knowledgeable and supportive, the equipment is top-notch, and the community is friendly &quot;</p>
          <div className="testimonials__details__box__profile">
            <img src='images/testimonials/PhucMai.png' alt='profile'/>
            <div className="testimonials__details__box__profile__text">
              <h3>Phuc Mai</h3>
              <p>Software Developer</p>
            </div>
            {/* <img src='images/quote-icon.png' alt='quote-icon'/> */}
          </div>
        </div>
      </div>

      <div className="testimonials_brands">
        <img src="images/testimonials/logo1.png"/>
        <img src="images/testimonials/logo2.png"/>
        <img src="images/testimonials/logo3.png"/>
        <img src="images/testimonials/logo4.png"/>
        <img src="images/testimonials/logo5.png"/>
      </div>
    </section>
  );
};

export default Testimonials;
