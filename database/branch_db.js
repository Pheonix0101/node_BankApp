const branch = require("../models/branch");

module.exports.create_branch = async (branchData) => {
  try {
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
  }
};

module.exports.getBranch = async () => {
  try {
    const result = await branch.findAll();
    return result;
  } catch (error) {
    console.log(`Getting Error from database/getBranch: ${error}`);
  }
};

module.exports.update_branch = async (BranchData) => {
  try {
    const Updatedbranch_id = BranchData.body.branch_id;
    const Updatedbranch_name = BranchData.body.branch_name;
    const Updatedifsc_code = BranchData.body.ifsc_code;
    const Updatedaddress = BranchData.body.address;
    const Updatedcity = BranchData.body.city;
    const Updatedstate = BranchData.body.state;
    const Updatedcountry = BranchData.body.country;
    const Updatedzipcode = BranchData.body.zipcode;

    const result = await findByPk(Updatedbranch_id).then((res) => {
      res.branch_id = Updatedbranch_id;
      res.branch_name = Updatedbranch_name;
      res.ifsc_code = Updatedifsc_code;
      res.address = Updatedaddress;
      res.city = Updatedcity;
      res.state = Updatedstate;
      res.country = Updatedcountry;
      res.zipcode = Updatedzipcode;
      return res.save();
    });
  } catch (error) {
    console.log(`Getting Error from database/update_branch: ${error}`);
  }
};
