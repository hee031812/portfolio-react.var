import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import image1 from '../../../src/assets/img/standard.png';
import image2 from '../../../src/assets/img/hpoint.png';
import image3 from '../../../src/assets/img/mouse.png';
import image4 from '../../../src/assets/img/gsap.png';


const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4 }, ease: [0.76, 1, 0.88, 0.24] },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4 }, ease: [0.32, 1, 0.88, 0.67] }
};


const Modal = ({ modal }) => {
    const { active, index } = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorText = useRef(null);

    const texts = [
        {
            src: image1,

        },
        {
            src: image2,
        },
        {
            src: image3,
        },
        {
            src: image4,
        }
    ];

    useEffect(() => {
        let moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" });
        let moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" });

        let moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.8, ease: "power3" });
        let moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.8, ease: "power3" });

        let moveTextX = gsap.quickTo(cursorText.current, "left", { duration: 0.8, ease: "power3" });
        let moveTextY = gsap.quickTo(cursorText.current, "top", { duration: 0.8, ease: "power3" });

        const moveMouse = (e) => {
            const { clientX, clientY } = e;
            const xOffset = -10;
            const yOffset = 1200;

            moveContainerX(clientX + xOffset);
            moveContainerY(clientY + yOffset);
            moveCursorX(clientX);
            moveCursorY(clientY);
            moveTextX(clientX);
            moveTextY(clientY);
        };

        window.addEventListener("mousemove", moveMouse);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
        };
    }, []);

    return (
        <motion.div
            ref={container}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className='modal__wrap'
            style={{ position: 'absolute' }}
        >
            <div style={{ top: index * -100 + '%' }} className='modal__slider'>
                {texts.map((text, idx) => {
                    return (
                        <div className='modal' key={idx}>
                            <img src={text.src} alt={text.title} />
                        </div>
                    );
                })}
            </div>
            <div ref={cursor} className='cursor'></div>
            <div ref={cursorText} className='cursorText'></div>
        </motion.div>
    );
};

export default Modal;