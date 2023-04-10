const { fileNanme, logger } = require('../log4');
const user = require('../models/user');
const sequelize = require('../database/connect_database');
const { Op } = require('sequelize');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

module.exports.addNewUser = async (userData) => {
  try {
    logger.info(`file: ${fname} addNewUser is called`);

    const { user_id, user_name, email, password, phonenumber, branch_id } =
      userData.body;

    let result = await user.create({
      user_id,
      user_name,
      email,
      password,
      phonenumber,
      branch_id,
    });
    return result;
  } catch (error) {
    console.log(
      `There is an Error from function database/create_user: ${error}`
    );
    logger.fatal(`file: ${fname},error: ${error}`);
  }
};

module.exports.getAllUsers = async () => {
  try {
    logger.info(`file: ${fname} getAllUsers is called`);
    const result = await user.findAll();
    return result;
  } catch (err) {
    console.log(err, 'err from getAllUsers');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.getUserById = async (data) => {
  try {
    let userId = data.body.user_id;

    if (!userId) {
      return;
    }

    logger.info(`file: ${fname} getUserById is called`);
    const result = await user.findByPk(userId);
    if (result) {
      return result;
    }
  } catch (err) {
    console.log('error from getUserById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.deleteUserById = async (data) => {
  try {
    let userId = data.body.user_id;
    if (!userId) {
      return;
    }

    logger.info(`file: ${fname} deleteUserById is called`);
    /*const result = await user.findByPk(userId).then((user) => {
      user.destroy();
    });*/

    const result = await user.findByPk(userId);
    if (result) {
      result.destroy();
      return result;
    }
  } catch (err) {
    console.log('error from deleteUserById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.updateUser = async (data) => {
  try {
    let userId = data.body.user_id;
    let userName = data.body.user_name;
    let email = data.body.email;
    let password = data.body.password;
    let phonenumber = data.body.phonenumber;
    let branchId = data.body.branch_id;

    if (!userId) {
      return;
    }

    logger.info(`file: ${fname} updateUser is called`);

    const result = await user.update(
      {
        user_name: userName,
        email: email,
        password: password,
        phonenumber: phonenumber,        
        branch_id: branchId,
      },
      {
        where: {
          user_id: userId,
        },
      }
    );
    return result;
  } catch (err) {
    console.log(err, 'err from updateUser');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.userFilter = async (data) => {
  try {
    let userId = data.body.user_id || '';
    let userName = data.body.user_name || '';
    let email = data.body.email || '';
    let password = data.body.password || '';
    let phonenumber = data.body.phonenumber || '';
    let branchId = data.body.branch_id || '';
console.log(phonenumber);
    const result = await user.findAll({
      where: {
        user_name: {
          [Op.like]: `%${userName}%`,
        },
        email: {
          [Op.like]: `%${email}%`,
        },
        password: {
          [Op.like]: `%${password}%`,
        },
        phonenumber: {
          [Op.like]: `%${phonenumber}%`,
        },
        branch_id: {
          [Op.like]: `%${branchId}%`,
        },
        user_id: {
          [Op.like]: `%${userId}%`,
        },
      },
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err, 'error from userFilter');
    logger.fatal(`file: '${fname}',error: ${err}`);
  } finally {
  }
};

module.exports.getUserNameById = async (data) => {
  try {
    let userId = data.body.user_id;

    if (!userId) {
      return;
    }

    logger.info(`file: ${fname} getUserNameById is called`);
    const result = await user.findByPk(userId);
    if (result) {
      return result.user_name;
    }
  } catch (err) {
    console.log('error from getUserNameById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.getUsersByBranchId = async (data) => {
  try {
    let branchId = data.body.branch_id;

    if (!branchId) {
      return;
    }

    logger.info(`file: ${fname} getUsersByBranchId is called`);

    /*user.belongsTo(branch,{
        targetKey: 'branch_id',
        foreignKey: 'branch_id',
      });
      const result = await user.findAll({
        include: [
            {
              model: branch,
              where: {
                branch_id: branchId
              },
            },
          ],
      });*/

    const result = await user.findAll({
      where: {
        branch_id: branchId,
      },
    });

    if (result) {
      return result;
    }
  } catch (err) {
    console.log('error from getUsersByBranchId', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};
