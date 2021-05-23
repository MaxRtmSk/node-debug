const express = require("express");
const db = require("./db");
const usercontroller = require("./controllers/usercontroller");
const gamecontroller = require("./controllers/gamecontroller");
const validateSession = require("./middleware/validate-session");

const PORT = process.env.PORT || 4000;

const app = express();

db.sync();
app.use(express.json());
app.use("/api/auth", usercontroller);
app.use("/api/game", validateSession, gamecontroller);
app.listen(PORT, function () {
  console.log(`App is listening on ${PORT}`);
});
