import mongoose from "mongoose"

const ExpenseSchema = new mongoose.Schema({
     email: {
          type: String,
          required: "personel email is required"
     },
     expenseType: {
          type: String,
          required: "category is required"
     },
     Period: {
          type: String,
          required: "date is required"
     },
     amountSpent: {
          type: Number,
          required: "amount is required"
     }
})
export default mongoose.model("ExpenseModel", ExpenseSchema)