import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-center">
      <section className="py-3 px-10 flex justify-between items-center">
        <h1 className="font-mono font-extrabold text-red-500 text-4xl">
          NewsBlog<span className="text-blue-700 text-6xl">.</span>
        </h1>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <div
              className={`w-8 h-0.5 bg-white transform transition duration-300 ${
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
        className={`flex-col md:flex-row md:flex md:items-center md:gap-3 font-bold font-mono text-gray-300 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row gap-3 mt-3 md:mt-0">
          <Link to="/trending">
            <li>Trending</li>
          </Link>
          <Link to="technology">
            <li>Technology</li>
          </Link>
          <Link to="/finance">
            <li>Finance</li>
          </Link>
          <Link to="/sports">
            <li>Sports</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
