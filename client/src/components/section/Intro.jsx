import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {
    const descRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });

        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const target = gsap.utils.toArray(".split");

        target.forEach((target) => {
            let splitClient = new SplitType(target, { type: "line" });
            let lines = splitClient.lines;

            gsap.from(lines, {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "+400",
                    markers: false,
                },
            });
        });

        gsap.registerPlugin(ScrollTrigger);

        if (descRef.current) {
            const wrapCharacters = (element) => {
                
            };

            wrapCharacters(descRef.current);
        }

        gsap.set(".char", { opacity: 0 });
        gsap.to(".char", {
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.inOut"
        });

        // "24turn" 효과
        gsap.to(".text > div", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".text",
                start: "top center",
                end: "bottom top",
                toggleActions: "play none none reset"
            }
        });

        // 이미지 애니메이션
        const imgWrap = document.querySelector('.imgWrap');
        const img = imgWrap.querySelector('.img');

        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top center",
                end: "bottom top",
                scrub: true
            },
            yPercent: -10,
            scale: 1.2,
            ease: "none"
        });

        gsap.to(imgWrap, {
            scrollTrigger: {
                trigger: "#section1",
                start: "top bottom",
                end: "bottom top",
                markers: false,
                scrub: true,
            },
            yPercent: -50,
            ease: "none"
        });
    }, []);

    return (
        <>
            <div id="section1">
                <div className="desc split">
                    Hello, I'm Kim Heejin.<br />
                    I have a dream of Front and <br />I'm working hard to make it a
                    reality.<br />
                    If you want to see the outcome of the effort,
                    pleasescrolldown.Hope you have a good time.
                </div>
                <div className="text">
                    <div>24</div>
                    <div>turn</div>
                    <div>my life</div>
                    <div className="imgWrap">
                        <div className="img"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;