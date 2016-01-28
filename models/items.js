"use strict";

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String},
  photo: {type: String}
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
