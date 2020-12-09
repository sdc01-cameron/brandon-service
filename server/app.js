const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const database = require('./database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/api/product', (req, res) => {

  const product = req.body;
  console.log(product);

  database.Product.create(product, (err, product) => {

    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(201).json(product);
    }

  });

});

app.put('/api/product/:id', (req, res) => {

  const { id } = req.params;
  const product = req.body;

  database.Product.update({ _id: id }, product, (err) => {

    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }

  });

});

app.delete('/api/product/:id', (req, res) => {

  const { id } = req.params;

  database.Product.deleteOne({ _id: id }, err => {

    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200)
    }
  })

});

app.get('/api/product/:id', (req, res) => {
  var item = req.params.id
  database.Product.find({_id: item}, (err, products) => {
    if (err) {
      console.log('Could not retrieve products')
    } else {
      res.send(products);
    }
  })
});

module.exports = app;