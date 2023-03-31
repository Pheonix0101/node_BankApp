const express = require("express");

const CustomerController = require("../controllers/customer_controller");

const router = express.Router();

router.post("/add", CustomerController.addCustomer);
router.get("/get", CustomerController.getCustomers);
router.post("/update", CustomerController.updateCustomer);
router.post("/delete", CustomerController.deleteCustomer);

module.exports = router;
