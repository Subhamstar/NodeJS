const mongoose=require('mongoose');
const MONGO=process.env.MONGO;
// console.log("Mongo URI:", process.env.MONGO_URI);

const databaseconnect=()=>{
    mongoose.connect(MONGO)
    .then((conn)=>console.log(`mongodb connect ${conn.connection.host}`))
    .catch((err)=>(console.log(err.message)));

}
// databaseconnect();
module.exports=databaseconnect;