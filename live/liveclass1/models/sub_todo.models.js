import mongoose from mongoose;
const subtodo=new mongoose.schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamp:true});
export const subTodo=mongoose.models("subTodo",subtodo)