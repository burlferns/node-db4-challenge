
exports.up = function(knex) {
  return knex.schema.createTable('steps',tbl=>{
    tbl.increments();

    // Foreign Key
    tbl.integer("recipie_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipies")
      .onDelete("CASCADE") // Possible SQL settings: CASCADE, RESTRICT, DO NOTHING, SET NULL
      .onUpdate("CASCADE");

    tbl.string('step_description',255)
      .notNullable();

    tbl.integer('step_order_number')
      .unsigned()
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
