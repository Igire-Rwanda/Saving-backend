import mongoose from "mongoose"

const incomeSchema = new mongoose.Schema({
    Salary: {
        type: String
    },
    InterestRate: {
        type:String
    },
    Profit: {
        type: String
    },
    Royalty:{
        type: String
    },
    tip: {
        type: String
    },
    Rental: {
        type: String
    },
    Dividend: {
        type: String
    },
    RentalIncome: {
        type: String
    }
})

export default mongoose("income", incomeSchema)