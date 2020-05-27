const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('./zipcodes.csv');

const randomRecommended = [''];

function writeFile(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (let j = 0; j < 5; j++) {
        const data = `${id},${faker.address.zipCode().slice(0, 5)}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}
writeFile(writeStream, 'utf8', () => { console.log('success') });
