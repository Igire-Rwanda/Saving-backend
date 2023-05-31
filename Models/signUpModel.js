import mongoose from "mongoose"

const signUpschema=new mongoose.Schema({
 username:{
    type:String,
    
 },
 password:{
    type:String,
 }


})

export default mongoose.model("signUpModel",signUpschema)