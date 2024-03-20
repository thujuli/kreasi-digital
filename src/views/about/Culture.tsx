import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Culture: React.FC = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="flex gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl">
              We are committed to delivering the ultimate customer experience
            </h1>
            <p className="text-secondary">
              At <strong>Kreasi Digital</strong>, we foster a culture of
              innovation, collaboration, and excellence. We believe in
              empowering our team members to explore their creativity, take
              ownership of their work, and continuously learn and grow.
              Transparency, open communication, and mutual respect are the
              pillars of our organization, where every voice is valued and
              heard. We embrace diversity and celebrate individuality,
              recognizing that diverse perspectives drive innovation and
              success. Together, we strive to create a dynamic and inclusive
              work environment where everyone feels inspired, supported, and
              motivated to achieve their fullest potential.
            </p>
          </div>
          <Image
            src="/images/culture-pic.jpg"
            alt="Culture"
            width={670}
            height={400}
            quality={70}
          />
        </div>
      </Container>
    </section>
  );
};

export default Culture;
