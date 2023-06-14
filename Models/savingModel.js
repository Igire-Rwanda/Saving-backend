import mongoose from "mongoose";

const savingSchema= new mongoose.Schema({

    Users_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    accountNumber:{
        type:'string',
        required:"account number is required"
    },
    balance:{
        type:'String',
        required:"amount is required"
    },

   accountHolder:{
    type:String,
    
   },
   amount:{
      type:Number,
   }
    
})
export default mongoose.model('savingAccount',savingSchema);