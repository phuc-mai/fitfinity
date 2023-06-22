import React from "react";

import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Featured from "../components/Featured";
import WhyChooseUs from "../components/WhyChooseUs";
import Trainers from "../components/Trainers";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      {/* <Featured /> */}
      <WhyChooseUs />
      <Trainers />
    </>
  );
};

export default Home;
