import mongoose from "mongoose";

const bankSchema= new mongoose.Schema({
    accountNumber:{
        type:'string',
        required:"bank number is required"
    },
    amount:{
        type:'string',
        required:"amount is required"

    }
    
})
export default mongoose.model('bank',bankSchema);