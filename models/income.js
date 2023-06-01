import mongoose from "mongoose"

const incomeSchema = new mongoose.Schema({
    IncomeName: {
        type: String
    },
    Amount: {
        type:String
    }
})

export default mongoose.model("income", incomeSchema);