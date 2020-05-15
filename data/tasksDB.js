const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

function get() {
 return db("tasks as t")
 .join("projects as p", "t.project_id", "p.id")
 .select("t.id", "t.description", "t.notes", "p.name", "p.description")
 .orderBy("t.id", "asc")
}

function insert(task) {
    return db("tasks")
    .insert(task)
}

module.exports = {
    get,
    insert
};
