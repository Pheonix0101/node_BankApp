const branch_service = require("../../services/branch_service");

module.exports.addBranch = async (req, res) => {
  try {
    let result = await branch_service.addBranch(req);
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

module.exports.getBranch = async (req, res) => {
  try {
    let result = await branch_service.getBranch();
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

