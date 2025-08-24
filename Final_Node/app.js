// require("./xyz.js") // one module to another

// import {x, calculateSum } from "./calculate/sum.js";
// import { multiply } from "./calculate/multiply.js";
import "./xyz.js"
import { calculateSum,multiply } from "./calculate/index.js";
import data from "./data.json" with {type:"json"};
var name="Subham Das";
var a=10;
var b=20;
calculateSum(a,b);
multiply(a,b);
console.log(JSON.stringify(data));
// console.log(x);
console.log(globalThis==global);