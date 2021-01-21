import express from "express";
import { accessControlAllowOrigin, generatePDF } from "./middleware";

const app = express();
app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", generatePDF);

app.post("/", (req, res) => {
  res.send();
});

export default app;
