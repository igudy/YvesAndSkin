import React from "react";
import Services from "../components/Services";
import Carousel from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Story from "../components/Story";
import Nav from "./Nav";
import Footer from "../components/Footer";

function ServicePage() {
  return (
    <div className="mt-20">
      <Nav />
      <Services />
      <Carousel />
      <HeroSection />
      <Features />
      <Story />
      <Footer />
    </div>
  );
}

export default ServicePage;
