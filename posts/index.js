import express from "express";
import { randomBytes } from "crypto";
import cors from "cors";
const app = express();

const corsOptions = {
    origin:"*",
}

app.use(cors(corsOptions));
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log(`running on 4000`);
});
