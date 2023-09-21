import React from "react";
import { getMyDate } from "../../constants";

export const Home = (props) => {
  setTimeout(() => {
    console.log(">>>>>>>", getMyDate().toString());
  }, 5000);
  return (
    <>
      <h3>Home Component</h3>
      <h3>{getMyDate().toString()}</h3>
    </>
  );
};
