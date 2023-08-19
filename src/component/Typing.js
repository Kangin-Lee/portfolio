import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = ({text, delay}) => {
  return (
    <>
      <TypeAnimation sequence={[text, delay]} speed={50} repeat={1}/>
    </>
  );
};

export default Typing;
