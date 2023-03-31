const express = require("express");

const customer_documentController = require("../controllers/customer_document_controller");

const router = express.Router();

router.post("/add", customer_documentController.addCustomer_document);
router.get("/get", customer_documentController.getCustomer_document);
router.post("/masterId", customer_documentController.getCustomerInfoBydocument_masterId);



module.exports = router;
