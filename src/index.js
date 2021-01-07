import express from "express";
import { accessControlAllowOrigin } from "../middleware";

const app = express();

app.post("/", accessControlAllowOrigin, function (req, res) {
  res.send("hello-world");
});

export default app;
