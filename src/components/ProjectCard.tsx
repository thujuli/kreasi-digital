import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  id: number;
  imgUrl: string;
  job: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  const { description, imgUrl, link, job, title, id } = props;
  return (
    <div className="flex h-[450px] gap-[30px]">
      <div
        className={`flex-0 w-[860px] rounded-3xl overflow-hidden ${
          id % 2 ? "order-2" : "order-1"
        }`}
      >
        <Image
          src={imgUrl}
          alt={title}
          height={450}
          width={760}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`flex-1 flex flex-col justify-center space-y-6 px-[30px] rounded-3xl bg-secondary/10 ${
          id % 2 ? "order-1" : "order-2"
        }`}
      >
        <p className="text-secondary">{job}</p>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-secondary">{description}</p>
        <a href={link} target="_blank">
          <span className="underline">View Website</span>
          <GoArrowUpRight className="inline-block text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
