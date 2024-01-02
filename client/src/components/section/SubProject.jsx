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
  const descRef = useRef(null);
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

    gsap.to(descRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 90%",
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
        <div className="sec04_desc" ref={descRef}>
          <span>"I've worked hard for the past six months.</span>
          <span>If you want to see more of the results,</span>
          <span>please scroll down."</span>
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
              <i class="icon">
                <svg width="33" height="33" viewBox="0 0 16 16" fill="#f14620a9" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.869 11.219C7.09935 12.26 8.90165 12.26 10.132 11.219C10.5191 10.892 10.8176 10.4727 11 10C10.007 10.1555 9.00482 10.245 8 10.268C6.99518 10.245 5.99299 10.1555 5 10C5.18273 10.4728 5.48158 10.8921 5.869 11.219Z"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.3138 7.30274C10.481 7.68171 10.9238 7.85338 11.3027 7.68618C11.6817 7.51899 11.8534 7.07623 11.6862 6.69726L10.3138 7.30274ZM8.31382 6.69726C8.14662 7.07623 8.31829 7.51899 8.69726 7.68618C9.07623 7.85338 9.51899 7.68171 9.68618 7.30274L8.31382 6.69726ZM4.25 7C4.25 7.41421 4.58579 7.75 5 7.75C5.41421 7.75 5.75 7.41421 5.75 7H4.25ZM5.75 6C5.75 5.58579 5.41421 5.25 5 5.25C4.58579 5.25 4.25 5.58579 4.25 6H5.75ZM12.9497 3.05025L12.4194 3.58058L12.9497 3.05025ZM11.6862 6.69726C11.3915 6.02924 10.7302 5.59819 10 5.59819V7.09819C10.1359 7.09819 10.259 7.17841 10.3138 7.30274L11.6862 6.69726ZM10 5.59819C9.26985 5.59819 8.60854 6.02924 8.31382 6.69726L9.68618 7.30274C9.74104 7.17841 9.86411 7.09819 10 7.09819V5.59819ZM5.75 7V6H4.25V7H5.75ZM14.25 8C14.25 11.4518 11.4518 14.25 8 14.25V15.75C12.2802 15.75 15.75 12.2802 15.75 8H14.25ZM8 14.25C4.54822 14.25 1.75 11.4518 1.75 8H0.25C0.25 12.2802 3.71979 15.75 8 15.75V14.25ZM1.75 8C1.75 4.54822 4.54822 1.75 8 1.75V0.25C3.71979 0.25 0.25 3.71979 0.25 8H1.75ZM8 1.75C9.6576 1.75 11.2473 2.40848 12.4194 3.58058L13.4801 2.51992C12.0267 1.06652 10.0554 0.25 8 0.25V1.75ZM12.4194 3.58058C13.5915 4.75268 14.25 6.3424 14.25 8H15.75C15.75 5.94457 14.9335 3.97333 13.4801 2.51992L12.4194 3.58058Z"
                    fill="#f14620a9" />
                </svg>
              </i>
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
              <i class="icon">
                <svg width="33" height="33" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.5 9H6.5C5.67157 9 5 9.67157 5 10.5C5 11.3284 5.67157 12 6.5 12H9.5C10.3284 12 11 11.3284 11 10.5C11 9.67157 10.3284 9 9.5 9Z"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M5.75 5C5.75 4.58579 5.41421 4.25 5 4.25C4.58579 4.25 4.25 4.58579 4.25 5H5.75ZM4.25 6C4.25 6.41421 4.58579 6.75 5 6.75C5.41421 6.75 5.75 6.41421 5.75 6H4.25ZM11.75 5C11.75 4.58579 11.4142 4.25 11 4.25C10.5858 4.25 10.25 4.58579 10.25 5H11.75ZM10.25 6C10.25 6.41421 10.5858 6.75 11 6.75C11.4142 6.75 11.75 6.41421 11.75 6H10.25ZM4.25 5V6H5.75V5H4.25ZM10.25 5V6H11.75V5H10.25Z"
                    fill="#f14620a9" />
                </svg>

              </i>

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
              <i class="icon">
                <svg width="33" height="33" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 10.0002C5.18131 10.4725 5.47841 10.8917 5.864 11.2192C7.09027 12.2485 8.87485 12.2615 10.116 11.2502C10.5069 10.9285 10.8109 10.5138 11 10.0442"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.99985 6.00015L5.9997 7L4.99985 7.99985" stroke="#f14620a9" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 6.0003L10.0002 7.00015L11 8" stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </i>

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
              <i class="icon">
                <svg width="33" height="33" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 10.0002C5.18131 10.4725 5.47841 10.8917 5.864 11.2192C7.09027 12.2485 8.87485 12.2615 10.116 11.2502C10.5069 10.9285 10.8109 10.5138 11 10.0442"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 5.6741C9.17479 6.07027 9.56698 6.3259 10 6.3259C10.433 6.3259 10.8252 6.07027 11 5.6741"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 5.6741C5.17479 6.07027 5.56698 6.3259 6 6.3259C6.43302 6.3259 6.82521 6.07027 7 5.6741"
                    stroke="#f14620a9" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </i>
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
