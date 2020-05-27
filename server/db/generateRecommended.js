const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('./recommended.csv');

const randomRecommended = [3,354,684,68365,713,8657,15,713,496,8,46,54643,8,764,3,478,373,738]

function writeFile(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (let j = 0; j < 3; j++) {
        const data = `${id},${randomRecommended[(id + j) % randomRecommended.length]}\n`;
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
