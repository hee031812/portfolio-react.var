import React from "react";
import Headers from "../components/section/Header"
import Intro from "../components/section/Intro"
import About from "../components/section/About";
import Skill from "../components/section/Skill";
import Contact from "../components/section/Contact";
import Project from "../components/section/Project";

const Home = () => {
  return (
    <>
      <Headers />
      <Intro />
      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  );
};

export default Home;