const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/login', userController.loginuser);
router.post('/signup', userController.signupuser);

module.exports = router;