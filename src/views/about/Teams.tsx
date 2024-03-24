import Container from "@/components/Container";
import TeamCard from "@/components/TeamCard";
import { fetchOurTeam } from "@/lib/data";
import React from "react";

const Teams: React.FC = async () => {
  const ourTeam = await fetchOurTeam();

  return (
    <section className="py-[100px]">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-medium uppercase">
            Meet Our Team
          </h1>
          <p>We Are The Best Team</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:justify-center items-center mt-6 md:overflow-x-auto no-scrollbar">
          {ourTeam &&
            ourTeam.map((person, idx) => {
              const fullName = person.firstName + " " + person.lastName;
              return (
                <TeamCard
                  key={idx}
                  name={fullName}
                  profilePicture={person.picture}
                />
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Teams;
