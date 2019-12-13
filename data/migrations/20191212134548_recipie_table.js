
exports.up = function(knex) {
  return knex.schema.createTable('recipies',tbl=>{
    tbl.increments();
    tbl.string('recipie_name',255)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipies');
};
