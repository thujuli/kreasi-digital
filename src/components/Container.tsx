import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="max-w-[1440px] mx-auto px-0 md:px-[50px]">{children}</div>
  );
};

export default Container;
