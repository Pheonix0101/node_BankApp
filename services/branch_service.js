const branchDb = require("../database/branch_db");
const Branch = require("../models/branch");

module.exports.addBranch = async (branchData) => {
  try {
    let result = await branchDb.create_branch(branchData);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/addCustomer_document: ${error}`);
  }
};

module.exports.getBranch = async () => {
  try {
    let result = await branchDb.getBranch();
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/getBranch: ${error}`);
  }
};


module.exports.Update_branch = async(BranchData)=>{
  try {
    let result = await branchDb.update_branch(BranchData);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/Update_branch: ${error}`);
    
  }
}