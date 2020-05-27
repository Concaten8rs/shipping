const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('./primaryrecords.csv');

const randomRecommended = [];

function writeFile(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = `${id},${faker.commerce.price()},https://loremflickr.com/320/240/product?random=${id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}
writeFile(writeStream, 'utf8', () => { console.log('success') });
