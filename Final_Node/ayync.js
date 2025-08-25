import http from "http";
import fs, { readFileSync } from "fs";

console.log("Hello World");

http.get("http://dummyjson.com/products/1",(res)=>{
    console.log("API Fetched Successfully");
})
setTimeout(()=>{
    console.log("Data Fetch Successfully")
},5000)
setTimeout(()=>{
    console.log("call imediately")
},0)
// console.log(fs,readFileSync("./text.txt","utf-8"));
fs.readFile("./text.txt","utf8",(err,data)=>{
    console.log("File Data : ",data);
})
var a=1234;
var b=5678;
function mul(a,b){
    return a*b;
}
var c=mul(a,b);
console.log(c);