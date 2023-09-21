import React from "react";
import { getMyDate } from "../../constants";

export const About = (props) => {
  return (
    <>
      <h3>About Component</h3>
      <h3>{getMyDate().toString()}</h3>
    </>
  );
};
