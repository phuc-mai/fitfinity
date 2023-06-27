import React from "react";
import HeroPages from "./HeroPages";

import Trainer1 from "../images/trainer1.png";
import Trainer2 from "../images/trainer2.png";
import Trainer3 from "../images/trainer3.png";

const Trainers = () => {
  const TrainerData = [
    {
      name: "John Lewis",
      position: "Yoga Trainer",
      img: Trainer1,
    },
    {
      name: "Jonathan Doe",
      position: "Crossfit Trainer",
      img: Trainer2,
    },
    {
      name: "Ana June",
      position: "Personal Trainer",
      img: Trainer3,
    },
  ];

  return (
    <section className="trainers">
      <div className="trainers-overall">
        <h3>GYM TRAINERS</h3>
        <h1>Team Of Expert Coaches</h1>
        <p>
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
      </div>

      <div className="trainers-info">
        {TrainerData.map((item) => (
          <div className="trainer">
            {/* <div className="trainer-profile"> */}
            <img className="trainer-bg" src="images/trainers/trainer-bg.png" />
            <img className="trainer-img" src={item.img} />
            {/* </div> */}
            <div className="trainer-text">
              <h1>{item.name}</h1>
              <p>{item.position}</p>
              <div className="trainer-social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
