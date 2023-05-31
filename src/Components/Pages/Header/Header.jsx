import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Demos</Link>
      </li>
      <li>
        <Link to="/">about</Link>
      </li>
      <li>
        <Link to="/">blog</Link>
      </li>
      <li>
        <Link to="/">pages</Link>
      </li>
      <li>
        <Link to="/">contact</Link>
      </li>
    </React.Fragment>
  );
  return (
    <header className="text-gray-600 bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            className="w-16 h-auto"
            src="https://uniclients.com/_next/static/media/logo.90a55cc6.svg"
            alt="uniclients.com"
          />
          <div>
            <p className="ml-3 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF]">
              UNICLIENT
            </p>
            <p className="ml-3 text-md text-slate-200">Technologies</p>
          </div>
        </Link>
        <nav className="md:mr-auto md:ml-16 flex flex-wrap items-center text-base justify-center">
          <ul className="list-none gap-10 capitalize font-semibold text-white md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {menuItems}
          </ul>
        </nav>
        <div className="flex gap-3">
          <button className="inline-flex items-center text-white font-semibold px-8  border focus:outline-none  rounded text-base mt-4 md:mt-0">
            Sign in
          </button>
          <button className="inline-flex px-5 py-4 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Get Started Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
