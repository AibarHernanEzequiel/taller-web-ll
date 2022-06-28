"use strict";
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PedidoSchema = Schema({
  idPedido: String,
  totalAPagar: Number,
  productos: {},
  fecha: String
});

module.exports = mongoose.model("Pedido", PedidoSchema);
