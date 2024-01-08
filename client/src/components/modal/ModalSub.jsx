import React from 'react';
import recycle from '../../assets/img/분리의신.png';


const ModalSub = () => {


    return (
        <>
            <div className="layer__wrap" >
                <div class="layer m1">
                    <div class="layer__inner">
                        <div class="layer__left">
                            <img src={recycle} alt="" />
                        </div>
                        <div class="layer__right">
                            <h4>RECYCLE</h4>
                            <h5>{"{ team project }"}</h5>
                            <div className='layerStack'>
                                <div>PHP</div>
                                <div>CSS</div>
                                <div>javascript</div>
                            </div>
                            <div className='layerTitle'>
                                <div className="layerTitle01"># 프로젝트 설명</div>
                                <div className="layerDesc01">분리의신은 일상 생활 속에서 발생하는 잘못된 분리배출을 알려주고,<br />
                                    간편한 검색을 통해 올바른 배출 방법을 안내하는 웹사이트입니다.<br />
                                    PHP는 이 웹 기반 프로젝트의 서버 측 스크립팅 언어로 사용되었습니다. <br />PHP를 사용하여 사용자의 요청을 처리하고 데이터를
                                    서버와 클라이언트 간에 전송하는 기능을 구현했습니다.
                                    JavaScript는 클라이언트 측에서 동적인 기능을 추가하여 웹사이트의<br /> 상호작용성을 높이는 데 사용됩니다.
                                    예를 들어, 사용자가 특정 쓰레기 항목을 클릭하면,<br /> JavaScript를 이용해 추가 정보가 나타나거나 특정 액션이 수행됩니다.<br />
                                    이는 사용자가 보다 효율적으로 정보를 얻고 프로젝트를 활용할 수 있게 해주었습니다.</div>
                            </div>
                            <div className='layerTitle'>
                                <div className="layerTitle01"># 주요기능</div>
                                <div className="layerDesc01">로그인 / 회원가입 / 마이 페이지 / 주요 페이지 / 메인 페이지를 구현하였습니다.</div>
                            </div>
                            <div className='showWrap'>
                                <div className='show'>show</div>
                                <div className="close">close</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalSub