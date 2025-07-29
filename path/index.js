const { log } = require("console");
const path=require("path");

// console.log(path.sep);  //          \-windows, /-mac,linux


// console.log(process.env.PATH);

const currFilepath=__filename;
console.log('path -> : ',currFilepath);

// current file name
let basename=path.basename(currFilepath);
console.log('basename -> : ',basename);



// current file name without extention
let basenameWithoutExt=path.basename(currFilepath,'.js');
console.log('basenamewithoutExt -> : ',basenameWithoutExt);



//directory name
let dirname=path.dirname(currFilepath);
console.log('dirname -> : ',dirname);

console.log('ext -> : ',path.extname(currFilepath));
console.log('ext -> : ',path.extname('index.md.js'));



let pathTodir=path.join('/home','js','dist','index.js');
console.log('pathToDir',pathTodir);
console.log('parse -> : ',path.parse(currFilepath))