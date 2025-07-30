const fs=require('fs');


// Read file Asynchronously 
// console.log("Read Start");
// fs.readFile('input.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//         return err;
//     }
//     console.log(data.toString());
//     console.log("Read end");
//     return data;
// })
// console.log("Outer Stuff");
// O/p :read file ->outer stuff ->Actual output ->read end 


// console.log("Read Start");
// var data=fs.readFileSync('input.txt');
// console.log(data.toString())
// console.log("Read end");

// Read : file open +read
// const buf=new Buffer(1024);
// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         console.log("Error while file opening")
//     }
//     else{
//         console.log("File Open Successfully !!")
//     }
//     fs.read(fd,buf,0,buf.length,0,function(er,bytes){
//         if(er){
//             console.log("Error while reading file");
//         }
//         else{
//             console.log(bytes);
//             console.log(buf.slice(0,bytes).toString());
//         }
//     })
// });


// write file
// fs.writeFile('input.txt',"Hello from Subhamm..",function(err){
//     if(err)console.log("Error in writing file");
//     else{
//         console.log("Successfully file write");
//     }
// });
// var data=fs.readFileSync('input.txt');
// console.log(data.toString());


// update file 

// fs.appendFile('input.txt',"--SincosTani❤️",'utf8',function(err){
//     if(err){
//         console.log("Error in Appending file");
//     }
//     else{
//         console.log("Succesfully appending file ");
//     }
// })

// var data=fs.readFileSync('input.txt');
// console.log(data.toString());




// delete file
fs.unlink('file1.txt',function(err){
    if(err)console.log("Error ehile deleting file");
    else console.log("Successfully Deleted ");
})