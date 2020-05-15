const knex = require("knex");

const config = require("../knexfile.js");

// we must select the development object from our knexfile
const db = knex(config.development);

function get() {
  return db("projects");
}

function insert(project) {
  return db("projects").insert(project);
}

function getById(id) {
  const projectQuery = db("projects").where({ id }).first();

  const taskQuery = db("tasks").where({ project_id: id });
  const resourceQuery = db("project_resource as p")
    .join("resources as r", "p.resource_id", "r.id")
    .select("r.id", "r.name", "r.description").where({"p.project_id":id});

  const promises = [projectQuery, taskQuery, resourceQuery];

  return Promise.all(promises).then(function (results) {
    let [project, tasks, resources] = results;

    if (project) {

      return {...project, tasks:tasks, resources:resources};
    } else {
      return [];
    }
  });
}

module.exports = {
  get,
  insert,
  getById,
};
