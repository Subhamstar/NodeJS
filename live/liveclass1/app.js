require('dotenv').config();

const express=require('express');
const connectToDB=require('./config/db.js');
const cors=require("cors");

const app=express();

//middleware is a checkpoint 
app.use(express.json());
app.use(express.urlencoded({extended:true}));  //body parser used before but after 2015 usedurlencoded
app.use(cors);

connectToDB();
app.get("/",(req,res)=>{
    res.send("Hello World !!");
})
module.exports=app;