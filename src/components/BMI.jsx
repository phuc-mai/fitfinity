import React from "react";
import { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBMI = (e) => {
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height")
    } else {
      const bmi = weight / ((height * height) / 10000)
      setBmi(bmi.toFixed(1))

      if (bmi < 18.5) {
        setMessage("Underweight")
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("Normal")
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("Overweight")
      } else {
        setMessage("Obesity")
      }
    }
  }

  return (
    <section className="bmi">
      <h1>
        Let's Calculate Your <span>BMI</span>
      </h1>
      <p>
        Easily determine your body mass index with our accurate calculation
        tool.
      </p>
      <form>
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight / kg"
        />
        <input
          type="number"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height / cm"
        />
      </form>
      <p>
        Your BMI is: <span>{bmi}</span> Your weight is: <span>{message}</span>
      </p>
      <div className="bmi-btn">
      <button type="submit" onClick={calcBMI}>
        CALCULATE <i class="fa-solid fa-arrow-right"></i>
      </button>
      </div>
    </section>
  );
};

export default BMI;
