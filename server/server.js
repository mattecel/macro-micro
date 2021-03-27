// imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const recipesRoute = require('./routes/recipes');
const ingredientsRoute = require('./routes/ingredients');

// variables
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use('/recipes', recipesRoute);
app.use('/ingredients', ingredientsRoute);

app.listen(process.env.PORT, () => {
    console.log('Listening...');
})
