import React from "react";
import img1 from "../../../assets/images/cart1.png";
import img2 from "../../../assets/images/cart2.png";
import img3 from "../../../assets/images/cart3.png";
import img4 from "../../../assets/images/cart4.png";

const Tools = () => {
  return (
    <section className="bg-[#000]">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-slate-50 text-2xl font-medium title-font text-center mb-6">
          54 exciting writing tools
        </h1>
        <p className="mb-16 text-center text-slate-400 md:mb-12 xl:text-lg">
          AI engines take information from various sources and read them like a
          human would do.
        </p>
        <div className="grid gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img1} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Blog Headlines
              </h3>
              <p>Write a better blog title with our A.I tool.</p>
            </div>
          </div>

          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img2} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Blog Intros
              </h3>
              <p>Generate a paragraph of blog content using Blog Intros tool</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img3} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Blog Outline
              </h3>
              <p>Need an attention-grabbing headline for your article?</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img1} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Blog Conclusions
              </h3>
              <p>Write a better conclusions with AI writing tool.</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img4} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Content Rewriter
              </h3>
              <p>Get AI writer to rewrite your sentence in a different way.</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img2} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Product Description
              </h3>
              <p>Need an attention-grabbing headline for your article?</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img3} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                PAS Copywriting Formula
              </h3>
              <p>Get AI writer to rewrite your sentence in a different way.</p>
            </div>
          </div>
          {/* cart start */}
          <div className="flex gap-5 min-w[305px] h-[120px] bg-[#282A37] p-4 rounded-md">
            <img className="w-8 h-8" src={img1} alt="" />
            <div className="">
              <h3 className="text-slate-50 mb-3 font-semibold capitalize">
                Company About Us
              </h3>
              <p>Write a better blog title with our AI tool.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-slate-50 font-semibold mt-16">
            See all 54 available tools
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
