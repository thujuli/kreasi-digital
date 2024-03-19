import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  profilePicture: string;
}

const ShortTeamCard: React.FC<Props> = (props) => {
  const { name, profilePicture } = props;

  return (
    <div className="max-w-[300px] rounded-lg overflow-hidden bg-secondary/10">
      <Image src={profilePicture} alt={name} width={300} height={300} />
      <div className="mt-3 space-y-2 text-center p-4">
        <h3 className="text-xl font-medium">{name}</h3>
        <p>Fullstack Web Developer</p>
        <p className="text-secondary">
          Designs and implements both front-end and back-end components of web
          applications.
        </p>
      </div>
    </div>
  );
};

export default ShortTeamCard;
