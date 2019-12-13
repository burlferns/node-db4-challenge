
exports.seed = function(knex) {
  return knex('steps')
    .then(function () {
      
      return knex('steps').insert([
        
        // Basic Breakfast
        {id:1, recipie_id: 1, step_description:'Fry the eggs', step_order_number:1},
        {id:2, recipie_id: 1, step_description:'Fry the bacon', step_order_number:2},
        {id:3, recipie_id: 1, step_description:'Toast the slices of bread', step_order_number:3},

        // Hamburgers
        {id:4, recipie_id: 2, step_description:'Grill the beef patty', step_order_number:1},
        {id:5, recipie_id: 2, step_description:'Apply the ketchup & mustard on the bun', step_order_number:2},
        {id:6, recipie_id: 2, step_description:'Put the grilled patty between the bun', step_order_number:3},

        // Ham Sandwich
        {id:7, recipie_id: 3, step_description:'Apply mustard to the bread', step_order_number:1},
        {id:8, recipie_id: 3, step_description:'Place the ham, cheese & tomato between the bread slices', step_order_number:2},

      ]);

    });
};
