const Customer = require("../models/customer");

module.exports.customer_create = async (data) => {
  //   console.log(req.body);
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
    } = data.body;

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
    const CustomerInfo = await Customer.findAll({});
    return CustomerInfo;
  } catch (error) {
    console.log(`Getting Error from util/get_Customer: ${error}`);
  }
};

module.exports.update_Customer = async (data) => {
  try {
    const updatedcustomer_id = data.body.customer_id;
    const updatedname = data.body.name;
    const updatedphoneNumber = data.body.phoneNumber;
    const updatedemailId = data.body.emailId;
    const updateddateOfbirth = data.body.dateOfbirth;
    const updatedaddress1 = data.body.address1;
    const updatedaddress2 = data.body.address2;
    const updatedcity = data.body.city;
    const updatedstate = data.body.state;
    const updatedcountry = data.body.country;
    const updatedzipcode = data.body.zipcode;
    const updatedmartialStatus = data.body.martialStatus;

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

module.exports.delete_Customer = async (data) => {
  try {
    const customerId = data.body.customer_id;
    const result = await Customer.findByPk(customerId)
    .then((customerData) => {
      customerData.destroy();
    });
    return result;
  } catch (error) {
    console.log(`Getting Error from util/delete_Customer: ${error}`);
  }
};


