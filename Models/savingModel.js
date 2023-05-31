import mongoose from "mongoose";

const savingSchema= new mongoose.Schema({
    savingName:{
        type:'string',
        required:"name is required"
    },
    amount:{
        type:'String',
        required:"amount is required"

    }
    
})
export default mongoose.model('saving',savingSchema);