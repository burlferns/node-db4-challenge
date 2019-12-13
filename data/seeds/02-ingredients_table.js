
exports.seed = function(knex) {
  return knex('ingredients')
    .then(function () {
      
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Eggs'},
        {id: 2, ingredient_name: 'Bread'},
        {id: 3, ingredient_name: 'Bacon'},
        {id: 4, ingredient_name: 'Hamburger buns'},
        {id: 5, ingredient_name: 'Ground beef patty'},
        {id: 6, ingredient_name: 'Ketchup'},
        {id: 7, ingredient_name: 'Mustard'},
        {id: 8, ingredient_name: 'Ham'},
        {id: 9, ingredient_name: 'Tomatoes'},
        {id: 10, ingredient_name: 'Cheese'},  
      ]);

    });
};
