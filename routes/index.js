var express = require("express");
var router = express.Router();
let expressGraphQl = require("express-graphql");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
