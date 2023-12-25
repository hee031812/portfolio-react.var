import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import icon1 from '../../assets/img/ICON1.png'
import icon2 from '../../assets/img/ICON2.png'


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
                <div className="Iam">
                    <p>SAY HI !</p>
                    <b>
                        <div className="innerIam">
                            leggera<br />
                            a theme in progress<br />
                            built on bootstrap<br />
                            how I learn stuff<br />
                            how we do it
                        </div>
                    </b>
                </div>
                <div className="sec06_right">
                    <div className="contactWrap">
                        <h6>Contact me</h6>
                        <p>Tell us about your project.<br />
                            Let’s collaborate and make great stuff.
                        </p>
                        <div className="iconWrap">
                            <div className="icon1">
                                <div className="iconbox"><img src={icon1} alt="GMAIL icon" /></div>
                                <div className="iconText">GMAIL</div>
                            </div>
                            <div className="icon2">
                                <div className="iconbox"><img src={icon2} alt="GIT icon" /></div>
                                <div className="iconText">GIT</div>
                            </div>
                        </div>
                        <div className="linkWrap">
                        </div>
                    </div>
                    <div className="sec06_line"></div>
                    <div className="commentWrap">
                        <h5>Comment</h5>
                        <p>Please write down what you want to say.</p>
                        <fieldset>
                            <div className="name"> <input type="text" placeholder="이름을 입력해주세요." /></div>
                            <div className="write"> <input type="text" placeholder="댓글을 입력해주세요." /></div>
                            <button>Send</button>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="infoWrap">
                <div className="git">git</div>
                <div className="tstory">tstory</div>
                <div className="instagram">instagram</div>
            </div>
            <div className="line06"></div>
        </div>
    );
}

export default Contact;
