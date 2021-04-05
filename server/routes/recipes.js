// imports
const ck = require("ckey");
const { Router } = require("express");
const express = require("express");
const axios = require("axios");
const fs = require("fs");

// variables
const recipesRouter = express.Router();
const apiKey = ck.RAPID_API_KEY;
const apiHost = ck.RAPID_API_HOST;

const optionMinProtein = {
  method: "GET",
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients",
  params: {
    minProtein: "25",
    offset: "0",
    number: "9",
    minCalories: "200",
    limitLicense: "false",
  },
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": apiHost,
  },
};


recipesRouter.route("/").get((req, res) => {
  axios
    .request(optionMinProtein)
    .then((response) => {
      console.log("Request from api");
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});

recipesRouter.route("/:recipeId").get((req, res) => {
  console.log(`this is the req params sent to backend ${req.params.recipeId}`)
  let targettedRecipe = req.params.recipeId

  axios
    .request({
      method: "GET",
      url:
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${targettedRecipe}/information`,
      params: { includeNutrition: "true" },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
      },
    })
    .then((response) => {
      console.log("Request from api: Recipe Info");
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});

module.exports = recipesRouter;
