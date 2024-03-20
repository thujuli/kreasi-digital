import React from "react";
import ServiceItem from "./ServiceItem";
import { GoArrowUpRight } from "react-icons/go";

interface Item {
  name: string;
  description: string;
}

interface Props {
  title: string;
  items: Item[];
}

const ServiceGroupItem: React.FC<Props> = (props) => {
  const { title, items } = props;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-4 md:px-0">
        <h2 className="mb-2 md:mb-0 text-4xl text-center ">{title}</h2>
        <a
          href="https://gooogle.com"
          target="_blank"
          className="text-nowrap text-end"
        >
          <span>Contact Us</span>
          <GoArrowUpRight className="inline-block text-xl" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 px-4 md:px-0">
        {items.map((item, idx) => (
          <ServiceItem
            key={idx}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGroupItem;
