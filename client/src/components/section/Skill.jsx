import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



const Skill = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
            trigger: ".skill__desc",
            start: "top 30%",
            end: "bottom 10%",
            markers: true,
            onEnter: () => {
                gsap.to("body", { backgroundColor: "#FF3B00", duration: 0.8 });
                gsap.to("h1", { color: "#fff", duration: 1.4 });
                gsap.to("ul li a", { color: "#fff", duration: 1.4 });
                gsap.to(".time", { color: "#fff", duration: 1.4 });
                gsap.to(".country", { color: "#fff", duration: 1.4 }); 
                gsap.to("#coordinates", { color: "#fff", duration: 1.4 }); 
                gsap.to(".border", { color: "#fff", duration: 1.4 }); 
            },
            onEnterBack: () => {
                gsap.to("body", { backgroundColor: "#1A1A1A", duration: 0.8 });
                gsap.to("h1", { color: "#FF3B00", duration: 1.4 });
                gsap.to("ul li a", { color: "#FF3B00", duration: 1.4 });
                gsap.to(".time", { color: "#FF3B00", duration: 1.4 });
                gsap.to(".country", { color: "#FF3B00", duration: 1.4 }); 
                gsap.to("#coordinates", { color: "#FF3B00", duration: 1.4 }); 
                gsap.to(".border", { color: "#FF3B00", duration: 1.4 }); 
            },
            onLeave: ({ progress }) => {
                gsap.to("body", { backgroundColor: "#1A1A1A", duration: 1.4 });

            },
            onLeaveBack: ({ progress }) => {
                if (progress < 0.5) {
                    gsap.to("body", { backgroundColor: "#F4F0E6", duration: 1.4 });
                    gsap.to("h1", { color: "#FF3B00", duration: 1.4 });
                    gsap.to("ul li a", { color: "#FF3B00", duration: 1.4 });
                    gsap.to(".time", { color: "#FF3B00", duration: 1.4 });
                    gsap.to(".country", { color: "#FF3B00", duration: 1.4 }); 
                    gsap.to("#coordinates", { color: "#FF3B00", duration: 1.4 });
                    gsap.to(".border", { color: "#FF3B00", duration: 1.4 }); 
                }
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);
    return (
        <div id="section05">
            <section id="skill">
                <div className="skill__inner">
                    <h2 className="skill__title">
                        Which stack<br />
                        do you use?
                    </h2>
                    <div className="skill__desc">
                        <div>
                            <div className="num">01.</div>
                            <h3>Javascript</h3>
                            <p>
                                Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.
                            </p>
                        </div>

                        <div className="num">02.</div>
                        <h3>React</h3>
                        <p>
                            React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.
                        </p>

                        <div className="num">03.</div>
                        <h3>Javascript</h3>
                        <p>
                            Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.
                        </p>

                        <div className="num">04.</div>
                        <h3>Vite</h3>
                        <p>
                            Vite 구조를 알고있으며, 재사용 가능한 컴포넌트 설계를 할 수 있습니다.
                        </p>

                        <div className="num">05.</div>
                        <h3>Jquery</h3>
                        <p>
                            Jquery 사용법을 잘 알고있으며, 유지보수를 할 수 있습니다.
                        </p>

                        <div className="num">06.</div>
                        <h3>PHP</h3>
                        <p>
                            PHP 구조를 알고있으며, 다양한 구현을 할 수 있습니다.
                        </p>

                        <div className="num">07.</div>
                        <h3>NEXT.JS</h3>
                        <p>
                            MongoDB 어떻게 활용하는지 알고있습니다.
                        </p>

                        <div className="num">08.</div>
                        <h3>Node.js</h3>
                        <p>
                            Node.js 사용하여 자유로운 표현을 할 수 있습니다.
                        </p>

                        <div className="num">09.</div>
                        <h3>MongoDB</h3>
                        <p>
                            MongoDB 어떻게 활용하는지 알고있습니다.
                        </p>

                        <div className="num">10.</div>
                        <h3>Postman</h3>
                        <p>
                            Postman을 이용해 서버에 GET, POST 요청을 해서 서버 디버깅을 할 수 있습니다.
                        </p>

                        <div className="num">11.</div>
                        <h3>Sass</h3>
                        <p>
                            Sass 사용하여 자유로운 표현을 할 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default Skill;
