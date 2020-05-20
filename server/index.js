const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const cors = require('cors');
const morgan = require('morgan')
const findProduct = require(path.join(__dirname, 'db', 'productsdb.js')).findProduct;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
const port = 9000;


app.get('/shipping/findProduct/:id', (req, res) => {
  findProduct(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

app.get('/shipping/bundle.js', (req, res) => {
  res.send(path.join(__dirname, '../client/dist/bundle.js'));
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
