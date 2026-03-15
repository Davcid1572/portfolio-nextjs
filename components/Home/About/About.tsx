import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import { highlights, stats } from "@/data";

const About = () => {
  return (
    <div className="py-16 bg-(--color-digital-blue-50) dark:bg-(--color-digital-blue-950)">
      {/* Section Header */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the engineer behind it all 😊"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* image */}
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square bg-(--color-digital-blue-200) rounded-2xl overflow-hidden p-2 hover:shadow-2xl">
            <Image
              src={"/images/homeImg.png"}
              alt="profile picture"
              width={700}
              height={700}
              className="w-full  object-cover rounded-xl "
            />
          </div>
        </div>
        {/* content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            Frontend/AI-focused Software Engineer passionate about building
            fast, accessible, and user-friendly web applications.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in modern web technologies including Next.js,
            TypeScript, and Tailwind CSS, creating responsive interfaces and
            scalable web experiences
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy solving real problems with code, learning new technologies,
            and continuously improving my craft through hands-on projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 gap-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-(--color-digital-blue-500)/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-(--color-digital-blue-500)" />
                  </div>
                  <span className="text-muted-foreground ">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">
          {stats.map((stat) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-anchor-placement="top-center"
                key={stat.label}
                className="bg-white dark:bg-(--color-digital-blue-900) shadow rounded-xl p-6 text-center
transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-(--color-digital-blue-600) dark:text-(--color-digital-blue-300) mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
