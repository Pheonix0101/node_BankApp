const customerDb = require("../database/customer_db");

module.exports.addCustomer = async (customerData) => {
  try {
    let result = await customerDb.customer_create(customerData);
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

module.exports.updateCustomer = async (customerData) => {
  try {
    let result = await customerDb.update_Customer(customerData);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/updateCustomer: ${error}`);
  }
};

module.exports.deleteCustomer = async (customerData) => {
  try {
    let result = await customerDb.delete_Customer(customerData);
    return result;
  } catch (error) {
    console.log(`Got Some errors from service/deleteCustomer: ${error}`);
  }
};

module.exports.getDocumentCustomerInfoByEmailId = async (customer_emailId) => {
  try {
    const result = await customerDb.documetCustomerInfoWithCustomer(
      customer_emailId
    );
    return result;
  } catch (error) {
    console.log(
      `Got Some errors from services/getDocumentCustomerInfoByEmaiId: ${error}`
    );
  }
};
