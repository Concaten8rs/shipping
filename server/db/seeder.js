const path = require('path');

const save = require(path.join(__dirname, 'productsdb.js')).save;
const findAllProducts = require(path.join(__dirname, 'productsdb.js')).findAllProducts;
const seedFile = require(path.join(__dirname, 'dummydata.js'));


save(seedFile.seedData, (err, data) => {
  if (err) {
    console.log('SAVING ERROR: ' + err);
  } else {
    console.log('SEEDED 100 RANDOMIZED ENTIRES TO DATABASE');
  }
});
