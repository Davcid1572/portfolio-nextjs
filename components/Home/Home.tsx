import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <ClientReview />
    </div>
  );
};

export default Home;
