import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  ratings: number;
  clientName: string;
  clientPosition: string;
  clientTestimonial: string;
  clientImgUrl: string;
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
    <div className="max-w-[420px] px-4 py-6 rounded-2xl border border-secondary">
      <div className="flex gap-2 mb-4 text-lg text-yellow-400">
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
        <Image
          src={clientImgUrl}
          alt={clientName}
          width={50}
          height={50}
          className="flex-0 h-[50px] w-[50px] rounded-full border-2 border-white object-cover"
        />
        <div className="flex-1 space-y-1">
          <p className="font-medium">{clientName}</p>
          <p className="text-secondary">{clientPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
