"use client";
import Container from "@/components/Container";
import TeamCard from "@/components/TeamCard";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

const Teams: React.FC = () => {
  const teams = useAppSelector((state) => state.teams);

  return (
    <section className="pt-[100px]">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-medium uppercase">
            Meet Our Team
          </h1>
          <p>We Are The Best Team</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:justify-center items-center mt-6 md:overflow-x-auto">
          {teams.map((team, idx) => {
            const fullName = team.firstName + " " + team.lastName;
            return (
              <TeamCard
                key={idx}
                name={fullName}
                profilePicture={team.picture}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Teams;
