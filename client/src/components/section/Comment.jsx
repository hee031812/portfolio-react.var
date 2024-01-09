import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';

const Comment = (props) => {

    const [reple, setReple] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("")
    const [repleList, setRepleList] = useState([]);

    const SubmitHandler = (e) => {


        e.preventDefault();

        // 비밀번호 길이 검증
        if (password.length < 4 || password.length > 4) {
            return alert("비밀번호는 4자리로 입력해주세요.");
        }

        if (!reple) {
            return alert("댓글 내용을 채워주세요!!!");
        }

        let body = {
            reple: reple,
            displayName: displayName,
            password: password
            // uid: user.uid,
            // postId: props.postId
        }

        axios.post("/api/reple/submit", body).then((response) => {
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.");
                window.location.reload();
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        })
    }

    useEffect(() => {
        let body = {
            reple: props.reple,
            displayName: props.displayName,
        }

        axios.post("/api/reple/getReple", body).then((response) => {
            if (response.data.success) {
                setRepleList([...response.data.repleList]);
            }
        });
    }, [props.reple, props.displayName]);


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
                            {repleList.map((repleItem, idx) => (
                                <div className="comment" key={idx}>
                                    <span className="title">{idx + 1}. <em>{idx + 1}번째 댓글</em></span>
                                    <p className="cont">{repleItem.reple} <span className="auth">
                                        {repleItem.displayName} - {moment(repleItem.createdAt).fromNow()}
                                    </span></p>
                                </div>
                            ))}


                            <div className="comment">
                                <span className="title"><em>나도 댓글 쓰기</em></span>
                                <div className="cont comment__form">
                                    <form action="/write" method="post" onSubmit={SubmitHandler}>
                                        <fieldset >
                                            <legend className="blind">댓글 쓰기 영역</legend>
                                            <div class="input">
                                                <label htmlFor="author" className="required blind">글쓴이</label>
                                                <input
                                                    type="text"
                                                    name="author"
                                                    id="author"
                                                    placeholder='누구니?'
                                                    value={displayName}
                                                    onChange={(e) => { setDisplayName(e.currentTarget.value) }}
                                                />
                                                <label htmlFor="password" className="required blind">비밀번호</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder='비밀번호'
                                                    value={password}
                                                    onChange={(e) => { setPassword(e.currentTarget.value) }} />
                                            </div>
                                            <div class="text">
                                                <label htmlFor="content" className="required blind">글 내용</label>
                                                <textarea
                                                    name="content"
                                                    id="content"
                                                    placeholder='댓글은 적당히 써주세요!'
                                                    value={reple}
                                                    onChange={(e) => { setReple(e.currentTarget.value) }}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn__style2 mt30" onClick={(e) => { SubmitHandler(e) }}>댓글 쓰기</button>
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