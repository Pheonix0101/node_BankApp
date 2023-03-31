const express = require("express");

const customer_documentController = require("../controllers/customer_document_controller");

const router = express.Router();

router.post("/add", customer_documentController.addCustomer_document);
router.get("/get", customer_documentController.getCustomer_document);
router.post("/abc", customer_documentController.getCustomerInfo);
router.post("/doc", customer_documentController.getCustomer_DocumentInfo);


module.exports = router;
