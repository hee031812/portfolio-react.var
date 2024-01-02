import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section06 = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');

  // 페이지 로드 시 댓글 불러오기
  useEffect(() => {
    axios.get('/api/reple/list')
      .then(response => {
        if (response.data.success) {
          setComments(response.data.reples);
        } else {
          alert('댓글을 불러오는 데 실패했습니다.');
        }
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  }, []);

  // 댓글 추가 처리
  const handleSendClick = () => {
    if (!name || !newComment) {
      alert('이름과 댓글을 모두 입력해주세요.');
      return;
    }

    const newEntry = { name, content: newComment };

    axios.post('/api/reple/submit', newEntry)
      .then(response => {
        if (response.data.success) {
          setComments([...comments, response.data.comment]);
          setNewComment('');
          setName('');
        } else {
          alert('댓글을 추가하지 못했습니다.');
        }
      })
      .catch(error => {
        console.error("Error: ", error);
      });
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
                  <span className="text">{comment.content}</span>
                  <span className="name">{comment.name}</span>
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
