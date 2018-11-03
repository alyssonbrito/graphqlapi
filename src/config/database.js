const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

module.exports = knex;

//knex('users').insert({
//  name: 'TestName',
//  email: 'teste@teste.com.br',
//  password: 'teste'
//}).then(data => console.log('OKAY:',data)).
//catch(err => console.log('Error: ',err));

console.log('done');

//knex('users').then(resultado => console.log(resultado));
//knex('users').select('*').then(resultado => console.log(resultado));
//knex('users').first().then(resultado => console.log(resultado));
knex('users').where({id:1}).then(resultado => console.log(resultado));

