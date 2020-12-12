const path = require('path');
const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'data.csv'))
writeStream.write('id, productname, images\n', 'utf-8');
// 1000000
let imageNum = 0;
for (let i = 0; i < 10000000; i++) {

  const productName = faker.commerce.productName();

  const imageName = productName.split(' ').reduce((acc, word, i) => {

    return i === 0
      ? acc += word.toLowerCase()
      : acc += `-${ word.toLowerCase() }`;

  }, '') + '.jpeg';

  writeStream.write(`${ uuidv4() },${ productName },${ imageName }\n`, 'utf-8');

}

writeStream.end();