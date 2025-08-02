
 
const mongoose=require('mongoose');
const {Schema}=mongoose;
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name must be require"],
        minLength:[3,'Name must be 5 char'],
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email must be required"],
        trim:true,
        lowercase:true,
        unique:[true,"Already Registered "]
    },
    password:{
        type:String,
        required:[true,"password must be required"]
    },
    forgetPasswordToken:{
        type:String,
    },
    forgetPasswordExpiryDaate:{
        type:Date,
    },
},{
    timestamps:true,
})

userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id:this.id,emal:this.email},
            process.env.SECTET,
            {expire:'24h'}

        )
    }
}


const userModel=mongoose.model('user',userSchema);
module.exports=userModel;