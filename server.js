// Import Express and external middleware
const express = require('express');
const helmet = require("helmet");

//Import custom middleware
const {defaultResponse, logger} = require('./middleware/custom');


// Import specific Routers
const recipeRouter = require("./recipies/recipieRouter"); 
const ingredientRouter = require("./ingredients/ingredientRouter"); 

// Create server
const server = express();

// Use global middleware 
server.use(helmet());
server.use(express.json());
server.use(logger);

// Specify general endpoints
server.get('/', (req, res) => {
  res.send(`<h2>This is for node-db4-challenge </h2>`);
});

// Use specific Routers
server.use("/recipies", recipeRouter); 
server.use("/ingredients", ingredientRouter); 

server.use(defaultResponse);

module.exports = server;