import express from "express";
const app = express();
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";
const corsOptions = {
    origin:"*",
}

app.use(cors(corsOptions));
app.use(express.json());


app.post('/events', (req,res)=> {
    const event = req.body;
    axios.post('http://localhost:4000/events',event)
    axios.post('http://localhost:4001/events',event)
    axios.post('http://localhost:4002/events',event);
    res.send({status:"ok"})
})

app.listen(4005, () => {
  console.log(`running on 4005`);
});
