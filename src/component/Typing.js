import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const Typing = ({ text }) => {
  return (
    <>
      <TypeAnimation sequence={[text]} speed={50} repeat={1} />
    </>
  );
};

export default Typing;
