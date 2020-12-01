const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FEC');

let productSchema = mongoose.Schema({
  _id: Number,
  productName: {type: String, required: true},
  images: [String]

});

let Product = mongoose.model('Product', productSchema);

module.exports.Product = Product