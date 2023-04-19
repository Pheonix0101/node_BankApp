const { fileNanme, logger } = require('../log4');
const role = require('../models/role');
const sequelize = require('./connect_database');
const { Op } = require('sequelize');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

module.exports.addNewRole = async (roleData) => {
  try {
    logger.info(`file: ${fname} addNewRole is called`);

    const { role_id, role_name } = roleData.body;

    let result = await role.create({
      role_id,
      role_name,
    });
    return result;
  } catch (error) {
    console.log(
      `There is an Error from function database/create_role: ${error}`
    );
    logger.fatal(`file: ${fname},error: ${error}`);
  }
};

module.exports.getAllRoles = async () => {
  try {
    logger.info(`file: ${fname} getAllRoles is called`);
    const result = await role.findAll();
    return result;
  } catch (err) {
    console.log(err, 'err from getAllRoles');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.getRoleById = async (data) => {
  try {
    let roleId = data.body.role_id;

    if (!roleId) {
      return;
    }

    logger.info(`file: ${fname} getRoleById is called`);
    const result = await role.findByPk(roleId);
    if (result) {
      return result;
    }
  } catch (err) {
    console.log('error from getRoleById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.deleteRoleById = async (data) => {
  try {
    let roleId = data.body.role_id;
    if (!roleId) {
      return;
    }

    logger.info(`file: ${fname} deleteRoleById is called`);
    /*const result = await role.findByPk(roleId).then((role) => {
      role.destroy();
    });*/

    const result = await role.findByPk(roleId);
    if (result) {
      result.destroy();
      return result;
    }
  } catch (err) {
    console.log('error from deleteRoleById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.updateRole = async (data) => {
  try {
    let roleId = data.body.role_id;
    let roleName = data.body.role_name;

    if (!roleId) {
      return;
    }

    logger.info(`file: ${fname} updateRole is called`);

    const result = await role.update(
      {
        role_name: roleName,
      },
      {
        where: {
          role_id: roleId,
        },
      }
    );
    return result;
  } catch (err) {
    console.log(err, 'err from updateRole');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.roleFilter = async (data) => {
  try {
    let roleId = data.body.role_id || '';
    let roleName = data.body.role_name || '';

    const result = await role.findAll({
      where: {
        role_name: {
          [Op.like]: `%${roleName}%`,
        },
        role_id: {
          [Op.like]: `%${roleId}%`,
        },
      },
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err, 'error from roleFilter');
    logger.fatal(`file: '${fname}',error: ${err}`);
  } finally {
  }
};

module.exports.getRoleNameById = async (data) => {
  try {
    let roleId = data.body.role_id;

    if (!roleId) {
      return;
    }

    logger.info(`file: ${fname} getRoleNameById is called`);
    const result = await role.findByPk(roleId);
    if (result) {
      return result.role_name;
    }
  } catch (err) {
    console.log('error from getRoleNameById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};
