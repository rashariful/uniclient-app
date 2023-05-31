import React from "react";

const About = () => {
  return (
    <div className="bg-[#000] pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto mb-20 max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row-reverse">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="capitalize leading-normal text-slate-50 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-[42] md:leading-snug">
              Create content efficiently <br /> and quickly with great AI <br /> writing tools
            </h1>

            <p className="mb-8 leading-relaxed text-[#FAFAFA] md:mb-12 lg:w-4/5 xl:text-lg">
              150k+ users. No Credit Card Required. Pro designs and writing at
              no cost. Start for free. Ai Writer Tool | Generate text for ecom,
              social media, website, sales, blogs etc.
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
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </section>
      </div>
    </div>
  );
};

export default About;
