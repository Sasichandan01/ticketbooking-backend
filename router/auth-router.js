const express = require("express");
const app=express();
const User = require("../model/user_model");
const router = express.Router();
const {home,contact} = require("../controller/auth-controller");
const getAllProducts=require("../controller/products");
const deletemovie = require('../controller/delete');
const updateMovie=require("../controller/Update")
router.route("/").get(getAllProducts);
router.route("/contact").get(contact);
router.route("/contact").post(contact);
router.delete("/:id",deletemovie);
router.put("/:id", updateMovie);

module.exports = router;