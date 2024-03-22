import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  ratings: number;
  clientName: string;
  clientPosition: string;
  clientTestimonial: string;
  clientImgUrl: StaticImageData;
}

const TestimonialCard: React.FC<Props> = (props) => {
  const {
    clientImgUrl,
    clientName,
    clientPosition,
    clientTestimonial,
    ratings,
  } = props;
  return (
    <div className="min-w-[420px] px-4 py-6 rounded-md md:rounded-2xl border border-secondary">
      <div className="flex-0 flex gap-2 mb-4 text-lg text-yellow-400">
        {Array(Math.round(ratings))
          .fill(null)
          .map((val, idx) => (
            <span key={idx}>
              <FaStar />
            </span>
          ))}
      </div>
      <p className="mb-4 text-secondary">{clientTestimonial}</p>
      <div className="flex gap-3 items-center">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src={clientImgUrl}
            alt={clientName}
            fill
            sizes="100vw"
            placeholder="blur"
            className="rounded-full border-2 border-white object-cover"
          />
        </div>
        <div className="flex-1 space-y-1">
          <p className="font-medium">{clientName}</p>
          <p className="text-secondary">{clientPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
