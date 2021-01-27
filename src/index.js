const express = require("express");
const accessControlAllowOrigin = require("./middleware")
  .accessControlAllowOrigin;
const generatePDF = require("./middleware").generatePDF;

const app = express();
app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", generatePDF);

app.get("/hello", (req, res) => {
  console.log("waking up server");
  res.send({msg: "hello from server!"});
});

exports.app = app;
