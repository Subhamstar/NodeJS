require('dotenv').config();
const express=require('express');
const app=express();
const authRouter=require('./routes/authRoute.js')
const connectToDB=require("../backend/config/databseConfig.js")
connectToDB();
app.use(express.json());
app.use("/api/auth",authRouter);// By default go to this authroutes and starting with /api/auth
app.get("/",(req,res)=>{
    res.status(200).json({data:'JWTauth Server !!'});
})
module.exports=app;