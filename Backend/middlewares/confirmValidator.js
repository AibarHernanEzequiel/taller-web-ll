'use strict'

const { check } = require("express-validator");

var validarConfirm  = [
    check('username').notEmpty().withMessage("Debe completar el campo username"),  
    check('codigo').notEmpty().withMessage("Debe completar el campo codigo"), 
]

module.exports = validarConfirm;