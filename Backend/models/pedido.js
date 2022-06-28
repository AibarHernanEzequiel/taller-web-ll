"use strict";
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PedidoSchema = Schema({
  totalAPagar: Number,
  productos: {},
});

module.exports = mongoose.model("Pedido", PedidoSchema);
