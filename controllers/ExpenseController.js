import bankAccouts from "../Models/bankModel.js"
import savingAccount from "../Models/savingModel.js"
const addExpense = async(req, res)=>{
     try{
      
          const amount = req.body.amount;
          const email = req.body.email;
  
          const bankAccount=await bankAccouts.findOne({bankHolder:email})
          if (!bankAccount) {
              return res.status(400).json({ message: "Bank account not found" });
            }
          if(bankAccount.Amount <amount){
              res.status(200).json({message:"inssufient balance"})
          }
        
          else{
              await bankAccouts.findOneAndUpdate(
                  {bankHolder:email},
                  {$inc:{Amount:-amount}}
              )
          
          }
  
          ///THis ection is about updating saving account based on the amount
          const saving=savingAccount.findOne({accountHolder:email})
          if(!saving){
              res.status(400).json({message:"you do not have saving wallet"})
          }
          else{
          const currentSaving=await savingAccount.findOneAndUpdate(
              {accountHolder:email},
              {$inc:{amount:+amount}},
              {new :true}
          )
          res.status(200).json(currentSaving.amount)
          console.log(currentSaving.amount)
          }
  
      }
     catch(err){
          console.log("error:", err),
          res.status(500).json({message:"there is some errors"})
     }
}
export default addExpense;

import Expense from "../Models/ExpenseModel.js"


const createExpense = async (req, res) => {
     try {
          const expense = new Expense({
               user_id: req.body.user_id,
               category: req.body.category,
               date: req.body.date,
               amount: req.body.amount,
          });
          const expenseCreated = await expense.save()
          res.status(201).json({
               message: "Expense Saved Successfully",
               expense: expenseCreated
          })
     } catch (error) {
          res.status(400).json({
               message: ("Error Occured While Saving Expense" + error)

          })
     }



}


const readExpense = async (req, res) => {
     try {
          const expenses = await Expense.find({});
          if (expenses.length == 0) {
               res.status(404).json({
                    message: "No Expense Found"
               });


          } else {
               res.status(200).json({
                    message: "expenses retreived successfully",
                    success: false,
                    expenses: expenses

               })
          }

     }


     catch (err) {
          console.log(err)
          res.status(500).json({
               success: false,
               error: "Server Error"
          })
     }
}
export { readExpense, createExpense };


