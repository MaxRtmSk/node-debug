const Sequelize = require("sequelize");
//database username   password
const sequelize = new Sequelize("gamedb", "postgres", "512345", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  function success() {
    console.log("Connected to DB");
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);