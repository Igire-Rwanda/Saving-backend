import mongoose from "mongoose"

const ExpenseSchema = new mongoose.Schema({
     user_id: {
          type: String,
          required: "personel id is required"
     },
     category: {
          type: String,
          required: "category is required"
     },
     date: {
          type: String,
          required: "date is required"
     },
     amount: {
          type: Number,
          required: "amount is required"
     }
})
export default mongoose.model("ExpenseModel", ExpenseSchema)