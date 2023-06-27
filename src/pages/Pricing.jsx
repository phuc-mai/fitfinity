import React from 'react'
import HeroPages from '../components/HeroPages';
import PricePlan from '../components/PricePlan'
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <>
      <HeroPages name="Pricing Plans"/>
      <PricePlan />
      <Banner />
      <Footer />
    </>
  )
}

export default Pricing