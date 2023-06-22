import ScheduleData from "./ScheduleData"

const DaySchedule = ({dayID}) => {
  return (
    <section className="day_schedule">
      {ScheduleData[dayID].map((item) => (
        <div className="class_schedule">
          <div>
            <p>Class</p>
            <h4>{item.class}</h4>
          </div>
          <div>
            <p>Time</p>
            <h4>{item.time}</h4>
          </div>
          <div>
            <p>Trainer</p>
            <h4>{item.trainer}</h4>
          </div>
          <div>
            <button href="/contact">Join Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DaySchedule;
