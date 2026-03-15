"use client";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "@/data";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden
bg-[radial-gradient(circle_600px_at_50%_50%,var(--color-digital-blue-100)_0%,var(--color-digital-blue-50)_40%,white_100%)]
dark:bg-[radial-gradient(circle_farthest-corner_at_50%_50%,var(--color-digital-blue-800)_0%,var(--color-digital-blue-950)_90%)]"
    >
      {/* Hero content */}
      <div className="relative z-10 text-center">
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-digital-blue-50) dark:bg-(--color-digital-blue-900) text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 "></span>
            Available for opportunities
          </span>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi I'm{" "}
          <span className="text-(--color-digital-blue-700) dark:text-(--color-digital-blue-300)">
            Ifejiofor David
          </span>
        </h1>
        {/* implementing typewriteEffect */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8"
        >
          <TypeAnimation
            sequence={[
              "Frontend Engineer",
              2000,
              "Software Engineer",
              2000,
              "AI Automation Engineer",
              2000,
              "UI/UX Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          I build exceptional digital experiences that are fast, accessible, and
          visually appealing.
        </p>
        {/* social media icons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center gap-4 mb-10"
        >
          {socialLinks.map((link, index) => {
            return (
              <a href={link.href} target="_blank" key={index}>
                <link.icon className="w-6 h-6 hover:scale-90 transition-all duration-300" />
              </a>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="#projects">
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="/assets/ifejioforcdavid.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
