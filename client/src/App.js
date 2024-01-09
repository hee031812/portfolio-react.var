import React, { useEffect, useState } from "react";
import About from "./components/section/About.jsx";
import Header from "./components/section/Header.jsx";
import Intro from "./components/section/Intro.jsx";
import Project from "./components/section/Project.jsx";
import SubProject from "./components/section/SubProject.jsx";
import Skill from "./components/section/Skill.jsx";
import Comment from "./components/section/Comment.jsx";
import Contact from "./components/section/Contact.jsx";
import Loading from "./components/section/Loading.jsx";
import { smooth } from "./utills/smooth.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    smooth();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default App;
