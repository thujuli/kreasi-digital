import Image from "next/image";
import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

interface Props {
  name: string;
  profilePicture: string;
  id: number;
}

const ProfileCard: React.FC<Props> = (props) => {
  const { name, profilePicture, id } = props;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-4 lg:py-0 lg:rounded-lg overflow-hidden bg-secondary/10">
      <div
        className={`flex-0 min-w-[300px] items-center ${
          id % 2 ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={profilePicture}
          alt={name}
          width={300}
          height={300}
          className="mb-4 md:mb-0"
        />
      </div>
      <div
        className={`text-center md:text-start space-y-3 px-8 ${
          id % 2 ? "md:order-1" : "md:order-2"
        }`}
      >
        <h3 className="text-4xl font-medium">{name}</h3>
        <p className="text-xl">Fullstack Web Developer</p>
        <p className="text-secondary">
          A Fullstack Web Developer is responsible for designing, developing,
          and maintaining both the front-end and back-end aspects of web
          applications. Their role involves creating user-friendly interfaces,
          implementing features, managing databases, and ensuring the smooth
          functionality of the entire application.
        </p>
        <div className="pt-2 lg:pt-0 flex gap-4 justify-center md:justify-start text-xl text-white">
          <FaInstagram />
          <FaWhatsapp />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
