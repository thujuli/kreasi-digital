import Main from "@/views/teams/Main";
import type { Metadata } from "next";
import React, { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Teams | Kreasi Digital",
};

const TeamsPage: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </>
  );
};

export default TeamsPage;
