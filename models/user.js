const Sequelize = require("sequelize");
const sequelize = require("../database/connect_database");

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    unique: true,
  },
  branch_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = User;
