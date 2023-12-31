import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import icon1 from '../../assets/img/ICON1.png'
// import icon2 from '../../assets/img/ICON2.png'


const Contact = () => {
           useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
            trigger: "#section06",
            start: "top center",
            end: "bottom center",
            markers: true,
            onEnter: () => {
                gsap.to("body", { backgroundColor: "#1A1A1A", duration: 0.8 });
                 gsap.to("h1", { color: "#fff", duration: 1.4 });
      gsap.to("ul li a", { color: "#fff", duration: 1.4 });
      gsap.to(".time", { color: "#fff", duration: 1.4 });
      gsap.to(".contry", { color: "#fff", duration: 1.4 });
            gsap.to("#coordinates", { color: "#fff", duration: 1.4 });
        
            },
            onEnterBack: () => {
                gsap.to("body", { backgroundColor: "#1A1A1A", duration: 0.8 });

            },
            onLeave: () => {
                gsap.to("body", { backgroundColor: "#FF3B00", duration: 0.8 });  // onLeave에서 배경색 변경

            },
            onLeaveBack: () => {
                gsap.to("body", { backgroundColor: "#FF3B00", duration: 0.8 });  // onLeaveBack에서 배경색 변경
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);
    return (
        <div id="section06">
            <div className="container06">
            </div>
        </div>
    );
}

export default Contact;
