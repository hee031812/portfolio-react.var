const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5050;
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Comment } = require("./model/Comment.js");
const { Counter } = require("./model/Counter.js");

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log("listening --> " + port);
      console.log("mongoose --> connecting");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// 글쓰기
app.post("/api/comment", (req, res) => {
  let temp = req.body;

  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.commentNum = counter.commentNum;

      const CommentWrite = new Comment(temp);

      CommentWrite.save().then(() => {
        Counter.updateOne(
          { name: "counter" },
          { $inc: { commentNum: 1 } }
        ).then(() => {
          res.status(200).json({ success: true });
        });
      });
    })
    .catch((err) => {
      console.error("Error in /api/comment: ", err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    });
});

// 댓글 목록
app.get("/api/comments", (req, res) => {
  Comment.find()
    .exec()
    .then((result) => {
      res.status(200).json({ success: true, comments: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});


// 이제 댓글 삭제 기능은 제거되었습니다.

module.exports = app;
