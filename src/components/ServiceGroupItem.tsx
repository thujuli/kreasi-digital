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
      <div className="flex justify-between items-center">
        <h2 className="text-4xl mb-4">{title}</h2>
        <a href="https://gooogle.com" target="_blank">
          <span>Contact Us</span>
          <GoArrowUpRight className="inline-block text-xl" />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12">
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
