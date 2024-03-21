import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  id: number;
}

const CultureCard: React.FC<Props> = (props) => {
  const { description, imgUrl, title, id } = props;
  return (
    <div className="flex flex-col lg:flex-row items-center rounded md:rounded-lg overflow-hidden bg-secondary/10">
      <Image
        src={imgUrl}
        alt={title}
        width={400}
        height={300}
        quality={70}
        className={`w-full lg:min-w-[400px] max-h-[300px] object-cover ${
          id % 2 ? "lg:order-1" : "lg:order-2"
        }`}
      />
      <div
        className={`space-y-4 px-4 lg:px-10 pb-6 lg:pb-0 ${
          id % 2 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h2 className="mt-4 lg:mt-0 text-center md:text-start text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default CultureCard;
