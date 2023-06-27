import React from "react";
import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import DaySchedule from "../components/DaySchedule";
import { useState } from "react";

const Schedule = () => {
  const [activeBtn, setActiveBtn] = useState("Mon");

  const coloringBtn = (id) => {
    return activeBtn === id ? "colored-day-btn" : "day-btn";
  };

  return (
    <>
      <HeroPages name="Schedule" />
      <section className="schedule-btns">
        <button
          className={coloringBtn("Mon")}
          id="Mon"
          onClick={() => {
            setActiveBtn("Mon");
          }}
        >
          Monday
        </button>
        <button
          className={coloringBtn("Tue")}
          id="Tue"
          onClick={() => {
            setActiveBtn("Tue");
          }}
        >
          Tuesday
        </button>
        <button
          className={coloringBtn("Wed")}
          id="Wed"
          onClick={() => {
            setActiveBtn("Wed");
          }}
        >
          Wednesday
        </button>
        <button
          className={coloringBtn("Thu")}
          id="Thu"
          onClick={() => {
            setActiveBtn("Thu");
          }}
        >
          Thursday
        </button>
        <button
          className={coloringBtn("Fri")}
          id="Fri"
          onClick={() => {
            setActiveBtn("Fri");
          }}
        >
          Friday
        </button>
        <button
          className={coloringBtn("Sat")}
          id="Sat"
          onClick={() => {
            setActiveBtn("Sat");
          }}
        >
          Saturday
        </button>
        <button
          className={coloringBtn("Sun")}
          id="Sun"
          onClick={() => {
            setActiveBtn("Sun");
          }}
        >
          Sunday
        </button>
      </section>
      {activeBtn === "Mon" && <DaySchedule dayID={0} />}
      {activeBtn === "Tue" && <DaySchedule dayID={1} />}
      {activeBtn === "Wed" && <DaySchedule dayID={2} />}
      {activeBtn === "Thu" && <DaySchedule dayID={3} />}
      {activeBtn === "Fri" && <DaySchedule dayID={4} />}
      {activeBtn === "Sat" && <DaySchedule dayID={5} />}
      {activeBtn === "Sun" && <DaySchedule dayID={6} />}

      <Banner />
      <Footer />
    </>
  );
};

export default Schedule;
