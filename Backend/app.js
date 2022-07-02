'use strict'
 
// Cargar modulos de node para ejecutar el servidor
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');



// Ejecutar express (http) 
var app = express();

// Cargar ficheros rutas

var article_routes = require('./routes/article');
var user_routes = require('./routes/user');
// Middlewares
app.use(bodyParser.urlencoded({extended : false}));


// convierte cualquier petición en un objeto json que sea mas simple de leer

app.use(bodyParser.json());

//soluciona error cors
app.use(cors())


// CORS



// Añadir prefijos a las rutas / Cargar rutas

app.use('/api', article_routes);
app.use('/api', user_routes);






// Exportar modulo (fichero actual)
module.exports = app;