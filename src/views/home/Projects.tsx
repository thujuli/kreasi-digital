"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { getSuccessProjects } from "@/utils/contentful";
import { ProjectData } from "@/utils/types/projects";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const response = await getSuccessProjects();
      const data = response.map((project) => ({
        title: project.title,
        description: project.description,
        job: project.job,
        projectLink: project.projectLink,
        imageUrl: "https:" + project.image?.fields?.file?.url,
      }));
      setProjects(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else if (error instanceof AxiosError) {
        console.error(error.response?.data);
      }
    }
  };

  return (
    <section className="pt-[100px]">
      <Container>
        <div className="text-center px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-medium">
            Success Project With
          </h2>
          <h2 className="text-3xl md:text-4xl font-medium">Kreasi Digital</h2>
          <p className="mt-4 text-secondary">
            Proudly, here are some examples of websites we have worked on.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-8 mt-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              id={idx}
              description={project.description}
              imgUrl={project.imageUrl}
              job={project.job}
              link={project.projectLink}
              title={project.title}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button bgColor="bg-accent">Built a project</Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
