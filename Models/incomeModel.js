import mongoose from "mongoose"

const incomeSchema = new mongoose.Schema({
     email: {
          type: String,
          required: "the id is required"
     },
     incomeAmount: {
          type: Number,
          required: "the amount is required"
     },
     incomeType: {
          type: String,
          required: "the source of income is required"
     },
     Period: {
          type: String,
          required: "the date of income is required"
     }
})
export default mongoose.model("userIncomes", incomeSchema)

