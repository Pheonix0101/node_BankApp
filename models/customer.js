const Sequelize = require("sequelize");
const sequelize = require("../database/connect_database");

const Customer = sequelize.define("Customer", {
  customer_id: {
    type: Sequelize.INTEGER,
    // type: Sequelize.UUID,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,

    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.DOUBLE,
    unique: true,
    // type: Sequelize.UUID,
    allowNull: false,
  },
  emailId: {
    type: Sequelize.STRING,
    unique: true,
    // type: Sequelize.UUID,
    allowNull: false,
  },
  dateOfbirth: {
    type: Sequelize.DATE,

    allowNull: false,
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address2: {
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
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  martialStatus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //   indexes: [
  //     {
  //       unique: true,
  //       fields: ["customer_id", "phoneNumber", "emailId"],
  //     },
  //   ],
});

module.exports = Customer;
