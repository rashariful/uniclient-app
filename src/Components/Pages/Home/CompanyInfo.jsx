import React from "react";

const CompanyInfo = () => {
  return (
    <div className="bg-[#000] pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto mb-32 max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="capitalize leading-normal text-slate-50 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-[42] md:leading-snug">
              Write what you want to convey through clear, & authentic writing
            </h1>

            <p className="mb-8 leading-relaxed text-[#FAFAFA] md:mb-12 lg:w-4/5 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random.
            </p>

            <div className="flex w-52 flex-col gap-2.5 sm:justify-center">
              <button className="inline-block text-center py-4 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                Start 14 Days Free Trial
              </button>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            
          </div>
          {/* <!-- image - end --> */}
        </section>
      </div>
    </div>
  );
};

export default CompanyInfo;
