const Customer = require("../models/customer");

module.exports.customer_create = async (customerData) => {
  try {
    const {
      name,
      phoneNumber,
      emailId,
      dateOfbirth,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      martialStatus,
    } = customerData.body;

    let result = await Customer.create({
      name,
      phoneNumber,
      emailId,
      dateOfbirth,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      martialStatus,
    });

    return result;
  } catch (error) {
    console.log(error, "error form util/customer_create function");
  }
};

module.exports.get_Customer = async () => {
  try {
    const CustomerInfo = await Customer.findAll();
    return CustomerInfo;
  } catch (error) {
    console.log(`Getting Error from util/get_Customer: ${error}`);
  }
};

module.exports.update_Customer = async (customerData) => {
  try {
    const updatedcustomer_id = customerData.body.customer_id;
    const updatedname = customerData.body.name;
    const updatedphoneNumber = customerData.body.phoneNumber;
    const updatedemailId = customerData.body.emailId;
    const updateddateOfbirth = customerData.body.dateOfbirth;
    const updatedaddress1 = customerData.body.address1;
    const updatedaddress2 = customerData.body.address2;
    const updatedcity = customerData.body.city;
    const updatedstate = customerData.body.state;
    const updatedcountry = customerData.body.country;
    const updatedzipcode = customerData.body.zipcode;
    const updatedmartialStatus = customerData.body.martialStatus;

    const result = await Customer.findByPk(updatedcustomer_id).then(
      (customer) => {
        customer.customer_id = updatedcustomer_id;
        customer.name = updatedname;
        customer.phoneNumber = updatedphoneNumber;
        customer.emailId = updatedemailId;
        customer.dateOfbirth = updateddateOfbirth;
        customer.address1 = updatedaddress1;
        customer.address2 = updatedaddress2;
        customer.city = updatedcity;
        customer.state = updatedstate;
        customer.country = updatedcountry;
        customer.zipcode = updatedzipcode;
        customer.martialStatus = updatedmartialStatus;
        return customer.save();

        //  return result;
      }
    );
  } catch (error) {
    console.log(`Getting Error from util/update_Customer: ${error}`);
  }
};

module.exports.delete_Customer = async (customerData) => {
  try {
    const customerId = customerData.body.customer_id;
    const result = await Customer.findByPk(customerId).then((customer) => {
      customer.destroy();
    });
    return result;
  } catch (error) {
    console.log(`Getting Error from util/delete_Customer: ${error}`);
  }
};
