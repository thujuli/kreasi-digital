import Button from "@/components/Button";
import Container from "@/components/Container";
import ServicePanel from "@/components/ServicePanel";
import { servicesList } from "@/utils/helper";
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="pt-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="w-full md:w-1/2 space-y-4 px-4 md:px-0 mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium">Our Services</h2>
            <p className="text-secondary">
              Explore the Unique Advantages of Opting for Our Services and Dive
              into Our Comprehensive List of Offerings. Discover Why We&apos;re
              the Perfect Choice for Your Needs.
            </p>
          </div>
          <Button bgColor="bg-accent" className="mr-4 md:mr-0">
            Built a project
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 border border-secondary rounded-3xl overflow-hidden">
          {servicesList.map((service, idx) => (
            <ServicePanel
              key={idx}
              description={service.description}
              imgUrl={service.imgUrl}
              title={service.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
