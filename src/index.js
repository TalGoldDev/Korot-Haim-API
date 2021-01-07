import express from "express";
import { accessControlAllowOrigin } from "../middleware";

const app = express();
app.use(accessControlAllowOrigin);

app.post("/", function (req, res) {
  res.send("hello-world");
});

export default app;
