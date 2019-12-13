// Import Express and external middleware
const express = require('express');

// Import Express middleware
const router = express.Router();

// Import database access
const idb = require('../data/helpers/ingredientModel');

//Import custom middleware
// None at this time

// ********************************************************
// GET /ingredients/:id/recipes
// ********************************************************
router.get('/:id/recipes', (req, res) => {
  idb.getRecipieIngredient(req.params.id)
    .then(ingredients=>{
      // console.log("In GET /ingredients/:id/recipes",ingredients);
      res.status(200).json(ingredients);
    })
    .catch(err=>{
      console.log("Error in idb.getRecipieIngredient in GET /ingredients/:id/recipes");
      res.status(500)
        .json({error: "Information on ingredients could not be retrieved."});
    })
}); 

// ********************************************************
// ********************************************************
module.exports = router;