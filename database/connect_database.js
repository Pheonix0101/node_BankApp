const Sequelize = require("sequelize");

const sequelize = new Sequelize("bankapp", "root", "root", {
  dialect: "mysql",
  host: "10.210.10.51",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully with database");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
