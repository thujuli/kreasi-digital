import React from "react";

const ProfileCardLoading: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-4 lg:py-0 min-w-full h-[728px] md:h-[400px] lg:h-[300px] lg:rounded-lg overflow-hidden bg-secondary/10">
      <div className="min-w-[300px] h-[300px] bg-white/30" />
      <div className="w-full" />
    </div>
  );
};

export default ProfileCardLoading;
