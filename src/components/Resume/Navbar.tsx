"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

interface IMenuLinks {
  id: number;
  name: string;
  href: string;
}

const menuLinks: IMenuLinks[] = [
  { id: 1, name: "HOME", href: "#home" },
  { id: 2, name: "ABOUT", href: "#about" },
  { id: 3, name: "SKILLS", href: "#skills" },
  { id: 4, name: "PROJECTS", href: "#projects" },
  { id: 5, name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            H<span className="text-cyan-600">amz</span>a
          </h4>
        </div>

        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg ">
            {menuLinks.map(({ id, name, href }) => (
              <li key={id} className="px-6 hover:text-cyan-600">
                <Link className="text-gray-800 hover:text-gray-900" href={href}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menu  */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <FiMenu />
        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map(({ id, name, href }) => (
              <li key={id} className="px-6 hover:text-cyan-600">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
