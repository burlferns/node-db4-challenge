
exports.seed = function(knex) {
  return knex('recipies')
    .then(function () {
      
      return knex('recipies').insert([
        {id: 1, recipie_name: 'Basic Breakfast'},
        {id: 2, recipie_name: 'Hamburgers'},
        {id: 3, recipie_name: 'Ham Sandwich'}
      ]);

    });
};
