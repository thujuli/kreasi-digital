import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  profilePicture: string;
}

const TeamCard: React.FC<Props> = (props) => {
  const { name, profilePicture } = props;

  return (
    <div className="max-w-[300px] md:min-w-[300px] rounded-lg overflow-hidden bg-secondary/10">
      <Image src={profilePicture} alt={name} width={300} height={300} />
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
