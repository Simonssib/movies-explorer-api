const express = require('express');

const userRoutes = express.Router();
const {
  getUser,
  updateUserInformation,
} = require('../controllers/users');
const { validateUpdateUser } = require('../middlewares/validator');

userRoutes.get('/me', getUser);
userRoutes.patch('/me', validateUpdateUser, updateUserInformation);

module.exports = userRoutes;
