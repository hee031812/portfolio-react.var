import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {
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

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    useEffect(() => {
        const img = document.querySelector('.imgWrap .img'); // Define img

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

        gsap.to(".imgWrap", {
            yPercent: -50,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: "#section1",
                start: "top bottom",
                end: "bottom top", // Fix the typo here
                markers: false,
                scrub: true
            }
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
                    please scroll down. Hope you have a good time.
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