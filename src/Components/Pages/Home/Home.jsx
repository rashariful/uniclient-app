import React from "react";
import Button from "../Button/Button";
import Hero from "./Hero";
import Future from "./Future";
import About from "./About";
import CallToAction from "./CallToAction";
import Price from "./Price";
import LogoCloud from "./LogoCloud";
import CompanyInfo from "./CompanyInfo";
import Tools from "./Tools";
import Testimonial from "./Testimonial";
import Faq from "./Faq";

const Home = () => {
  return (
    <main>

        {/* hero section */}
        <section> <Hero/> </section>
         {/* LogoCloud section */}
        <section> <LogoCloud/> </section>
        {/* Future section */}
        {/* <section> <Future/> </section> */}
        {/* CompanyInfo section */}
        <section> <About/> </section>
        {/* CompanyInfo section */}
        <section> <CompanyInfo/> </section>
        {/* Tools section */}
        <section> <Tools/> </section>
        {/* Tools section */}
        <section> <Faq/> </section>
        {/* Tools section */}
        <section> <Testimonial/> </section>
        {/* Price section */}
        <section> <Price/> </section>
        {/* CallToAction section */}
        <section> <CallToAction/> </section>
    </main>
  );
};

export default Home;
