import React, { useState } from 'react';

const Section06 = () => {
  const [comments, setComments] = useState([
    { text: "안녕하세요!", time: "오후 3:45", type: "sent" },
    { text: "안녕하세요, 만나서 반가워요!", time: "오후 3:46", type: "received" }
    // 기존 댓글들
  ]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleSendClick = () => {
    // 댓글 추가하는 로직 예정
    const newEntry = { text: newComment, time: new Date().toLocaleTimeString(), type: "sent" };
    setComments([...comments, newEntry]);
    setNewComment(''); // 댓글 입력 필드 초기화
  };

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
              {comments.map((comment, index) => (
                <div key={index} className={`message ${comment.type}`}>
                  <span className="text">{comment.text}</span>
                  <span className="time">{comment.time}</span>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="write"> 
                    <input 
                      type="text" 
                      placeholder="댓글을 입력해주세요."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  </div>
                  <button onClick={handleSendClick}>Send</button>
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
