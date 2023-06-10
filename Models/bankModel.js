import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
    
   bankHolder:{
    type:String,

   },
   Amount:{
    type:Number
   }

})
export default mongoose.model('bankAccounts', bankSchema);