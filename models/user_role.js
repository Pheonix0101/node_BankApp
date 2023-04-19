const Sequelize = require('sequelize');
const sequelize = require('../database/connect_database');

const User_role = sequelize.define('user_role', {
  user_role_id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = User_role;
