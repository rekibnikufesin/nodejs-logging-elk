const {Model} = require('objection')

class User extends Model {
  id
  name
  email

  static tableName = 'users'
}

module.exports = User
