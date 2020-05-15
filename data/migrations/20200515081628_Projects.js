exports.up = function (knex) {
    return (
      knex.schema
        .createTable("projects", (tbl) => {
          tbl.increments();
          tbl.string("name", 128).notNullable();
          tbl.string("description", 128);
          tbl.boolean("complete", false);
        })
        .createTable("resources", (tbl) => {
          tbl.increments();
          tbl.string("name", 128).notNullable();
          tbl.string("description", 128);
        })
        .createTable("project_resource", (tbl) => {
          tbl
            .integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects");
          tbl
            .integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources");
          tbl.primary(["project_id", "resource_id"]);
        })
        .createTable("tasks", (tbl) => {
          tbl.increments();
          tbl.string("description", 128).notNullable();
          tbl.string("notes", 128);
          tbl.boolean("complete", false);
          tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects");
        })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("tasks")
      .dropTableIfExists("project_resource")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };