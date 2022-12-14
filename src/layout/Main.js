import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default Main;
