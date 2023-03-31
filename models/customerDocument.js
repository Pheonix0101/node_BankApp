const Sequelize = require("sequelize");
const sequelize = require("../database/connect_database");

const Customer_document = sequelize.define("customer_document", {
  document_id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  document_name: {
    type: Sequelize.STRING,
  },
  document_masterid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  customer_id: {
    type: Sequelize.INTEGER,
    unique: true,
    // autoIncrement: true,
    allowNull: false,
  },
  document_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  document_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  document_referenceId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  document_description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Customer_document;
