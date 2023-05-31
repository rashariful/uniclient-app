import React from "react";

const Faq = () => {
  return (
  <section className="bg-[#000] py-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <h2 className="text-center font-bold mb-20 text-4xl leading-normal">
        Mixland helps you <br /> build beautiful website
      </h2>
      <div className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="rounded-sm flex flex-col gap-2">
          <button className="text-left py-4 w-96 overflow-hidden pl-5 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Start 14 Days Free Trial
          </button>
          <button className="text-left py-4 pl-5 text-white font-semibold items-center border border-slate-800  focus:outline-none rounded">
            Blog Intros
          </button>
          <button className="text-left py-4  pl-5 text-white font-semibold items-center border border-slate-800  focus:outline-none rounded">
            Content Rewriter
          </button>
          <button className="text-left py-4  pl-5 text-white font-semibold items-center border border-slate-800  focus:outline-none rounded">
            Facebook Ads
          </button>
          <button className="text-left py-4  pl-5 text-white font-semibold items-center border border-slate-800  focus:outline-none rounded">
            Product Description
          </button>
          <button className="text-left py-4  pl-5 text-white font-semibold items-center border border-slate-800  focus:outline-none rounded">
            PAS Copywriting Formula
          </button>
        </div>
        {/* right side content */}
        <div className="flex-1 px-5 bg-[#282A37] h-[442px] rounded-md">
            <div className="flex gap-2 -left-2 mt-4">
                <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                <div className="bg-green-600 w-3 h-3 rounded-full"></div>
            </div>
          <p className="py-5 border-b border-slate-600 text-[16px] font-semibold text-slate-500">4 Blog Headlines Generated</p>
          <p className="py-5 border-b border-slate-600 text-lg font-semibold text-slate-100">Create original content that ranks for SEO</p>
          <p className="py-5 border-b border-slate-600 text-lg font-semibold text-slate-100">Any mechanical keyboard enthusiasts in design?</p>
          <p className="py-5 border-b border-slate-600 text-lg font-semibold text-slate-100">The More Important the Work, the More Important the Rest</p>
          <p className="py-5 border-b border-slate-600 text-lg font-semibold text-slate-100">How to design a product that can grow itself 10x in year</p>
          <p className="py-5 text-slate-100 text-lg font-semibold">Any mechanical keyboard enthusiasts in design?</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Faq;
