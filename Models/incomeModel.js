import mongoose from "mongoose"

const incomeSchema = new mongoose.Schema({
     user_id:{
          type: String,
          required: "the id is required"
     },
     amount:{
          type: Number,
          required: "the amount is required"
          },
          source:{
               type: String,
               required: "the source of income is required"
          } ,
          date:{
               type: String,
               required: "the date of income is required"
               }
})
export default mongoose.model("userIncomes", incomeSchema)

