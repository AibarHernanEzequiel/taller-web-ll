'use strict'

var express = require('express');


//exportamos el article controller y el user controller
var ArticleController = require('../controllers/article');


var router = express.Router();

//Rutas de Articulos
router.get('/articles/:last?' , ArticleController.getArticles);
router.get('/article/:id' , ArticleController.getArticle);
router.get('/getAllArticle' , ArticleController.getAllArticles);
router.delete('/delete', ArticleController.delete);
router.post('/save' , ArticleController.save)




module.exports = router;