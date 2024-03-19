import Container from "@/components/Container";
import ServiceGroupItem from "@/components/ServiceGroupItem";
import { BSServices, DMServices, WDServices } from "@/utils/helper";
import React from "react";

const Main: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="pt-[50px] pb-[100px] space-y-12">
          <ServiceGroupItem title="Digital Marketing" items={DMServices} />
          <ServiceGroupItem
            title="Web Development and Design"
            items={WDServices}
          />
          <ServiceGroupItem title="Business Support" items={BSServices} />
        </div>
      </Container>
    </section>
  );
};

export default Main;
