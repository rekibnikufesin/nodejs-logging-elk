var express = require('express');
var router = express.Router();
const logger = require('../helpers/logging')
const {getUsers} = require('../services/users')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  logger.info('log from user endpoint', {with: 'some', extra: 'data'})
  const users = await getUsers()
  res.send(users)
});

module.exports = router;
