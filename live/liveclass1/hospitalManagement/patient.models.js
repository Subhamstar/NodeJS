import mongoose from "mongoose";
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["MALE","FEMALE","OTHERS"],
        required:true
    },
    diagonesedWith:{
        type:String,
        required:true
    },
    addmittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true});
export const Patient=mongoose.models("Patient",patientSchema);