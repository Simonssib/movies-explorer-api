const express = require('express');

const userRoutes = express.Router();
const {
  getUser,
  updateUserInformation,
} = require('../controllers/users');

userRoutes.get('/me', getUser);
userRoutes.patch('/me', updateUserInformation);

module.exports = userRoutes;
