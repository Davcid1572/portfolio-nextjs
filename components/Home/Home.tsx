import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  );
};

export default Home;
