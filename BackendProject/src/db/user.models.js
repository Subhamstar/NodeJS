import mongoose from "mongoose";
import bcrypt from"bcrypt";
import jwt from "jsonwebtoken";
 
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    watchHistory:
    [   {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }


},{timestamps})
userSchema.pre("save",async function (next){
    if(!this.isModified("password"))return next(); //this check password already modified or not if 1st time or update password then bcrypt password and save but if not then return using next():middleware
    this.password=bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password)
}


export const User=mongoose.model("User",userSchema);