import React from "react";
import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Cycling from "../classes_images/cycling.jpg";
import Meditation from "../classes_images/meditation.jpg";
import Boxing from "../classes_images/box.jpg";
import Karate from "../classes_images/karate.jpg";
import Lifting from "../classes_images/powerlifting.jpg";
import Workout from "../classes_images/workout.jpg";
import Crossfit from "../classes_images/cross.jpg";
import Running from "../classes_images/running.jpg";

const Classes = () => {
  const Class_Data = [
    {
      name: "Cycling",
      instructor: "Dorian Yate",
      date: "Wed",
      time: "9:00 am",
      background: Cycling,
    },
    {
      name: "Meditation",
      instructor: "Maria Mich",
      date: "Fri",
      time: "1:00 pm",
      background: Meditation,
    },
    {
      name: "Boxing",
      instructor: "John Flex",
      date: "Tue",
      time: "4:00 pm",
      background: Boxing,
    },
    {
      name: "Karate",
      instructor: "David Rich",
      date: "Sat",
      time: "9:00 am",
      background: Karate,
    },
    {
      name: "Power Lifting",
      instructor: "Larry Wheels",
      date: "Mon",
      time: "8:00 pm",
      background: Lifting,
    },
    {
      name: "Workout",
      instructor: "Shawn Ray",
      date: "Sun",
      time: "10:00 am",
      background: Workout,
    },
    {
      name: "Crossfit",
      instructor: "Jenifer Alex",
      date: "Thu",
      time: "6:00 pm",
      background: Crossfit,
    },
    {
      name: "Running",
      instructor: "Zinia Zessy",
      date: "Fri",
      time: "7:00 pm",
      background: Running,
    },
  ];

  return (
    <>
      <HeroPages name="Classes" />

      <div className="classes">
        {Class_Data.map((item) => (
          <div className="class">
            <div className="class_bg">
              <img src={item.background} />
              <div className="overlay"></div>
            </div>

            <div className="class-text">
              <h3>{item.name}</h3>
              <hr />
              <p>
                <i class="fa-regular fa-user"></i> &nbsp; {item.instructor}
              </p>
              <p>
                <i class="fa-regular fa-clock"></i> &nbsp; {item.date} : {item.time}
              </p>

              <div className="class_btn">
                <button>
                  JOIN NOW <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default Classes;
