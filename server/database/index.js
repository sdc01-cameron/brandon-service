const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

let productSchema = mongoose.Schema({
  _id: Number,
  productName: {type: String, required: true},
  images: [String]
});

let Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;

// 1. Build CRUD Routes
// 2. Test with Postman
// 3. Build data gen script, write to csv file using write stream
// 4. Install & set up cassandra/postgresql