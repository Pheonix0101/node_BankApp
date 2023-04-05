const express = require('express');

const document_master_controller = require("../controllers/document_master_controller");

const router = express.Router();

router.post('/add',document_master_controller.addDocument_master);

module.exports = router;
