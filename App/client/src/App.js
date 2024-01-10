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
import { gsap } from "gsap";
import { smooth } from "./utills/smooth.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    smooth();

    const timer = setTimeout(() => {
      const loadingElement = document.getElementById("loading");
      gsap.to(loadingElement, {
        y: -100,
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          setIsLoading(false);
          console.log(setIsLoading)
        },
      });

    }, 10);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {isLoading ? (
        <div id="loading">
          <Loading isLoading={isLoading} />
        </div>
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
