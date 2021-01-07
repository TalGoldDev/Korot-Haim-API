import express from "express";

const app = express();

app.post("/", function (req, res) {
  res.send("hello-world");
});

export default app;
