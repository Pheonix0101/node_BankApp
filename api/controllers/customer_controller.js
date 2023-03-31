const CustomerService = require("../../services/customerService");

module.exports.addCustomer = async (req, res) => {
  try {
    let result = await CustomerService.addCustomer(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record Added",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
  }
};

module.exports.getCustomers = async (req, res) => {
  try {
    let result = await CustomerService.getCustomer();
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record fetched",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
  }
};

module.exports.updateCustomer = async (req, res) => {
  try {
    let result = await CustomerService.updateCustomer(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record Upadted",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
  }
};

module.exports.deleteCustomer = async (req, res) => {
  try {
    let result = await CustomerService.deleteCustomer(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record deleted",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
  }
};
