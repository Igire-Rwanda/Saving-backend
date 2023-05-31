import mongoose from "mongoose"

const expenseSchema= new mongoose.Schema({
    HousingOrRent: {
        type: String
       },
    TransportationAndCarInsurance: {
        type: String
     },
     TravelExpenses: {
        type: String
     },
     FoodAndGroceries:{
        type: String
     },
     UtilityBills: {
        type: String
     },
     CellPhone:{
        type: String
     },
     ChildcareAndSchoolCostsChildcareAndSchoolCosts: {
        type: String
     },
     PetFoodAndCare: {
        Type: String
     },
     PetInsurance: {
        type: String
     },
     ClothingAndPersonalUpkeep:{
        type: String
     },
     HealthInsurance: {
        type: String
     },
    MonthlyMembershipsAndSubscriptions:{
        type: String
    },
    LifeInsurance:{
        type: String
    },
    HomeownersInsurance:{
        type: String
    },
    Entertainment: {
        type: String
    },
    StudentLoans: {
        type: String
    },
    CreditCardDebt: {
        type: String
    },
    Retirement: {
        type: String
    },
    EmergencyFund: {
        type: String
    },
    LargePurchases: {
        type: String
    },
    Othes: {
        type: String
    }
})
export default mongoose.model("expense", expenseSchema)