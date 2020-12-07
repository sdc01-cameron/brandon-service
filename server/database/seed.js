const {Product} = require('./index');
const mongoose = require('mongoose');
const faker = require('faker');

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

