const db = require('../dbConfig');

module.exports = {
  getRecipies,
  getShoppingList,
  getInstructions
};

// ************************************************
// getRecipies
// ************************************************
function getRecipies() {
  return db.select("*")
    .from("recipies");
}


// ************************************************
// getShoppingList
// ************************************************
function getShoppingList(recipe_id) {
  return db.select("r.recipie_name", "i.ingredient_name", "ri.ingredient_quantity", "ri.quantity_units")
    .from("recipies as r")
    .join("recipie_ingredients as ri", "r.id", "ri.recipie_id")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .where("r.id", "=", recipe_id);
}


// ************************************************
// getInstructions
// ************************************************
function getInstructions(recipe_id) {
  return db.select("r.recipie_name", "s.step_description", "s.step_order_number")
    .from("recipies as r")
    .join("steps as s", "r.id", "s.recipie_id")
    .where("r.id", "=", recipe_id)
    .orderBy("s.step_order_number");
}
