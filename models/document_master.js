const Sequelize = require("sequelize");
const sequelize = require("../database/connect_database");

const Document_master = sequelize.define("document_master", {
  document_masterId: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  document_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  document_template: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Document_master;
