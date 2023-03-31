const Customer_document = require("../models/customerDocument");
const customerDb = require("../models/customer");
const customerDocumentDb = require("../models/customerDocument");

module.exports.customer_document_create = async (DocumentData) => {
  console.log(DocumentData.body);
  try {
    const {
      document_name,
      document_masterid,
      customer_id,
      document_date,
      document_type,
      document_referenceId,
      document_description,
    } = DocumentData.body;

    let result = await Customer_document.create({
      document_name,
      document_masterid,
      customer_id,
      document_date,
      document_type,
      document_referenceId,
      document_description,
    });
    return result;
  } catch (error) {
    console.log(`Getting Error from util/customer_document_create: ${error}`);
  }
};

module.exports.getCustomer_document = async () => {
  try {
    const docInfo = await Customer_document.findAll({});
    return docInfo;
  } catch (error) {
    console.log(`Getting Error from util/getCustomer_document: ${error}`);
  }
};

module.exports.getCustomerInfoWithdocument_masterid = async (document_masterId) => {
  try {
    customerDb.belongsTo(customerDocumentDb, {
      targetKey: "customer_id",
      foreignKey: "customer_id",
    });

    const result = await customerDb.findAll({
      include: [
        {
          model: customerDocumentDb,
          where: {
            document_masterid: document_masterId.body.document_masterid,
          },
        },
      ],
    });
    return result;
  } catch (error) {
    console.log(
      `Getting Error from database/getCustomerInfoWithdocument_masterid: ${error}`
    );
  }
};

