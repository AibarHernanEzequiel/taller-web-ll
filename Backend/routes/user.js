'use strict'

var express = require('express');

var userController = require('../controllers/user');

var router = express.Router();

router.post('/register-user' , userController.registerUser);
router.post('/confirm-user' , userController.confirmarRegistro);
router.post('/resend-code', userController.resendCodeConfirmation);
router.post('/login', userController.login);
module.exports= router;