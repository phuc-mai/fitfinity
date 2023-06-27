import React from "react";

import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Featured from "../components/Featured";
import WhyChooseUs from "../components/WhyChooseUs";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import BMI from "../components/BMI";
import Pricing from "../components/PricePlan";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      {/* <Featured /> */}
      <WhyChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BMI />
      <Pricing />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
