import Container from "@/components/Container";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsList } from "@/utils/helper";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-medium">What do they say about</h2>
          <h2 className="text-3xl font-medium">Our service</h2>
          <p className="mt-6 text-secondary">
            Lowbrow hard-edge painting orphism street art rayonism
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
