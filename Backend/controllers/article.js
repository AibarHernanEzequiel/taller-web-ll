'use strict'

var validator = require('validator');

var ArticleModel = require('../models/article');

const { param } = require("../routes/article");

var controller = {

    datosCurso : (req , res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: "Master en frameworks",
            autor: "Carli Galeano",
            web : "Carli.galeano.com",
            hola
        });
    },

    test : (req, res) => {

        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },
    save : (req, res) => {

        // Recoger parametros por post 

        var params = req.body;
        console.log(params);


        // Validar datos
        //Faltaria validar que los datos sean los correctos
        try {
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_precio = !validator.isEmpty(params.precio);
            
        } catch (error) {
            return res.status(200).send({
                status: 'Error',
                message: 'Faltan datos por enviar'
             });
        }

        if(validate_nombre && validate_precio){
            // Crear el objeto A GUARDAR
            var article = new ArticleModel();

            //Asignar valores
            article.nombre = params.nombre;
            article.precio = params.precio;
            article.image = null;

            // Guardar el articulo

            article.save((err , articleStored) =>{
                    if(err || !articleStored){
                        return res.status(404).send({
                            status: 'Error',
                            message: 'El articulo no se ha guardado!'
                         });
                    }else{
                        return res.status(200).send({
                            status: 'Success',
                            article: article
                         });

                    }
                   
                
            });     

        }else{
            return res.status(200).send({
                status: 'Error',
                message: 'Los datos no son válidos'
             });

        }

        
    },

    getArticles : (req , res) =>{

        //EL sort (-id) le dice que me los devuelva de forma ordenados descendente. El menos hace referencia
        //a descendente
        var query = ArticleModel.find({});

        var last = req.params.last;

            if(last || last != undefined){
                query.limit(6);

            }
        query.sort('id').exec((err, articles) =>{

            
            
            if(err){
                return res.status(500).send({
                    status: 'Error',
                    message: 'Error al devolver articulos'
                 });

            }
            if(!articles){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No hay articulos para mostrar.'
                 });
            }
            
            return res.status(200).send({

                articles
             });


        });
       
    },

    getAllArticles : (req , res) =>{

        //EL sort (-id) le dice que me los devuelva de forma ordenados descendente. El menos hace referencia
        //a descendente
        var query = ArticleModel.find({});


        query.sort('id').exec((err, articles) =>{

            
            
            if(err){
                return res.status(500).send({
                    status: 'Error',
                    message: 'Error al devolver articulos'
                 });

            }
            if(!articles){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No hay articulos para mostrar.'
                 });
            }
            
            return res.status(200).send({

                articles
             });


        });
       
    },

    getArticle : (req , res) =>{

        //Recoger el id de la url

        var article_id = req.params.id;


        //Comprobar que existe


        if(!article_id || article_id == null){
            return res.status(404).send({
                status: 'Error',
                message: 'El articulo no existe'
             });
        }
        //Buscar el articulo y devolver una respuesta

        ArticleModel.findById(article_id, (err, article) =>{
            if(err || !article){
                return res.status(500).send({
                    status: 'Error',
                    message: 'El articulo no existe'
                 });
            }
            

            return res.status(200).send({
                status: 'Success',
                article: article
             });
        });
    },
    delete : (req , res) =>{
        return res.status(200).send({
            status: 'Success',
            message: 'Delete funciona'
         });
    }


};
//end controller

module.exports = controller;