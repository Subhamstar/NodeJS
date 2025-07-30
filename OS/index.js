const os=require('os');

console.log("OS Architecture : ", os.arch());
console.log("OS Freemem : ",os.freemem());
console.log("OS Totalmem : ",os.totalmem());
console.log("Endianss : ",os.endianness());
console.log("Hostname : ",os.hostname());
console.log("Type : ",os.type());
console.log("Release : ",os.release());