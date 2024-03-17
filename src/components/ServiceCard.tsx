import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = (props) => {
  const { description, imgUrl, title } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-6 px-4 border border-secondary">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20">
        <Image src={imgUrl} alt={title} width={36} height={36} />
      </div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
      <p className="text-secondary text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
