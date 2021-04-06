// imports
const ck = require("ckey");
const { Router } = require("express");
const express = require("express");
const axios = require("axios");

// variables
const ingredientsRouter = express.Router();
const apiKey = ck.RAPID_API_KEY;
const apiHost = ck.RAPID_API_HOST;

ingredientsRouter.route("/").get((req, res) => {
  console.log(req.query.dataArg);
  let dataArgy = JSON.parse(req.query.dataArg);
  console.log(dataArgy["ids"]);

  axios
    .request({
      method: "GET",
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
      params: { ids: dataArgy["ids"] },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
      },
    })
    .then((response) => {
      console.log(`grabbed bulk ingredients from api`);
      res.json(response.data);
    })
    .catch(() => {
      console.log(`error grabbing bulk ingredients`);
    });
});

module.exports = ingredientsRouter;
