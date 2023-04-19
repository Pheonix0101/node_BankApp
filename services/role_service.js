const { fileNanme, logger } = require('../log4');
const roleDb = require("../database/role_db");
const Role = require("../models/role");

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

exports.getRoles = async (data) => {
  try {
    logger.info(`file: ${fname} getRoles is called`);
    let result = await roleDb.getAllRoles();
    console.log(result);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.getRoleById = async (data) => {
  try {
    logger.info(`file: ${fname} getRoleById is called`);
    let result = await roleDb.getRoleById(data);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.addNewRole = async (data) => {
  try {
    logger.info(`file: ${fname} addNewRole is called`);
    let result = await roleDb.addNewRole(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.deleteRoleById = async (data) => {
  try {
    logger.info(`file: ${fname} deleteRoleById is called`);
    let result = await roleDb.deleteRoleById(data);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.updateRole = async (data) => {
  try {
    logger.info(`file: ${fname} updateRole is called`);
    let result = await roleDb.updateRole(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.roleFilter = async (data) => {
  try {
    logger.info(`file: ${fname} roleFilter is called`);
    let result = await roleDb.roleFilter(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.getRoleNameById = async (data) => {
  try {
    logger.info(`file: ${fname} getRoleNameById is called`);
    let result = await roleDb.getRoleNameById(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};
