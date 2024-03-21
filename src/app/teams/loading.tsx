import Container from "@/components/Container";
import ProfileCardLoading from "@/components/ProfileCardLoading";
import React from "react";

const Loading: React.FC = () => {
  return (
    <section className="pt-[50px] pb-[100px]">
      <Container>
        <div className="lg:px-40 space-y-8">
          {Array(3)
            .fill(null)
            .map((val, idx) => {
              return <ProfileCardLoading key={idx} />;
            })}
        </div>
      </Container>
    </section>
  );
};

export default Loading;
