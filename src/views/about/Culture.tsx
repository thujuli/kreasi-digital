import Container from "@/components/Container";
import CultureCard from "@/components/CultureCard";
import { ourCulture } from "@/utils/helper";
import React from "react";

const Culture: React.FC = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="px-4 md:px-0 text-center">
          <h1 className="text-3xl md:text-4xl font-medium uppercase">
            Our Culture
          </h1>
          <p className="md:w-10/12 mx-auto">
            Customer-centric Excellence, Innovation driven by Collaboration, and
            fostering an Inclusive and Supportive environment
          </p>
        </div>
        <div className="mt-6 space-y-6">
          {ourCulture.map((culture, idx) => (
            <CultureCard
              key={idx}
              id={idx}
              description={culture.description}
              imgUrl={culture.imgUrl}
              title={culture.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Culture;
