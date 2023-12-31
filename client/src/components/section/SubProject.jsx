import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sub1 from '../../assets/img/standard.png';
import sub2 from '../../assets/img/mouse.png';
import sub3 from '../../assets/img/hpoint.png';
import sub4 from '../../assets/img/gsap.png';

const SubProject = () => {
  const listRef = useRef(null);
  const hoverImageRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState('');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sec04_text > div", {
       opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".sec04_text",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reset"
      }
    });

   const list = listRef.current;

    const onMouseMove = (e) => {
      if (hoverImageRef.current) {
        hoverImageRef.current.style.left = `${e.clientX}px`;
        hoverImageRef.current.style.top = `${e.clientY}px`;
      }
    };

    list.addEventListener('mousemove', onMouseMove);

    return () => {
      list.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const handleMouseEnter = (imageUrl) => {
    setHoveredImage(imageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredImage('');
  };

  return (


 <>
      <div id="section4">
        <div className="desc split">
          "I've worked hard for the past six months. <br />
          If you want to see more of the results,<br />
          please scroll down."
        </div>
        <div className="sec04_text">
          <div>LIST</div>
          <div>MORE</div>
        </div>
        <div className="list" ref={listRef}>
          <ul>
            <li onMouseEnter={() => handleMouseEnter(sub1)} onMouseLeave={handleMouseLeave}>
              <span>coding</span>
              <em>W.standard site</em>
              <strong>리액트를 사용하여 작업한 웹스탠다드 사이트 입니다. 웹 표준에 맞춰 사이트를 제작했습니다.</strong>
 <img
  alt=''
            ref={hoverImageRef}
            src={hoveredImage}
            style={{
              display: 'block',
              position: 'fixed',
              width: '300px',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />
            </li>
            <li onMouseEnter={() => handleMouseEnter(sub2)} onMouseLeave={handleMouseLeave}>
              <span>coding</span>
              <em>H.Point SITE</em>
              <strong>자바스크립트를 사용하여 제작하였습니다. 현대백화점 포인트 사이트를 클론 코딩한 사이트입니다.</strong>
 <img
 alt=''
            ref={hoverImageRef}
            src={hoveredImage}
            style={{
              display: 'block',
              position: 'fixed',
              width: '300px',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            
            }}
          />
            </li>
            <li onMouseEnter={() => handleMouseEnter(sub3)} onMouseLeave={handleMouseLeave}>
              <span>coding</span>
              <em>Mouse Effect</em>
              <strong>"Mouse Effect" 웹사이트는 사용자의 마우스 움직임에 반응하여 다양한 시각적 효과를 생성하는 인터랙티브한 사이트입니다.</strong>
 <img
  alt=''
            ref={hoverImageRef}
            src={hoveredImage}
            style={{
              display: 'block',
              position: 'fixed',
              width: '300px',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />
            </li>
            <li onMouseEnter={() => handleMouseEnter(sub4)} onMouseLeave={handleMouseLeave}>
              <span>coding</span>
              <em>GSAP</em>
              <strong>"GSAP 사이트"는 GreenSock Animation Platform(GSAP)을 기반으로 한 동적이고 상호작용이 풍부한 웹사이트입니다.</strong>
 <img
  alt=''
            ref={hoverImageRef}
            src={hoveredImage}
            style={{
              display: 'block',
              position: 'fixed',
              width: '300px',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default SubProject
