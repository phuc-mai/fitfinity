import React from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="about">
      <div className="about_general">
        <div>
          <img src="images/who-we-are/progression.png" />
          <h2>PROGRESSION</h2>
          <p>
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </div>

        <div>
          <img src="images/who-we-are/workout.png" />
          <h2>WORKOUT</h2>
          <p>
            With a variety of workouts to choose from, you'll have everything
            you need to get into the best shape of your life.
          </p>
        </div>

        <div>
          <img src="images/who-we-are/nutritions.png" />
          <h2>NUTRITIONS</h2>
          <p>
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </div>

      <div className="about_whoweare">
        <div className="about_whoweare_text">
          <h3>Who We Are</h3>
          <h1>Take Your Health And Body To Next Level</h1>
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="about_outstanding">
            <div>
              <img src="images/who-we-are/weightlifter.png" />
              <h4>
                PROFESSIONAL <br /> TRAINERS
              </h4>
            </div>

            <div>
              <img src="images/who-we-are/equipment.png" />
              <h4>
                MODERN <br /> EQUIPMENTS
              </h4>
            </div>

            <div>
              <img src="images/who-we-are/gym.png" />
              <h4>
                FANCY <br /> MACHINES
              </h4>
            </div>
          </div>
          <Link to="/about">
            <div className="whoweare_btn">
              <button>
                TAKE A TOUR <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </Link>
        </div>

        <div className="about_whoweare_img">
          <img src="images/who-we-are/run_girl.png" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
