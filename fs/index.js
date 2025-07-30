const fs=require('fs');


// console.log('READ START');  //Asynchronous way to read 
fs.readFile('input.txt',function(err,data){
    if(err){
        console.log('Error',err);
        return err;
    }
    console.log('Data -> : ',data.toString());
    console.log("Read End")
    return data;
});
console.log('Outer Stuff');//Asynchronous way to read 




//Synchronus way
// console.log('Read Start');
// var data=fs.readFileSync('input.txt');
// console.log('Data',data.toString());
// console.log('Raed END');
// console.log('Outer Stuff');




//read : open+read;
