import React from "react";

const Trainers = () => {
  // const TrainerData = [
  //   {
  //     name: "John Lewis",
  //     position: "Yoga Trainer",
  //     img: Trainer1,
  //   },
  //   {
  //     name: "Jonathan Doe",
  //     position: "Crossfit Trainer",
  //     img: Trainer2,
  //   },
  //   {
  //     name: "Ana June",
  //     position: "Personal Trainer",
  //     img: Trainer3,
  //   },
  // ];

  return (
    <section className="trainers">
      <h3>GYM TRAINERS</h3>
      <h1>Team Of Expert Coaches</h1>
      <p>
        Expert team of coaches helps you succeed in any goal, personalized
        guidance and motivation provided!
      </p>
      <div className="trainers-info">
        <div className="trainer">
          <div className="trainer-img">
            <img src="images/trainers/trainer1.png" />
          </div>
          <div className="trainer-text">
            <h2>John Lewis</h2>
            <p>Yoga Trainer</p>
          </div>
        </div>

        <div className="trainer">
          <div className="trainer-img">
            <img src="images/trainers/trainer2.png" />
          </div>
          <div className="trainer-text">
            <h2>Jonathan Doe</h2>
            <p>Crossfit Trainer</p>
          </div>
        </div>

        <div className="trainer">
          <div className="trainer-img">
            <img src="images/trainers/trainer3.png" />
          </div>
          <div className="trainer-text">
            <h2>Ana June</h2>
            <p>Personal Trainer</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Trainers;
