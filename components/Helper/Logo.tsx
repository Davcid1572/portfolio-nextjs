import React from "react";
import { CodeSquareIcon } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-(--color-digital-blue-700) dark:bg-(--color-digital-blue-300) w-10 h-10 flex items-center justify-center rounded-lg">
        <CodeSquareIcon className="text-white w-6 h-6" />
      </div>

      <h1
        className="sm:text-xl hidden sm:block md:text-2xl font-bold 
  text-(--color-digital-blue-700) 
  dark:text-(--color-digital-blue-300)"
      >
        {"<Dav/>"}
      </h1>
    </div>
  );
};

export default Logo;
