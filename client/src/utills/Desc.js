import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Desc = () => {
    useEffect(() => {
        gsap.to(".highlight-text", { opacity: 1, duration: 2.5, delay: 15 });
        gsap.to(".text", { opacity: 1, duration: 2.5, delay: 10 });
    }, []);

    return (
        <div className="about1">
            <div className="about_right">
                <h4 className="highlight-text text" style={{ opacity: 0 }}>삶의 모토</h4>
                <p>
                    안녕하세요, 프론트 엔드 개발자를 꿈꾸는 김희진입니다.<br />
                    "한 번의 경험이 없으면 한 번의 지혜가 자라지 않는다."<br /> 이 문장은 제 삶의 모토입니다.
                    경험이 없다면 지혜도 얻을 수 없다는 말이죠. <br />
                    이 모토를 가슴 깊숙이 새기며 무엇인가에 도전할 때 두려움이 생기면 한 번 더 생각합니다.<br />
                    목표가 있다면 두려움 없이 알아내고 습득하는 것을 목표로 삼아 지혜를 쌓아왔습니다. <br />
                    프론트 엔드라는 꿈을 향해 배우고 나가는 여정에서도 삶의 모토를 발판삼아 어려움을 극복해 나갈 것입니다.<br />
                    신입으로써 항상 내 것으로 만들어간다는 마음가짐으로 늘 감사하게 일하고 <br />
                </p>
            </div>
        </div>
    );
};

export default Desc;