// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'graphqlsch',
      user:     'root',
      password: '1q2w3e4r'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
