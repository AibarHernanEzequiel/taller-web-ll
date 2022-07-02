"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//agregar stock de articulo y updatear en una llamada cuando compre uno

var ArticleSchema = Schema({
  nombre: String,
  precio: String,
  descripcion: String,
  image: String,
  descuento : String,
});

module.exports = mongoose.model("Article", ArticleSchema);

// mongose model -> guarda documentos de este tipo y con estructura dentro de la coleccion Articles.
