const mongoose=require("mongoose");
const conntectToDB=async()=>{
    mongoose.connect(process.env.mongo_URI)
    .then((conn)=>{
        console.log(`connect to DB :${conn.connection.host}`);  
    })
    .catch((err)=>{
        console.log("Error while mongodb connected ...");
        process.exit(1);
    })
}
module.exports =conntectToDB;