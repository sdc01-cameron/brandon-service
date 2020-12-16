const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const { db } = require('./database/index.js');
require('newrelic');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/api/products', (req, res) => {

  const { productName, image } = req.body;
  const id = uuidv4();

  const query = `INSERT INTO SDC.products (id, productname, image) VALUES (?, ?, ?);`;
  db.execute(query, [id, productName, image])
    .then(data => {

      res.status(201).json({ id });

    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });

});

app.put('/api/products/:id', (req, res) => {

  const { id } = req.params;
  const { productName, image } = req.body;

  const query = `UPDATE SDC.products SET productName = ?, image = ? WHERE id = ?;`;

  db.execute(query, [productName, image, id])
    .then(data => {
      res.status(200).json({ id });
    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });

});

app.delete('/api/products/:id', (req, res) => {

  const { id } = req.params;

  const query = `DELETE FROM SDC.products WHERE id = ?;`;

  db.execute(query, [id])
    .then(data => {
      res.status(200).json({ id });
    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });

});

app.get('/api/products/:id', (req, res) => {

  const { id } = req.params;
  const query = `SELECT * FROM SDC.products WHERE id = ?;`

  db.execute(query, [id])
    .then(({ rows }) => {

      res.status(200).json(rows);

    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });

});

app.get('/api/products', (req, res) => {

  const query = `SELECT * FROM SDC.products;`;

  db.execute(query)
    .then(({ rows }) => {

      res.status(200).json(rows);

    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });

});

module.exports.app = app;