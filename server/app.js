const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const database = require('./database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());

app.get('/api/product/:id', (req, res) => {
  var item = req.params.id
  database.Product.find({_id: item}, (err, products) => {
    if (err) {
      console.log('Could not retrieve products')
    } else {
      res.send(products);
    }
  })
})

module.exports = app;