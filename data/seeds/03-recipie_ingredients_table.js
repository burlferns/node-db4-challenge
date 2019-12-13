
exports.seed = function(knex) {
  return knex('recipie_ingredients')
    .then(function () {
      
      return knex('recipie_ingredients').insert([
        
        // Basic Breakfast
        {recipie_id: 1, ingredient_id: 1, ingredient_quantity:2, quantity_units:'Whole egg'},
        {recipie_id: 1, ingredient_id: 2, ingredient_quantity:2, quantity_units:'Slices'},
        {recipie_id: 1, ingredient_id: 3, ingredient_quantity:3, quantity_units:'Strips'},

        // Hamburgers
        {recipie_id: 2, ingredient_id: 4, ingredient_quantity:1, quantity_units:'Whole bun'},
        {recipie_id: 2, ingredient_id: 5, ingredient_quantity:250, quantity_units:'grams'},
        {recipie_id: 2, ingredient_id: 6, ingredient_quantity:1.5, quantity_units:'teaspoons'},
        {recipie_id: 2, ingredient_id: 7, ingredient_quantity:1.5, quantity_units:'teaspoons'},


        // Ham sandwich
        {recipie_id: 3, ingredient_id: 2, ingredient_quantity:2, quantity_units:'Slices'},
        {recipie_id: 3, ingredient_id: 7, ingredient_quantity:1.5, quantity_units:'teaspoons'},
        {recipie_id: 3, ingredient_id: 8, ingredient_quantity:2, quantity_units:'Slices'},
        {recipie_id: 3, ingredient_id: 9, ingredient_quantity:2, quantity_units:'Slices'},
        {recipie_id: 3, ingredient_id: 10, ingredient_quantity:1, quantity_units:'Slices'},

      ]);

    });
};
