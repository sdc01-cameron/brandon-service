const path = require('path');
const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'data.csv'))
writeStream.write('product name, images\n', 'utf-8');
// 1000000
let imageNum = 0;
for (let i = 0; i < 250000; i++) {

  const num = Math.floor(Math.random() * 5) + 1;
  let images = '';
  for (let j = 0; j < num; j++) {

    images += j === 0
      ? `image-${ imageNum }.jpeg`
      : `, image-${ imageNum }.jpeg`;
    imageNum++;
  }

  writeStream.write(`${ faker.commerce.productName() }, ${ images }\n`, 'utf-8');

}

writeStream.end();