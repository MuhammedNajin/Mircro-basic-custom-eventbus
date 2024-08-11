import express from "express";
const app = express();
import { randomBytes } from "crypto";
import cors from "cors";
import axios from 'axios';
const corsOptions = {
    origin:"*",
}

app.use(cors(corsOptions));
app.use(express.json());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async(req, res) => {
  console.log("hi");
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: {
      id: commentId,
      content,
      postId: req.params.id
    }
  })
  res.status(201).send(comments);
});

app.post('/events',(req,res)=> {
  console.log('reciving event', req.body.type);
  res.send({})
})


app.listen(4001, () => {
  console.log(`running on 4001`);
});
