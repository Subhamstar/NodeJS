import mongoose from "mongoose";
const medicalReportSchema=new mongoose.Schema({
    patientname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    DoctorName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },
    Price:{
        type:Number,
        
    }

},{timestamps:true})

export const MedicalReport=mongoose.model("MicalReport",medicalReportSchema);