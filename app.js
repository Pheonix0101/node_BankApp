const express = require("express");
const Sequelize = require("sequelize");
var bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

const customerRoutes = require("./API/routes/customer");

const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// app.post("/post", customer.customer_create);
app.use(customerRoutes);
// app.get("/get", customer.customer_details);

// Customer.create({
//   customer_id: 001,
//   name: "Purushottam Kumar",
//   phoneNo: 9664377506,
//   emailId: "purushottam.kumar@jktech.com",
//   Address: "20th cross road, Hsr Layout, Bangalore -560102",
// }).then((res)=>{
//     console.log(res);
//     res.json({data: res})
// }).catch(err=>console.log(`unable to put value into table: ${err}`));

sequelize
  .sync()
  .then((res) => {
    // console.log(res[0]);
    app.listen(port, () => {
      console.log(`BankApp listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

//   const CustomerService = require("../../../service/customerService");

// module.exports.addCustomer = async (req, res) => {
//   try {
//     let result = await CustomerService.addCustomer(req);
//     res.send({
//       Status: {
//         StatusCode: 200,
//         StatusType: "Success",
//         StatusMessage: "Record Added",
//         StatusSeverity: "Information",
//       },
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: { statuscode: 500, statusType: "failure", error: error },
//     });
//   }
// };

// module.exports.getCustomers = async (req, res) => {
//   try {
//     let result = await CustomerService.getCustomer();
//     res.send({
//       Status: {
//         StatusCode: 200,
//         StatusType: "Success",
//         StatusMessage: "Record fetched",
//         StatusSeverity: "Information",
//       },
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: { statuscode: 500, statusType: "failure", error: error },
//     });
//   }
// };

// module.exports.updateCustomer = async (req, res) => {
//   try {
//     let result = await CustomerService.updateCustomer(req);
//     res.send({
//       Status: {
//         StatusCode: 200,
//         StatusType: "Success",
//         StatusMessage: "Record Upadted",
//         StatusSeverity: "Information",
//       },
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: { statuscode: 500, statusType: "failure", error: error },
//     });
//   }
// };

// module.exports.deleteCustomer = async (req, res) => {
//   try {
//     let result = await CustomerService.deleteCustomer(req);
//     res.send({
//       Status: {
//         StatusCode: 200,
//         StatusType: "Success",
//         StatusMessage: "Record deleted",
//         StatusSeverity: "Information",
//       },
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: { statuscode: 500, statusType: "failure", error: error },
//     });
//   }
// };
