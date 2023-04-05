const document_master = require("../models/document_master");

module.exports.document_master_create = async (document_masterData) => {
  try {
    const {
      document_masterId,

      document_type,

      document_template,
    } = document_masterData.body;

    let result = await document_master.create({
      document_masterId,

      document_type,

      document_template,
    });
    return result;
  } catch (error) {
    console.log(
      `There is an Error from function database/document_master_create: ${error}`
    );
  }
};
