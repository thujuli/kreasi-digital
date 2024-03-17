import Button from "@/components/Button";
import ButtonCircle from "@/components/ButtonCircle";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const PortfolioShowcase: React.FC = () => {
  return (
    <section className="pt-[150px]">
      <Container>
        <div className="flex gap-[30px]">
          <div className="w-7/12 flex flex-col gap-[30px]">
            <div className="flex flex-0 gap-5 items-center h-[245px] rounded-3xl p-6 bg-accent ">
              <div>
                <h2 className="text-3xl mb-5 font-bold ">Our Services</h2>
                <Button bgColor="bg-transparent" border="white">
                  Services
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-2/3">
                    <h3 className="mb-3 text-2xl font-medium">Development</h3>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium corporis eius amet accusantium quidem
                      temporibus iure minima assumenda! Labore commodi amet
                      distinctio esse libero iure quod, architecto quisquam eius
                      officia?
                    </p>
                  </div>
                  <div>
                    <ButtonCircle
                      bgColor="bg-transparent"
                      icon={<GoArrowUpRight />}
                      border="white"
                    />
                  </div>
                </div>
                <hr className="border-2" />
                <div className="flex justify-between items-center">
                  <div className="w-2/3">
                    <h3 className="mb-3 text-2xl font-medium">
                      Maintenance Website
                    </h3>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium corporis eius amet accusantium quidem
                      temporibus iure minima assumenda! Labore commodi amet
                      distinctio esse libero iure quod, architecto quisquam eius
                      officia?
                    </p>
                  </div>
                  <div>
                    <ButtonCircle
                      bgColor="bg-transparent"
                      icon={<GoArrowUpRight />}
                      border="white"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-evenly h-full rounded-3xl bg-white">
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">200+</h5>
                <p className="text-secondary">Complete Project</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">200+</h5>
                <p className="text-secondary">Complete Project</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">200+</h5>
                <p className="text-secondary">Complete Project</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h5 className="mb-2 text-accent font-bold text-3xl">200+</h5>
                <p className="text-secondary">Complete Project</p>
              </div>
            </div>
          </div>
          <div className="w-5/12 h-[400px] relative rounded-3xl border-4 overflow-hidden">
            <Image
              src={"/images/portfolio-pic.jpg"}
              alt="Portfolio Showcase Picture"
              width={550}
              height={400}
              className="absolute inset-0 h-full"
            />
            <div className="absolute bottom-0 flex items-center justify-between gap-10 px-8 pb-6">
              <div>
                <h2 className="text-2xl mb-2 font-medium">Portfolio</h2>
                <p className="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  facere placeat dolorem rerum architecto facilis cum iste
                  accusantium optio. Cum error molestias alias magnam eaque,
                  tempora laborum delectus fugiat temporibus!
                </p>
              </div>
              <div>
                <ButtonCircle
                  icon={<GoArrowUpRight />}
                  bgColor="bg-transparent"
                  border="white"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;
