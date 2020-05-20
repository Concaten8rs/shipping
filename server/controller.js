const path = require('path');
const findAllProducts = require(path.join(__dirname, 'db', 'productsdb.js')).findAllProducts;



let controller = {
  getAll: (req, res) => {
    findAllProducts((err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log('get-all request: processed');
        res.json(results);
      }
    });
  },
  getAllLocal: (req, res) => {
    findAllProducts((err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log('get-all request: processed');
        return results.toObject();
      }
    });
  },
};
module.exports = controller;
