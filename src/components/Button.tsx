import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor: string;
  border?: string;
  className?: string;
}

const Button: React.FC<Props> = (props) => {
  const { bgColor, border, children, className } = props;
  return (
    <button
      className={`h-[44px] md:h-[50px] px-5 py-[10] rounded-full text-white ${bgColor} ${
        border ? `ring-1 ring-${border}` : "ring-1 ring-transparent"
      } ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
