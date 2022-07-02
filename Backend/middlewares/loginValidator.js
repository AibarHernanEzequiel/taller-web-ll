'use strict'

const { check } = require("express-validator");

var validarLogin = [
    check('username').notEmpty().withMessage("Debe completar el campo username"),  
    check('password').notEmpty().withMessage("Debe completar el campo password"), 
]

//end controller

module.exports = validarLogin;