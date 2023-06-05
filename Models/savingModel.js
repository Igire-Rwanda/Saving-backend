import mongoose from "mongoose";

const savingSchema= new mongoose.Schema({
    userId:{
        type:'string',
        requiered:"user id is required"
    },
    accountNumber:{
        type:'string',
        required:"account number is required"
    },
    balance:{
        type:'String',
        required:"amount is required"

    }
    
})
export default mongoose.model('savingAccount',savingSchema);