const customer_document_service = require("../../services/customerDocumentService");
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

module.exports.getCustomerInfo = async (req, res) => {
  try {
    CustomerDb.belongsTo(CustomerdocumentDb, {
      targetKey: "customer_id",
      foreignKey: "customer_id",
    });

    const result = await CustomerDb.findAll({
      include: [
        {
          model: CustomerdocumentDb,
          where: {
            document_masterid: req.body.document_masterid,
          },
        },
      ],
    });
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

module.exports.getCustomer_DocumentInfo = async (req, res) => {
  try {
    CustomerdocumentDb.belongsTo(CustomerDb, {
      targetKey: "customer_id",
      foreignKey: "customer_id",
    });
    const result = await CustomerdocumentDb.findAll({
      include: [
        {
          model: CustomerDb,
          where: {
            emailId: req.body.emailId,
          },
        },
      ],
    });
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusMessage: "Record Added",
        StatusSeverity: "Information",
      },
      result,
    });
    console.log(result);
  } catch (error) {
    res.status(500).json({
      status: { statuscode: 500, statusType: "failure", error: error },
    });
    console.log(error);
  }
};
