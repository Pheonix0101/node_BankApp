const Sequelize = require("sequelize");
const sequelize = require("../database/connect_database");

const Role = sequelize.define("role", {
  role_id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Role;
