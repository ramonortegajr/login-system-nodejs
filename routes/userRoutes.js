const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/login', userController.loginuser);

module.exports = router;