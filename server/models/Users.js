const mongoose =require("mongoose")
const UserSchema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel