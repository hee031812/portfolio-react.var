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
      onEnter: () => gsap.to("body", { backgroundColor: "#F2EEE4", duration: 0.8 }),
      onLeaveBack: () => gsap.to("body", { backgroundColor: "#A1A1A1", duration: 0.8 })
    });

    return () => {
      trigger.kill();
    };
  }, []);


  return (
    <div id="section7">
      <span>SAY bye!</span>
      <div class="bottom">
        <ul>
          <li><a href="/">about</a></li>
          <li><a href="/">project</a></li>
          <li><a href="/">site</a></li>
          <li><a href="/">contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact