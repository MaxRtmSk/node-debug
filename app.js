const express = require("express");
const app = express();
const db = require("./db");
const user = require("./controllers/usercontroller");
const game = require("./controllers/gamecontroller");
const validateSession = require("./middleware/validate-session");

const PORT = process.env.PORT || 4000;

db.sync();
app.use(express.json());
app.use("/api/auth", user);
app.use("/api/game", validateSession, game);
app.listen(PORT, function () {
  console.log(`App is listening on ${PORT}`);
});
