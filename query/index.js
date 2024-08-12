import express from "express";
import cors from "cors";
import axios from 'axios'
const app = express();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

const posts = {};

const handlevent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    if (post) {
      post.comments.push({ id, content, status });
    }
  }
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handlevent(type,data)
  res.send({});
});

app.listen(4002, async () => {
  console.log("Running on port 4002");
  try {
    const res = await axios.get('http://localhost:4005/events');
    for (let event of res.data) {
      console.log('processing event:', event.type);
      handlevent(event.type, event.data);
    }
  } catch (error) {
    console.error('Error fetching initial events:', error.message);
  }
});
