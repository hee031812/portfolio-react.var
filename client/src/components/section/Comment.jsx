import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section06 = () => {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [commentList, setCommentList] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (author === "" || content === "") {
            return alert("내용을 채워주세요");
        }

        let body = {
            author: author,
            content: content,
        };

            axios.post("/api/comment", body)
        .then((response) => {
            if (response.data.success) {
                alert("댓글 작성이 완료되었습니다.");
                fetchComments();
            } else {
                alert("댓글 작성이 실패하였습니다.");
            }
        })
        .catch((err) => {
            console.error("Error: ", err);
            alert(`댓글 작성 중 문제가 발생했습니다: ${err.response ? err.response.data.message : '서버 응답 없음'}`);
        });
};

    const fetchComments = () => {
        axios.get("/api/comments")
            .then((response) => {
                if (response.data.success) {
                    setCommentList(response.data.comments);
                }
            })
            .catch((err) => {
                console.error("Error: ", err);
                alert("댓글을 불러오는 중 문제가 발생했습니다.");
            });
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div id="section06">
            <div className="container06">
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
                <div className="sec06_right">
                    <div className="commentList">
                        <h5>List</h5>
                        <div className="chatBox">
                            {commentList.map((comment, index) => (
                                <div key={index} className={`message ${comment.type}`}>
                                    <span className="text">{comment.content}</span>
                                    <span className="name">{comment.author}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bottom">
                            <div className="commentWrap">
                                <h5>Comment</h5>
                                <p>Please write down what you want to say.</p>
                                <fieldset>
                                    <div className="name">
                                        <input
                                            type="text"
                                            placeholder="이름을 입력해주세요."
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                        />
                                    </div>
                                    <div className="write">
                                        <input
                                            type="text"
                                            placeholder="댓글을 입력해주세요."
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                        />
                                    </div>
                                    <button 
                                        type="submit"
                                        onClick={onSubmit}
                                    >
                                        Send
                                    </button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section06;
