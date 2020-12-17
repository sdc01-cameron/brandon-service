const mongoose = require('mongoose');
const cassandra = require('cassandra-driver');
const { DATABASE } = require('../../constants.js');

switch (DATABASE) {
  case 'mongodb':

    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    
    let productSchema = mongoose.Schema({
      _id: Number,
      productName: {type: String, required: true},
      images: [String]
    });

    let Product = mongoose.model('Product', productSchema);

    module.exports.Product = Product;

    break;

  case 'cassandra':

    const client = new cassandra.Client({
        localDataCenter: 'datacenter1',
        contactPoints: ['127.0.0.1']
      });

      client.connect((err, res) => {
        console.log('Connected to Cassandra');
    });

    module.exports.db = client;

    break;

  case 'postgres':
    break;
  default:
    break;
}





