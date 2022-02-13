import React from "react";
import web from "../src/images/img1.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Begin your developement journey with "
        imgsrc={web}
        visit="/service"
        btname="Courses"
      />
    </>
  );
};

export default Home;


