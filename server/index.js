const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5050;

// MongoDB 연결
mongoose.connect('mongodb+srv://hee031812:hee0318121@cluster0.xcpvxup.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// 스키마 및 모델 정의
const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Comment = mongoose.model('Comment', commentSchema);

// 미들웨어
app.use(cors());
app.use(express.json()); // JSON 요청 본문 처리

// 댓글 목록 가져오기
app.get('/api/reple/list', (req, res) => {
    Comment.find().sort({ createdAt: -1 })
        .then(comments => res.json({ success: true, reples: comments }))
        .catch(err => res.status(400).json({ success: false, error: err }));
});

// 댓글 추가
app.post('/api/reple/submit', (req, res) => {
    const newComment = new Comment(req.body);
    newComment.save()
        .then(comment => res.json({ success: true, comment }))
        .catch(err => res.status(400).json({ success: false, error: err }));
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

