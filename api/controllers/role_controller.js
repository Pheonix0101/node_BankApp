const { fileNanme, logger } = require('../../log4.js');
const RoleServices = require('../../services/role_service.js');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

const getRoles = async (req, res) => {
  try {
    logger.info(`file: ${fname} getRoles is called`);
    let result = await RoleServices.getRoles(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Records found',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const getRoleById = async (req, res) => {
  try {
    logger.info(`file: ${fname} getRoleById is called`);
    let result = await RoleServices.getRoleById(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Records found',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const addNewRole = async (req, res) => {
  try {
    logger.info(`file: ${fname} addNewRole is called`);
    let result = await RoleServices.addNewRole(req);

    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Record Added',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const deleteRoleById = async (req, res) => {
  try {
    logger.info(`file: ${fname} deleteRoleById is called`);
    let result = await RoleServices.deleteRoleById(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Record deleted',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const updateRole = async (req, res) => {
  try {
    logger.info(`file: ${fname} updateRole is called`);
    let result = await RoleServices.updateRole(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Record updated',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

const roleFilter = async (req, res) => {
  try {
    logger.info(`file: ${fname} roleFilter is called`);
    let result = await RoleServices.roleFilter(req);
    if (result != undefined) {
      res.send({
        Status: {
          StatusCode: 200,
          StatusType: 'Success',
          StatusMessage: 'Records found ',
          StatusSeverity: 'Information',
        },
        result,
      });
    } else {
      err = 'no result from role repo';
      throw err;
    }
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res.status(500).json({
      status: { statuscode: 500, statusType: 'failure', error: `${err}` },
    });
  }
};

const getRoleNameById = async (req, res) => {
  try {
    logger.info(`file: ${fname} getRoleNameById is called`);
    let result = await RoleServices.getRoleNameById(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: 'Success',
        StatusMessage: 'Records found',
        StatusSeverity: 'Information',
      },
      result,
    });
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res
      .status(500)
      .json({ status: { statuscode: 500, statusType: 'failure', error: err } });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  addNewRole,
  deleteRoleById,
  updateRole,
  roleFilter,
  getRoleNameById,
};
