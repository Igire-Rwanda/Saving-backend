import mongoose from "mongoose"

const expenseSchema= new mongoose.Schema({
    ExpenseName: {
        type: String
       },
    Amount: {
        type: String,
        required:false,
    }
})
export default mongoose.model("expense", expenseSchema);