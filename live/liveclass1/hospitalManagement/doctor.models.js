import mongoose from "mongoose";
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    qualification:{
        type:Number,
        required:true
    },
    spallist:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:String,
        default:0
    },
    sallary:{
        type:Number,
        required:true
    },
    workInHospital:
        [{hospital:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            required:true
        },
        hoursSpent:{
            type:Number,
            default:0
        }

}]
    
},{timestamps:true});
export const Doctor=mongoose.models("Doctor",doctorSchema);