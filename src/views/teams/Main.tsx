import Container from "@/components/Container";
import ProfileCard from "@/components/ProfileCard";
import { fetchOurTeam } from "@/lib/data";
import React from "react";

const Main: React.FC = async () => {
  const ourTeams = await fetchOurTeam();

  return (
    <section className="pt-[50px] pb-[100px]">
      <Container>
        <div className="lg:px-40 space-y-8">
          {ourTeams &&
            ourTeams.map((person, idx) => {
              const fullName = person.firstName + " " + person.lastName;
              return (
                <ProfileCard
                  key={idx}
                  id={idx}
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

export default Main;
