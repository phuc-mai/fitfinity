import React from "react";
import { Link } from "react-router-dom";

const HeroPages = ({ name }) => {
  return (
    <section className="hero-pages">
      <h3>{name}</h3>
    </section>
  );
};

export default HeroPages;
