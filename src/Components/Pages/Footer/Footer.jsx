import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#12141D]">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 lg:pt-12">
          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Features
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Works
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Career
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Help
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Customer Support
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Delivery Details
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Privacy Policy
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Resources
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Free eBooks
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Development Tutorial
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  How to - Blog
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Youtube Playlist
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Links
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Free eBooks
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Development Tutorial
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  How to - Blog
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-[#B82CFF] active:text-indigo-600"
                >
                  Youtube Playlist
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          © 2023 - All rights reserved UNICLIENT Technologies.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
