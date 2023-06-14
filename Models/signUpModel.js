import mongoose from "mongoose"

const signUpschema=new mongoose.Schema({
 Firstname:{
    type:String,
    required:"this is required"
 },
 Lastname:{
    type:String,
 },
 Email:{
    type:String,
    required:"Email is required"
 },
 Username:{
    type:String,
    required:"this is required"
    
    
 },
 Password:{
    type:String,
    required:"This is required"
    
 }


})

export default mongoose.model("Users",signUpschema)