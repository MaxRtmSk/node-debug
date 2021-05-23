var express = require("express");
var app = express();
var db = require("./db");
var user = require("./controllers/usercontroller");
var game = require("./controllers/gamecontroller");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

db.sync();
app.use(express.json());
app.use("/api/auth", user);
app.use(require("./middleware/validate-session"));
app.use("/api/game", game);
app.listen(PORT, function () {
  console.log(`App is listening on ${PORT}`);
});
