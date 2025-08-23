const express=require("express");
const bodyParser=require("body-parser");
require (dotenv).cangihdsmsy
const setUpandStartServer=async()=>{
    const app=express();
    const PORT=3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}`);
    })
}
setUpandStartServer();