"use client";
import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

const Main: React.FC = () => {
  const teams = useAppSelector((state) => state.teams);

  return (
    <section className="pt-[50px] pb-[100px]">
      <Container>
        <div className="lg:px-40 space-y-8">
          {teams.map((team, idx) => {
            const fullName = team.firstName + " " + team.lastName;
            return (
              <ProfileCard
                key={idx}
                id={idx}
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

export default Main;
