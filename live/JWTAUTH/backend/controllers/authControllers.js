const userModel = require("../models/userSchema");
const emailValidator=require("email-validator");
const JWT=require('jsonwebtoken');


const signUp=async(req,res,next)=>{
    // console.log("Received body:", req.body);
    
    if (!req.body) {
        return res.status(400).json({ error: "No body received" });
    }
    const {name,email,password,confirmpassword}=req.body;  //destructuring 
    console.log(name,email,password,confirmpassword);
    if(!name ||!email ||!password||!confirmpassword){
        return res.status(400).json({
            success:false,
            message:"all field are required"
        })
    }
    const validEmail=emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success:false,
            message:"Please Provide a valid mail id !!"
        })
    }
    if(password !==confirmpassword){
        return res.status(400).json({
            status:false,
            message:"Password and Confirm Password dont same"
        })
    }

    try {
        const userInfo=userModel(req.body);
        const result=await userInfo.save();
        return res.status(200).json({
            success:true,
            data:{result}
        })
    } catch (e) {
        // console.log(error.message);
        if(e.code===11000){
            return res.status(400).json({
                success:false,
                message:'Account Already exists with provided mail id'
            })
        }

        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}
const signIn=async(req,res)=>{
    const {email,password}=req.body;
    if(!email ||!password){
        return res.status(400).json({
            success:false,
            message:"Every field is required"
        })
    }

    try {
        const user=await userModel
            .findOne({
                email
            })
            .select('+password');
            if(!user ||user.password !==password){
                return res.status(400).json({
                    success:false,
                    message:"Invalid Credentials"
                })
            }
            const token=user.jwtToken();
            user.password=undefined;
            const cookieOption={
                maxAge:24*60*60*1000,
                httpOnly:true
            }
    
            res.cookie("token",token,cookieOption);
            res.status(200).json({
                sucess:true,
                data:user
            })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    
}
module.exports={signUp,signIn};