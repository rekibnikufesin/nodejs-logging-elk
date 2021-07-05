// knex db connection info: create additional configs (test, staging, prod) here
module.exports = {
  dev: {
    client: 'pg',
    connection: {
      host: 'db',
      database: 'users',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  }
}