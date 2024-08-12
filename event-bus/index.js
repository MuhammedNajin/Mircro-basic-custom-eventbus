import express from "express";
const app = express();
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

const events = [];

app.post('/events', async (req, res) => {
  const event = req.body;
  events.push(event);

  const services = [
    'http://localhost:4000/events',
    'http://localhost:4001/events',
    'http://localhost:4002/events',
    'http://localhost:4003/events'
  ];

  const promises = services.map(url => axios.post(url, event).catch(err => {
    console.error(`Error posting to ${url}:`, err.message);
  }));

  await Promise.all(promises);

  res.send({ status: "ok" });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log(`Running on 4005`);
});
