import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import img1 from "../../assets/img/01.jpg";
import img2 from "../../assets/img/02.jpg";
import img3 from "../../assets/img/03.jpg";
import img4 from "../../assets/img/04.jpg";
import img5 from "../../assets/img/05.jpg";
import img6 from "../../assets/img/06.jpg";
import img7 from "../../assets/img/07.jpg";
import img8 from "../../assets/img/08.jpg";
import sub from "../../assets/img/분리의신.png"

const Detail1 = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  useEffect(() => {
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const animate = () => {
      xForce = lerp(xForce, 0, easing);
      yForce = lerp(yForce, 0, easing);

      gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
      gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` });
      gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` });

      if (Math.abs(xForce) < 0.01) xForce = 0;
      if (Math.abs(yForce) < 0.01) yForce = 0;

      if (xForce !== 0 || yForce !== 0) {
        requestAnimationFrame(animate);
      }
    };

    const mouseMove = (e) => {
      const { movementX, movementY } = e;
      xForce += movementX * speed;
      yForce += movementY * speed;

      animate();
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <section className='mainWrap'>
      <div ref={plane1} className='imgs'>
        <img src={img1} alt="image01" className='i01' />
        <img src={img2} alt="image02" className='i02' />
        <img src={img3} alt="image03" className='i03' />
      </div>

      <div ref={plane2} className='imgs'>
        <img src={img4} alt="image04" className='i04' />
        <img src={img5} alt="image05" className='i05' />
        <img src={img6} alt="image06" className='i06' />
      </div>

      <div ref={plane3} className='imgs'>
        <img src={img7} alt="image07" className='i07' />
        <img src={img8} alt="image08" className='i08' />
      </div>

      <div className="main__title">
        <h2>Be the change that you wish to see in the world.</h2>
        <span>세상에서 보고 싶은 변화가 되어라.</span>
      </div>
      <div className='containerWrap'>
        <div className="titleWrap">
          <h2 className="hidden-text">RECYCLE</h2>
          <p className="hidden-p">01</p>
        </div>
        <div className="dir">
          <div className="dir_left">
            <img src={sub} alt="" />
          </div>
          <div className="dir_right">
            <div className="dir_top">
              <h3>{"{ 팀 프로젝트 }"}</h3>
              <p>분리의신은 일상 생활 속에서 발생하는 잘못된 분리배출을 알려주고,<br />
                간편한 검색을 통해 올바른 배출 방법을 안내하는 웹사이트입니다.<br />
                SSG 구조와 Next.js의 여러 기능 등을 활용해 최적화된 웹 사이트를 만들고자 고민하고 노력했습니다.<br />
                Notion API를 연결하면서 발생한 Axios, TypeScript와 관련된 여러 이슈들을 해결하고자 노력했습니다.<br />
                자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.</p>
            </div>
            <div className="dir_bottom">
              <div className="stack">
                <div className="stack01">REACT</div>
                <div className="stack02">Scss</div>
                <div className="stack03">JAVA</div>
              </div>
              <div className="Site">
                <div className="site_left">
                  react와 scss를 사용하여 제작한 팀 프로젝트 입니다. <br />
                  프로젝트를 보고 싶다면 오른편에 있는 버튼을 눌러주세요
                </div>
                <div className="site_right">
                  <p>View a project </p>
                </div>
              </div>
            </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default Detail1;
