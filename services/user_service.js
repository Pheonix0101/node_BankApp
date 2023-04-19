const { fileNanme, logger } = require('../log4');
const userDb = require("../database/user_db");
const User = require("../models/user");

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

exports.getUsers = async (data) => {
  try {
    logger.info(`file: ${fname} getUsers is called`);
    let result = await userDb.getAllUsers();
    console.log(result);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.getUserById = async (data) => {
  try {
    logger.info(`file: ${fname} getUserById is called`);
    let result = await userDb.getUserById(data);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.addNewUser = async (data) => {
  try {
    logger.info(`file: ${fname} addNewUser is called`);
    let result = await userDb.addNewUser(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.deleteUserById = async (data) => {
  try {
    logger.info(`file: ${fname} deleteUserById is called`);
    let result = await userDb.deleteUserById(data);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.updateUser = async (data) => {
  try {
    logger.info(`file: ${fname} updateUser is called`);
    let result = await userDb.updateUser(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.userFilter = async (data) => {
  try {
    logger.info(`file: ${fname} userFilter is called`);
    let result = await userDb.userFilter(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.getUserNameById = async (data) => {
  try {
    logger.info(`file: ${fname} getUserNameById is called`);
    let result = await userDb.getUserNameById(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.getUsersByBranchId = async (data) => {
  try {
    logger.info(`file: ${fname} getUsersByBranchId is called`);
    let result = await userDb.getUsersByBranchId(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.getAllUserRoles = async (data) => {
  try {
    logger.info(`file: ${fname} getAllUserRoles is called`);
    let result = await userDb.getAllUserRoles();
    console.log(result);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};