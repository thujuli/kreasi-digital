import Culture from "@/views/about/Culture";
import History from "@/views/about/History";
import Teams from "@/views/about/Teams";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Kreasi Digital",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <History />
      <Culture />
      <Teams />
    </>
  );
};

export default AboutPage;
