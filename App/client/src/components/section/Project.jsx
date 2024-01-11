import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Frame00 from '../../assets/img/Frame01.png';
import Frame02 from '../../assets/img/Frame02.png';
import Frame04 from '../../assets/img/Frame04.png';
import Frame05 from '../../assets/img/Frame05.png';
import Frame06 from '../../assets/img/Frame06.png';
import Frame07 from '../../assets/img/Frame07.png';
import Frame08 from '../../assets/img/Frame08.png';
import recycle from '../../assets/img/분리의신.png';
import petpar from '../../assets/img/PETPAR.png';
import movie from '../../assets/img/영화 vue.png';
import youtube from '../../assets/img/유튜브.png';
import trip from '../../assets/img/여행블로그 php.png';
import quiz1 from '../../assets/img/퀴즈.png';
import quiz2 from '../../assets/img/유퀴즈.png';
import Layer from '../../utills/Layer';
import projectsData from '../../utills/LayerData';


const Project = () => {
    const [activeLayer, setActiveLayer] = useState('');

    const toggleLayer = (layerName) => {
        setActiveLayer(prevLayer => (prevLayer === layerName ? '' : layerName));
        console.log("Layer toggled:", layerName);
    };


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horSection = gsap.utils.toArray(".port");

        gsap.to(horSection, {
            xPercent: -100 * (horSection.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#section3",
                start: "top 20px",
                end: "+=4000",
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
    }, []);


    return (
        <>
            <div id="section3">
                <h4>{"{ 포트폴리오 }"}</h4>
                <div className="port-wrap">
                    <div className="port p1">
                        <img src={Frame00} alt="" />
                        <div className="mp3">
                            <img src={recycle} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ Recycle }"}</h5>
                            <p>
                                분리배출 정보에 관한 사이트입니다.<br />
                                PHP를 사용하여 만들었습니다.
                            </p>

                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('recycle')}>detail</span>
                        </div>
                    </div>

                    <div className="port p2">
                        <img src={Frame02} alt="" />
                        <div className="mp3">
                            <img src={petpar} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ Petpar }"}</h5>
                            <p>
                                PETPAR는 유기동물 플랫폼 웹사이트입니다.<br />
                                유기동물들을 입양하고 정보를 공유하는
                                플랫폼입니다.
                            </p>
                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('patpar')}>detail</span>
                        </div>
                    </div>
                    <div className="port p3">
                        <img src={Frame04} alt="" />
                        <div className="mp3">
                            <img src={movie} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ Movie Project }"} </h5>
                            <p>
                                VUE.JS 를 이용하여 제작하였습니다.<br />
                                최신영화, 인기영화를 한눈에 볼수 있게<br />
                                제작한 MOVIE 사이트 입니다.
                            </p>
                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('movie')}>detail</span>
                        </div>
                    </div>
                    <div className="port p4">
                        <img src={Frame05} alt="" />
                        <div className="mp3">
                            <img src={youtube} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ Youtube API }"}</h5>
                            <p>
                                REACT 를 이용하여 제작하였습니다.<br />
                                여행유튜브의 영상들을 한번에 보기 쉽게 <br />
                                모아놓은 웹사이트입니다.
                            </p>
                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('youtube')}>detail</span>
                        </div>
                    </div>
                    <div className="port p5">
                        <img src={Frame06} alt="" />
                        <div className="mp3">
                            <img src={trip} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ PHP Blog }"}</h5>
                            <p>
                                PHP를 이용하여 제작하였습니다. <br />
                                여행에 관련된 정보를 보고
                                게시판을<br />
                                이용하여 소통할수 있는 사이트입니다
                            </p>
                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('phpblog')}>detail</span>
                        </div>
                    </div>
                    <div className="port p6">
                        <img src={Frame08} alt="" />
                        <div className="mp3">
                            <img src={quiz1} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ Quiz Project }"}</h5>
                            <p>
                                JAVASCRIPT를 이용하여 제작하였습니다.<br />
                                자격증 공부를 보다 손쉽게 할수있는<br />
                                퀴즈게임을 만들었습니다.
                            </p>
                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('quiz')}>detail</span>
                        </div>
                    </div>
                    <div className="port p7">
                        <img src={Frame07} alt="" />
                        <div className="mp3">
                            <img src={quiz2} alt="" />
                        </div>
                        <div className="info">
                            <h5>{"{ U.Quiz Project }"}</h5>
                            <p>
                                JAVASCRIPT를 이용하여 제작하였습니다.<br />
                                QUIZ 게임에서 조금 더 업그레이드하여<br />
                                인물 퀴즈게임을 만들었습니다.
                            </p>
                        </div>
                        <div className="skill">
                            <span onClick={() => toggleLayer('uquiz')}>detail</span>
                        </div>
                    </div>
                </div>

                {activeLayer && <Layer project={projectsData[activeLayer]} />}

            </div >
        </>
    )
}

export default Project