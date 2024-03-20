import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const History: React.FC = () => {
  return (
    <section className="pt-[50px]">
      <Container>
        <div className="flex gap-12 items-center">
          <Image
            src="/images/about-pic.jpg"
            alt="About Us"
            width={670}
            height={400}
            quality={70}
          />
          <div className="space-y-4">
            <p className="text-xl text-secondary">About Us</p>
            <h1 className="text-3xl">We Always Make The Best</h1>
            <p className="text-secondary">
              <strong className="text-white">Kreasi Digital </strong>was founded
              in 2010 by <strong className="text-white">John Smith </strong>
              with a vision to revolutionize the digital landscape. Starting as
              a small team in a garage, we quickly gained recognition for our
              innovative approach to web development and digital marketing. By
              2015, we expanded our services to include mobile app development,
              catering to the growing demand for mobile solutions. In 2018, we
              opened our first international office in{" "}
              <strong className="text-white">Silicon Valley</strong>, marking a
              significant milestone in our journey. Today,{" "}
              <strong className="text-white">Kreasi Digital </strong>
              continues to thrive, serving clients globally with our
              cutting-edge digital solutions and unwavering commitment to
              excellence.
            </p>
            <Button bgColor="bg-accent">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default History;
