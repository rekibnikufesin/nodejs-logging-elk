var express = require('express');
var router = express.Router();
const logger = require('../helpers/logging')

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('log from root route')
  res.render('index', { title: 'Express' });
});

module.exports = router;
