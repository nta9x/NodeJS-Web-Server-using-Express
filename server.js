// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});
app.get("/todos", (request, response) => {
  response.send(
    "<h2> todos list</h2> <br> <ul><li>Di cho</li><li>Nau com</li><li>Rua bat</li><li>Hoc CodersX</li></ul> "
  );
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
