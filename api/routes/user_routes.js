var express = require('express');
var router = express.Router();
const fs = require('fs');

const routesInfo = JSON.parse(
  fs.readFileSync('routes.json').toString()
);

const {
  getUsers,
  getUserById,
  addNewUser,
  deleteUserById,
  updateUser,
  userFilter,
  getUserNameById,
  getUsersByBranchId,
  getAllUserRoles
} = require('../controllers/user_controller');

router.get(routesInfo.GetUsers, getUsers);
router.post(routesInfo.GetUserById, getUserById);
router.post(routesInfo.AddNewUser, addNewUser);
router.delete(routesInfo.DeleteUserById, deleteUserById);
/* Put method can also be used here */
router.patch(routesInfo.UpdateUser, updateUser); 
router.post(routesInfo.UserFilter, userFilter);
router.post(routesInfo.GetUserNameById, getUserNameById);
router.post(routesInfo.GetUsersByBranchId, getUsersByBranchId);
router.get(routesInfo.GetAllUserRoles, getAllUserRoles);

module.exports = router;