const express = require("express");

const branch_controller = require('../controllers/branch_controller');

const router = express.Router();

router.post('/add', branch_controller.addBranch);
router.get("/get", branch_controller.getBranch);



module.exports = router;