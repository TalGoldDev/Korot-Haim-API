import express from "express";
import { accessControlAllowOrigin, generatePDF } from "./middleware";

const app = express();
app.use(accessControlAllowOrigin);
app.use(express.json());

app.get("/", generatePDF);

export default app;
