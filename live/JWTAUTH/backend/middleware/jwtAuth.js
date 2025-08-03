// this is created beacuse when we sign in we create a token and store into cookies with ther id and mail a=id 
const jwt=require('jsonwebtoken');

const jwtAuth=(req,res,next)=>{
    const token=(req.cookies &&res.cookies.token)||null;
    if(!token){
        return res.status(400).json({
            status:false,
            message:"Not Authorized Token"
        })
    }
    try {
        const payload=jwt.verify(token,process.env.SECRET);
        req.user={id:payload.id,email:payload.email}
    } catch (error) {
        return res.status(400).json({
            status:false,
            message:e.message
        })
        
    }
    next();
}
module.exports=jwtAuth;