const customer_document_service = require("../../services/customer_document_service");
const CustomerDb = require("../../models/customer");
const CustomerdocumentDb = require("../../models/customerDocument");

module.exports.addCustomer_document = async (req, res) => {
  try {
    let result = await customer_document_service.addCustomer_document(req);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record Added",
        StatusSeverity: "Information",
      },
      result,
    });
    // console.log(result);
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
  }
};

module.exports.getCustomer_document = async (req, res) => {
  try {
    let result = await customer_document_service.getCustomerDocument();
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record Added",
        StatusSeverity: "Information",
      },
      result,
    });
    // console.log(result);
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
  }
};

module.exports.getCustomerInfoBydocument_masterId = async (req, res) => {
  try {
   let result = await customer_document_service.getCustomerInfoBydocument_masterId(req);
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


