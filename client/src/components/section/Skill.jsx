import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



const Skill = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
            trigger: "#section05",
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
            <div className='sec05__desc'>
            We are a design agency based in Copenhagen. <br />With a strong belief in strategically<br /> founded and highly crafted
            digital experiences
            </div>
            <section id="skill">
                <div className="skill__inner">
                    <h2 className="skill__title">
                        Which stack<br />
                        do you use?
                    </h2>
                    <div className="skill__desc">
                        <div>
                            <div className="num">01.</div>
                            <h3>{"{ 자바스크립트 }"}</h3>
                            <dd>클로저, 프로미스, 콜백, 비동기 프로그래밍과 같은 고급 자바스크립트 개념을 이해하고 효과적으로 사용할 수 있습니다.</dd>
                            <dd>자바스크립트 기반의 프론트엔드 라이브러리나 프레임워크(예: React, Vue.js, Angular 등)를 숙련되게 사용할 수 있습니다. 이를 통해 동적이고 반응형 웹
                                애플리케이션을 구축할 수 있습니다.</dd>
                        </div>

                        <div className="num">02.</div>
                        <h3>{"{ 리액트 }"}</h3>
                       <dd>클로저, 프로미스, 콜백, 비동기 프로그래밍과 같은 고급 자바스크립트 개념을 이해하고 효과적으로 사용할 수 있습니다.</dd>
                            <dd>자바스크립트 기반의 프론트엔드 라이브러리나 프레임워크(예: React, Vue.js, Angular 등)를 숙련되게 사용할 수 있습니다. 이를 통해 동적이고 반응형 웹
                                애플리케이션을 구축할 수 있습니다.</dd>

                        <div className="num">03.</div>
                        <h3>{"{ 비트 }"}</h3>
                        <dd>
                        Vite를 사용하여 환경을 구축하는 데 경험이 있습니다. Vite 구조를 알고있으며, 재사용 가능한 컴포넌트 설계를 할 수 있습니다.</dd>
                        <dd>다양한 프레임워크와 라이브러리와의 통합에 능숙합니다. 또한 개발 속도와 효율성을 크게 향상시킬 수 있습니다.</dd>
                       

                        <div className="num">04.</div>
                        <h3>{"{ 제이쿼리 }"}</h3>
                       <dd>
                        웹 개발에서 jQuery를 사용해 웹사이트에 동적인 요소와 효과를 추가하는 데 능숙합니다. DOM 조작과 이벤트 핸들링을 간편하게 해결하죠.</dd>
                        <dd>AJAX를 사용한 비동기 통신으로 사용자 경험을 향상시키는 것에도 숙련되어 있습니다. 크로스 브라우저 호환성 문제도 잘 해결해요.</dd>

                        <div className="num">05.</div>
                        <h3>{"{ 피에치피 }"}</h3>
                        <dd>
                        웹 서버 측 스크립팅 언어인 PHP를 사용하여 다양한 웹 애플리케이션과 서비스를 개발했습니다. </dd>
                        <dd>데이터베이스 통합, API 개발, 사용자 인증 등 다양한 백엔드 작업에 숙련되어 있습니다.</dd>


                        <div className="num">06.</div>
                        <h3>{"{ 몽고디비 }"}</h3>
                         <dd>
                       NoSQL 데이터베이스인 MongoDB를 사용하여 대규모 데이터 관리에 능숙합니다. 유연한 데이터 모델링과 빠른 쿼리 성능을 제공하죠.</dd>
                        <dd>데이터 저장, 검색, 관리 등에서 높은 성능과 확장성을 보여줍니다.</dd>


                        <div className="num">07.</div>
                        <h3>{"{ 넥스트 제이에스 }"}</h3>
                  <dd>
                      서버 사이드 렌더링과 정적 사이트 생성을 위해 Next.js를 사용합니다. SEO 최적화와 빠른 로딩 시간을 제공해요.</dd>
                        <dd>이러한 다양한 라이브러리를 사용하여 최적화된 환경을 만들수 있습니다.</dd>


                        <div className="num">08.</div>
                        <h3>{"{ 노드 제이에스 }"}</h3>
                  <dd>
                      Node.js를 사용하여 효율적이고 확장 가능한 서버 사이드 애플리케이션을 구축합니다. 비동기 이벤트 주도 아키텍처를 활용해 높은 처리량을 달성하죠.</dd>
                        <dd>RESTful API, 실시간 통신, 서버 로직 구현 등 다양한 백엔드 작업에 능숙합니다.</dd>

                        <div className="num">09.</div>
                        <h3>{"{ 포스트맨 }"}</h3>
                     <dd>
                      API 개발과 테스트에 Postman을 사용합니다. 다양한 HTTP 요청을 쉽게 구성하고 테스트해요.</dd>
                        <dd>API 문서화, 테스트 자동화 등의 고급 기능을 통해 API 개발 과정을 효율화합니다.</dd>

                        <div className="num">10.</div>
                        <h3>{"{ 사스 }"}</h3>
                        <dd>
                     CSS 전처리기인 Sass를 사용하여 효율적이고 재사용 가능한 스타일시트를 작성합니다. 더 깔끔하고 구조화된 CSS 코드를 작성하죠.</dd>
                        <dd>변수, 믹스인, 중첩 등의 기능을 활용해 더 동적이고 관리하기 쉬운 스타일시트를 만듭니다.</dd>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default Skill;
