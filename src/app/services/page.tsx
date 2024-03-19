import Main from "@/views/services/Main";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Kreasi Digital",
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default ServicesPage;
