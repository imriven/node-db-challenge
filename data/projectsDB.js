const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

function get() {
 return db("projects")
}

function insert(project) {
   return db("projects")
   .insert(project)
}

module.exports = {
    get,
   insert
};
