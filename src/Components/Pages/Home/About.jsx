import React from "react";

const About = () => {
  return (
    <div className="bg-[#000] pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto mb-20 max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row-reverse">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="capitalize leading-normal text-slate-50 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-[42] md:leading-snug">
              Create content efficiently <br /> and quickly with great AI <br />{" "}
              writing tools
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
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg h-auto xl:w-5/12">
            <div className="p-5 ">
              <h3 className="text-slate-800 font-semibold text-lg">Results</h3>
              <p className="text-slate-500">Here's what our AI came up with.</p>

              <div className="px-5 ">
                <div className="bg-slate-200 p-5 mt-5 rounded-md">
                  <p className="text-slate-800">
                    Pain: You are an e-commerce business, and you want to sell
                    your products all over the country, but you are confused
                    about how to handle sales tax.
                  </p>
                  <br />
                  <p className="text-slate-800">
                    Agitate: You have no idea how much sales tax to charge your
                    customers in each state.{" "}
                  </p>
                  <br />
                  <p className="text-slate-800">
                    Solution: Use TaxSol, our full stack sales tax solution, to
                    manage your sales tax for you!
                  </p>
                </div>
              </div>
              <div className="px-5 ">
                <div className="bg-slate-200 overflow-y-auto h-52 p-5 mt-5 rounded-md">
                  <p className="text-slate-800">
                    Pain: e-commerce business owners are struggling to keep up
                    with the ever changing sales tax laws.
                  </p>
                  <br />
                  <p className="text-slate-800">
                    Agitate: Sales tax is a complicated, confusing and expensive
                    nightmare for e-commerce business owners. Solution: Let
                    TaxHero handle all of your sales tax compliance needs so you
                    can focus on growing your business.
                  </p>
                  <br />
                  <p className="text-slate-800">
                    Agitate: You have no idea how much sales tax to charge your
                    customers in each state. Solution: Use TaxSol, our full
                    stack sales tax solution, to manage your sales tax for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- image - end --> */}
        </section>
      </div>
    </div>
  );
};

export default About;
