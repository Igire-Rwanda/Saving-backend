import mongoose from "mongoose";

const savingSchema= new mongoose.Schema({

   accountHolder:{
    type:String,
    
   },
   amount:{
      type:Number,
   }
    
})
export default mongoose.model('savingAccount',savingSchema);