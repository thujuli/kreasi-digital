import React from "react";
interface Props {
  icon: any;
  bgColor: string;
  border?: boolean;
}

const ButtonCircle: React.FC<Props> = (props) => {
  const { bgColor, icon, border } = props;
  return (
    <button
      className={`h-[50px] w-[50px] p-2 rounded-full text-white text-3xl ${bgColor} ${
        border ? `ring-1 ring-white` : "ring-1 ring-transparent"
      }`}
    >
      {icon}
    </button>
  );
};

export default ButtonCircle;
