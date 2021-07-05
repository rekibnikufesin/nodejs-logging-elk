const logger = require('../helpers/logging')
const Users = require('../models/User')

async function getUsers() {
  logger.info('Fetching users from database')
  const users = await Users.query()
  return users
}

module.exports = {getUsers}
