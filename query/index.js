import express from 'express';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    const post = posts[postId];
    if (post) {
      post.comments.push({ id, content });
    }
  }

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log('Running on port 4002');
});
