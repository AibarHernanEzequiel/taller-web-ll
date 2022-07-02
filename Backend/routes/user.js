'use strict'

var express = require('express');

var userController = require('../controllers/user');

var router = express.Router();

//middlewares

var registerValidator = require('../middlewares/registerValidator');
var loginValidator = require('../middlewares/loginValidator');
var confirmValidator = require('../middlewares/confirmValidator');


//rutas

router.post('/register-user', registerValidator , userController.registerUser);
router.post('/confirm-user' , confirmValidator, userController.confirmarRegistro);
router.post('/resend-code', userController.resendCodeConfirmation);
router.post('/login', loginValidator ,userController.login);
module.exports= router;