const app = require("./src/index.js").app;

const port = process.env.PORT || 80;
const server = app.listen(port);

console.log("App is listening on port: " + port);
