import React from "react";

interface Props {
  name: string;
  description: string;
}

const ServiceItem: React.FC<Props> = (props) => {
  const { description, name } = props;

  return (
    <div className="pt-2 border-t border-white">
      <h3 className="text-2xl font-medium">{name}</h3>
      <p className="mt-4 text-secondary">{description}</p>
    </div>
  );
};

export default ServiceItem;
