import Container from "@/components/Container";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsList } from "@/utils/helper";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-medium">What do they say about us?</h2>
          <p className="mt-4 text-secondary">
            Here is a testimonial from our client
          </p>
        </div>
        <div className="flex gap-8 justify-between mt-8 flex-wrap">
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
