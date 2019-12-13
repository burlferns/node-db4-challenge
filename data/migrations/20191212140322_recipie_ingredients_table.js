
exports.up = function(knex) {
  return knex.schema.createTable('recipie_ingredients',tbl=>{
    // Foreign Key
    tbl.integer("recipie_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipies")
      .onDelete("CASCADE") // Possible SQL settings: CASCADE, RESTRICT, DO NOTHING, SET NULL
      .onUpdate("CASCADE");

    // Foreign Key
    tbl.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT") // Possible SQL settings: CASCADE, RESTRICT, DO NOTHING, SET NULL
      .onUpdate("RESTRICT");

    tbl.float('ingredient_quantity')
      .notNullable();

    tbl.string('quantity_units',255)
      .notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipie_ingredients');
};
