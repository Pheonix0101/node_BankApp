const document_master_service = require("../../services/document_master_service");


module.exports.addDocument_master = async (req, res) => {
  try {
    let result = await document_master_service.createMaster_document(req);
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

// ***************** testing code for 3 table join //






// *******************************************///
// here Post, User and Comment are Models of the respective table.

// Post.findAll({
//   include: [
//     {
//       model: User,
//       attributes: ["id", "username", "email"],
//     },
//     {
//       model: Comment,
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username", "email"],
//         },
//       ],
//     },
//   ],
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
