import Container from "@/components/Container";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsList } from "@/utils/helper";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium">
            What do they say about us?
          </h2>
          <p className="mt-4 text-secondary">
            Here is a testimonial from our client
          </p>
        </div>
        <div className="flex gap-4 md:gap-8 md:justify-between mt-8 px-4 md:px-0 overflow-x-scroll">
          {testimonialsList.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              clientImgUrl={testimonial.clientImgUrl}
              clientName={testimonial.clientName}
              clientPosition={testimonial.clientPosition}
              clientTestimonial={testimonial.clientTestimonial}
              ratings={testimonial.ratings}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
