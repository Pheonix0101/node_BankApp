const Sequelize = require("sequelize");
const sequelize = require("../database/connect_database");

const Branch = sequelize.define("branch", {
  branch_id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  branch_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  ifsc_code: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipcode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Branch;
