const db = require('../config/database');

module.exports = {
  Query: {
    //async getUser(_, params) {
    //  return wait db('users').where({id: params.id});
    //}
    async getUser(_,{id}) {
      //first to get single user instead of array with one user
      return await db('users').where({id}).first(); //first to get single user instead of array with one user
    },
    //async getUser(_,{offset, limit}) {
    async getUser() {
      return await db('users')
    }
  }, //query

  Mutation: {
    async createUser(_,{input}){
      const resultado = await db('users').insert({
        name: input.name,
	email: input.email,
	password: input.password
      });
      const id = resultado[0];
      return await db('users').where({id}).first();
    }//createUser

  }//mutation

}//eof

