import React, { useEffect } from 'react'; // 수정된 부분
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Comment = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: '#section7',
            start: 'top bottom',
            onEnter: () => {
                gsap.to('#section7', { backgroundColor: '#F2EEE4' });
            },
            onLeaveBack: (self) => {
                self.disable();
            }
        });
    }, []);

    return (
        <>
            <div id="section6">
                <div className="sec6-text">
                    <div className="text-left">
                        <h3>Please Write<br /> a Comment<br />
                            <div className="Iam">
                                <p>SAY HI !</p>
                                <b>
                                    <div className="innerIam">
                                        Nice to meet you!<br />
                                        Did you enjoy it?<br />
                                        If you would like to work with me<br />
                                        please get in touch.<br />
                                    </div>
                                </b>
                            </div>

                        </h3>

                    </div>
                    <div className="text-right">
                        <div className="comment-wrap">

                            <div className="comment noTop">
                                <span className="title">1. <em>첫번째 댓글</em> </span>
                                <p className="cont">포트폴리오가 너무 멋있네요!! <span className="auth">지나가는 사람(30분전)</span></p>
                            </div>

                            <div className="comment">
                                <span className="title">2. <em>두번째 댓글</em></span>
                                <p className="cont">가까운 미래에 당신은 우리와 함께 추억의 길을 따라 여행을 떠날 기회를 갖게 될 것입니다. 봄/여름이 포함된 매년 중요한 순간과 하이라이트를
                                    축하하는 데 동참할 수 있습니다. <span className="auth">포폴이(30분전)</span></p>
                            </div>

                            <div className="comment">
                                <span className="title">3. <em>세번째 댓글</em></span>
                                <p className="cont">Node.js나 다른 백엔드 기술과의 통합 경험을 보유하고 있을 수도 있으며, RESTful API 또는 GraphQL API를 통한 데이터
                                    통신과 처리에 능숙할 수 있습니다. <span className="auth">갈대(1시간)</span></p>
                            </div>

                            <div className="comment">
                                <span className="title">4. <em>네번째 댓글</em></span>
                                <p className="cont">각 기술을 사용하여 완성한 주요 프로젝트를 나열하고, 그 프로젝트에서의 역할과 기여도를 강조합니다. 이를 통해 실제 작업 경험을 바탕으로 한
                                    숙련도를 보여줄 수 있습니다. 고급 프로그래밍 개념의 이해와 적용: 당신은 클로저, 프로미스, 콜백, 비동기 프로그래밍과 같은 고급 자바스크립트 개념을 이해하고
                                    효과적으로 사용할 수 있습니다. 이러한 개념들을 활용하여 더 효율적이고 강력한 코드를 작성할 수 있습니다. <span className="auth">백수(4일전)
                                    </span></p>
                            </div>
                            <div className="comment">
                                <span className="title">5. <em>다섯번째 댓글</em></span>
                                <p className="cont">각 기술을 사용하여 완성한 주요 프로젝트를 나열하고, 그 프로젝트에서의 역할과 기여도를 강조합니다. 이를 통해 실제 작업 경험을 바탕으로 한
                                    숙련도를 보여줄 수 있습니다. 고급 프로그래밍 개념의 이해와 적용: 당신은 클로저, 프로미스, 콜백, 비동기 프로그래밍과 같은 고급 자바스크립트 개념을 이해하고
                                    효과적으로 사용할 수 있습니다. 이러한 개념들을 활용하여 더 효율적이고 강력한 코드를 작성할 수 있습니다. <span className="auth">백수(4일전)
                                    </span></p>
                            </div>

                            <div className="comment">
                                <span className="title"><em>나도 댓글 쓰기</em></span>
                                <div className="cont comment__form">
                                    <form action="/" method="POST">
                                        <fieldset>
                                            <legend className="blind">댓글 쓰기 영역</legend>
                                            <div class="input">
                                                <label htmlFor="youName" className="required blind">글쓴이</label>
                                                <input type="text" name="title" id="youName" placeholder='누구니?' />
                                                <label htmlFor="youName" className="required blind">비밀번호</label>
                                                <input type="text" name="title" id="youName" placeholder='비밀번호' />
                                            </div>
                                            <div class="text">
                                                <label htmlFor="youConts" className="required blind">글 내용</label>
                                                <textarea name="content" id="youConts" placeholder='댓글은 적당히 써주세요!'></textarea>
                                            </div>
                                            <button type="submit" className="btn__style2 mt30">댓글 쓰기</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment