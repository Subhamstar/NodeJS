// require("./xyz.js") // one module to another

import {x, calculateSum } from "./sum.js";
import "./xyz.js"
// const {x,calculateSum}=require("./sum.js")
var name="Subham Das";
var a=10;
var b=20;
calculateSum(a,b);
console.log(x);
console.log(globalThis==global);