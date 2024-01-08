import React, { useEffect } from "react";
import { smooth } from "./utills/smooth.js";
import About from "./components/section/About.jsx";
import Header from "./components/section/Header.jsx";
import Intro from "./components/section/Intro.jsx";
import Project from "./components/section/Project.jsx";
import SubProject from "./components/section/SubProject.jsx";
import Skill from "./components/section/Skill.jsx";
import Comment from "./components/section/Comment.jsx";
import Contact from "./components/section/Contact.jsx";




const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Project />
      <SubProject />
      <Skill />
      <Comment />
      <Contact />

    </>
  )
}

export default App