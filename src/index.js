const express = require("express");
const accessControlAllowOrigin = require("./middleware")
  .accessControlAllowOrigin;
const generatePDF = require("./middleware").generatePDF;

const app = express();
app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", generatePDF);

app.get("/hello", (req, res) => {
  console.log("hello world");
});

exports.app = app;
