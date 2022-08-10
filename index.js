import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import home from "./routes/home.js"

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/home",home)

app.get("/", (req, res) => {
  res.send("hello wold");
});

app.listen(port, () => {
  console.log(`App is running on port ${4000}`);
});
