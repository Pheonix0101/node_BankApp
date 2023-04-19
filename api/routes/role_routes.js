var express = require('express');
var router = express.Router();
const fs = require('fs');

const routesInfo = JSON.parse(fs.readFileSync('routes.json').toString());

const {
  getRoles,
  getRoleById,
  addNewRole,
  deleteRoleById,
  updateRole,
  roleFilter,
  getRoleNameById,
} = require('../controllers/role_controller');

router.get(routesInfo.GetRoles, getRoles);
router.post(routesInfo.GetRoleById, getRoleById);
router.post(routesInfo.AddNewRole, addNewRole);
router.delete(routesInfo.DeleteRoleById, deleteRoleById);
/* Put method can also be used here */
router.patch(routesInfo.UpdateRole, updateRole);
router.post(routesInfo.RoleFilter, roleFilter);
router.post(routesInfo.GetRoleNameById, getRoleNameById);

module.exports = router;
