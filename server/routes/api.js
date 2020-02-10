const express = require("express");
const router = express.Router();
const request = require("request");

router.get(`/sanity`, function(req, res) {
  res.send(`OK`);
});

router.get(`/recipes/:ingredient`, function(req, res) {
  let recipe;

  request.get(
    `https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`,
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        recipe = JSON.parse(result.body);
        res.send(recipe);
      }
    }
  );
});

module.exports = router;
