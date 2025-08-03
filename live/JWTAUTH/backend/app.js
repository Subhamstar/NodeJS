require('dotenv').config();
const express=require('express');
const app=express();
const authRouter=require('./routes/authRoute.js')
const connectToDB=require("../backend/config/databseConfig.js");
const cookieParser = require('cookie-parser');
connectToDB();


app.use(express.json());
app.use(cookieParser);

app.use("/api/auth",authRouter);// By default go to this authroutes and starting with /api/auth
app.get("/",(req,res)=>{
    res.status(200).json({data:'JWTauth Server !!'});
})
module.exports=app;