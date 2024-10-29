const express=require('express');
const app= express();
const router=express.Router();
const signup=require("../controller/signup")
const login=require("../controller/login")
const forgotpassword=require("../controller/forgotpassword")
const getUser= require("../controller/authenticated")
const authenticatedtoken=require("../utils/usermiddleware")
router.route("/signup").post(signup);
router.route("/login").get(login);
router.route("/updatepassword").put(forgotpassword);
router.get("/usertoken",authenticatedtoken,getUser);
module.exports=router;