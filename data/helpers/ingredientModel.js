const db = require('../dbConfig');

module.exports = {
  getRecipieIngredient
};

// ************************************************
// getRecipieIngredient
// ************************************************
function getRecipieIngredient(ingredient_id) {
  return db.select("r.recipie_name", "i.ingredient_name")
    .from("recipies as r")
    .join("recipie_ingredients as ri", "r.id", "ri.recipie_id")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .where("i.id", "=", ingredient_id);
}