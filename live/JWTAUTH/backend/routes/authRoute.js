const express=require('express');
const { signUp, signIn, getUser } = require('../controllers/authControllers');
const jwtAuth = require('../middleware/jwtAuth');

const authRoute=express.Router();
authRoute.post("/signUp",signUp);
authRoute.post("/signIn",signIn);
authRoute.get("/user",jwtAuth ,getUser);


module.exports=authRoute;