import Footer from "@/components/Footer";
import Hero from "@/views/home/Hero";
import PortfolioShowcase from "@/views/home/PortfolioShowcase";
import Projects from "@/views/home/Projects";
import Services from "@/views/home/Services";
import Testimonials from "@/views/home/Testimonials";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PortfolioShowcase />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
