require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(`Error: ${err}`));

module.exports = sequelize;
