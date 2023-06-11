import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
    userId: {
        type: 'string',
        required: "your id is required"
    },
    accountNumber: {
        type: 'string',
        required: "bank number is required"
    },
    balance: {
        type: 'string',
        required: "amount is required"

    }

})
export default mongoose.model('bankAccounts', bankSchema);