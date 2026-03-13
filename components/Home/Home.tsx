"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    // <div className="overflow-hidden">
    //   <Hero />
    //   <About />
    //   <Skill />
    //   <Project />
    //   <Experience />
    //   <ClientReview />
    //   <Contact />
    // </div>
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="testimonials">
        <ClientReview />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
