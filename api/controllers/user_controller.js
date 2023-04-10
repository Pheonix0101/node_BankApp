const { fileNanme, logger } = require('../../log4.js');
const UserServices = require('../../services/user_service');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

const getUsers = async (req, res) => {
  try {
    logger.info(`file: ${fname} getUsers is called`);
    let result = await UserServices.getUsers(req);
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

const getUserById = async (req, res) => {
  try {
    logger.info(`file: ${fname} getUserById is called`);
    let result = await UserServices.getUserById(req);
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

const addNewUser = async (req, res) => {
  try {
    logger.info(`file: ${fname} addNewUser is called`);
    let result = await UserServices.addNewUser(req);

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

const deleteUserById = async (req, res) => {
  try {
    logger.info(`file: ${fname} deleteUserById is called`);
    let result = await UserServices.deleteUserById(req);
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

const updateUser = async (req, res) => {
  try {
    logger.info(`file: ${fname} updateUser is called`);
    let result = await UserServices.updateUser(req);
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

const userFilter = async (req, res) => {
  try {
    logger.info(`file: ${fname} userFilter is called`);
    let result = await UserServices.userFilter(req);
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
      err = 'no result from user repo';
      throw err;
    }
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    res.status(500).json({
      status: { statuscode: 500, statusType: 'failure', error: `${err}` },
    });
  }
};

const getUserNameById = async (req, res) => {
  try {
    logger.info(`file: ${fname} getUserNameById is called`);
    let result = await UserServices.getUserNameById(req);
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

const getUsersByBranchId = async (req, res) => {
  try {
    logger.info(`file: ${fname} getUsersByBranchId is called`);
    let result = await UserServices.getUsersByBranchId(req);
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
  getUsers,
  getUserById,
  addNewUser,
  deleteUserById,
  updateUser,
  userFilter,
  getUserNameById,
  getUsersByBranchId
};
