const fs=require("fs");
const crypto =require("crypto");
crypto. pdkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1 -cryptoPDEDF2 done");
})


fs.readFile("./text.txt","utf8",()=>{
    console.log("File reading CB");
})
crypto. pdkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("2 -cryptoPDEDF2 done");
})