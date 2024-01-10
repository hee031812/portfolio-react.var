import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Contact = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: "#section7",
      start: "top 30%",
      end: "bottom 10%",
      markers: false,
      onEnter: () => {
        gsap.to("body", { backgroundColor: "#FF3B00", duration: 0.8 });
        gsap.to("#header .right", { color: "#FF3B00", duration: 0.8 });
      },
      onLeaveBack: () => {
        gsap.to("body", { backgroundColor: "#A1A1A1", duration: 0.8 });
        gsap.to("#header .right", { color: "#A1A1A1", duration: 0.8 });
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);


  return (
    <div id="section7">
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">
            SAY
          </p>

          <ul class="content__container__list">
            <li class="content__container__list__item">BYE !</li>
            <li class="content__container__list__item">CONTEACT !</li>
            <li class="content__container__list__item">ME !</li>
            <li class="content__container__list__item">everybody !</li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li><a href="/#section1">about</a></li>
          <li><a href="/#section3">project</a></li>
          <li><a href="https://github.com/hee031812/hee031812.git" >git</a> </li>
          {/* <li> <a href="/">mail</a> </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Contact