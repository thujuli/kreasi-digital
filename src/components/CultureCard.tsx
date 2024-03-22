import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  id: number;
}

const CultureCard: React.FC<Props> = (props) => {
  const { description, imgUrl, title, id } = props;
  return (
    <div className="flex flex-col lg:flex-row items-center rounded md:rounded-lg overflow-hidden bg-secondary/10">
      <div
        className={`flex-0 relative w-full lg:w-[400px] h-[300px] ${
          id % 2 ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div
        className={`flex-1 space-y-4 px-4 lg:px-10 pb-6 lg:pb-0 ${
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
