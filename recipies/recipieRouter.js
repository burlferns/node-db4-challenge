// Import Express and external middleware
const express = require('express');

// Import Express middleware
const router = express.Router();

// Import database access
const rdb = require('../data/helpers/recipieModel');

//Import custom middleware
// None at this time

// ********************************************************
// GET /recipies
// ********************************************************
router.get('/', (req, res) => {
  rdb.getRecipies()
    .then(recipies=>{
      // console.log("In GET /recipies",recipies);
      res.status(200).json(recipies);
    })
    .catch(err=>{
      console.log("Error in rdb.getRecipies in GET /recipies");
      res.status(500)
        .json({error: "Information on recipies could not be retrieved."});
    })
}); 


// ********************************************************
// GET /recipies/:id/shoppingList
// ********************************************************
router.get('/:id/shoppingList', (req, res) => {
  rdb.getShoppingList(req.params.id)
    .then(recipie=>{
      // console.log("In GET /recipies/:id/shoppingList",recipie);
      res.status(200).json(recipie);
    })
    .catch(err=>{
      console.log("Error in rdb.getShoppingList in GET /recipies/:id/shoppingList");
      res.status(500)
        .json({error: "Information on recipie could not be retrieved."});
    })
}); 


// ********************************************************
// GET /recipies/:id/instructions
// ********************************************************
router.get('/:id/instructions', (req, res) => {
  rdb.getInstructions(req.params.id)
    .then(recipie=>{
      // console.log("In GET /recipies/:id/instructions",recipie);
      res.status(200).json(recipie);
    })
    .catch(err=>{
      console.log("Error in rdb.getInstructions in GET /recipies/:id/instructions");
      res.status(500)
        .json({error: "Information on recipie could not be retrieved."});
    })
}); 




// ********************************************************
// ********************************************************
module.exports = router;