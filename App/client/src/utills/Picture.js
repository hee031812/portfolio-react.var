import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Picture = ({ src, alt, note }) => {
    const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });
    let previousTouch = undefined;

    useEffect(() => {
        // 랜덤 위치 설정
        const range = 100;
        const randomX = Math.random() * (range * 2) - range;
        const randomY = Math.random() * (range * 2) - range;
        const randomRotate = Math.random() * (range / 2) - range / 4;
        setPosition({ x: randomX, y: randomY, rotate: randomRotate });

        // GSAP 애니메이션 설정
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".Picture", {
            scale: 1,
            opacity: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".Picture",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reset"
            }
        });
    }, []);

    const startDrag = (event) => {
        event.preventDefault();
        document.addEventListener("mousemove", updateElementPosition);
        document.addEventListener("touchmove", updateElementPosition);
        document.addEventListener("mouseup", stopDrag);
        document.addEventListener("touchend", stopDrag);
    };

    const stopDrag = () => {
        previousTouch = undefined;
        document.removeEventListener("mousemove", updateElementPosition);
        document.removeEventListener("touchmove", updateElementPosition);
        document.removeEventListener("mouseup", stopDrag);
        document.removeEventListener("touchend", stopDrag);
    };

    const updateElementPosition = (event) => {
        let movementX, movementY;

        if (event.type === 'touchmove') {
            const touch = event.touches[0];
            movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
            movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
            previousTouch = touch;
        } else {
            movementX = event.movementX;
            movementY = event.movementY;
        }

        setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x + movementX,
            y: prevPosition.y + movementY,
        }));
    };


    return (
        <div className="Picture" style={{ top: `${position.y}px`, left: `${position.x}px`, transform: `translate(-50%, -50%) rotate(${position.rotate}deg)` }}
            onMouseDown={startDrag}
            onTouchStart={startDrag}>
            <img className="Picture-img" src={src} alt={alt} />
            <div className="Picture-note">{note}</div>
        </div>
    );
};

export default Picture;