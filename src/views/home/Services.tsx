import Button from "@/components/Button";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { servicesList } from "@/utils/helper";
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="pt-[100px]">
      <Container>
        <div className="flex justify-between items-end">
          <div className="w-1/2 space-y-6">
            <p className="text-secondary">What are you looking for</p>
            <h2 className="text-3xl font-medium">Our Services</h2>
            <p className="text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae fugit, debitis libero corrupti asperiores nisi?
            </p>
          </div>
          <Button bgColor="bg-accent">Built a project</Button>
        </div>
        <div className="grid grid-cols-3 mt-6 border border-secondary rounded-3xl overflow-hidden">
          {servicesList.map((service, idx) => (
            <ServiceCard
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
