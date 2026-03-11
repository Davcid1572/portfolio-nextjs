import SectionHeading from "@/components/Helper/SectionHeading";
import { experiences } from "@/data";
import React from "react";

const Experience = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1="Experience &"
        title_2="Education"
        description="My professional journey and educational background"
      />
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 to to-blue-900 md:-translate-x-px"></div>
        {/* Timeline Items */}
        {experiences.map((exp) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default Experience;
