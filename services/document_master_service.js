const document_master = require("../database/document_master_db");

module.exports.createMaster_document = async (document_masterData) => {
  try {
    let result = await document_master.document_master_create(
      document_masterData
    );
    return result;
  } catch (error) {
    console.log(
      `Got Some errors from function service/createMaster_document: ${error}`
    );
  }
};
