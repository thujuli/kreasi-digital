import Hero from "@/views/home/Hero";
import PortfolioShowcase from "@/views/home/PortfolioShowcase";
import Projects from "@/views/home/Projects";
import Services from "@/views/home/Services";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PortfolioShowcase />
      <Services />
      <Projects />
    </>
  );
};

export default HomePage;
