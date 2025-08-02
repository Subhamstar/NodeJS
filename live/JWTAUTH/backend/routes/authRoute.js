const express=require('express');
const { signUp, signIn } = require('../controllers/authControllers');

const authRoute=express.Router();
authRoute.post("/signUp",signUp);
authRoute.post("/signIn",signIn)


module.exports=authRoute;