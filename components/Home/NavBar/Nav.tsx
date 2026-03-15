"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navProps } from "@/interface";

const Nav: React.FC<navProps> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const scrollHandeler = () => {
      if (window.scrollY > 90) return setNavBg(true);
      if (window.scrollY < 90) return setNavBg(false);
    };

    window.addEventListener("scroll", scrollHandeler);

    return () => window.removeEventListener("scroll", scrollHandeler);
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "bg-white dark:bg-(--color-digital-blue-950) shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}
    >
      <div className="flex items-center gap-1 h-full justify-between w-[90%] xl:w-[90%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black font-semibold transition-all duration-200
  hover:text-(--color-digital-blue-500)
  dark:hover:text-(--color-digital-blue-300)"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Download Button */}
          <a
            href="/assets/ifejioforcdavid.pdf"
            target="_blank"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto
  px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300
  bg-(--color-digital-blue-500)
  rounded-md cursor-pointer group
  ring-offset-2 ring-1 ring-(--color-digital-blue-300)
  hover:bg-(--color-digital-blue-600)
  hover:ring-offset-(--color-digital-blue-500)
  ease-in focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>

          {/* Theme Button */}
          <ThemeToggler />

          {/* HAMBURDER ICON */}

          <MenuIcon
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-black dark:text-white lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
