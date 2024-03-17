import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor: string;
  border?: string;
}

const Button: React.FC<Props> = (props) => {
  const { bgColor, border, children } = props;
  return (
    <button
      className={`h-[50px] px-5 py-[10] rounded-full text-white ${bgColor} ${
        border ? `ring-1 ring-${border}` : "ring-1 ring-transparent"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
