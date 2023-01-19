import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-3xl text-sky-500">Home page this is</h2>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
