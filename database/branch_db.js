const { fileNanme, logger } = require('../log4');
const branch = require('../models/branch');
const sequelize = require('../database/connect_database');
const { Op } = require('sequelize');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

module.exports.addNewBranch = async (branchData) => {
  try {
    logger.info(`file: ${fname} addNewBranch is called`);

    const {
      branch_id,
      branch_name,
      ifsc_code,
      address,
      city,
      state,
      country,
      zipcode,
    } = branchData.body;

    let result = await branch.create({
      branch_id,
      branch_name,
      ifsc_code,
      address,
      city,
      state,
      country,
      zipcode,
    });
    return result;
  } catch (error) {
    console.log(
      `There is an Error from function database/create_branch: ${error}`
    );
    logger.fatal(`file: ${fname},error: ${error}`);
  }
};

module.exports.getBranchesRepo = async () => {
  try {
    logger.info(`file: ${fname} getBranchesRepo is called`);
    const result = await branch.findAll();
    return result;
  } catch (err) {
    console.log(err, 'err from getBranchesRepo');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.getBranchById = async (data) => {
  try {
    let branchId = data.body.branch_id;

    logger.info(`file: ${fname} getBranchById is called`);
    const result = await branch.findByPk(branchId);
    if (result) {
      return result;
    }
  } catch (err) {
    console.log('error from getBranchById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

module.exports.deleteBranchById = async (data) => {
  try {
    let branchId = data.body.branch_id;

    logger.info(`file: ${fname} deleteBranchById is called`);
    /*const result = await branch.findByPk(branchId).then((branch) => {
      branch.destroy();
    });*/

    const result = await branch.findByPk(branchId);
    if (result) {
      result.destroy();
      return result;
    }
  } catch (err) {
    console.log('error from deleteBranchById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    
  }
};

module.exports.updateBranch = async (data) => {
  try {
    let branchId = data.body.branch_id;
    let branchName = data.body.branch_name;
    let ifscCode = data.body.ifsc_code;
    let address = data.body.address;
    let city = data.body.city;
    let state = data.body.state;
    let country = data.body.country;
    let zipCode = data.body.zipcode;

    logger.info(`file: ${fname} updateBranch is called`);

    const result = await branch.update(
      {
        branch_name: branchName,
        ifsc_code: ifscCode,
        address: address,
        city: city,
        state: state,
        country: country,
        zipcode: zipCode,
      },
      {
        where: {
          branch_id: branchId,
        },
      }
    );
    return result;
  } catch (err) {
    console.log(err, 'err from updateBranch');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};

/*const result = await branch.findByPk(branchId).then((branch) => {
      if (branchName) {
        branch.branch_name = branchName;
      }

      if (ifscCode) {
        branch.ifsc_code = ifscCode;
      }
      if (address) {
        branch.address = address;
      }

      if (city) {
        branch.city = city;
      }
      if (state) {
        branch.state = state;
      }

      if (country) {
        branch.country = country;
      }

      if (zipCode) {
        branch.zipcode = zipCode;
      }
           
    });
    result.save(); 
    return result;
  } catch (err) {
    console.log(err, 'err from updateBranch');
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
  }
};*/

module.exports.branchFilter = async (data) => {
  try {
    let branchName = data.body.branch_name || "";
    let ifscCode = data.body.ifsc_code || "";
    let address = data.body.address || "";
    let city = data.body.city || "";
    let state = data.body.state || "";
    let country = data.body.country || "";
    let zipCode = data.body.zipcode || 0;

    const result = await branch.findAll({
      where: {
        branch_name: {
          [Op.like]: `%${branchName}%`,
        },
        ifsc_code: {
          [Op.like]: `%${ifscCode}%`,
        },
        address: {
          [Op.like]: `%${address}%`,
        },
        city: {
          [Op.like]: `%${city}%`,
        },
        state: {
          [Op.like]: `%${state}%`,
        },
        country: {
          [Op.like]: `%${country}%`,
        },
        zipcode: {
          [Op.like]: `%${zipCode}%`,
        },
        branch_id: {
          [Op.ne]: 0,
        },
      },
    });
    return result;
  } catch (err) {
    console.log(err, 'error from branchFilter');
    logger.fatal(`file: '${fname}',error: ${err}`);
  } finally {
    
  }
};

module.exports.getBranchNameById = async (data) => {
  try {
    let branchId = data.body.branch_id;

    logger.info(`file: ${fname} getBranchNameById is called`);
    const result = await branch.findByPk(branchId);
    if (result) {
      return result.branch_name;
    }
  } catch (err) {
    console.log('error from getBranchNameById', err);
    logger.fatal(`file: ${fname},error: ${err}`);
  } finally {
    
  }
};