const { fileNanme, logger } = require('../log4');
const branch = require('../models/branch');
const sequelize = require('../database/connect_database');

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
    //dbConnection.release();
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
};

exports.branchFilter = async (data) => {
  dbConnection = await DB.ConnectToDb();
  try {
    let filterobj = data.body;
    let request = {};
    let queryString = ` select * from branch where `;
    let string = '';

    for (let key in filterobj) {
      if (filterobj != '' || 0) {
        console.log(key, 'key');
        request[key] = filterobj[key];
      }
    }

    let count = 0;
    for (const key in request) {
      let keyValue = request[key];

      if (key == 'branch_name' && keyValue.length > 0) {        
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else if (key == 'address' && keyValue.length > 0) {
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else if (key == 'city' && keyValue.length > 0) {
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else if (key == 'state' && keyValue.length > 0) {
        string = key + ' like ' + `'%${keyValue}%'`;
        count++;
      } else {       
        //if no filter is applied, fetch all branches
        string = 'branch_id' != 0;
        count++;
      }
      if (Object.keys(request).length != count) {
        queryString = queryString + string + ' AND ';
      } else {
        queryString = queryString + string + '  ';
      }
    }

    console.log('query is : \n ', queryString);
    let result = await DB.ExecuteQuery(dbConnection, queryString);
    return result;
  } catch (err) {
    console.log(err, 'error from branchFilter');
    logger.fatal(`file: '${fname}',error: ${err}`);
  } finally {
    //dbConnection.release();
  }
}; */

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
    //dbConnection.release();
  }
};
