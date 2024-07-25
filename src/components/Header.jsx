import React, { useState } from "react";
import {
  FaBasketballBall,
  FaDollarSign,
  FaInfoCircle,
  FaRobot,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" py-3 px-10 text-center md:flex md:flex-row md:justify-between md:items-center lg:flex-row lg:justify-between lg:items-center">
      <section className="flex justify-between items-center">
        <Link to="/">
          <h1 className="font-mono font-extrabold text-red-500 text-4xl">
            NewsBlog
            <span className="text-blue-700 text-5xl">.</span>
          </h1>
        </Link>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <div
              className={`w-8  h-0.5 bg-white transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-white transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-white transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </button>
      </section>
      <nav
        className={`flex-col transition-transform duration-300 ease-in-out md:flex-row md:flex md:items-center md:gap-3 font-bold font-mono text-gray-300 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row gap-4 mt-3 md:mt-0 text-xl items-center">
          <Link to="/trending">
            <li className="hover:text-red-500 transition duration-300 flex gap-1 items-center">
              <MdTrendingUp />
              Trending
            </li>
          </Link>
          <Link to="technology">
            <li className="hover:text-red-500 transition duration-300 flex gap-1 items-center">
              <FaRobot />
              Technology
            </li>
          </Link>
          <Link to="/finance">
            <li className="hover:text-red-500 transition duration-300 flex gap-1 items-center">
              <FaDollarSign />
              Finance
            </li>
          </Link>
          <Link to="/sports">
            <li className="hover:text-red-500 transition duration-300 flex gap-1 items-center">
              <FaBasketballBall />
              Sports
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-red-500 transition duration-300 flex gap-1 items-center">
              <FaInfoCircle />
              About
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
