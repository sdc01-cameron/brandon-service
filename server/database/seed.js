const path = require('path');
const { DATABASE } = require(path.resolve(__dirname, '../../constants.js'));
const { v4: uuidv4 } = require('uuid');
// const { Product } = require('./index');
// const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');

const originalSeed = () => {

  for (var i = 0; i < 100; i++) {

    var imageArray = []
    var randomLEN = Math.floor(Math.random() * Math.floor(7)) + 1

    for (var j = 0; j < randomLEN; j++) {

      var randomIMG = Math.floor(Math.random() * Math.floor(50))
      imageArray.push(`https://zainfecservice.s3.amazonaws.com/Random+Images/${randomIMG}.jpg`)

    }

    var product = new Product({
      productName: faker.commerce.productName(),
      images: imageArray
    }).save(result => {

      if (i === 100) mongoose.disconnect()

    })
  }

};

switch (DATABASE) {
  case 'cassandra':

    const cassandra = require('cassandra-driver');

    const client = new cassandra.Client({
      localDataCenter: 'datacenter1',
      contactPoints: ['127.0.0.1']
    });

    client.connect((err, res) => {
      console.log('Connected to Cassandra');
    });

    fs.readFile(path.resolve(__dirname, 'data.csv'), 'UTF-8', (err, result) => {

      if (err) console.error(err);
      else {

        const lines = result.split('\n');

        for (let lineNum = 1; lineNum < lines.length; lineNum++) {

          const values = lines[lineNum].split(',');
          const images = values.splice(1, values.length);

          const query = `INSERT INTO SDC.products (id, productName, images) VALUES (?, ?, ?)`;

          client.execute(query, [uuidv4(), faker.commerce.productName(), images])
            .then(data => {

              res.status.json(data);

            }).catch(err => {
              console.error(err);
              res.sendStatus(500);
            });

        }

      }

    });

    break;

  case 'postgresql':
    break;
  case 'mongodb':
    break;
  default:
    break;
}