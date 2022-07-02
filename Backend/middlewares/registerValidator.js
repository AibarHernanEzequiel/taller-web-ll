'use strict'

const { check } = require("express-validator");

var validarRegistro = [
    check('name').notEmpty().withMessage("Debe completar el campo nombre"),  
    check('familyName').notEmpty().withMessage("Debe completar el campo apellido"), 
    check('email').notEmpty().withMessage("Debe completar el campo email"), 
    check('password').notEmpty().withMessage("Debe completar el campo password") 

]

//end controller

module.exports = validarRegistro;