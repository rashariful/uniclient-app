import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tl from-[#002] via-[#000] to-[#150024] pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col items-center">
          <div className="flex max-w-xl flex-col items-center pt-8 pb-16 text-center lg:pt-32 lg:pb-48">
            <h1 className="text-black-800 text-slate-50 leading-normal capitalize  mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
              Write better <br /> content for your <br />{" "}
              <span className="border-gradient border-b-4 border-orange-600 text-transparent bg-clip-text bg-gradient-to-r from-[#eb7202] via-[#f89e38] to-[#f9bd4d]">
                Facebook Ads
              </span>
            </h1>
            <p className="mb-10 font-semibold text-slate-400 md:mb-6 md:text-lg xl:text-xl">
              Artificial intelligence writting tool helps you create blogs,{" "}
              <br /> social media websites and much more.
            </p>

            <div className="flex w-52 mt-6 flex-col gap-2.5 sm:justify-center">
              <button className="inline-block text-center py-4 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                Start 14 Days Free Trial
              </button>
              <button className="flex justify-center items-center hover:border-[#1a43d6] gap-3 mt-4 border border-slate-700 py-3 rounded-md">
                <AiFillPlayCircle size={24} /> Watch A Demo
              </button>
             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
