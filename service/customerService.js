const customerDb = require("../util/customerToDb");

module.exports.addCustomer = async (data) => {
  try {
    let result = await customerDb.customer_create(data);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/addCustomer: ${error}`);
  }
};

module.exports.getCustomer = async () => {
  try {
    let result = await customerDb.get_Customer();
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/getCustomer: ${error}`);
  }
};

module.exports.updateCustomer = async (data) => {
  try {
    let result = await customerDb.update_Customer(data);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/updateCustomer: ${error}`);
  }
};

module.exports.deleteCustomer= async(data)=>{
    try {
        let result = await customerDb.delete_Customer(data)
        return result;
    } catch (error) {
    console.log(`Got Some errors from service/deleteCustomer: ${error}`);
        
    }
}
