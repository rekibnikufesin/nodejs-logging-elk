exports.seed = async function seed(knex) {
  await knex('users').insert([
    {name: 'Johnny Testalot', email: 'jtestalot@test.com'},
    {name: 'Harold J. Droptable', email: 'hdroptable@sql.org'},
    {name: 'Sheldon Dinkleberg', email: 'sdinkleberg@aol.com'},
  ])
}