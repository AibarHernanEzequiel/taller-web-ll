'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

//Para desactivar metodos que estan deprecados
/* mongoose.set('useFindAndModify', false); */

//Para trabajar con promesas con mongodb y manejar los errores.
mongoose.Promise = global.Promise;

//Se conecta a la base de datos uri / nombre de bdd que creamos

mongoose.connect('mongodb://localhost:27017/taller-web', { useNewUrlParser : true})
        .then(() =>{
            console.log('La conexion a la base de datos se ha realizado correctamente!')
            //Creamos el servidor y escuchamos peticiones http

            app.listen(port, ()=>{
                console.log("Servidor corriendo en http://localhost:" + port )
            });

});