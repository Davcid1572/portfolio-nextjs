import React from "react";
import Link from "next/link";
import { Navlinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import { mobileProps } from "@/interface";

const MobileNav: React.FC<mobileProps> = ({ showNav, closeNav }) => {
  const sideBarOpenClose = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${sideBarOpenClose} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 h-screen`}
      ></div>
      {/* Mobile Menu */}
      <nav
        className={`text-white ${sideBarOpenClose} fixed flex justify-center flex-col h-full transform transition-all delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-1050`}
      >
        {Navlinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px]  pb-1 border-white sm:text-[30px]">
                {link.name}
              </p>
            </Link>
          );
        })}
        {/* close Icon */}
        <X
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </nav>
    </div>
  );
};

export default MobileNav;
