const express = require("express");
const app = express();
const router = express.Router();
const { home, contact } = require("../controller/auth-controller");
const getAllMovies = require("../controller/allmovies");
const deletemovie = require("../controller/delete");
const updateMovie = require("../controller/Update");
router.route("/").get(getAllMovies);
router.route("/contact").get(contact);
router.route("/contact").post(contact);
router.delete("/:id", deletemovie);
router.put("/:id", updateMovie);

module.exports = router;
