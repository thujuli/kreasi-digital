import { getBlurData } from "@/lib/blurGenerator";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  profilePicture: string;
}

const TeamCard: React.FC<Props> = async (props) => {
  const { name, profilePicture } = props;
  const blurData = await getBlurData(profilePicture);

  return (
    <div className="max-w-[300px] md:min-w-[300px] rounded-lg overflow-hidden bg-secondary/10">
      <div className="relative w-[300px] h-[300px]">
        <Image
          src={profilePicture}
          alt={name}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurData}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 mt-3 text-center p-4">
        <span className="text-xl font-medium">{name}</span>
        <span>Fullstack Web Developer</span>
        <p className="text-secondary">
          Designs and implements both front-end and back-end components of web
          applications.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
