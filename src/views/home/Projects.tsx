import Button from "@/components/Button";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projectsList } from "@/utils/helper";
import React from "react";

const Projects: React.FC = () => {
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
          {projectsList.map((project, idx) => (
            <ProjectCard
              key={idx}
              id={idx}
              description={project.description}
              imgUrl={project.imgUrl}
              job={project.job}
              link={project.link}
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
