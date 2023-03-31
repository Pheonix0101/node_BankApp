const Customer_document = require("../models/customerDocument");
const Customer = require('../models/customer');

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


