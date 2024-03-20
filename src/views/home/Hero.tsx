import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="lg:h-[600px]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col justify-center gap-4 px-4 md:px-0">
            <h1 className="leading-tight text-4xl md:text-6xl lg:text-7xl font-medium text-center md:text-start">
              Transforming Ideas into Digital{" "}
              <span className="underline underline-offset-8">Masterpieces</span>
            </h1>
            <p className="text-secondary text-center md:text-start">
              With us achieving dreams in building your products, together say
              &ldquo;Yes&rdquo; to extraordinary designs.
            </p>
            <div className="space-x-5 mx-auto md:mx-0">
              <Button bgColor="bg-accent">Start a Project</Button>
              <Button bgColor="bg-transparent" border="white">
                Our Services
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-1/2">
            <Image
              src={"/images/hero-pic.png"}
              alt="Hero Picture"
              width={670}
              height={600}
              quality={70}
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
