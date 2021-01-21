import express from "express";
import { accessControlAllowOrigin, generatePDF } from "./middleware";

const app = express();
app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", generatePDF);

app.get("/hello", (req, res) => {
  console.log("hello world");
});

export default app;
