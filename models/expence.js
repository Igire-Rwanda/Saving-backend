import mongoose from "mongoose"

const expenseSchema= new mongoose.Schema({
    ExpenseName: {
        type: String
       },
    Amount: {
        type: String
    }
})
export default mongoose.model("expense", expenseSchema);