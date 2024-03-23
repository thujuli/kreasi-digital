import Main from "@/views/teams/Main";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Teams | Kreasi Digital",
};

const TeamsPage: React.FC = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default TeamsPage;
