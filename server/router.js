const router = require('express').Router();
const controller = require('./controller.js');

router.get('/shipping/findAll', controller.getAll);

module.exports = router;
